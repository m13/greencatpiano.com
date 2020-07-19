import{S as e,i as a,a as o,e as r,b as c,c as s,d as t,f as l,g as n,j as m,k as d,l as i,C as u,t as g,h as y,D as p,m as h,n as f,o as E,p as v,r as I}from"./client.995c414c.js";function U(e,a,o){const r=e.slice();return r[10]=a[o],r[12]=o,r}function O(e){let a,o,g,y,p,h,f,E,v;function I(...a){return e[3](e[12],...a)}return{c(){a=r("div"),o=r("div"),g=r("img"),f=c(),this.h()},l(e){a=s(e,"DIV",{class:!0});var r=t(a);o=s(r,"DIV",{class:!0});var c=t(o);g=s(c,"IMG",{id:!0,class:!0,src:!0,alt:!0}),c.forEach(l),f=n(r),r.forEach(l),this.h()},h(){m(g,"id",y="card-"+e[12]),m(g,"class","w-100"),g.src!==(p=D)&&m(g,"src",p),m(g,"alt",h=e[10].id),m(o,"class","h-100 w-100"),m(a,"class","col mb-4")},m(e,r){d(e,a,r),i(a,o),i(o,g),i(a,f),E||(v=u(g,"click",I),E=!0)},p(a,o){e=a,1&o&&h!==(h=e[10].id)&&m(g,"alt",h)},d(e){e&&l(a),E=!1,v()}}}function B(e){let a,o,u,v,I,B,D,C,R,j,w,V,$,A,S,L,x,b,k,G,H,M,z,F,T,q,J,K,N,P,Q,W,X,Y,Z,_,ee,ae,oe,re,ce,se,te,le,ne,me,de,ie,ue,ge,ye,pe=e[1]("nav.game.memory-2")+"",he=e[0],fe=[];for(let a=0;a<he.length;a+=1)fe[a]=O(U(e,he,a));return{c(){a=r("div"),o=r("h1"),u=g(pe),v=c(),I=r("div"),B=r("audio"),D=r("source"),R=c(),j=r("audio"),w=r("source"),$=c(),A=r("audio"),S=r("source"),x=c(),b=r("audio"),k=r("source"),H=c(),M=r("audio"),z=r("source"),T=c(),q=r("video"),J=r("source"),N=c(),P=r("div");for(let e=0;e<fe.length;e+=1)fe[e].c();Q=c(),W=r("div"),X=r("h1"),Y=g("Game Rules:"),Z=c(),_=r("ol"),ee=r("li"),ae=g("Choose a card and listen carefully"),oe=c(),re=r("li"),ce=g("Find the matching sound card"),se=c(),te=r("h1"),le=g("Reglas del juego:"),ne=c(),me=r("ol"),de=r("li"),ie=g("Elige una carta y escucha cuidadosamente"),ue=c(),ge=r("li"),ye=g("Encuentra la carta con el mismo sonido"),this.h()},l(e){a=s(e,"DIV",{class:!0});var r=t(a);o=s(r,"H1",{class:!0});var c=t(o);u=y(c,pe),c.forEach(l),r.forEach(l),v=n(e),I=s(e,"DIV",{class:!0});var m=t(I);B=s(m,"AUDIO",{id:!0,preload:!0});var d=t(B);D=s(d,"SOURCE",{src:!0,type:!0}),d.forEach(l),R=n(m),j=s(m,"AUDIO",{id:!0,preload:!0});var i=t(j);w=s(i,"SOURCE",{src:!0,type:!0}),i.forEach(l),$=n(m),A=s(m,"AUDIO",{id:!0,preload:!0});var g=t(A);S=s(g,"SOURCE",{src:!0,type:!0}),g.forEach(l),x=n(m),b=s(m,"AUDIO",{id:!0,preload:!0});var p=t(b);k=s(p,"SOURCE",{src:!0,type:!0}),p.forEach(l),H=n(m),M=s(m,"AUDIO",{id:!0,preload:!0});var h=t(M);z=s(h,"SOURCE",{src:!0,type:!0}),h.forEach(l),T=n(m),q=s(m,"VIDEO",{id:!0,class:!0,style:!0});var f=t(q);J=s(f,"SOURCE",{src:!0,type:!0}),f.forEach(l),N=n(m),P=s(m,"DIV",{id:!0,class:!0});var E=t(P);for(let e=0;e<fe.length;e+=1)fe[e].l(E);E.forEach(l),m.forEach(l),Q=n(e),W=s(e,"DIV",{class:!0});var U=t(W);X=s(U,"H1",{});var O=t(X);Y=y(O,"Game Rules:"),O.forEach(l),Z=n(U),_=s(U,"OL",{});var C=t(_);ee=s(C,"LI",{});var V=t(ee);ae=y(V,"Choose a card and listen carefully"),V.forEach(l),oe=n(C),re=s(C,"LI",{});var L=t(re);ce=y(L,"Find the matching sound card"),L.forEach(l),C.forEach(l),se=n(U),te=s(U,"H1",{});var G=t(te);le=y(G,"Reglas del juego:"),G.forEach(l),ne=n(U),me=s(U,"OL",{});var F=t(me);de=s(F,"LI",{});var K=t(de);ie=y(K,"Elige una carta y escucha cuidadosamente"),K.forEach(l),ue=n(F),ge=s(F,"LI",{});var he=t(ge);ye=y(he,"Encuentra la carta con el mismo sonido"),he.forEach(l),F.forEach(l),U.forEach(l),this.h()},h(){m(o,"class","text-center"),m(a,"class","container"),D.src!==(C="game/memory-1-right.mp3")&&m(D,"src","game/memory-1-right.mp3"),m(D,"type","audio/mpeg"),m(B,"id","right"),m(B,"preload","auto"),w.src!==(V="game/memory-1-wrong.mp3")&&m(w,"src","game/memory-1-wrong.mp3"),m(w,"type","audio/mpeg"),m(j,"id","wrong"),m(j,"preload","auto"),S.src!==(L="game/memory-1-cat.mp3")&&m(S,"src","game/memory-1-cat.mp3"),m(S,"type","audio/mpeg"),m(A,"id","cat"),m(A,"preload","auto"),k.src!==(G="game/memory-1-mouse.mp3")&&m(k,"src","game/memory-1-mouse.mp3"),m(k,"type","audio/mpeg"),m(b,"id","mouse"),m(b,"preload","auto"),z.src!==(F="game/memory-1-lion.mp3")&&m(z,"src","game/memory-1-lion.mp3"),m(z,"type","audio/mpeg"),m(M,"id","lion"),m(M,"preload","auto"),J.src!==(K="game/corazones.mp4")&&m(J,"src","game/corazones.mp4"),m(J,"type","video/mp4"),m(q,"id","myVideo"),m(q,"class","container"),p(q,"display","none"),m(P,"id","myCards"),m(P,"class","row row-cols-3"),m(I,"class","container"),m(W,"class","container")},m(e,r){d(e,a,r),i(a,o),i(o,u),d(e,v,r),d(e,I,r),i(I,B),i(B,D),i(I,R),i(I,j),i(j,w),i(I,$),i(I,A),i(A,S),i(I,x),i(I,b),i(b,k),i(I,H),i(I,M),i(M,z),i(I,T),i(I,q),i(q,J),i(I,N),i(I,P);for(let e=0;e<fe.length;e+=1)fe[e].m(P,null);d(e,Q,r),d(e,W,r),i(W,X),i(X,Y),i(W,Z),i(W,_),i(_,ee),i(ee,ae),i(_,oe),i(_,re),i(re,ce),i(W,se),i(W,te),i(te,le),i(W,ne),i(W,me),i(me,de),i(de,ie),i(me,ue),i(me,ge),i(ge,ye)},p(e,[a]){if(2&a&&pe!==(pe=e[1]("nav.game.memory-2")+"")&&h(u,pe),5&a){let o;for(he=e[0],o=0;o<he.length;o+=1){const r=U(e,he,o);fe[o]?fe[o].p(r,a):(fe[o]=O(r),fe[o].c(),fe[o].m(P,null))}for(;o<fe.length;o+=1)fe[o].d(1);fe.length=he.length}},i:f,o:f,d(e){e&&l(a),e&&l(v),e&&l(I),E(fe,e),e&&l(Q),e&&l(W)}}}let D="game/memory-1-box.jpg",C="game/memory-2-box.jpg",R="game/memory-2-empty.jpg";function j(e,a,o){let r;v(e,I,e=>o(1,r=e));let c=[{id:"cat",imgUrl:"game/memory-1-cat.jpg"},{id:"lion",imgUrl:"game/memory-1-lion.jpg"},{id:"mouse",imgUrl:"game/memory-1-mouse.jpg"}];c=(c=c.concat(c)).map(e=>({sort:Math.random(),value:e})).sort((e,a)=>e.sort-a.sort).map(e=>e.value);let s=3,t=null,l=!1;function n(e){setTimeout(async()=>{if(console.log("checkIfRight"),c[e].id===c[t].id){s-=1,console.log("left:",s);const a=document.getElementById("right");a.onended=(()=>{document.getElementById(`card-${e}`).src=R,document.getElementById(`card-${t}`).src=R,t=null,s<=0&&function(){let e=document.getElementById("myVideo"),a=document.getElementById("myCards");e.onended=(()=>{e.style.display="none",a.style.display="",console.log("startAgain"),[...Array(6).keys()].forEach(e=>{document.getElementById(`card-${e}`).src=D}),s=3,t=null,o(0,c=c.map(e=>({sort:Math.random(),value:e})).sort((e,a)=>e.sort-a.sort).map(e=>e.value))}),e.style.display="",a.style.display="none",e.autoplay=!0,e.load()}(),l=!1}),a.play()}else{const a=document.getElementById("wrong");a.onended=(()=>{document.getElementById(`card-${e}`).src=D,document.getElementById(`card-${t}`).src=D,t=null,l=!1}),a.play()}},1e3)}function m(e){if(console.log(e),l)return;const a=document.getElementById(`card-${e}`);if(!a.src.includes(D))return;l=!0,a.src=C;const o=document.getElementById(c[e].id);o.onended=(()=>{!function(e){console.log("showCards"),null!==t?(document.getElementById(`card-${e}`).src=c[e].imgUrl,document.getElementById(`card-${t}`).src=c[t].imgUrl,n(e)):(t=e,l=!1)}(e)}),o.play()}return[c,r,m,e=>m(e)]}export default class extends e{constructor(e){super(),a(this,e,j,B,o,{})}}
