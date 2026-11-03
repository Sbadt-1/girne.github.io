const CACHE_NAME = "acil-durum-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./login.html",
  "./kayit.html",
  "./hosgeldin.html",
  "./hakkimizda.html",
  "./qrcode.min.js",
  "./manifest.json",
  "./icon-192.svg",
  "./icon-512.svg"
];

// Yükleme sırasında dosyaları önbelleğe al
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// İstekleri önbellekten karşıl, yoksa internetten getir
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
