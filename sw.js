const appVersion = "v1";

self.addEventListener("install", () => {
  console.log("Installing SW");
});

self.addEventListener("activate", () => {
  console.log("Activating SW");
});

self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const resClone = res.clone();

        caches.open(appVersion).then(cache => {
          cache.put(e.request, resClone);
        });

        return res;
      })
      .catch(err => caches.match(e.request).then(res => res))
  );
});
