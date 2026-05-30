import{_ as c}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DDopJbQ_.js";import{o as r,b as p,w as a,g as n,d as u,m as d,D as s,v as f,x as h,z as l}from"./modules/vue-CnHgG7HT.js";import{I as m}from"./slidev/default-C18wFmbA.js";import{u as g,f as _}from"./slidev/context-B31hUiba.js";import"./modules/unplugin-icons-BlPU76cY.js";import"./index-ujyMODJY.js";import"./modules/shiki-Czlm1gp1.js";const v={class:"two-col-wide"},k={class:"code-compact"},V={__name:"week10.md__slidev_21",setup(x){const{$clicksContext:t,$frontmatter:i}=g();return t.setup(),(b,e)=>{const o=c;return r(),p(m,f(h(l(_)(l(i),20))),{default:a(()=>[e[2]||(e[2]=n("h1",null,"The Verdict Contract: verification.json",-1)),n("div",v,[n("div",null,[n("div",k,[u(o,d({},{title:"",ranges:[]}),{default:a(()=>[...e[0]||(e[0]=[n("pre",{class:"shiki shiki-themes github-light-high-contrast github-light-high-contrast slidev-code",style:{"--shiki-dark":"#0e1116","--shiki-light":"#0e1116","--shiki-dark-bg":"#ffffff","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"{")]),s(`
`),n("span",{class:"line"},[n("span",null,' "verification_hash": "<echoed from prompt>",')]),s(`
`),n("span",{class:"line"},[n("span",null,' "verdict": "accepted | gap | critical",')]),s(`
`),n("span",{class:"line"},[n("span",null,' "verification_report": {')]),s(`
`),n("span",{class:"line"},[n("span",null,'   "summary": "…",')]),s(`
`),n("span",{class:"line"},[n("span",null,'   "checked_items": [')]),s(`
`),n("span",{class:"line"},[n("span",null,"     { location, status:accepted|gap|critical, notes }")]),s(`
`),n("span",{class:"line"},[n("span",null,"   ],")]),s(`
`),n("span",{class:"line"},[n("span",null,'   "gaps":            [ { location, issue } ],')]),s(`
`),n("span",{class:"line"},[n("span",null,'   "critical_errors": [ { location, issue } ],')]),s(`
`),n("span",{class:"line"},[n("span",null,'   "external_reference_checks": [')]),s(`
`),n("span",{class:"line"},[n("span",null,"     { location, reference, status, notes }")]),s(`
`),n("span",{class:"line"},[n("span",null,"   ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"   # status ∈ verified_in_nodes | missing_from_nodes")]),s(`
`),n("span",{class:"line"},[n("span",null,"   #   | verified_external_theorem_node")]),s(`
`),n("span",{class:"line"},[n("span",null,"   #   | insufficient_information | not_applicable")]),s(`
`),n("span",{class:"line"},[n("span",null," },")]),s(`
`),n("span",{class:"line"},[n("span",null,' "repair_hint": ""')]),s(`
`),n("span",{class:"line"},[n("span",null,"}")])])],-1)])]),_:1},16)])]),e[1]||(e[1]=n("div",null,[n("div",{class:"box-green"},[n("strong",null,"Three-valued, not yes/no."),s(),n("code",null,"gap"),s(" = conclusion may hold, justification thin; "),n("code",null,"critical"),s(" = statement or strategy may be wrong. When unsure: "),n("code",null,"gap"),s(", never "),n("code",null,"accepted"),s(".")]),n("div",{class:"box"},[n("strong",null,"Coupling is schema-enforced."),s(" A JSON Schema (draft 2020-12, "),n("code",null,"if/then"),s(") ties verdict→contents: "),n("code",null,"accepted"),s(" ⇒ gaps & critical_errors empty, "),n("code",null,'repair_hint ""'),s('. You cannot "accept" while listing a gap.')]),n("div",{class:"box-orange"},[n("code",null,"verification_hash"),s(" echoes unchanged → binds the verdict to the "),n("strong",null,"exact text checked"),s(", so a stale verdict can't be applied to a changed proof.")])],-1))])]),_:1},16)}}};export{V as default};
