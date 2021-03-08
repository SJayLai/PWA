importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// 存任何的css
workbox.routing.registerRoute(
  new RegExp('.*\.css'),
  workbox.strategies.cacheFirst({
    cacheName: 'css-cache'
  })
);
// 存任何的images
workbox.routing.registerRoute(
  new RegExp('.*\.(?:png|jpg|jpeg|svg|gif)'),
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache'
  })
);
// 網路優先
workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.networkFirst()
);
