import{S as e,i as a,a as o,e as r,b as s,c as t,d as l,f as c,g as n,j as m,k as d,l as i,C as u,t as g,h,D as y,m as p,n as f,o as v,p as E,r as I}from"./client.8150924a.js";function w(e,a,o){const r=e.slice();return r[9]=a[o],r[11]=o,r}function j(e){let a,o,g,h,y,p,f,v,E;function I(...a){return e[3](e[11],...a)}return{c(){a=r("div"),o=r("div"),g=r("img"),f=s(),this.h()},l(e){a=t(e,"DIV",{class:!0});var r=l(a);o=t(r,"DIV",{class:!0});var s=l(o);g=t(s,"IMG",{id:!0,class:!0,src:!0,alt:!0}),s.forEach(c),f=n(r),r.forEach(c),this.h()},h(){m(g,"id",h="card-"+e[11]),m(g,"class","w-100"),g.src!==(y=V)&&m(g,"src",y),m(g,"alt",p=e[9].id),m(o,"class","h-100 w-100"),m(a,"class","col mb-4")},m(e,r){d(e,a,r),i(a,o),i(o,g),i(a,f),v||(E=u(g,"click",I),v=!0)},p(a,o){e=a,1&o&&p!==(p=e[9].id)&&m(g,"alt",p)},d(e){e&&c(a),v=!1,E()}}}function U(e){let a,o,u,E,I,U,V,B,C,D,L,R,$,b,A,k,x,O,G,H,M,z,F,S,Y,T,q,J,K,N,P,Q,W=e[1]("nav.game.memory-1")+"",X=e[0],Z=[];for(let a=0;a<X.length;a+=1)Z[a]=j(w(e,X,a));return{c(){a=r("div"),o=r("h1"),u=g(W),E=s(),I=r("div"),U=r("video"),V=r("source"),C=g("\n        Your browser does not support the video tag."),D=s(),L=r("div");for(let e=0;e<Z.length;e+=1)Z[e].c();R=s(),$=r("div"),b=r("h1"),A=g("Game Rules:"),k=s(),x=r("ol"),O=r("li"),G=g("Choose a Card"),H=s(),M=r("li"),z=g("Find the match"),F=s(),S=r("h1"),Y=g("Reglas del juego:"),T=s(),q=r("ol"),J=r("li"),K=g("Elige una carta"),N=s(),P=r("li"),Q=g("Encuentra el par"),this.h()},l(e){a=t(e,"DIV",{class:!0});var r=l(a);o=t(r,"H1",{class:!0});var s=l(o);u=h(s,W),s.forEach(c),r.forEach(c),E=n(e),I=t(e,"DIV",{class:!0});var m=l(I);U=t(m,"VIDEO",{id:!0,class:!0,style:!0});var d=l(U);V=t(d,"SOURCE",{src:!0,type:!0}),C=h(d,"\n        Your browser does not support the video tag."),d.forEach(c),D=n(m),L=t(m,"DIV",{id:!0,class:!0});var i=l(L);for(let e=0;e<Z.length;e+=1)Z[e].l(i);i.forEach(c),m.forEach(c),R=n(e),$=t(e,"DIV",{class:!0});var g=l($);b=t(g,"H1",{});var y=l(b);A=h(y,"Game Rules:"),y.forEach(c),k=n(g),x=t(g,"OL",{});var p=l(x);O=t(p,"LI",{});var f=l(O);G=h(f,"Choose a Card"),f.forEach(c),H=n(p),M=t(p,"LI",{});var v=l(M);z=h(v,"Find the match"),v.forEach(c),p.forEach(c),F=n(g),S=t(g,"H1",{});var w=l(S);Y=h(w,"Reglas del juego:"),w.forEach(c),T=n(g),q=t(g,"OL",{});var j=l(q);J=t(j,"LI",{});var B=l(J);K=h(B,"Elige una carta"),B.forEach(c),N=n(j),P=t(j,"LI",{});var X=l(P);Q=h(X,"Encuentra el par"),X.forEach(c),j.forEach(c),g.forEach(c),this.h()},h(){m(o,"class","text-center"),m(a,"class","container"),V.src!==(B="game/corazones.mp4")&&m(V,"src","game/corazones.mp4"),m(V,"type","video/mp4"),m(U,"id","myVideo"),m(U,"class","container"),y(U,"display","none"),m(L,"id","myCards"),m(L,"class","row row-cols-3"),m(I,"class","container"),m($,"class","container")},m(e,r){d(e,a,r),i(a,o),i(o,u),d(e,E,r),d(e,I,r),i(I,U),i(U,V),i(U,C),i(I,D),i(I,L);for(let e=0;e<Z.length;e+=1)Z[e].m(L,null);d(e,R,r),d(e,$,r),i($,b),i(b,A),i($,k),i($,x),i(x,O),i(O,G),i(x,H),i(x,M),i(M,z),i($,F),i($,S),i(S,Y),i($,T),i($,q),i(q,J),i(J,K),i(q,N),i(q,P),i(P,Q)},p(e,[a]){if(2&a&&W!==(W=e[1]("nav.game.memory-1")+"")&&p(u,W),5&a){let o;for(X=e[0],o=0;o<X.length;o+=1){const r=w(e,X,o);Z[o]?Z[o].p(r,a):(Z[o]=j(r),Z[o].c(),Z[o].m(L,null))}for(;o<Z.length;o+=1)Z[o].d(1);Z.length=X.length}},i:f,o:f,d(e){e&&c(a),e&&c(E),e&&c(I),v(Z,e),e&&c(R),e&&c($)}}}let V="game/memory-1-box.jpg",B="game/memory-2-empty.jpg";function C(e,a,o){let r;E(e,I,e=>o(1,r=e));let s=[{id:"cat",imgUrl:"game/memory-1-cat.jpg",soundUrl:"game/memory-1-cat.mp3"},{id:"lion",imgUrl:"game/memory-1-lion.jpg",soundUrl:"game/memory-1-lion.mp3"},{id:"mouse",imgUrl:"game/memory-1-mouse.jpg",soundUrl:"game/memory-1-mouse.mp3"}];s=(s=s.concat(s)).map(e=>({sort:Math.random(),value:e})).sort((e,a)=>e.sort-a.sort).map(e=>e.value);let t=3,l=null,c=!1;function n(e){c=!0,setTimeout(async()=>{c=!1,console.log("checkIfRight"),null!==l?(s[e].id===s[l].id?(new Audio("game/memory-1-right.mp3").play(),t-=1,console.log("left:",t),document.getElementById(`card-${e}`).src=B,document.getElementById(`card-${l}`).src=B,t<=0&&function(){c=!0;let e=document.getElementById("myVideo"),a=document.getElementById("myCards");e.addEventListener("ended",function(o){e.style.display="none",a.style.display="",c=!1,console.log("startAgain"),[...Array(6).keys()].forEach(e=>{document.getElementById(`card-${e}`).src=V}),t=3,l=null,a=a.map(e=>({sort:Math.random(),value:e})).sort((e,a)=>e.sort-a.sort).map(e=>e.value)},!1),e.style.display="",a.style.display="none",e.autoplay=!0,e.load()}()):(document.getElementById(`card-${e}`).src=V,document.getElementById(`card-${l}`).src=V,new Audio("game/memory-1-wrong.mp3").play()),l=null):l=e},3e3)}async function m(e){if(console.log(e),c)return;const a=document.getElementById(`card-${e}`);a.src.includes(V)&&(a.src=s[e].imgUrl,new Audio(s[e].soundUrl).play(),n(e))}return[s,r,m,e=>m(e)]}export default class extends e{constructor(e){super(),a(this,e,C,U,o,{})}}
