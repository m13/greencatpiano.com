!function(){"use strict";const e=["client/client.a4df8151.js","client/about.1c3090b0.js","client/index.0818bbdc.js","client/[id].9db8ae72.js","client/memory-1.94a8743e.js","client/memory-2.22307cc9.js","client/client.bc4b3bea.js"].concat(["service-worker-index.html",".DS_Store","favicon.png","game/.DS_Store","game/corazones.mp4","game/memory-1-box.jpg","game/memory-1-cat.jpg","game/memory-1-cat.mp3","game/memory-1-lion.jpg","game/memory-1-lion.mp3","game/memory-1-mouse.jpg","game/memory-1-mouse.mp3","game/memory-1-right.mp3","game/memory-1-wrong.mp3","game/memory-2-box.jpg","game/memory-2-empty.jpg","game/no.png","game/play-again.png","game/yes.png","global.css","img/.DS_Store","img/cursor.png","img/friends.gif","img/gato-logo-square.jpg","img/gato-logo-square.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1594916434545").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1594916434545"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const a=new URL(e.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&t.has(a.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1594916434545").then(async t=>{try{const a=await fetch(e.request);return t.put(e.request,a.clone()),a}catch(a){const o=await t.match(e.request);if(o)return o;throw a}}))))})}();
