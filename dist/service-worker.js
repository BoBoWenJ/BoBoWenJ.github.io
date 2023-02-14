/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "66bc15066a66c73a5c02b2868c0e7676"
  },
  {
    "url": "assets/css/0.styles.0a2c90fb.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.0c041261.js",
    "revision": "b1fc56833e2f50864afc39b20fc5e3dd"
  },
  {
    "url": "assets/js/10.51e1d46f.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.3af7e14e.js",
    "revision": "f6a346a26a4925253598ff7213d035d4"
  },
  {
    "url": "assets/js/12.b445cba1.js",
    "revision": "54fb6d95764e1a0121a73196f188bbbd"
  },
  {
    "url": "assets/js/13.1e31eb7d.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.54678147.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
  },
  {
    "url": "assets/js/15.0675c2c4.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.afdd4ace.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.7bc3218e.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.526efccc.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
  },
  {
    "url": "assets/js/4.c5c15a28.js",
    "revision": "35d48e661fb815ace3c1737fe1f25cbb"
  },
  {
    "url": "assets/js/5.87b2995d.js",
    "revision": "0cae08a26abe93e528b68e7d4b496ae8"
  },
  {
    "url": "assets/js/6.f0c4aded.js",
    "revision": "e6e1626c3a62b55a0e46da8736a904c9"
  },
  {
    "url": "assets/js/7.5772cd07.js",
    "revision": "37b939f26a52e89265787af9ed4a02fd"
  },
  {
    "url": "assets/js/8.dded6dc4.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.20d68243.js",
    "revision": "85d6675ecf648f5dc4ff31636a1c1fa9"
  },
  {
    "url": "assets/js/app.ba8548e9.js",
    "revision": "c4ce86a384b9704256cfb798d61889a6"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "71a3235ba5664338f65a616d3cbdacad"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b3bdcf25b695820bf2ef600269f3d2bd"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c7cf2fd2bbb8c079a4e57f75760c271a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7a9e800d3cd5fc689d52651de831fe75"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "f9e74b4579b2f21ce27f68e33ec5319f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "c18fb4f7df2fc14c33f385ad6c198f5b"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "abab1c88d3fba11d11a2bf1d1d05b22d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "dd08460b5d41e16da508f1a218ef83c5"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "7ffff3c4ebc278ded73567081f431f1e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d067814cd1191a425c2e5ff612613793"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c4f38da5ec8fc057e1f5ae51703276f9"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "b824d55807e2264e83f8486ba89d583b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "25fa013c65d1fa28a274afaf7dbaef9b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "317b3ace7b229a3ef6ce5890a54662fd"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "638f2b73e1928f754e015e3166d2d782"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9e4ef50e6b423b1468d2503dc7f24985"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e85b3499ae5e536ea3939fdb3c2fa05b"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c09503288260b48fa22b0c49132b2076"
  },
  {
    "url": "timeline/index.html",
    "revision": "1305c49899eb86bb60954a29a6e430e5"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "81e92e4a643200b399f7c2b891205abe"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "9a0ac95e661ebe7df482634e803a794c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "1b029df5b698ff0e007b3f25fe5cfaa8"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6b576078a875d1fe57a58cea4790909f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d516334c433d8fadd29f60fe8771a65f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
