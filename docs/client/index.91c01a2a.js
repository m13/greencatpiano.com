import{s,S as t,i as a,a as e,e as r,b as c,t as o,c as i,d as l,f as d,g as h,h as n,j as f,k as u,l as v,m,n as p,o as g,p as E,q as b,r as I}from"./client.c157217d.js";function V(s,t,a){const e=s.slice();return e[2]=t[a],e}function w(s){let t,a,e,p,g,E,b,I,V,w,D,j,y,$,x,S,q,A,H=s[1](`${s[2].id}.title`)+"",L=s[1]("video.updated")+"",M=s[2].date+"";return{c(){t=r("div"),a=r("div"),e=r("a"),p=r("img"),I=c(),V=r("div"),w=r("h5"),D=o(H),j=c(),y=r("div"),$=r("small"),x=o(L),S=c(),q=o(M),A=c(),this.h()},l(s){t=i(s,"DIV",{class:!0});var r=l(t);a=i(r,"DIV",{class:!0});var c=l(a);e=i(c,"A",{href:!0});var o=l(e);p=i(o,"IMG",{src:!0,class:!0,alt:!0}),o.forEach(d),I=h(c),V=i(c,"DIV",{class:!0});var f=l(V);w=i(f,"H5",{class:!0});var u=l(w);D=n(u,H),u.forEach(d),f.forEach(d),j=h(c),y=i(c,"DIV",{class:!0});var v=l(y);$=i(v,"SMALL",{class:!0});var m=l($);x=n(m,L),S=h(m),q=n(m,M),m.forEach(d),v.forEach(d),c.forEach(d),A=h(r),r.forEach(d),this.h()},h(){p.src!==(g="https://img.youtube.com/vi/"+s[2].youtube_id+"/0.jpg")&&f(p,"src",g),f(p,"class","card-img-top"),f(p,"alt",E="Video: "+s[1](`${s[2].id}.title`)),f(e,"href",b="/video/"+s[2].id),f(w,"class","card-title"),f(V,"class","card-body"),f($,"class","text-muted"),f(y,"class","card-footer"),f(a,"class","card h-100"),f(t,"class","col mb-4")},m(s,r){u(s,t,r),v(t,a),v(a,e),v(e,p),v(a,I),v(a,V),v(V,w),v(w,D),v(a,j),v(a,y),v(y,$),v($,x),v($,S),v($,q),v(t,A)},p(s,t){1&t&&p.src!==(g="https://img.youtube.com/vi/"+s[2].youtube_id+"/0.jpg")&&f(p,"src",g),3&t&&E!==(E="Video: "+s[1](`${s[2].id}.title`))&&f(p,"alt",E),1&t&&b!==(b="/video/"+s[2].id)&&f(e,"href",b),3&t&&H!==(H=s[1](`${s[2].id}.title`)+"")&&m(D,H),2&t&&L!==(L=s[1]("video.updated")+"")&&m(x,L),1&t&&M!==(M=s[2].date+"")&&m(q,M)},d(s){s&&d(t)}}}function D(s){let t,a,e,m,E,b,I,D,j=s[0],y=[];for(let t=0;t<j.length;t+=1)y[t]=w(V(s,j,t));return{c(){t=r("div"),a=r("div");for(let s=0;s<y.length;s+=1)y[s].c();e=c(),m=r("div"),E=r("h1"),b=o("Subscribe to the newsletter"),I=c(),D=r("div"),this.h()},l(s){t=i(s,"DIV",{class:!0});var r=l(t);a=i(r,"DIV",{class:!0});var c=l(a);for(let s=0;s<y.length;s+=1)y[s].l(c);c.forEach(d),r.forEach(d),e=h(s),m=i(s,"DIV",{class:!0});var o=l(m);E=i(o,"H1",{});var f=l(E);b=n(f,"Subscribe to the newsletter"),f.forEach(d),I=h(o),D=i(o,"DIV",{id:!0}),l(D).forEach(d),o.forEach(d),this.h()},h(){f(a,"class","row row-cols-1 row-cols-md-3"),f(t,"class","container"),f(D,"id","newsletter"),f(m,"class","container jumbotron")},m(s,r){u(s,t,r),v(t,a);for(let s=0;s<y.length;s+=1)y[s].m(a,null);u(s,e,r),u(s,m,r),v(m,E),v(E,b),v(m,I),v(m,D)},p(s,[t]){if(3&t){let e;for(j=s[0],e=0;e<j.length;e+=1){const r=V(s,j,e);y[e]?y[e].p(r,t):(y[e]=w(r),y[e].c(),y[e].m(a,null))}for(;e<y.length;e+=1)y[e].d(1);y.length=j.length}},i:p,o:p,d(s){s&&d(t),g(y,s),s&&d(e),s&&d(m)}}}async function j({params:t,query:a}){const e=await this.fetch("video.json");let r=await e.json();if(r.forEach(t=>{["en","es"].forEach(a=>s(a,{[t.id]:t[a]}))}),200===e.status)return{videos:r};this.error(e.status,data.message)}function y(t,a,e){let r;E(t,I,s=>e(1,r=s));let{videos:c}=a;return c.forEach(t=>{["en","es"].forEach(a=>s(a,{[t.id]:t[a]}))}),b(()=>{hbspt.forms.create({portalId:"7952284",formId:"589e3cf6-edbf-492c-a698-61628dd79aa2",target:"#newsletter"})}),t.$set=(s=>{"videos"in s&&e(0,c=s.videos)}),[c,r]}export default class extends t{constructor(s){super(),a(this,s,y,D,e,{videos:0})}}export{j as preload};
