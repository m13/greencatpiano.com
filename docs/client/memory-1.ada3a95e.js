import{S as e,i as a,a as s,e as o,b as r,c as t,d as c,f as l,g as n,j as m,k as i,l as d,C as u,t as g,h,m as f,n as y,o as v,p,q as E}from"./client.c6815ae9.js";function I(e,a,s){const o=e.slice();return o[9]=a[s],o[11]=s,o}function w(e){let a,s,g,h,f,y,v,p,E;function I(...a){return e[3](e[11],...a)}return{c(){a=o("div"),s=o("div"),g=o("img"),v=r(),this.h()},l(e){a=t(e,"DIV",{class:!0});var o=c(a);s=t(o,"DIV",{class:!0});var r=c(s);g=t(r,"IMG",{id:!0,class:!0,src:!0,alt:!0}),r.forEach(l),v=n(o),o.forEach(l),this.h()},h(){m(g,"id",h="card-"+e[11]),m(g,"class","w-100"),g.src!==(f=j)&&m(g,"src",f),m(g,"alt",y=e[9].id),m(s,"class","h-100 w-100"),m(a,"class","col mb-4")},m(e,o){i(e,a,o),d(a,s),d(s,g),d(a,v),p||(E=u(g,"click",I),p=!0)},p(a,s){e=a,1&s&&y!==(y=e[9].id)&&m(g,"alt",y)},d(e){e&&l(a),p=!1,E()}}}function U(e){let a,s,u,p,E,U,j,k,B,D,V=e[1]("nav.game.memory-1")+"",$=e[0],A=[];for(let a=0;a<$.length;a+=1)A[a]=w(I(e,$,a));return{c(){a=o("div"),s=o("h1"),u=g(V),p=r(),E=o("div"),U=o("div");for(let e=0;e<A.length;e+=1)A[e].c();j=r(),k=o("div"),B=o("p"),D=g("This version reveals the cards once you click on them."),this.h()},l(e){a=t(e,"DIV",{class:!0});var o=c(a);s=t(o,"H1",{class:!0});var r=c(s);u=h(r,V),r.forEach(l),o.forEach(l),p=n(e),E=t(e,"DIV",{class:!0});var m=c(E);U=t(m,"DIV",{class:!0});var i=c(U);for(let e=0;e<A.length;e+=1)A[e].l(i);i.forEach(l),m.forEach(l),j=n(e),k=t(e,"DIV",{class:!0});var d=c(k);B=t(d,"P",{});var g=c(B);D=h(g,"This version reveals the cards once you click on them."),g.forEach(l),d.forEach(l),this.h()},h(){m(s,"class","text-center"),m(a,"class","container"),m(U,"class","row row-cols-3"),m(E,"class","container"),m(k,"class","container")},m(e,o){i(e,a,o),d(a,s),d(s,u),i(e,p,o),i(e,E,o),d(E,U);for(let e=0;e<A.length;e+=1)A[e].m(U,null);i(e,j,o),i(e,k,o),d(k,B),d(B,D)},p(e,[a]){if(2&a&&V!==(V=e[1]("nav.game.memory-1")+"")&&f(u,V),5&a){let s;for($=e[0],s=0;s<$.length;s+=1){const o=I(e,$,s);A[s]?A[s].p(o,a):(A[s]=w(o),A[s].c(),A[s].m(U,null))}for(;s<A.length;s+=1)A[s].d(1);A.length=$.length}},i:y,o:y,d(e){e&&l(a),e&&l(p),e&&l(E),v(A,e),e&&l(j),e&&l(k)}}}let j="game/memory-1-box.jpg",k="game/memory-2-empty.jpg";function B(e,a,s){let o;p(e,E,e=>s(1,o=e));let r=[{id:"cat",imgUrl:"game/memory-1-cat.jpg",soundUrl:"game/memory-1-cat.m4a"},{id:"lion",imgUrl:"game/memory-1-lion.jpg",soundUrl:"game/memory-1-lion.m4a"},{id:"mouse",imgUrl:"game/memory-1-mouse.jpg",soundUrl:"game/memory-1-mouse.m4a"}];r=(r=r.concat(r)).map(e=>({sort:Math.random(),value:e})).sort((e,a)=>e.sort-a.sort).map(e=>e.value);let t=3,c=null,l=!1;function n(e){l=!0,setTimeout(async()=>{l=!1,console.log("checkIfRight"),null!==c?(r[e].id===r[c].id?(new Audio("game/memory-1-right.m4a").play(),t-=1,console.log("left:",t),document.getElementById(`card-${e}`).src=k,document.getElementById(`card-${c}`).src=k,t<=0&&(l=!0,setTimeout(async()=>{l=!1,console.log("startAgain"),[...Array(6).keys()].forEach(e=>{document.getElementById(`card-${e}`).src=j}),t=3,c=null,s(0,r=r.map(e=>({sort:Math.random(),value:e})).sort((e,a)=>e.sort-a.sort).map(e=>e.value))},1e3))):(document.getElementById(`card-${e}`).src=j,document.getElementById(`card-${c}`).src=j,new Audio("game/memory-1-wrong.m4a").play()),c=null):c=e},3e3)}function m(e){if(console.log(e),l)return;const a=document.getElementById(`card-${e}`);a.src.includes(j)&&(a.src=r[e].imgUrl,new Audio(r[e].soundUrl).play(),n(e))}return[r,o,m,e=>m(e)]}export default class extends e{constructor(e){super(),a(this,e,B,U,s,{})}}
