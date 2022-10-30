let cacheName = "girls-nest";
let filesToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/common-style.css",
  "/css/bootstrap.css",
  "/js/script.js",
  "/images/icon.png",
  "/images/logo.png",
  "/images/Screenshot1.png",
  "/images/Screenshot2.png",
  "/images/Screenshot3.png",
  "/images/Screenshot4.png",
  "/images/unsplash_0cgpyigyIkM.jpg",
  "/images/unsplash_jEEYZsaxbH4.jpg",
  "/images/unsplash_Sn04BHfa2AY.jpg",
  "/images/unsplash_vLZC-lONFg0.jpg",
  "/get-started/index.html",
  "/girls-nest/index.html",
  "/girls-nest/audio.js",
  "/girls-nest/resources/app-style.css",
  "/girls-nest/resources/wom.css",
  "/girls-nest/resources/wom.js",
  "https://kit.fontawesome.com/864d3cb9a1.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
