import{r as s,u as C,j as e}from"./index-BGZ1xJCI.js";/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(...r)=>r.filter((i,o,t)=>!!i&&i.trim()!==""&&t.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,o,t)=>t?t.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r=>{const i=z(r);return i.charAt(0).toUpperCase()+i.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=r=>{for(const i in r)if(i.startsWith("aria-")||i==="role"||i==="title")return!0;return!1},W=s.createContext({}),A=()=>s.useContext(W),N=s.forwardRef(({color:r,size:i,strokeWidth:o,absoluteStrokeWidth:t,className:c="",children:n,iconNode:m,...d},b)=>{const{size:l=24,strokeWidth:p=2,absoluteStrokeWidth:v=!1,color:f="currentColor",className:k=""}=A()??{},w=t??v?Number(o??p)*24/Number(i??l):o??p;return s.createElement("svg",{ref:b,...h,width:i??l??h.width,height:i??l??h.height,stroke:r??f,strokeWidth:w,className:x("lucide",k,c),...!n&&!_(d)&&{"aria-hidden":"true"},...d},[...m.map(([j,S])=>s.createElement(j,S)),...Array.isArray(n)?n:[n]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=(r,i)=>{const o=s.forwardRef(({className:t,...c},n)=>s.createElement(N,{ref:n,iconNode:i,className:x(`lucide-${M(y(r))}`,`lucide-${r}`,t),...c}));return o.displayName=y(r),o};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],I=a("brain-circuit",$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],P=a("funnel",L);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],T=a("globe",R);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],E=a("inbox",q);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],B=a("mic",F);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Z=a("network",D);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],U=a("pen-line",H);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],X=a("pen-tool",V);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],K=a("rss",G);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],Y=a("scissors",O);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Q=a("share-2",J),g=[{icon:T,label:"Content Sources",sub:"RSS, Telegram, social",built:!0},{icon:P,label:"Curation",sub:"Scoring & triage",built:!0},{icon:U,label:"Script Writing",sub:"Persona-driven drafts",built:!0},{icon:B,label:"Production",sub:"Recording & TTS",built:!1},{icon:Y,label:"Processing",sub:"Editing & clips",built:!1},{icon:Q,label:"Distribution",sub:"Spotify, YouTube, RSS",built:!1}],u=[{icon:K,label:"RSS Feeds",sub:"93 sources polled hourly",highlight:!1},{icon:I,label:"AI Scoring",sub:"5 weighted dimensions",highlight:!0},{icon:E,label:"Inbox Triage",sub:"Ranked & batched",highlight:!1},{icon:Z,label:"Connections",sub:"Cross-pillar links",highlight:!1},{icon:X,label:"Script Workspace",sub:"Persona-driven writing",highlight:!0}],ee=[{weight:"30%",name:"Relevance"},{weight:"25%",name:"Novelty"},{weight:"20%",name:"Depth"},{weight:"15%",name:"Audience Fit"},{weight:"10%",name:"Controversy Potential"}];function ie(){const{subStep:r}=C(),i=r===0?"overview":r===1?"detail":"scoring",o=i==="scoring";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",gap:"1.2rem",position:"relative"},children:[e.jsx("h2",{style:{textAlign:"center"},children:i==="overview"?e.jsxs(e.Fragment,{children:["The ",e.jsx("span",{style:{color:"var(--clr-copper-bright)"},children:"full"})," pipeline"]}):i==="detail"?e.jsxs(e.Fragment,{children:["From ",e.jsx("span",{style:{color:"var(--clr-copper-bright)"},children:"feeds"})," to"," ",e.jsx("span",{style:{color:"var(--clr-copper-bright)"},children:"script"})," — inside the machine"]}):e.jsxs(e.Fragment,{children:["The ",e.jsx("span",{style:{color:"var(--clr-copper-bright)"},children:"scoring"})," engine"]})}),e.jsx("hr",{className:"copper-rule copper-rule--animated",style:{width:"80%"}}),e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1.4rem",width:"100%",opacity:i==="overview"?1:0,transform:i==="overview"?"scale(1)":"scale(0.6)",position:i==="overview"?"relative":"absolute",pointerEvents:i==="overview"?"auto":"none",transition:"opacity 0.6s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)"},children:e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",flexWrap:"wrap",width:"100%"},children:g.map((t,c)=>{const n=t.icon;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsxs("div",{className:"surface-card",style:{textAlign:"center",padding:"1.1rem 1.2rem",minWidth:"130px",opacity:t.built?1:.35,borderColor:t.built?"var(--clr-copper)":void 0,background:t.built?"rgba(160, 113, 78, 0.06)":void 0},children:[e.jsx(n,{size:28,strokeWidth:1.5,style:{color:t.built?"var(--clr-copper-bright)":"var(--clr-muted)",marginBottom:"6px"}}),e.jsx("div",{style:{fontSize:"0.9rem",fontWeight:600,color:t.built?"var(--clr-fg)":"var(--clr-muted)"},children:t.label}),e.jsx("div",{style:{fontSize:"0.72rem",color:"var(--clr-muted)",marginTop:"3px"},children:t.sub})]}),c<g.length-1&&e.jsx("span",{style:{color:"var(--clr-muted)",fontSize:"1.2rem"},children:"→"})]},t.label)})})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"12px",flexWrap:"wrap",width:"100%",opacity:i==="detail"?1:0,transform:i==="detail"?"scale(1)":"scale(0.6)",position:i==="detail"?"relative":"absolute",pointerEvents:i==="detail"?"auto":"none",transition:"opacity 0.6s ease 0.1s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s"},children:u.map((t,c)=>{const n=t.icon;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsxs("div",{className:"surface-card",style:{textAlign:"center",padding:"1.2rem 1.4rem",minWidth:"140px",borderColor:t.highlight?"var(--clr-copper)":void 0,background:t.highlight?"rgba(160, 113, 78, 0.06)":void 0,boxShadow:t.highlight?"0 0 20px rgba(160, 113, 78, 0.1)":void 0},children:[e.jsx(n,{size:32,strokeWidth:1.5,style:{color:t.highlight?"var(--clr-copper-bright)":"var(--clr-muted)",marginBottom:"8px"}}),e.jsx("div",{style:{fontSize:"1rem",fontWeight:600,color:"var(--clr-fg)"},children:t.label}),e.jsx("div",{style:{fontSize:"0.8rem",color:"var(--clr-muted)",marginTop:"4px"},children:t.sub})]}),c<u.length-1&&e.jsx("span",{style:{color:"var(--clr-muted)",fontSize:"1.4rem"},children:"→"})]},t.label)})}),e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.65rem",width:"100%",maxWidth:"1000px",opacity:o?1:0,position:o?"relative":"absolute",pointerEvents:o?"auto":"none",transition:"opacity 0.3s ease"},children:ee.map((t,c)=>e.jsxs("div",{className:"surface-card",style:{display:"flex",alignItems:"center",gap:"1.2rem",padding:"0.85rem 1.4rem",width:"100%",opacity:o?1:0,transform:o?"translateX(0)":"translateX(-30px)",transition:`opacity 0.4s ease ${c*80}ms, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${c*80}ms`},children:[e.jsx("span",{style:{fontSize:"2.2rem",fontWeight:800,color:"var(--clr-copper-bright)",minWidth:"70px",textAlign:"right",fontFamily:"var(--font-heading)"},children:t.weight}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:600,color:"var(--clr-fg)"},children:t.name})]},t.name))})]})}export{ie as default};
