import Mathlib

/-!
# Week 7: Lean Deep Dive

Classroom Lean code for Week 7.

The file is intended to compile as a single file. Examples that are meant to
fail in class are kept as comments.
-/

namespace Week07

/-!
## Structures
-/

structure Point2D where
  x : Int
  y : Int
  deriving Repr

#check Point2D.mk
#eval Point2D.mk 1 2

def p : Point2D where
  x := 3
  y := -2

def q : Point2D := ⟨1, 1⟩

#print q
#eval q
#eval p.x + p.y

def Point2D.sumxy (p : Point2D) : Int :=
  p.x + p.y

def Point2D.add (p q : Point2D) : Point2D :=
  ⟨p.x + q.x, p.y + q.y⟩

#eval p.sumxy
#eval p.add q

structure ClosedInterval where
  left : Nat
  right : Nat
  valid : left ≤ right

variable (n : Nat)

def I1 : ClosedInterval where
  left := 3
  right := 5
  valid := by decide

def intervalFrom (n : Nat) : ClosedInterval where
  left := n
  right := n + 2
  valid := by simp only [le_add_iff_nonneg_right, zero_le]

#check intervalFrom
#check (intervalFrom n).valid

example (I : ClosedInterval) :
    ∃ i, I.left ≤ i ∧ i ≤ I.right := by
  use I.left
  constructor
  · simp only [Std.le_refl]
  · exact I.valid

/-!
## `Fin`
-/

#check Fin
#print Fin

def secondOfFive : Fin 5 :=
  ⟨2, by decide⟩

-- Expected error: `Fin 5` and `Fin 6` are different types.
-- #check (2 : Fin 5) = (2 : Fin 6)

#check (2 : Fin 5) = (2 : Nat)
#eval (Finset.univ : Finset (Fin 5))
#check (2 : Fin 5)
#synth OfNat (Fin 5) 2
#eval secondOfFive.val
#check secondOfFive.isLt

/-!
## Classes and Instance Search
-/

#eval 42 + 2

#check HAdd
#check HAdd.hAdd
#synth HAdd Nat Nat Nat

namespace AdditionExamples

/-
If this instance is enabled together with the `String`-valued one below, then
`42 + "hi"` needs an expected type to disambiguate the result.

instance haddNatStringNat : HAdd Nat String Nat where
  hAdd := fun a b => a + b.length
-/

instance haddNatStringString : HAdd Nat String String where
  hAdd := fun a b => (toString a) ++ b

-- Expected error: no `HAdd Nat String Nat` instance is currently enabled.
-- #synth HAdd Nat String Nat

#synth HAdd Nat String String
#eval 42 + "hi"

instance stringToNat : Coe String Nat where
  coe s := s.length

#eval ("hi" : Nat)
#eval (42 + "hi" : Nat)
#eval (42 + "hi" : String)

end AdditionExamples

#check OfNat
#synth OfNat (Fin 5) 2
#check (2 : Fin 5)

#check LE
#check LE.le
#synth HAdd Nat Nat Nat
#synth LE Nat

#check Preorder
#check le_rfl
#check le_trans

example [Preorder α] (a : α) : a ≤ a :=
  le_rfl

example [Preorder α] {a b c : α}
    (hab : a ≤ b) (hbc : b ≤ c) : a ≤ c :=
  le_trans hab hbc

/-!
## Inductive Types
-/

inductive MyBool where
  | false : MyBool
  | true : MyBool
  deriving DecidableEq, Repr

#check MyBool.false
#check MyBool.true
#eval MyBool.true
#eval MyBool.true = MyBool.false

def myBoolToNat : MyBool → Nat
  | .true => 1
  | .false => 0

#eval myBoolToNat MyBool.true

def natToMyBool : Nat → MyBool
  | 0 => MyBool.false
  | _ + 1 => MyBool.true

#eval natToMyBool 100
#eval natToMyBool 0

inductive MyTree (α : Type) where
  | nil : MyTree α
  | node : α -> MyTree α -> MyTree α -> MyTree α
  deriving Repr

namespace MyTree

def t1 : MyTree Nat :=
  node 3 nil nil

def leftOnly : MyTree Nat :=
  node 2 (node 1 nil nil) nil

def rightOnly : MyTree Nat :=
  node 2 nil (node 3 nil nil)

def t3 : MyTree Nat :=
  node 5 leftOnly rightOnly

def depth : MyTree α -> Nat
  | nil => 0
  | node _ l r => Nat.max (depth l) (depth r) + 1

def size : MyTree α -> Nat
  | nil => 0
  | node _ l r => 1 + size l + size r

def mirror : MyTree α -> MyTree α
  | nil => nil
  | node a l r => node a (mirror r) (mirror l)

#eval depth t3
#eval size t3
#eval mirror t3

theorem size_mirror (t : MyTree α) :
    size (mirror t) = size t := by
  induction t with
  | nil =>
      rfl
  | node a l r ihl ihr =>
      simp [mirror, size, ihl, ihr]
      omega

end MyTree

inductive BadTree (α : Type) where
  | leaf : α -> BadTree α
  | node : BadTree α -> BadTree α -> BadTree α
  deriving Repr

inductive GTree (α : Type) where
  | node : α -> List (GTree α) -> GTree α
  deriving Repr

namespace GTree

def size : GTree α -> Nat
  | node _ children => 1 + children.foldl (fun acc t => acc + size t) 0

def depth : GTree α -> Nat
  | node _ children => 1 + children.foldl (fun acc t => Nat.max acc (depth t)) 0

def sample : GTree Nat :=
  node 10 [node 1 [], node 2 [node 3 []]]

#eval size sample
#eval depth sample

end GTree

/-!
## Natural-number induction
-/

