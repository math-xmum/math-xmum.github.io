import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BvzPOk41.js";import{o,b as d,w as n,g as s,d as c,m as u,ad as e,v as m,x as _,T as l}from"./modules/vue-Z1bZjFKP.js";import{I as f}from"./slidev/default-ZXz0A_Va.js";import{u as g,f as k}from"./slidev/context-VZzgDvp9.js";import"./modules/unplugin-icons-BVFYShi9.js";import"./index-CHYQeGIv.js";import"./modules/shiki-D8NRPJIT.js";const h={class:"compact-code"},T={__name:"week05.md__slidev_46",setup(b){const{$clicksContext:t,$frontmatter:i}=g();return t.setup(),(v,a)=>{const r=p;return o(),d(f,m(_(l(k)(l(i),45))),{default:n(()=>[a[1]||(a[1]=s("h1",null,"Agent Loop Pseudocode",-1)),s("div",h,[c(r,u({},{title:"",ranges:[]}),{default:n(()=>[...a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"state = initialize(problem)")]),e(`
`),s("span",{class:"line"},[s("span",null,"for step in budget:")]),e(`
`),s("span",{class:"line"},[s("span",null,"    query = build_prompt(state)")]),e(`
`),s("span",{class:"line"},[s("span",null,"    candidates = model.generate(query)")]),e(`
`),s("span",{class:"line"},[s("span",null,"    candidates = add_retrieved_lemmas(candidates, state)")]),e(`
`),s("span",{class:"line"},[s("span",null,"    result = run_lean(candidates)")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"    if result.accepted:")]),e(`
`),s("span",{class:"line"},[s("span",null,"        return checked_proof")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"    state = update_state(")]),e(`
`),s("span",{class:"line"},[s("span",null,"        old_state=state,")]),e(`
`),s("span",{class:"line"},[s("span",null,"        lean_feedback=result.errors_or_goals,")]),e(`
`),s("span",{class:"line"},[s("span",null,"        failed_candidates=candidates")]),e(`
`),s("span",{class:"line"},[s("span",null,"    )")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"return failure_report")])])],-1)])]),_:1},16)]),a[2]||(a[2]=s("div",{class:"highlight-box-orange small"}," Most design choices are hidden inside `build_prompt`, `add_retrieved_lemmas`, and `update_state`. ",-1))]),_:1},16)}}};export{T as default};
