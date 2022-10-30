const cacheName = 'girls-nest';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName));
});

self.addEventListener('fetch', async (event) => {
  if ((event.request.destination === 'images' || event.request.url.includes("/images/")) && event.request.url.includes("https://Tech-Girl1.github.io/")) {
    event.respondWith(caches.open(cacheName).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request.url).then((fetchedResponse) => {
          cache.put(event.request, fetchedResponse.clone());
          return fetchedResponse;
        });
      });
    }));
  } else {
    return;
  }
});