theorem add_one_eq_one_add (i : Nat) :
    i + 1 = 1 + i := by
  induction i with
  | zero =>
      rfl
  | succ i ih =>
      calc
        (i + 1) + 1 = (1 + i) + 1 := by rw [ih]
        _ = 1 + (i + 1) := by rw [Nat.add_assoc]

/-!
## Recursion and Termination
-/

namespace Sharkovskii

def oddPart : Nat -> Nat
  | 0 => 0
  | n + 1 =>
      if (n + 1) % 2 = 0 then
        oddPart ((n + 1) / 2)
      else
        n + 1
termination_by k => k
decreasing_by
  exact Nat.div_lt_self (Nat.succ_pos n) (by decide)

def twoAdic : Nat -> Nat
  | 0 => 0
  | n + 1 =>
      if (n + 1) % 2 = 0 then
        twoAdic ((n + 1) / 2) + 1
      else
        0
termination_by k => k
decreasing_by
  exact Nat.div_lt_self (Nat.succ_pos n) (by decide)

#eval oddPart 0
#eval oddPart 12
#eval twoAdic 12
#eval oddPart 40
#eval twoAdic 40

namespace BadGeneratedDefinition

def stripTwosAux : Nat -> Nat -> Nat
  | 0, n => n
  | fuel + 1, n =>
      if n % 2 = 0 && n != 0 then
        stripTwosAux fuel (n / 2)
      else
        n

def oddPart (n : Nat) : Nat :=
  stripTwosAux n n

#eval oddPart 12

end BadGeneratedDefinition

end Sharkovskii

def factorial : Nat -> Nat
  | 0 => 1
  | n + 1 => (n + 1) * factorial n

#eval factorial 5

-- Expected failure: no recursive call moves to a smaller argument.
-- def bad : Nat -> Nat
--   | n => bad n

#check Acc
#check Acc.intro
#check WellFounded

example {α : Type} {r : α -> α -> Prop}
    (wf : WellFounded r)
    (P : α -> Prop)
    (step : ∀ x, (∀ y, r y x -> P y) -> P x)
    (x : α) : P x :=
  wf.induction x step

#check Tree
#check Tree.node
#check Tree.numNodes

example (P : Tree α -> Prop)
    (step : ∀ t : Tree α,
      (∀ s : Tree α, Tree.numNodes s < Tree.numNodes t -> P s) -> P t) :
    ∀ t : Tree α, P t := by
  intro t
  exact (InvImage.wf Tree.numNodes wellFounded_lt).induction t step

def euclid : Nat -> Nat -> Nat
  | a, 0 => a
  | a, b + 1 => euclid (b + 1) (a % (b + 1))
termination_by _ b => b
decreasing_by
  exact Nat.mod_lt a (Nat.succ_pos b)

#eval euclid 30 12

#check Nat.strong_induction_on

example (P : Nat -> Prop)
    (step : ∀ n, (∀ m, m < n -> P m) -> P n) :
    ∀ n, P n := by
  intro n
  exact Nat.strong_induction_on n step

/-!
## Dynamics and Sharkovskii-style period order
-/

namespace Dynamics

def iterate {X : Type} (f : X -> X) : Nat -> X -> X
  | 0, x => x
  | n + 1, x => f (iterate f n x)

def ReturnsAfter {X : Type} (f : X -> X)
    (n : Nat) (x : X) : Prop :=
  iterate f n x = x

def IsPeriodicPoint {X : Type} (f : X -> X)
    (n : Nat) (x : X) : Prop :=
  0 < n ∧ ReturnsAfter f n x

def HasExactPeriod {X : Type} (f : X -> X)
    (n : Nat) (x : X) : Prop :=
  IsPeriodicPoint f n x ∧
    ∀ m : Nat, 0 < m -> m < n -> ¬ ReturnsAfter f m x

def HasPointOfExactPeriod {X : Type} (f : X -> X)
    (n : Nat) : Prop :=
  ∃ x : X, HasExactPeriod f n x

end Dynamics

namespace Sharkovskii

abbrev sharkLE (m n : Nat) : Prop :=
  n = 0 ∨
    (1 < oddPart m ∧ oddPart n = 1) ∨
    (1 < oddPart m ∧ 1 < oddPart n ∧
      (twoAdic m < twoAdic n ∨
        (twoAdic m = twoAdic n ∧ oddPart m ≤ oddPart n))) ∨
    (oddPart m = 1 ∧ oddPart n = 1 ∧ n ≤ m)

infix:50 " ≼ₛ " => sharkLE

#check sharkLE
#check (3 ≼ₛ 5)

#eval decide (3 ≼ₛ 5)
#eval decide (5 ≼ₛ 6)
#eval decide (6 ≼ₛ 5)
#eval decide (8 ≼ₛ 4)
#eval decide (4 ≼ₛ 8)
#eval decide (1 ≼ₛ 0)
#eval decide (0 ≼ₛ 1)

def SharkovskiiTheoremStatement
    {I : Type}
    (IsContinuousIntervalMap : (I -> I) -> Prop) : Prop :=
  ∀ f : I -> I, IsContinuousIntervalMap f ->
    ∀ m n : Nat, 0 < n -> m ≼ₛ n ->
      Dynamics.HasPointOfExactPeriod f m ->
      Dynamics.HasPointOfExactPeriod f n

#check SharkovskiiTheoremStatement

end Sharkovskii

/-!
## Mathlib order hierarchy
-/

#check PartialOrder
#check le_antisymm

#check Preorder
#check PartialOrder
#check Nat.instPreorder
#check Nat.instPartialOrder
#check LinearOrder

example [PartialOrder α] {a b : α}
    (hab : a ≤ b) (hba : b ≤ a) : a = b :=
  le_antisymm hab hba

end Week07
