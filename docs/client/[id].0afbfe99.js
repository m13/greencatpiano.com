import{p as s,S as e,i as t,s as a,u as o,v as i,w as r,x as n,y as c,z as d}from"./client.c02fe8c5.js";import{V as f}from"./Video.b26e6756.js";function u(s){let e;const t=new f({props:{video:s[0]}});return{c(){o(t.$$.fragment)},l(s){i(t.$$.fragment,s)},m(s,a){r(t,s,a),e=!0},p(s,[e]){const a={};1&e&&(a.video=s[0]),t.$set(a)},i(s){e||(n(t.$$.fragment,s),e=!0)},o(s){c(t.$$.fragment,s),e=!1},d(s){d(t,s)}}}async function m({params:e,query:t}){const a=await this.fetch(`video/${e.id}.json`),o=await a.json();if(["en","es"].forEach(e=>s(e,{[o.id]:o[e]})),200===a.status)return{video:o};this.error(a.status,data.message)}function $(s,e,t){let{video:a}=e;return s.$set=(s=>{"video"in s&&t(0,a=s.video)}),[a]}export default class extends e{constructor(s){super(),t(this,s,$,u,a,{video:0})}}export{m as preload};
