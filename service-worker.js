const CACHE="cp-pro-github-v1";
const ASSETS=["./","./index.html","./app.js","./firebase-config.js","./manifest.json"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(u.hostname.includes("query1.finance.yahoo.com")||u.hostname.includes("tcbs.com.vn")||u.hostname.includes("allorigins.win"))return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)))});
