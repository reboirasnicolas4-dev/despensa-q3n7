// Service worker: permite instalar la app. No guarda nada en caché,
// así el stock siempre viene en vivo desde la hoja Base_Despensa.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method === "GET" && u.origin === location.origin) e.respondWith(fetch(e.request));
});
