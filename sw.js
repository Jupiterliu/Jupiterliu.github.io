/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/24/Hexo博客搭建记录/index.html","4216c9e8e98ac5d2ae773b4287c6376c"],["/2021/04/24/Paper-Reading-Scalable-Scanning-and-Automatic-Classification-of-TLS-Padding-Oracle-Vulnerabilities/index.html","d859e22be5d16e498bf104be133f8773"],["/2021/04/24/TLS-Attacker框架：项目复现/index.html","d91fc21e241fbe57d8a176c5c95f6d85"],["/2021/04/26/「送你一朵小红花」/index.html","ef91a45089e4b2fe053a8b5551073fe1"],["/2021/04/27/LeetCode/index.html","818d72d24001bc94b92bfb6fb1af1e27"],["/2021/04/28/国密算法-协议-工控/index.html","3fa0a167160bc665e00dfd44d44b8958"],["/2021/05/19/SSL-TLS相关/index.html","b5405f29e3ff2121c93e90dda1580bf3"],["/2021/05/20/TLS1-2-RFC-5246文档学习/index.html","98844b118fb4fb844c4b28efd1bcb331"],["/2021/05/24/Java多线程高并发/index.html","571e4c8ae322b2582047253643e0b65a"],["/2021/07/15/TLS-Scanner项目/index.html","23f48dcd3c86402118328665b55f2ac0"],["/2021/08/26/Roadmap-of-Java-Learning/index.html","7f7edbc2ba4cd2f06c241490d87f829d"],["/2021/09/05/Papers/index.html","5e7d695587a4f951c46742dc3cc8688b"],["/404.html","4e574ccfa21e3885ef046cb6d14a61c3"],["/about/index.html","3c945350ddcc2bfe0fa624f5e47a1c38"],["/archives/2021/04/index.html","493b0ea90a2adcbd3238f3f83abd4ef6"],["/archives/2021/05/index.html","191ba1b8bb10c4621efd41b014baf1ff"],["/archives/2021/07/index.html","111a3750b8e7de26b74deb2f378652cf"],["/archives/2021/08/index.html","635827a71b1d621b8ca7ea73c080b7db"],["/archives/2021/09/index.html","999291a003fed9ac7a5882851f5cf559"],["/archives/2021/index.html","6d457000c01d12d08a3626460c8c3fc9"],["/archives/index.html","a5ece971b0ea50df801b302eea15612e"],["/baidusitemap.xml","938a73b89e08ae9deee8d06b35d98f46"],["/categories/index.html","ad56a002a237e6d6846304513c2a9dd8"],["/css/index.css","b735c28c6ad82f13995573ed0598fb98"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/Hexo-blog-build-record/chrome-F12-Console-errors.jpg","55e2ab9e0d8d8f59ae20ed1f93ebf182"],["/images/Java多线程高并发/java-thread-cover.png","77434785352285b35f67c6f3e985d04e"],["/images/Java多线程高并发/run&start方法区别.jpg","21055ec3db52a20703eaffbce715723c"],["/images/Java多线程高并发/threadvsrunnable.png","8904b1ac771ad84accd521d593e7ee3f"],["/images/LeetCode/cover.jpg","2eeafdaeb2484ec1519ee2185116244a"],["/images/LeetCode/image-20210618114458003.png","3b2406c0c3d099668a776ac4b4b6904c"],["/images/LeetCode/remove-element.jpg","6e5494d35f99362b06ecce0f039fb35c"],["/images/LeetCode/search-insert-position-1.jpg","8ba7deec2a8048c376642358dd12c6b3"],["/images/RFC5246-TLS1.2/TLS1_2-cover.png","10fa97817a582a662d4ea6c972884f70"],["/images/Roadmap-of-Java-Learning/2021年Java开发人员的路线图.png","83795c3ceab1bf1abfa024ae99980ec3"],["/images/SSL TLS Related/TLS-SSL-cover.png","506f2a2c629d6403ba808144960ea510"],["/images/SSL TLS Related/TLS-cover.jpg","ffb27b295146cc761417048ddee9232d"],["/images/TLS-Attacker框架：项目复现/OutboundConnection.png","019f72168ebdf9283f13a949911df0ea"],["/images/TLS-Attacker框架：项目复现/image-20210528150815213.png","7a701bc2147ef27eab0ef93d7cab9511"],["/images/TLS-Attacker框架：项目复现/image-20210528154828457.png","0624ab9bc504263d5b9dfca70731dab7"],["/images/TLS-Attacker框架：项目复现/image-20210528155400976.png","ddf8d3a247458b608a4ac531f23c4ebe"],["/images/TLS-Attacker框架：项目复现/image-20210528155424340.png","cd180b229581613b264db6e983238c01"],["/images/TLS-Attacker框架：项目复现/image-20210528212214813.png","8753cdcb7a0c8e1b642361fc622b6127"],["/images/TLS-Attacker框架：项目复现/image-20210529101458444.png","18e307a5b373d5d41c55eee070a4ecdc"],["/images/TLS-Attacker框架：项目复现/image-20210603185057211.png","11f1fd8c4460fb3f30434898b5ef1120"],["/images/TLS-Attacker框架：项目复现/image-20210603185136799.png","2e47f26e1c64ee1d05bf05be5f28e23c"],["/images/TLS-Attacker框架：项目复现/image-20210603185414746.png","1c7ee47f5d0622dbe8aeb3295e9e1577"],["/images/TLS-Attacker框架：项目复现/image-20210603185443991.png","5a26ff5ecbca44b95b22bb13c94688ad"],["/images/TLS-Attacker框架：项目复现/image-20210603185556060.png","f6c63c9d17d5c38a5404380c5a0d8c93"],["/images/TLS-Attacker框架：项目复现/image-20210603185633663.png","d4c49755b11f5ced8d0b23e2a1d5b47a"],["/images/TLS-Attacker框架：项目复现/image-20210603190124612.png","2ad49631351bbdd292c07d8391f74a51"],["/images/TLS-Attacker框架：项目复现/image-20210603190159251.png","4553debc4c3538adc90ed042a9dab428"],["/images/TLS-Attacker框架：项目复现/image-20210805103458499.png","e49ffb86543a990fa6c1d50eb1dbfd48"],["/images/TLS-Attacker框架：项目复现/image-20210805103923743.png","e49ffb86543a990fa6c1d50eb1dbfd48"],["/images/TLS-Attacker框架：项目复现/image-20210811195437678.png","c5f94e3a2c746fe25b5bbbc8e6a7aba6"],["/images/TLS-Attacker框架：项目复现/image-20210820213000978.png","5d2c7748127f73cb747e0819bb0939d5"],["/images/TLS-Scanner项目/TLS-Scanner-cover.jpg","342861ffbecda91d61416bbb53447c2e"],["/images/TLS1-2-RFC-5246文档学习/image-20210726193027796-7299029.png","27e2d60d4d1ea32bf13658f2e5722435"],["/images/TLS1-2-RFC-5246文档学习/image-20210726193027796.png","27e2d60d4d1ea32bf13658f2e5722435"],["/images/TLS1-2-RFC-5246文档学习/image-20210731164643586-7721205.png","e341ff61fe4a644e0b887823376afe50"],["/images/TLS1-2-RFC-5246文档学习/image-20210731164643586.png","e341ff61fe4a644e0b887823376afe50"],["/images/TLS1-2-RFC-5246文档学习/image-20210731165408582-7721650.png","7e279cde22e225406befb43990241d12"],["/images/TLS1-2-RFC-5246文档学习/image-20210731165408582.png","7e279cde22e225406befb43990241d12"],["/images/TLS1-2-RFC-5246文档学习/wpsRnVoNr.png","e5efce01391f028ecfa1725a72d1ce4b"],["/images/USS-2020-paper/Figure-1.jpg","966d1b000a89432aa63d245818586bb0"],["/images/USS-2020-paper/Figure-2.jpg","e2ed7d5ce487dc9ab4568a034d0a6205"],["/images/USS-2020-paper/Figure-3.jpg","2857782b6c8d2bfc72a1404e24770ab5"],["/images/USS-2020-paper/Figure-4.jpg","c7c75c52f8f4e0160fbfdcbf26d3ec8f"],["/images/USS-2020-paper/Figure-5.jpg","57dd46553abaea9c132c2d915f8246ca"],["/images/USS-2020-paper/Figure-6.jpg","410c172c9c3dd07e53af424501a138a5"],["/images/USS-2020-paper/Figure-7.jpg","5090aca3289c0d495743ea25672c223b"],["/images/USS-2020-paper/Table-1.jpg","1e930563f429e7695aa60e94e1c44121"],["/images/USS-2020-paper/Table-2-exp.jpg","74abb7728b2d107241862be6ad2937f3"],["/images/USS-2020-paper/Table-2.jpg","d2da25acca1ee727b7bd3c74a1a89c96"],["/images/USS-2020-paper/USS-2020-paper-cover.jpg","35db7634cc9b1b35c7eb28eb704d52a4"],["/images/siteicon/README.html","615f7a62599dd90223e02586cd11f729"],["/images/siteicon/android-chrome-144x144.png","b23d65009a764566e589511251595dd5"],["/images/siteicon/android-chrome-192x192.png","c08b7aa79c03c1ed30fd2b31f3077930"],["/images/siteicon/android-chrome-256x256.png","2f8ef97f783fcfe7881839f9557fbbd7"],["/images/siteicon/android-chrome-36x36.png","0169569928c7ad049093f0a7a95f258d"],["/images/siteicon/android-chrome-384x384.png","bf4fe1916cc12b29c139a1e89503934d"],["/images/siteicon/android-chrome-48x48.png","64cfa5dc88cef73ef22cc22aa3dca6da"],["/images/siteicon/android-chrome-512x512.png","8a9e2c403da70f844c33b73cd8fb1fb0"],["/images/siteicon/android-chrome-72x72.png","76ba561d4238fc4d6aedce48f0601e74"],["/images/siteicon/android-chrome-96x96.png","83362d58800bfeef66ed8b99af2aedeb"],["/images/siteicon/apple-touch-icon.png","d6047ffe11ed5f06b039977f57b349a4"],["/images/siteicon/browserconfig.xml","9c130ef758edf37b28329f2beed58871"],["/images/siteicon/favicon-16x16.png","4cc96efa0cad0b32a58936b5dcb92880"],["/images/siteicon/favicon-32x32.png","db5a1e266f55a8162d45ed067fc85782"],["/images/siteicon/mstile-150x150.png","ae1e5ae07332159e61fe6e1ba8e09adc"],["/images/siteicon/safari-pinned-tab.svg","c83c635fcb7bbc1817ebcf1d18f6476e"],["/images/「送你一朵小红花」/LHC-cover.jpg","cdbe0df4c7375b15567a1f68efb15a54"],["/images/「送你一朵小红花」/LHC11.jpg","ee6f29ec78926188a170288adb7fac71"],["/images/「送你一朵小红花」/LHC12.jpg","046fd94e989fbbaadef528b840b4e277"],["/images/「送你一朵小红花」/LHC13.jpg","ca309bac328903f75844068736c42016"],["/images/「送你一朵小红花」/LHC3.jpg","47d25187ae947fd74f0757d87606a957"],["/images/「送你一朵小红花」/LHC5.jpg","e87fbb103287d8520bff429c340c5cd9"],["/images/「送你一朵小红花」/LHC8.jpg","4639479bf9cd0e209d8839241fc52b71"],["/images/「送你一朵小红花」/LHC9.jpg","d9eef4141a4c45f568bdf5f608dcb8e8"],["/images/国密算法-协议-工控/1-one-cert-one-auth-anlysis.jpg","0b4ecedb56f71e61e0d4f00aaeebb559"],["/images/国密算法-协议-工控/GM-CipherSuites.png","26d7830c01784db887656ba447f95507"],["/images/国密算法-协议-工控/GM-SSL-Process.png","e593fe6ec0e15b508ecc5ce97e2fbf15"],["/images/国密算法-协议-工控/gmssl-cover.png","322c7c62c44de7a5a59356b4d8cee885"],["/images/国密算法-协议-工控/image-20210713210116996.png","1b6c4cc38edab00cf6eb9529a062f923"],["/images/国密算法-协议-工控/image-20210724095742763.png","37a3ae5e3d97a5affacd89e9be188136"],["/images/国密算法-协议-工控/image-20210724100828452.png","72e43fb63565afa7b9d3e8bcf04b2b1d"],["/images/国密算法-协议-工控/国密HTTPS在线Demo.png","57799234ca53cd20b37409e919b3ee9a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9d98bd458964fdb58e3d4c43afac08b3"],["/js/main.js","5641b1a6b817df7d81f465c27ed538d9"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/search.xml","e7967a43c09a9b91211589cd2bc90a81"],["/service-worker.js","bde6af0ea74cd3d3b9cd31c3ab29d1be"],["/sitemap.xml","fb86752b9fba530a03de8117b814e0a6"],["/sw-register.js","150d3605a416784fd7b20c34328e8238"],["/tags/RFC6246/index.html","00e6d28763e7791ea389324e69a6cf8e"],["/tags/TLS1-2/index.html","5b2db11eec34268b8734968c0ec3b9c5"],["/tags/algorithm/index.html","db4ab9655269647b56167f6f7dc36c14"],["/tags/blog/index.html","db1bf7ac9c0371d93b578fa19f6098f1"],["/tags/github-project/index.html","23908cf8a50284d8ef432a1307abab51"],["/tags/index.html","6bde61902d8e2b24e1193cfff05232de"],["/tags/java/index.html","0d9c77c0b8d9506ade5ebe0c51bc61ed"],["/tags/leetcode/index.html","047567397de3681f5a43dd0e9400d4da"],["/tags/movie/index.html","3f5d23625b7c8f4be469cacfd4c76711"],["/tags/paper/index.html","2c89e4a14f941314b7031afcc0c8a75c"],["/tags/ssl-tls/index.html","eff8af59e8274c561d5d356b8ca2622d"],["/workbox-f7715658.js","0497fcadf6b83c75ec4df94ab5067d20"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
