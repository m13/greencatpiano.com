import{S as e,i as a,a as o,e as r,b as c,c as s,d as t,f as l,g as m,j as n,k as d,l as i,C as u,t as g,h as y,D as p,m as h,n as f,o as E,p as v,r as I}from"./client.bc4b3bea.js";function U(e,a,o){const r=e.slice();return r[10]=a[o],r[12]=o,r}function O(e){let a,o,g,y,p,h,f,E,v;function I(...a){return e[3](e[12],...a)}return{c(){a=r("div"),o=r("div"),g=r("img"),f=c(),this.h()},l(e){a=s(e,"DIV",{class:!0});var r=t(a);o=s(r,"DIV",{class:!0});var c=t(o);g=s(c,"IMG",{id:!0,class:!0,src:!0,alt:!0}),c.forEach(l),f=m(r),r.forEach(l),this.h()},h(){n(g,"id",y="card-"+e[12]),n(g,"class","w-100"),g.src!==(p=D)&&n(g,"src",p),n(g,"alt",h=e[10].id),n(o,"class","h-100 w-100"),n(a,"class","col mb-4")},m(e,r){d(e,a,r),i(a,o),i(o,g),i(a,f),E||(v=u(g,"click",I),E=!0)},p(a,o){e=a,1&o&&h!==(h=e[10].id)&&n(g,"alt",h)},d(e){e&&l(a),E=!1,v()}}}function B(e){let a,o,u,v,I,B,D,C,R,j,w,V,$,b,A,L,S,x,k,T,G,H,M,z,F,q,J,K,N,P,Q,W,X,Y,Z,_,ee,ae,oe,re,ce,se,te,le,me,ne,de,ie,ue,ge,ye,pe=e[1]("nav.game.memory-2")+"",he=e[0],fe=[];for(let a=0;a<he.length;a+=1)fe[a]=O(U(e,he,a));return{c(){a=r("div"),o=r("h1"),u=g(pe),v=c(),I=r("div"),B=r("audio"),D=r("source"),R=c(),j=r("audio"),w=r("source"),$=c(),b=r("audio"),A=r("source"),S=c(),x=r("audio"),k=r("source"),G=c(),H=r("audio"),M=r("source"),F=c(),q=r("video"),J=r("source"),N=c(),P=r("div");for(let e=0;e<fe.length;e+=1)fe[e].c();Q=c(),W=r("div"),X=r("h1"),Y=g("Game Rules:"),Z=c(),_=r("ol"),ee=r("li"),ae=g("Choose a card and listen carefully"),oe=c(),re=r("li"),ce=g("Find the matching sound card"),se=c(),te=r("h1"),le=g("Reglas del juego:"),me=c(),ne=r("ol"),de=r("li"),ie=g("Elige una carta y escucha cuidadosamente"),ue=c(),ge=r("li"),ye=g("Encuentra la carta con el mismo sonido"),this.h()},l(e){a=s(e,"DIV",{class:!0});var r=t(a);o=s(r,"H1",{class:!0});var c=t(o);u=y(c,pe),c.forEach(l),r.forEach(l),v=m(e),I=s(e,"DIV",{class:!0});var n=t(I);B=s(n,"AUDIO",{id:!0,preload:!0});var d=t(B);D=s(d,"SOURCE",{src:!0,type:!0}),d.forEach(l),R=m(n),j=s(n,"AUDIO",{id:!0,preload:!0});var i=t(j);w=s(i,"SOURCE",{src:!0,type:!0}),i.forEach(l),$=m(n),b=s(n,"AUDIO",{id:!0,preload:!0});var g=t(b);A=s(g,"SOURCE",{src:!0,type:!0}),g.forEach(l),S=m(n),x=s(n,"AUDIO",{id:!0,preload:!0});var p=t(x);k=s(p,"SOURCE",{src:!0,type:!0}),p.forEach(l),G=m(n),H=s(n,"AUDIO",{id:!0,preload:!0});var h=t(H);M=s(h,"SOURCE",{src:!0,type:!0}),h.forEach(l),F=m(n),q=s(n,"VIDEO",{id:!0,class:!0,style:!0});var f=t(q);J=s(f,"SOURCE",{src:!0,type:!0}),f.forEach(l),N=m(n),P=s(n,"DIV",{id:!0,class:!0});var E=t(P);for(let e=0;e<fe.length;e+=1)fe[e].l(E);E.forEach(l),n.forEach(l),Q=m(e),W=s(e,"DIV",{class:!0});var U=t(W);X=s(U,"H1",{});var O=t(X);Y=y(O,"Game Rules:"),O.forEach(l),Z=m(U),_=s(U,"OL",{});var C=t(_);ee=s(C,"LI",{});var V=t(ee);ae=y(V,"Choose a card and listen carefully"),V.forEach(l),oe=m(C),re=s(C,"LI",{});var L=t(re);ce=y(L,"Find the matching sound card"),L.forEach(l),C.forEach(l),se=m(U),te=s(U,"H1",{});var T=t(te);le=y(T,"Reglas del juego:"),T.forEach(l),me=m(U),ne=s(U,"OL",{});var z=t(ne);de=s(z,"LI",{});var K=t(de);ie=y(K,"Elige una carta y escucha cuidadosamente"),K.forEach(l),ue=m(z),ge=s(z,"LI",{});var he=t(ge);ye=y(he,"Encuentra la carta con el mismo sonido"),he.forEach(l),z.forEach(l),U.forEach(l),this.h()},h(){n(o,"class","text-center"),n(a,"class","container"),D.src!==(C="game/memory-1-right.mp3")&&n(D,"src","game/memory-1-right.mp3"),n(D,"type","audio/mpeg"),n(B,"id","right"),n(B,"preload","auto"),w.src!==(V="game/memory-1-wrong.mp3")&&n(w,"src","game/memory-1-wrong.mp3"),n(w,"type","audio/mpeg"),n(j,"id","wrong"),n(j,"preload","auto"),A.src!==(L="game/memory-1-cat.mp3")&&n(A,"src","game/memory-1-cat.mp3"),n(A,"type","audio/mpeg"),n(b,"id","cat"),n(b,"preload","auto"),k.src!==(T="game/memory-1-mouse.mp3")&&n(k,"src","game/memory-1-mouse.mp3"),n(k,"type","audio/mpeg"),n(x,"id","mouse"),n(x,"preload","auto"),M.src!==(z="game/memory-1-lion.mp3")&&n(M,"src","game/memory-1-lion.mp3"),n(M,"type","audio/mpeg"),n(H,"id","lion"),n(H,"preload","auto"),J.src!==(K="game/corazones.mp4")&&n(J,"src","game/corazones.mp4"),n(J,"type","video/mp4"),n(q,"id","myVideo"),n(q,"class","container"),p(q,"display","none"),n(P,"id","myCards"),n(P,"class","row row-cols-3"),n(I,"class","container"),n(W,"class","container")},m(e,r){d(e,a,r),i(a,o),i(o,u),d(e,v,r),d(e,I,r),i(I,B),i(B,D),i(I,R),i(I,j),i(j,w),i(I,$),i(I,b),i(b,A),i(I,S),i(I,x),i(x,k),i(I,G),i(I,H),i(H,M),i(I,F),i(I,q),i(q,J),i(I,N),i(I,P);for(let e=0;e<fe.length;e+=1)fe[e].m(P,null);d(e,Q,r),d(e,W,r),i(W,X),i(X,Y),i(W,Z),i(W,_),i(_,ee),i(ee,ae),i(_,oe),i(_,re),i(re,ce),i(W,se),i(W,te),i(te,le),i(W,me),i(W,ne),i(ne,de),i(de,ie),i(ne,ue),i(ne,ge),i(ge,ye)},p(e,[a]){if(2&a&&pe!==(pe=e[1]("nav.game.memory-2")+"")&&h(u,pe),5&a){let o;for(he=e[0],o=0;o<he.length;o+=1){const r=U(e,he,o);fe[o]?fe[o].p(r,a):(fe[o]=O(r),fe[o].c(),fe[o].m(P,null))}for(;o<fe.length;o+=1)fe[o].d(1);fe.length=he.length}},i:f,o:f,d(e){e&&l(a),e&&l(v),e&&l(I),E(fe,e),e&&l(Q),e&&l(W)}}}let D="game/memory-1-box.jpg",C="game/memory-2-box.jpg",R="game/memory-2-empty.jpg";function j(e,a,o){let r;v(e,I,e=>o(1,r=e));let c=[{id:"cat",imgUrl:"game/memory-1-cat.jpg"},{id:"lion",imgUrl:"game/memory-1-lion.jpg"},{id:"mouse",imgUrl:"game/memory-1-mouse.jpg"}];c=(c=c.concat(c)).map(e=>({sort:Math.random(),value:e})).sort((e,a)=>e.sort-a.sort).map(e=>e.value);let s=3,t=null,l=!1;function m(e){l=!0,setTimeout(async()=>{l=!1,console.log("checkIfRight"),c[e].id===c[t].id?(document.getElementById("right").play(),s-=1,console.log("left:",s),l=!0,setTimeout(async()=>{l=!1,document.getElementById(`card-${e}`).src=R,document.getElementById(`card-${t}`).src=R,t=null,s<=0&&function(){l=!0;let e=document.getElementById("myVideo"),a=document.getElementById("myCards");e.addEventListener("ended",function(r){e.style.display="none",a.style.display="",l=!1,console.log("startAgain"),[...Array(6).keys()].forEach(e=>{document.getElementById(`card-${e}`).src=D}),s=3,t=null,o(0,c=c.map(e=>({sort:Math.random(),value:e})).sort((e,a)=>e.sort-a.sort).map(e=>e.value))},!1),e.style.display="",a.style.display="none",e.autoplay=!0,e.load()}()},2e3)):(l=!0,setTimeout(async()=>{l=!1,document.getElementById(`card-${e}`).src=D,document.getElementById(`card-${t}`).src=D,t=null},2e3),document.getElementById("wrong").play())},1e3)}function n(e){if(console.log(e),l)return;const a=document.getElementById(`card-${e}`);a.src.includes(D)&&(a.src=C,document.getElementById(c[e].id).play(),function(e){l=!0,setTimeout(async()=>{l=!1,console.log("showCards"),null!==t?(document.getElementById(`card-${e}`).src=c[e].imgUrl,document.getElementById(`card-${t}`).src=c[t].imgUrl,m(e)):t=e},2e3)}(e))}return[c,r,n,e=>n(e)]}export default class extends e{constructor(e){super(),a(this,e,j,B,o,{})}}
