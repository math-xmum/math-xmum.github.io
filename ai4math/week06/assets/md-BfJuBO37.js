import{_ as i}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CnfziL3i.js";import{o as r,b as d,w as a,g as s,d as c,m,ad as e,v as _,x as u,T as l}from"./modules/vue-Z1bZjFKP.js";import{I as f}from"./slidev/default-xaby2BL7.js";import{u as g,f as k}from"./slidev/context-8fOvjnbA.js";import"./modules/unplugin-icons-BVFYShi9.js";import"./index-Diz8ZuHU.js";import"./modules/shiki-D8NRPJIT.js";const h={class:"code-mid"},C={__name:"week06.md__slidev_21",setup(v){const{$clicksContext:o,$frontmatter:t}=g();return o.setup(),(x,n)=>{const p=i;return r(),d(f,_(u(l(k)(l(t),20))),{default:a(()=>[n[1]||(n[1]=s("h1",null,"DAG For Proof Dependencies",-1)),n[2]||(n[2]=s("p",null,"In our proof-review setting, a DAG can represent dependencies among definitions, lemmas, proof steps, sources, gaps, and repairs.",-1)),s("div",h,[c(p,m({},{title:"",ranges:[]}),{default:a(()=>[...n[0]||(n[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"T_theorem")]),e(`
`),s("span",{class:"line"},[s("span",null,"  depends_on D_definition")]),e(`
`),s("span",{class:"line"},[s("span",null,"  depends_on L_key_lemma")]),e(`
`),s("span",{class:"line"},[s("span",null,"  depends_on P_proof_step")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"L_key_lemma")]),e(`
`),s("span",{class:"line"},[s("span",null,"  depends_on D_definition")]),e(`
`),s("span",{class:"line"},[s("span",null,"  supported_by S_source_span")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"P_proof_step")]),e(`
`),s("span",{class:"line"},[s("span",null,"  rejected_by I_gap")]),e(`
`),s("span",{class:"line"},[s("span",null,"  revised_into P_repair")])])],-1)])]),_:1},16)]),n[3]||(n[3]=s("div",{class:"callout"},[s("p",null,"If the graph says a theorem depends on a lemma that depends back on the theorem, the system has found either circular reasoning or a wrong dependency extraction.")],-1))]),_:1},16)}}};export{C as default};
