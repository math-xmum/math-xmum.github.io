import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BSfA04rh.js";import{o as d,b as c,w as a,g as n,d as t,m as i,ad as l,v as m,x as f,T as r}from"./modules/vue-CYPSLl1z.js";import{I as h}from"./slidev/default-DLYDmE1F.js";import{u as g,f as v}from"./slidev/context-qCHgO-rM.js";import"./modules/unplugin-icons-BSwR7J6l.js";import"./index-Dk23Izv0.js";import"./modules/shiki-BBGaksAH.js";const b={class:"two-col"},S={__name:"week08.md__slidev_51",setup(k){const{$clicksContext:o,$frontmatter:u}=g();return o.setup(),(L,s)=>{const e=p;return d(),c(h,m(f(r(v)(r(u),50))),{default:a(()=>[s[9]||(s[9]=n("h1",null,"LeanSearch As Downstream Infrastructure",-1)),n("div",b,[n("div",null,[s[1]||(s[1]=n("h3",null,"Search by natural-language query",-1)),t(e,i({},{title:"",ranges:[]}),{default:a(()=>[...s[0]||(s[0]=[n("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,'NL query: "every continuous function')]),l(`
`),n("span",{class:"line"},[n("span",null,"           on a compact interval")]),l(`
`),n("span",{class:"line"},[n("span",null,'           attains its maximum"')]),l(`
`),n("span",{class:"line"},[n("span",null,"  ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"embedding model")]),l(`
`),n("span",{class:"line"},[n("span",null,"  trained on Herald-style")]),l(`
`),n("span",{class:"line"},[n("span",null,"  (informal, formal) pairs")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"nearest-neighbour over")]),l(`
`),n("span",{class:"line"},[n("span",null,"  informalized Mathlib")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"formal declarations:")]),l(`
`),n("span",{class:"line"},[n("span",null,"  IsCompact.exists_isMaxOn")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ContinuousOn.isCompact_image")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ...")])])],-1)])]),_:1},16),s[2]||(s[2]=n("p",null,[l("LeanSearch is the deployed form of this stack — a public service at "),n("code",null,"leansearch.net"),l(". It reappears as Aria’s leaf-grounding step.")],-1)),s[3]||(s[3]=n("h3",null,"Three downstream consumers",-1)),s[4]||(s[4]=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Consumer"),n("th",null,"Use")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("strong",null,"LeanSearch")]),n("td",null,"NL→FL search over Mathlib")]),n("tr",null,[n("td",null,[n("strong",null,"Loogle")]),n("td",null,"type-pattern search (uses informalized headers as labels)")]),n("tr",null,[n("td",null,[n("strong",null,"Aria / ReProver")]),n("td",null,"retrieval-augmented autoformalization")])])],-1))]),n("div",null,[s[6]||(s[6]=n("h3",null,"The FL → NL chain",-1)),t(e,i({},{title:"",ranges:[]}),{default:a(()=>[...s[5]||(s[5]=[n("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"Herald")]),l(`
`),n("span",{class:"line"},[n("span",null,"  dataset + translator")]),l(`
`),n("span",{class:"line"},[n("span",null,"     ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"LeanSearch")]),l(`
`),n("span",{class:"line"},[n("span",null,"  informalized Mathlib")]),l(`
`),n("span",{class:"line"},[n("span",null,"  as a query service")]),l(`
`),n("span",{class:"line"},[n("span",null,"     ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"Aria / ReProver / Rethinking")]),l(`
`),n("span",{class:"line"},[n("span",null,"  LeanSearch-style retrieval")]),l(`
`),n("span",{class:"line"},[n("span",null,"  inside NL → FL pipelines")]),l(`
`),n("span",{class:"line"},[n("span",null,"     ↓")]),l(`
`),n("span",{class:"line"},[n("span",null,"Autoformalization output")]),l(`
`),n("span",{class:"line"},[n("span",null,"  grounded in real Mathlib")]),l(`
`),n("span",{class:"line"},[n("span",null,"  identifiers, not hallucinated")])])],-1)])]),_:1},16),s[7]||(s[7]=n("div",{class:"box-green"},[l(" Mathlib is now treated as "),n("strong",null,"two parallel artifacts"),l(": the formal source code (for compilation) and an informalized layer (for human and ML consumption). Both must be maintained as Mathlib evolves. ")],-1)),s[8]||(s[8]=n("div",{class:"box-orange"},[l(" FL → NL is "),n("strong",null,"not symmetric"),l(' with NL → FL. It is upstream infrastructure: without informalized Mathlib at scale, retrieval and grounding cannot happen. Every "RAG over Mathlib" demo silently depends on Herald-class data. ')],-1))])])]),_:1},16)}}};export{S as default};
