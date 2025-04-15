
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('receipt-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './hanken.woff2',
        './nimbus.woff2',
        './mynewlogo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
