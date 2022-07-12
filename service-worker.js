var cacheName = 'webstore-v1';
var cacheFiles = [
    'index.html',
    'products.js',
    'webstore.webmanifest',
    'images/art.jpg',
    'images/computing.jpg',
    'images/dandt.jpg',
    'images/english.jpg',
    'images/geo.jpg',
    'images/history.jpg',
    'images/math.png',
    'images/music.jpg',
    'images/pe.jpg',
    'images/science.png',
    'images/icon-32.png',
    'images/icon-512.png'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    )
});


self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (r) {
            //DOWNLOAD THE FILE IF IT'S NOT IN THE CACHE
            return r || fetch(e.request).then(function (response) {
                //ADD THE NEW FILE TO CACHE
                return caches.open(cacheName).then(function (cache) {
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});