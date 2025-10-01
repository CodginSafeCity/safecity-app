const CACHE_NAME = "nextjs-pwa-cache-v1";
const URLS_TO_CACHE = ["/", "/favicon.ico", "/manifest.json"];

// Instalación y cacheo inicial
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Activación (limpiar caches viejos si es necesario)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        )
      )
  );
});

// Intercepción de requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si hay respuesta en caché, úsala, sino ve a la red
      return response || fetch(event.request);
    })
  );
});
