import{p as s,S as t,i as e,s as a,u as o,v as i,w as r,x as n,y as d,z as c}from"./client.8b1d8b12.js";import{V as f}from"./Video.0232e98f.js";function u(s){let t;const e=new f({props:{video:s[0]}});return{c(){o(e.$$.fragment)},l(s){i(e.$$.fragment,s)},m(s,a){r(e,s,a),t=!0},p(s,[t]){const a={};1&t&&(a.video=s[0]),e.$set(a)},i(s){t||(n(e.$$.fragment,s),t=!0)},o(s){d(e.$$.fragment,s),t=!1},d(s){c(e,s)}}}async function m({params:t,query:e}){const a=await this.fetch(`video/${t.id}.json`),o=await a.json();if(["en","es"].forEach(t=>s(t,{[o.id]:o[t]})),200===a.status)return{video:o};this.error(a.status,data.message)}function $(s,t,e){let{video:a}=t;return s.$set=(s=>{"video"in s&&e(0,a=s.video)}),[a]}export default class extends t{constructor(s){super(),e(this,s,$,u,a,{video:0})}}export{m as preload};
