import{S as e,i as t,a as s,b as a,e as i,t as o,q as r,f as d,g as c,c as n,d as l,h as u,j as f,k as h,l as m,m as v,n as p,p as b,X as $,r as w,s as g,u as y,v as E,w as x,x as I,y as B,z as D,A as V}from"./client.75059ce9.js";const{document:j}=y;function F(e){let t,s,b,$,w,g,y,E,x,I,B,D,V,F,M,L,R,k,q,A,C,G,H=e[1]("video.updated")+"",P=e[0].date+"",T=e[1](`${e[0].id}.body`)+"";return j.title=t="Green Cat Piano: "+e[1](`${e[0].id}.title`),{c(){s=a(),b=i("br"),$=a(),w=i("div"),g=i("div"),y=i("iframe"),I=a(),B=i("div"),D=o(H),V=a(),F=o(P),M=a(),L=i("div"),R=a(),k=i("div"),q=i("div"),C=a(),G=i("br"),this.h()},l(e){r('[data-svelte="svelte-1wbko3x"]',j.head).forEach(d),s=c(e),b=n(e,"BR",{}),$=c(e),w=n(e,"DIV",{class:!0});var t=l(w);g=n(t,"DIV",{class:!0});var a=l(g);y=n(a,"IFRAME",{class:!0,src:!0,title:!0,allowfullscreen:!0}),l(y).forEach(d),a.forEach(d),I=c(t),B=n(t,"DIV",{class:!0});var i=l(B);D=u(i,H),V=c(i),F=u(i,P),i.forEach(d),M=c(t),L=n(t,"DIV",{class:!0}),l(L).forEach(d),t.forEach(d),R=c(e),k=n(e,"DIV",{class:!0});var o=l(k);q=n(o,"DIV",{class:!0,"data-href":!0,"data-numposts":!0,"data-width":!0}),l(q).forEach(d),o.forEach(d),C=c(e),G=n(e,"BR",{}),this.h()},h(){f(y,"class","embed-responsive-item"),y.src!==(E="https://www.youtube.com/embed/"+e[0].youtube_id+"?rel=0")&&f(y,"src",E),f(y,"title",x=e[1](`${e[0].id}.title`)),y.allowFullscreen=!0,f(g,"class","embed-responsive embed-responsive-16by9"),f(B,"class","text-right text-muted"),f(L,"class","p-3 text-justify"),f(w,"class","container gaegu"),f(q,"class","fb-comments"),f(q,"data-href",A="https://greencatpiano.com/video/"+e[0].id),f(q,"data-numposts","5"),f(q,"data-width","100%"),f(k,"class","container border border-success")},m(e,t){h(e,s,t),h(e,b,t),h(e,$,t),h(e,w,t),m(w,g),m(g,y),m(w,I),m(w,B),m(B,D),m(B,V),m(B,F),m(w,M),m(w,L),L.innerHTML=T,h(e,R,t),h(e,k,t),m(k,q),h(e,C,t),h(e,G,t)},p(e,[s]){3&s&&t!==(t="Green Cat Piano: "+e[1](`${e[0].id}.title`))&&(j.title=t),1&s&&y.src!==(E="https://www.youtube.com/embed/"+e[0].youtube_id+"?rel=0")&&f(y,"src",E),3&s&&x!==(x=e[1](`${e[0].id}.title`))&&f(y,"title",x),2&s&&H!==(H=e[1]("video.updated")+"")&&v(D,H),1&s&&P!==(P=e[0].date+"")&&v(F,P),3&s&&T!==(T=e[1](`${e[0].id}.body`)+"")&&(L.innerHTML=T),1&s&&A!==(A="https://greencatpiano.com/video/"+e[0].id)&&f(q,"data-href",A)},i:p,o:p,d(e){e&&d(s),e&&d(b),e&&d($),e&&d(w),e&&d(R),e&&d(k),e&&d(C),e&&d(G)}}}function M(e,t,s){let a;b(e,$,e=>s(1,a=e));let{video:i}=t;return w(()=>{"FB"in window&&FB.XFBML.parse(document.getElementById("fb-comments"))}),["en","es"].forEach(e=>g(e,{[i.id]:i[e]})),e.$set=(e=>{"video"in e&&s(0,i=e.video)}),[i,a]}class L extends e{constructor(e){super(),t(this,e,M,F,s,{video:0})}}function R(e){let t;const s=new L({props:{video:e[0]}});return{c(){E(s.$$.fragment)},l(e){x(s.$$.fragment,e)},m(e,a){I(s,e,a),t=!0},p(e,[t]){const a={};1&t&&(a.video=e[0]),s.$set(a)},i(e){t||(B(s.$$.fragment,e),t=!0)},o(e){D(s.$$.fragment,e),t=!1},d(e){V(s,e)}}}async function k({params:e,query:t}){const s=await this.fetch(`video/${e.id}.json`),a=await s.json();if(["en","es"].forEach(e=>g(e,{[a.id]:a[e]})),200===s.status)return{video:a};this.error(s.status,data.message)}function q(e,t,s){let{video:a}=t;return e.$set=(e=>{"video"in e&&s(0,a=e.video)}),[a]}export default class extends e{constructor(e){super(),t(this,e,q,R,s,{video:0})}}export{k as preload};