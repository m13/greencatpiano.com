import{S as e,i as s,a as t,b as a,e as i,t as o,r,f as d,g as n,c,d as l,h as u,j as f,k as h,l as m,m as v,n as p,p as b,q as $,u as w,s as g,v as y,w as E,x,y as I,z as B,A as D,B as V}from"./client.5287bf71.js";const{document:j}=y;function F(e){let s,t,b,$,w,g,y,E,x,I,B,D,V,F,M,L,R,k,q,A,C,G,H=e[1]("video.updated")+"",P=e[0].date+"",T=e[1](`${e[0].id}.body`)+"";return j.title=s="Green Cat Piano: "+e[1](`${e[0].id}.title`),{c(){t=a(),b=i("br"),$=a(),w=i("div"),g=i("div"),y=i("iframe"),I=a(),B=i("div"),D=o(H),V=a(),F=o(P),M=a(),L=i("div"),R=a(),k=i("div"),q=i("div"),C=a(),G=i("br"),this.h()},l(e){r('[data-svelte="svelte-1wbko3x"]',j.head).forEach(d),t=n(e),b=c(e,"BR",{}),$=n(e),w=c(e,"DIV",{class:!0});var s=l(w);g=c(s,"DIV",{class:!0});var a=l(g);y=c(a,"IFRAME",{class:!0,src:!0,title:!0,allowfullscreen:!0}),l(y).forEach(d),a.forEach(d),I=n(s),B=c(s,"DIV",{class:!0});var i=l(B);D=u(i,H),V=n(i),F=u(i,P),i.forEach(d),M=n(s),L=c(s,"DIV",{class:!0}),l(L).forEach(d),s.forEach(d),R=n(e),k=c(e,"DIV",{class:!0});var o=l(k);q=c(o,"DIV",{class:!0,"data-href":!0,"data-numposts":!0,"data-width":!0}),l(q).forEach(d),o.forEach(d),C=n(e),G=c(e,"BR",{}),this.h()},h(){f(y,"class","embed-responsive-item"),y.src!==(E="https://www.youtube.com/embed/"+e[0].youtube_id+"?rel=0")&&f(y,"src",E),f(y,"title",x=e[1](`${e[0].id}.title`)),y.allowFullscreen=!0,f(g,"class","embed-responsive embed-responsive-16by9"),f(B,"class","text-right text-muted"),f(L,"class","p-3 text-justify"),f(w,"class","container gaegu"),f(q,"class","fb-comments"),f(q,"data-href",A="https://greencatpiano.com/video/"+e[0].id),f(q,"data-numposts","5"),f(q,"data-width","100%"),f(k,"class","container border border-success")},m(e,s){h(e,t,s),h(e,b,s),h(e,$,s),h(e,w,s),m(w,g),m(g,y),m(w,I),m(w,B),m(B,D),m(B,V),m(B,F),m(w,M),m(w,L),L.innerHTML=T,h(e,R,s),h(e,k,s),m(k,q),h(e,C,s),h(e,G,s)},p(e,[t]){3&t&&s!==(s="Green Cat Piano: "+e[1](`${e[0].id}.title`))&&(j.title=s),1&t&&y.src!==(E="https://www.youtube.com/embed/"+e[0].youtube_id+"?rel=0")&&f(y,"src",E),3&t&&x!==(x=e[1](`${e[0].id}.title`))&&f(y,"title",x),2&t&&H!==(H=e[1]("video.updated")+"")&&v(D,H),1&t&&P!==(P=e[0].date+"")&&v(F,P),3&t&&T!==(T=e[1](`${e[0].id}.body`)+"")&&(L.innerHTML=T),1&t&&A!==(A="https://greencatpiano.com/video/"+e[0].id)&&f(q,"data-href",A)},i:p,o:p,d(e){e&&d(t),e&&d(b),e&&d($),e&&d(w),e&&d(R),e&&d(k),e&&d(C),e&&d(G)}}}function M(e,s,t){let a;b(e,$,e=>t(1,a=e));let{video:i}=s;return w(()=>{"FB"in window&&FB.XFBML.parse(document.getElementById("fb-comments"))}),["en","es"].forEach(e=>g(e,{[i.id]:i[e]})),e.$set=(e=>{"video"in e&&t(0,i=e.video)}),[i,a]}class L extends e{constructor(e){super(),s(this,e,M,F,t,{video:0})}}function R(e){let s,t;return s=new L({props:{video:e[0]}}),{c(){E(s.$$.fragment)},l(e){x(s.$$.fragment,e)},m(e,a){I(s,e,a),t=!0},p(e,[t]){const a={};1&t&&(a.video=e[0]),s.$set(a)},i(e){t||(B(s.$$.fragment,e),t=!0)},o(e){D(s.$$.fragment,e),t=!1},d(e){V(s,e)}}}async function k({params:e,query:s}){const t=await this.fetch(`video/${e.id}.json`),a=await t.json();if(["en","es"].forEach(e=>g(e,{[a.id]:a[e]})),200===t.status)return{video:a};this.error(t.status,data.message)}function q(e,s,t){let{video:a}=s;return e.$set=(e=>{"video"in e&&t(0,a=e.video)}),[a]}export default class extends e{constructor(e){super(),s(this,e,q,R,t,{video:0})}}export{k as preload};
