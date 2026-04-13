import{u as n,j as e}from"./index-DKWFUx8v.js";import{c as s}from"./createLucideIcon-D85FOZ36.js";/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],c=s("lightbulb",l);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],h=s("rotate-ccw",d);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],m=s("zap",p),u=[{icon:m,title:"What broke",body:"Prompt brittleness — scoring outputs drifted across model updates. We added structured validation layers and contract tests to catch regressions early."},{icon:c,title:"What surprised us",body:"The nano/mini split was more powerful than expected. Cheap triage at the top of the funnel saved 70%+ on API costs without losing quality where it matters."},{icon:h,title:"What we'd do differently",body:"Start with integration tests earlier. Unit coverage felt safe but masked real pipeline issues. We also underestimated TTS adapter complexity."}];function f(){const{subStep:a}=n(),i=a>=0;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"100%",justifyContent:"center",gap:"1.5rem"},children:[e.jsxs("h2",{style:{textAlign:"center"},children:["What we"," ",e.jsx("span",{style:{color:"var(--clr-copper-bright)"},children:"learned"})," ","building this"]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.5rem",flex:1,maxHeight:"420px",width:"100%"},children:u.map((t,r)=>{const o=t.icon;return e.jsxs("div",{className:"surface-card",style:{padding:"1.8rem 1.5rem",display:"flex",flexDirection:"column",gap:"0.8rem",opacity:i?1:0,transform:i?"scale(1)":"scale(0.9)",transition:`opacity 0.5s ease ${r*100}ms, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${r*100}ms`},children:[e.jsx(o,{size:32,strokeWidth:1.5,style:{color:"var(--clr-copper-bright)"}}),e.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:700,color:"var(--clr-fg)",margin:0},children:t.title}),e.jsx("p",{style:{fontSize:"1.02rem",lineHeight:1.55,color:"var(--clr-muted)",margin:0},children:t.body})]},t.title)})})]})}export{f as default};
