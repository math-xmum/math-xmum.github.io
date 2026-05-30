import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DDopJbQ_.js";import{o as c,b as u,w as e,g as s,D as l,d as t,m as i,v as h,x as f,z as o}from"./modules/vue-CnHgG7HT.js";import{I as g}from"./slidev/default-C18wFmbA.js";import{u as m,f as k}from"./slidev/context-B31hUiba.js";import"./modules/unplugin-icons-BlPU76cY.js";import"./index-ujyMODJY.js";import"./modules/shiki-Czlm1gp1.js";const b={class:"two-col"},v={class:"code-compact"},x={class:"code-compact"},P={__name:"week10.md__slidev_15",setup(y){const{$clicksContext:r,$frontmatter:p}=m();return r.setup(),(_,n)=>{const a=d;return c(),u(g,h(f(o(k)(o(p),14))),{default:e(()=>[n[5]||(n[5]=s("h1",null,"What Is a Skill?",-1)),s("div",b,[s("div",null,[n[1]||(n[1]=s("div",{class:"box"},[l("A "),s("strong",null,"skill"),l(" is a folder with a "),s("code",null,"SKILL.md"),l(" — reusable instructions for one class of task. A general CLI feature (Claude Code, Codex), not a Rethlas invention.")],-1)),s("div",v,[t(a,i({},{title:"",ranges:[]}),{default:e(()=>[...n[0]||(n[0]=[s("pre",{class:"shiki shiki-themes github-light-high-contrast github-light-high-contrast slidev-code",style:{"--shiki-dark":"#0e1116","--shiki-light":"#0e1116","--shiki-dark-bg":"#ffffff","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,".claude/skills/<name>/   project (in repo)")]),l(`
`),s("span",{class:"line"},[s("span",null,"~/.claude/skills/<name>/ personal (all projects)")]),l(`
`),s("span",{class:"line"},[s("span")]),l(`
`),s("span",{class:"line"},[s("span",null,"SKILL.md")]),l(`
`),s("span",{class:"line"},[s("span",null,"  ---                ← YAML frontmatter")]),l(`
`),s("span",{class:"line"},[s("span",null,"  name:  skill id (matches the folder)")]),l(`
`),s("span",{class:"line"},[s("span",null,"  description: WHEN to use it — the trigger")]),l(`
`),s("span",{class:"line"},[s("span",null,"  allowed-tools: [memory_search, …]")]),l(`
`),s("span",{class:"line"},[s("span",null,"               optional tool whitelist")]),l(`
`),s("span",{class:"line"},[s("span",null,"  ---")]),l(`
`),s("span",{class:"line"},[s("span",null,"  # body: the step-by-step policy (Markdown)")])])],-1)])]),_:1},16)])]),s("div",null,[n[3]||(n[3]=s("h2",null,"Loaded by progressive disclosure",-1)),s("div",x,[t(a,i({},{title:"",ranges:[]}),{default:e(()=>[...n[2]||(n[2]=[s("pre",{class:"shiki shiki-themes github-light-high-contrast github-light-high-contrast slidev-code",style:{"--shiki-dark":"#0e1116","--shiki-light":"#0e1116","--shiki-dark-bg":"#ffffff","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"1 startup     only name + description of")]),l(`
`),s("span",{class:"line"},[s("span",null,"              every skill → a cheap index")]),l(`
`),s("span",{class:"line"},[s("span")]),l(`
`),s("span",{class:"line"},[s("span",null,"2 on relevance model matches task to a")]),l(`
`),s("span",{class:"line"},[s("span",null,"              description → reads that")]),l(`
`),s("span",{class:"line"},[s("span",null,"              full SKILL.md body")]),l(`
`),s("span",{class:"line"},[s("span")]),l(`
`),s("span",{class:"line"},[s("span",null,"3 on demand   scripts / refs the body cites")]),l(`
`),s("span",{class:"line"},[s("span",null,"              → load only when used")])])],-1)])]),_:1},16)]),n[4]||(n[4]=s("div",{class:"box-orange"},[l("The "),s("code",null,"description"),l(" is the "),s("strong",null,"trigger"),l(" — the only text seen when choosing a skill. Dozens of skills cost almost nothing until one is used.")],-1))])])]),_:1},16)}}};export{P as default};
