importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05e39f07bd7229ebc044.js",
    "revision": "d435e3bc81c05646c4ff9f9946dc937c"
  },
  {
    "url": "/_nuxt/0af6f205e7603647249c.js",
    "revision": "a027e623dcbea050e1a8738f28b62b2c"
  },
  {
    "url": "/_nuxt/2990aff77bf696753beb.js",
    "revision": "a72825e4fa693cb8cdc35a289cc716cf"
  },
  {
    "url": "/_nuxt/464d25bf588bfbac2841.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/5b48f249a0f486bedb06.js",
    "revision": "993f2ff46d0d7dfdb891ffed323421f6"
  },
  {
    "url": "/_nuxt/673206fd8eea85f7c927.css",
    "revision": "3e3569ee1fdeca689c8b42a2f26636bd"
  },
  {
    "url": "/_nuxt/73df1795d39f9153b3f4.js",
    "revision": "91809c16fa83e92589969cc5d5187d18"
  },
  {
    "url": "/_nuxt/7e1e86c9a9c0c1089677.js",
    "revision": "463af933da1c2e4c7103c130df7ee319"
  },
  {
    "url": "/_nuxt/b9d8d74883f968c8641c.js",
    "revision": "e8a520f7ffdc1b45fc212914ef1abf4e"
  },
  {
    "url": "/_nuxt/c4c68b3a59b386e9223d.js",
    "revision": "e2ec62ca57acd0cd9e13d0a810cd6520"
  },
  {
    "url": "/_nuxt/e26b9ed56dd0aa0f74f8.js",
    "revision": "29b3b5ef64606fee9f31cfc2d143c85e"
  },
  {
    "url": "/_nuxt/e865442377154e55053d.css",
    "revision": "a109c5dbc34b1a664cfbea492b870476"
  },
  {
    "url": "/_nuxt/fc6cde20c5726c9b67dc.css",
    "revision": "570a46bcac73e9592d39654829f3ca8a"
  }
], {
  "cacheId": "bael-cms-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
