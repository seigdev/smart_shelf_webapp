'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "22c29cfe185675b5b50677ac1ad6c437",
"version.json": "bbf9752dd5633384e7637d477b90aa40",
"index.html": "a7a1da83264efb24cfdd2858763b78a6",
"/": "a7a1da83264efb24cfdd2858763b78a6",
"main.dart.js": "80583eab3864ea088c5be53060fdf53c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.svg": "0ed61bebffe411b0bb784c193f0e401b",
"icons/Icon-512.svg": "0ed61bebffe411b0bb784c193f0e401b",
"manifest.json": "00674b16b028b059d8eac0b312b012c1",
".git/config": "4288912ce0be33af0b75428c5415ad22",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/47439115cf63014d1368f5120f69bde559345b": "0d4ac7365b124daf4aef23e4b75f821b",
".git/objects/6a/738fd041e9e7a4ed437c47a4b5e24d710006bf": "b6a2ea069ab5e36ac4a4939e7be456bb",
".git/objects/6a/179be0d5133d6e92ecfddff0901dcb46c629bb": "946f5be5f0a1c2b8da5ae8048623f66e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/7ce03687344c469926bb17e9e56393971620b0": "52f6f02cc73e8da1d1160529e4e74d0e",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/3c/bc26962be36220076cb1a9a30cb8ddeb7f965f": "33ecd2a55ca560dd1ae9b33e2b51dc11",
".git/objects/3d/f159e3af733c861d30e722f04733cb35da4ed6": "82ca7be354dae01e1902cabf0253abfe",
".git/objects/0b/139a656bcb86702492355b9882559852b22bcc": "a22ccf7747aa6b56f6be0377e865b6a5",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9c/712c04ec3968aadabf0fd78ad14f60dfc2a4b7": "ba235889641c514f6d0e43175d2659fc",
".git/objects/a4/36638c06782359ede03b9e14f5d3cc3688bea1": "8b377c8c707af65a32e67abd0f867ffd",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/b4/1d8491515784a4e8f027b2a9ef8ba81bb26eb1": "37178f3149a83920171bb31dea617177",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/974b58f342f479b1db82bb725702c5fcab6e92": "a7ba2209ff28c45002ef70571a79d42f",
".git/objects/ae/730d2744f67ceb8995fa92d4d09c35b91f23b1": "ef38ed58abcbf6f88fac3832124696f6",
".git/objects/e2/922272f2f5cc54bddbc118d12a08c595345229": "a2b956f991a171874b6eb618eba8b251",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ee/73d7552bd663230a3ca2d1590adc2ae266133b": "3f18410985a8214eaa1a588ab32ce890",
".git/objects/fc/916fb61c77e6d3c32bc3c0d519f51aa8e239fa": "3124348eefadf84ef77da4678a7ec686",
".git/objects/fd/058311ad66aece294154d28d188fbb5271b415": "2e08e0a47f8696f7c3eab86b320a11b1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c6/2e3157f91de41ee9802ae7d6d8b16e0c15e45e": "b4a0c00ee39a4f062078fa491aa35dff",
".git/objects/42/147facd7da0d6eee204c64ce71715393aaf543": "03a086cbffc518f91b899b219fb4c2c9",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/078fa2f5a598a68e5417880662ddedc105395a": "e86e323ffd9c8a1e5c08070c58c6dced",
".git/objects/10/282ba94bcbdaabf5ea14e831881f7a0a681a22": "39024f96f63efa0483ce3896cc014619",
".git/objects/44/2340337bf3631518568968aeb20aa58666d35f": "483767b81f58d7a0b30ee9aa7a71c959",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/11e848aa4d9b222295d1c78298e08909d3c783": "63d4f5cba40e75221923eb9994308866",
".git/objects/5d/0f152faff8ef920cb0057c8285f6f53a7652b7": "37bed6f0b965d3c10ec174f0943b6ce5",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/62/869fc37f2302a92f3846d69e027174cdd76db0": "458e7d4a2bef20a0e46b60c57c3339c2",
".git/objects/37/d1ddbcda0e248ac86ea41ab6a3b30f40c55d22": "c7178a3ed94106251117c8196eac1218",
".git/objects/01/c017f33459a914741a1f62bd78984a82a16c70": "6059d336a915a46d283d86be179a953f",
".git/objects/55/2f245f74e35a07caaab3c89a901e2b02ede35d": "633c36826cc3f18de11a59e956f3cfa4",
".git/objects/0a/73b913ca1e3bc1de680bbc1f732cc741bda773": "3cfd0af22766bf60908dfe7fd322893c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f7/7fcbf6836ab1357b527581979323680e7e109f": "84bb68b0a2a605b833bb760f545c1685",
".git/objects/41/099a7b247178418e9cf45be04fd2e65a141dad": "4c98c1f73412f03d3d2af61f52ccc930",
".git/objects/48/8e7400633436a28dded963291b1d08821006cc": "dd75ff87a45b17273f0364449ef51269",
".git/objects/84/e36e7a6e8bfc70b729315aeb4c9a8e67e48a05": "c42e37f5f4f08a814b87c13e05472091",
".git/objects/84/d45031412e2bc5f040be694784469651dd0b1f": "b95dc987d59cae7f16d03e72d018b91f",
".git/objects/24/7b129ffb1c9cdf2db50d3f2504afc67ad79054": "ce9a43b46e337cf87cf3c1c0db15c5c9",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8d/f00273fd3a4e7fd1f226520a366fa27cf5d38c": "271edd66d1e1e759c6bcd092712fc948",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/9d9b4ae7201d7d57ffced7e9368c49065ff4bf": "5eaeb751858d9568f5443660fd5755c1",
".git/objects/8e/13a27dada45dab12e1ec0e859f9842dafba5c4": "cdd1a40d8bff387bff011120e0ea85e4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6543e7c410cdf8e2ec834437bbd4eceb",
".git/logs/refs/heads/main": "86b40bb62b67fcac8a4f07a8bebe2464",
".git/logs/refs/remotes/origin/main": "11b8082f2a01acf3501a746a9635da4a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3dba139ab433d619c266559f29c3fe49",
".git/refs/remotes/origin/main": "3dba139ab433d619c266559f29c3fe49",
".git/index": "d16fd405b29b29ca799e1b1aa50efa81",
".git/COMMIT_EDITMSG": "00c40d07a3399bc41f01283e0041822d",
".git/FETCH_HEAD": "6fa8ff5fd0de4779c0e673cbd8f8239e",
"assets/AssetManifest.json": "aca151961889aab98ab85ae0f45650cd",
"assets/NOTICES": "d93b0c2c935eb7d2ca281c96ff09e8ab",
"assets/FontManifest.json": "766c4b2e007b62b1631bf378feb147d4",
"assets/AssetManifest.bin.json": "c44ad6ff10ba3123a3068fc2e9d1c46a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c57cbf84d24677c913362ff9c8833463",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "94e51004c64edc229f43f70ac6a70dd8",
"assets/fonts/MaterialIcons-Regular.otf": "7a47823f75cc678693d22bf6031a2270",
"assets/assets/svgs/settings.svg": "da1961e61b63ce6f008ddfae83018343",
"assets/assets/svgs/notification.svg": "26dd5d38b6276ee22d69e3c19d249968",
"assets/assets/svgs/security.svg": "b2956cbb69577eaf3e21ec539f507b9d",
"assets/assets/svgs/analytics.svg": "81ba7cc664eea52ff369fbf4599d1052",
"assets/assets/svgs/logo.svg": "0ed61bebffe411b0bb784c193f0e401b",
"assets/assets/fonts/GeneralSans-Semibold.otf": "858d81205b791170eaf0bc30c2ec7bc5",
"assets/assets/fonts/GeneralSans-Medium.otf": "543e455dde358b0724b7b27e5e9abcce",
"assets/assets/fonts/GeneralSans-Regular.otf": "95afa0447815d0498c2ed4c828cdd92a",
"assets/assets/fonts/GeneralSans-Bold.otf": "398fa49258135c6cefe9383eb0cb19e7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
