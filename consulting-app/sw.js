self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install Event');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate Event');
});

self.addEventListener('fetch', (event) => {
  // Strategy: Network first, fallback to cache if needed (minimal implementation)
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
