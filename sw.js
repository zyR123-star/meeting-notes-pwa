const CACHE="meeting-notes-v0.1.4";
const ASSETS=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];

self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;

  event.respondWith((async()=>{
    try{
      const response=await fetch(event.request);
        if(response.ok){
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(event.request,copy));
        }
        return response;
    }catch{
      const cached=await caches.match(event.request);
      return cached||(event.request.mode==="navigate"?caches.match("./index.html"):Response.error());
    }
  })());
});
