self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("Bud_Tracker-cache").then(function(cache){
      return cache.addAll(["index.html"])
    })
  );
});