import{S as e,i as s,s as t,a,e as i,t as d,q as o,d as r,c,b as l,f as n,g as h,h as u,j as m,k as v,l as f,n as b,m as p,X as w,o as E,p as y,r as I}from"./client.c02fe8c5.js";const{document:g}=I;function V(e){let s,t,p,w,E,y,I,V,$,x,B,D,F,M,j,L,R,k,C,G,H,P,T=e[1]("video.updated")+"",_=e[0].date+"",q=e[1](`${e[0].id}.body`)+"";return g.title=s="Green Cat Piano: "+e[1](`${e[0].id}.title`),{c(){t=a(),p=i("br"),w=a(),E=i("div"),y=i("div"),I=i("iframe"),x=a(),B=i("div"),D=d(T),F=a(),M=d(_),j=a(),L=i("div"),R=a(),k=i("div"),C=i("div"),H=a(),P=i("br"),this.h()},l(e){o('[data-svelte="svelte-1wbko3x"]',g.head).forEach(r),t=c(e),p=l(e,"BR",{}),w=c(e),E=l(e,"DIV",{class:!0});var s=n(E);y=l(s,"DIV",{class:!0});var a=n(y);I=l(a,"IFRAME",{class:!0,src:!0,title:!0,allowfullscreen:!0}),n(I).forEach(r),a.forEach(r),x=c(s),B=l(s,"DIV",{class:!0});var i=n(B);D=h(i,T),F=c(i),M=h(i,_),i.forEach(r),j=c(s),L=l(s,"DIV",{class:!0}),n(L).forEach(r),s.forEach(r),R=c(e),k=l(e,"DIV",{class:!0});var d=n(k);C=l(d,"DIV",{class:!0,"data-href":!0,"data-numposts":!0,"data-width":!0}),n(C).forEach(r),d.forEach(r),H=c(e),P=l(e,"BR",{}),this.h()},h(){u(I,"class","embed-responsive-item"),I.src!==(V="https://www.youtube.com/embed/"+e[0].youtube_id+"?rel=0")&&u(I,"src",V),u(I,"title",$=e[1](`${e[0].id}.title`)),I.allowFullscreen=!0,u(y,"class","embed-responsive embed-responsive-16by9"),u(B,"class","text-right text-muted"),u(L,"class","p-3 text-justify"),u(E,"class","container gaegu"),u(C,"class","fb-comments"),u(C,"data-href",G="https://greencatpiano.com/video/"+e[0].id),u(C,"data-numposts","5"),u(C,"data-width","100%"),u(k,"class","container border border-success")},m(e,s){m(e,t,s),m(e,p,s),m(e,w,s),m(e,E,s),v(E,y),v(y,I),v(E,x),v(E,B),v(B,D),v(B,F),v(B,M),v(E,j),v(E,L),L.innerHTML=q,m(e,R,s),m(e,k,s),v(k,C),m(e,H,s),m(e,P,s)},p(e,[t]){3&t&&s!==(s="Green Cat Piano: "+e[1](`${e[0].id}.title`))&&(g.title=s),1&t&&I.src!==(V="https://www.youtube.com/embed/"+e[0].youtube_id+"?rel=0")&&u(I,"src",V),3&t&&$!==($=e[1](`${e[0].id}.title`))&&u(I,"title",$),2&t&&T!==(T=e[1]("video.updated")+"")&&f(D,T),1&t&&_!==(_=e[0].date+"")&&f(M,_),3&t&&q!==(q=e[1](`${e[0].id}.body`)+"")&&(L.innerHTML=q),1&t&&G!==(G="https://greencatpiano.com/video/"+e[0].id)&&u(C,"data-href",G)},i:b,o:b,d(e){e&&r(t),e&&r(p),e&&r(w),e&&r(E),e&&r(R),e&&r(k),e&&r(H),e&&r(P)}}}function $(e,s,t){let a;p(e,w,e=>t(1,a=e));let{video:i}=s;return E(()=>{"FB"in window&&FB.XFBML.parse(document.getElementById("fb-comments"))}),["en","es"].forEach(e=>y(e,{[i.id]:i[e]})),e.$set=(e=>{"video"in e&&t(0,i=e.video)}),[i,a]}class x extends e{constructor(e){super(),s(this,e,$,V,t,{video:0})}}export{x as V};