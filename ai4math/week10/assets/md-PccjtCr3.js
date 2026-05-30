import{_ as i}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DDopJbQ_.js";import{o as p,b as c,w as o,g as s,d as u,m as d,D as n,v as f,x as m,z as a}from"./modules/vue-CnHgG7HT.js";import{I as g}from"./slidev/default-C18wFmbA.js";import{u as _,f as h}from"./slidev/context-B31hUiba.js";import"./modules/unplugin-icons-BlPU76cY.js";import"./index-ujyMODJY.js";import"./modules/shiki-Czlm1gp1.js";const k={class:"two-col"},v={class:"code-compact"},T={__name:"week10.md__slidev_8",setup(w){const{$clicksContext:t,$frontmatter:l}=_();return t.setup(),(y,e)=>{const r=i;return p(),c(g,f(m(a(h)(a(l),7))),{default:o(()=>[e[2]||(e[2]=s("h1",null,"The Repair Loop",-1)),s("div",k,[s("div",null,[s("div",v,[u(r,d({},{title:"",ranges:[]}),{default:o(()=>[...e[0]||(e[0]=[s("pre",{class:"shiki shiki-themes github-light-high-contrast github-light-high-contrast slidev-code",style:{"--shiki-dark":"#0e1116","--shiki-light":"#0e1116","--shiki-dark-bg":"#ffffff","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"solution = generate_then_self_improve(problem)")]),n(`
`),s("span",{class:"line"},[s("span",null,"verify, good = verify_solution(problem, solution)")]),n(`
`),s("span",{class:"line"},[s("span",null,"correct_count, error_count = 1, 0")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"for i in range(30):")]),n(`
`),s("span",{class:"line"},[s("span",null,'    if good != "yes":')]),n(`
`),s("span",{class:"line"},[s("span",null,"        solution = regenerate_with_bug_report(...)")]),n(`
`),s("span",{class:"line"},[s("span",null,"        correct_count = 0; error_count += 1")]),n(`
`),s("span",{class:"line"},[s("span",null,"    verify, good = verify_solution(problem, solution)")]),n(`
`),s("span",{class:"line"},[s("span",null,'    if good == "yes":')]),n(`
`),s("span",{class:"line"},[s("span",null,"        correct_count += 1; error_count = 0")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if correct_count >= 5:  return solution   # ACCEPT")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if error_count   >= 10: return None        # GIVE UP")])])],-1)])]),_:1},16)])]),e[1]||(e[1]=s("div",null,[s("pre",{class:"prompt"},[n("Below is the "),s("span",{class:"kw"},"bug report"),n(". "),s("span",{class:"kw"},"If you agree"),n(` with an
item, improve your solution so it is complete and
rigorous. Note that the evaluator `),s("span",{class:"kw"},`can
misunderstand`),n(` your solution and make mistakes.
`),s("span",{class:"kw"},"If you do not agree"),n(", "),s("span",{class:"kw"},`add detailed
explanations`),n(` to avoid such misunderstanding.
`)]),s("div",{class:"box"},[n(" The repair prompt allows for a "),s("strong",null,"wrong verifier"),n(": agree and fix, or disagree and clarify. ")])],-1))])]),_:1},16)}}};export{T as default};
