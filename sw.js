const CACHE='wc2026-v1';
const ASSETS=['./','./index.html','https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js','https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
