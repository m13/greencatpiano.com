import{s,S as a,i as t,a as e,e as r,b as c,t as o,c as i,d as l,f as d,g as h,h as n,j as f,k as u,l as v,m,n as g,o as p,p as E,r as b}from"./client.0b66e212.js";function y(s,a,t){const e=s.slice();return e[2]=a[t],e}function V(s){let a,t,e,g,p,E,b,y,V,I,j,D,w,$,x,A,L,M,S=s[1](`${s[2].id}.title`)+"",_=s[1]("video.updated")+"",k=s[2].date+"";return{c(){a=r("div"),t=r("div"),e=r("a"),g=r("img"),y=c(),V=r("div"),I=r("h5"),j=o(S),D=c(),w=r("div"),$=r("small"),x=o(_),A=c(),L=o(k),M=c(),this.h()},l(s){a=i(s,"DIV",{class:!0});var r=l(a);t=i(r,"DIV",{class:!0});var c=l(t);e=i(c,"A",{href:!0});var o=l(e);g=i(o,"IMG",{src:!0,class:!0,alt:!0}),o.forEach(d),y=h(c),V=i(c,"DIV",{class:!0});var f=l(V);I=i(f,"H5",{class:!0});var u=l(I);j=n(u,S),u.forEach(d),f.forEach(d),D=h(c),w=i(c,"DIV",{class:!0});var v=l(w);$=i(v,"SMALL",{class:!0});var m=l($);x=n(m,_),A=h(m),L=n(m,k),m.forEach(d),v.forEach(d),c.forEach(d),M=h(r),r.forEach(d),this.h()},h(){g.src!==(p="https://img.youtube.com/vi/"+s[2].youtube_id+"/0.jpg")&&f(g,"src",p),f(g,"class","card-img-top"),f(g,"alt",E="Video: "+s[1](`${s[2].id}.title`)),f(e,"href",b="/video/"+s[2].id),f(I,"class","card-title"),f(V,"class","card-body"),f($,"class","text-muted"),f(w,"class","card-footer"),f(t,"class","card h-100"),f(a,"class","col mb-4")},m(s,r){u(s,a,r),v(a,t),v(t,e),v(e,g),v(t,y),v(t,V),v(V,I),v(I,j),v(t,D),v(t,w),v(w,$),v($,x),v($,A),v($,L),v(a,M)},p(s,a){1&a&&g.src!==(p="https://img.youtube.com/vi/"+s[2].youtube_id+"/0.jpg")&&f(g,"src",p),3&a&&E!==(E="Video: "+s[1](`${s[2].id}.title`))&&f(g,"alt",E),1&a&&b!==(b="/video/"+s[2].id)&&f(e,"href",b),3&a&&S!==(S=s[1](`${s[2].id}.title`)+"")&&m(j,S),2&a&&_!==(_=s[1]("video.updated")+"")&&m(x,_),1&a&&k!==(k=s[2].date+"")&&m(L,k)},d(s){s&&d(a)}}}function I(s){let a,t,e=s[0],c=[];for(let a=0;a<e.length;a+=1)c[a]=V(y(s,e,a));return{c(){a=r("div"),t=r("div");for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){a=i(s,"DIV",{class:!0});var e=l(a);t=i(e,"DIV",{class:!0});var r=l(t);for(let s=0;s<c.length;s+=1)c[s].l(r);r.forEach(d),e.forEach(d),this.h()},h(){f(t,"class","row row-cols-1 row-cols-md-3"),f(a,"class","container")},m(s,e){u(s,a,e),v(a,t);for(let s=0;s<c.length;s+=1)c[s].m(t,null)},p(s,[a]){if(3&a){let r;for(e=s[0],r=0;r<e.length;r+=1){const o=y(s,e,r);c[r]?c[r].p(o,a):(c[r]=V(o),c[r].c(),c[r].m(t,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=e.length}},i:g,o:g,d(s){s&&d(a),p(c,s)}}}async function j({params:a,query:t}){const e=await this.fetch("video.json");let r=await e.json();if(r.forEach(a=>{["en","es"].forEach(t=>s(t,{[a.id]:a[t]}))}),r=r.filter(s=>s.category===a.id),200===e.status)return{videos:r};this.error(e.status,data.message)}function D(a,t,e){let r;E(a,b,s=>e(1,r=s));let{videos:c}=t;return c.forEach(a=>{["en","es"].forEach(t=>s(t,{[a.id]:a[t]}))}),a.$set=(s=>{"videos"in s&&e(0,c=s.videos)}),[c,r]}export default class extends a{constructor(s){super(),t(this,s,D,I,e,{videos:0})}}export{j as preload};
