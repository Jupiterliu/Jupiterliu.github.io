/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/24/CyberSec/Paper-Reading-Scalable-Scanning-and-Automatic-Classification-of-TLS-Padding-Oracle-Vulnerabilities/index.html","deddd22f0fa5fbc400a1ae9ce4e43ab3"],["/2021/04/24/CyberSec/TLS-Attacker框架：项目复现/index.html","a1c8d064c1591da937023dc25df50439"],["/2021/04/24/Hexo博客搭建记录/index.html","374c4c5ad87bfdc3751f1b0b671b36f2"],["/2021/04/27/CyberSec/LeetCode/index.html","489de6de2ae5c1907c5975fe1a2061c2"],["/2021/04/28/CyberSec/国密算法-协议-工控/index.html","320562b5b1548205cfa09b0ec51f6d09"],["/2021/05/19/CyberSec/SSL-TLS相关/index.html","72df809a7dd8f107c95564eebe9b3522"],["/2021/05/20/CyberSec/TLS1-2-RFC-5246文档学习/index.html","2c7f81f602b95abfac0f37e207d7d4c1"],["/2021/05/24/CyberSec/Java多线程高并发/index.html","2aea647c46ffd4ab34e4a0d932dd25bb"],["/2021/07/15/CyberSec/TLS-Scanner项目/index.html","6adc732eb35b358bd06e24d5d68307fe"],["/2021/08/26/CyberSec/Roadmap-of-Java-Learning/index.html","8e6d13b3349724eefb85dbd6eaadaa62"],["/2021/09/05/CyberSec/Papers/index.html","f8c4bcc3053d751cf3fe82e1c86329f0"],["/2022/11/09/WritingWithLatex/index.html","0ef7d9c3b92958c09357f4d893f24829"],["/2022/11/10/Blender-Learning/index.html","1f9fb283e7d779ea89f42a80024e818f"],["/2022/11/16/Security-in-Robotic-Vehicle/index.html","b333af6511da4f6656ee079f98c67149"],["/404.html","f81870da924bfede7ed6cb92104d603e"],["/Hexo博客搭建记录.html","b15c45778269f445552e0bc2ecef4711"],["/about/index.html","dfb95c3a817997ead14b59059158328b"],["/archives/2021/04/index.html","6d4c806df8d3c9ce878707e8977bfff1"],["/archives/2021/index.html","a685cc9d53b4153aa248ea1c170b5f6f"],["/archives/2022/11/index.html","ff0414fa3cc8287ab01c596845fe91e2"],["/archives/2022/index.html","c7361a7ff0ed1702b115781d28e43b1f"],["/archives/index.html","7e477e9a5b3deeef2fe735cc069f9df6"],["/baidusitemap.xml","45d13a26ab418c7b9b69a6584ba4d0ae"],["/categories/index.html","9aacf83cada874c123f33e3374e16ab1"],["/css/index.css","e8c6e17a1d0c74b80a31a0e227bfe75e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/Hexo-blog-build-record/chrome-F12-Console-errors.jpg","55e2ab9e0d8d8f59ae20ed1f93ebf182"],["/images/Java多线程高并发/java-thread-cover.png","77434785352285b35f67c6f3e985d04e"],["/images/Java多线程高并发/run&start方法区别.jpg","21055ec3db52a20703eaffbce715723c"],["/images/Java多线程高并发/threadvsrunnable.png","8904b1ac771ad84accd521d593e7ee3f"],["/images/LeetCode/cover.jpg","2eeafdaeb2484ec1519ee2185116244a"],["/images/LeetCode/image-20210618114458003.png","3b2406c0c3d099668a776ac4b4b6904c"],["/images/LeetCode/remove-element.jpg","6e5494d35f99362b06ecce0f039fb35c"],["/images/LeetCode/search-insert-position-1.jpg","8ba7deec2a8048c376642358dd12c6b3"],["/images/Papers/2021 年 Java 开发人员的路线图.png","83795c3ceab1bf1abfa024ae99980ec3"],["/images/RFC5246-TLS1.2/TLS1_2-cover.png","10fa97817a582a662d4ea6c972884f70"],["/images/Roadmap-of-Java-Learning/2021年Java开发人员的路线图.png","83795c3ceab1bf1abfa024ae99980ec3"],["/images/SSL TLS Related/TLS-SSL-cover.png","506f2a2c629d6403ba808144960ea510"],["/images/SSL TLS Related/TLS-cover.jpg","ffb27b295146cc761417048ddee9232d"],["/images/Security-in-Robotic-Vehicle/poster.png","2d97943f073f655a744765e6edf5439b"],["/images/Security-in-Robotic-Vehicle/robotic vehicles.png","90cc8007bd65ea40a4dfc0d9de6e1a1a"],["/images/TLS-Attacker框架：项目复现/OutboundConnection.png","019f72168ebdf9283f13a949911df0ea"],["/images/TLS-Attacker框架：项目复现/image-20210528150815213.png","7a701bc2147ef27eab0ef93d7cab9511"],["/images/TLS-Attacker框架：项目复现/image-20210528154828457.png","0624ab9bc504263d5b9dfca70731dab7"],["/images/TLS-Attacker框架：项目复现/image-20210528155400976.png","ddf8d3a247458b608a4ac531f23c4ebe"],["/images/TLS-Attacker框架：项目复现/image-20210528155424340.png","cd180b229581613b264db6e983238c01"],["/images/TLS-Attacker框架：项目复现/image-20210528212214813.png","8753cdcb7a0c8e1b642361fc622b6127"],["/images/TLS-Attacker框架：项目复现/image-20210529101458444.png","18e307a5b373d5d41c55eee070a4ecdc"],["/images/TLS-Attacker框架：项目复现/image-20210603185057211.png","11f1fd8c4460fb3f30434898b5ef1120"],["/images/TLS-Attacker框架：项目复现/image-20210603185136799.png","2e47f26e1c64ee1d05bf05be5f28e23c"],["/images/TLS-Attacker框架：项目复现/image-20210603185414746.png","1c7ee47f5d0622dbe8aeb3295e9e1577"],["/images/TLS-Attacker框架：项目复现/image-20210603185443991.png","5a26ff5ecbca44b95b22bb13c94688ad"],["/images/TLS-Attacker框架：项目复现/image-20210603185556060.png","f6c63c9d17d5c38a5404380c5a0d8c93"],["/images/TLS-Attacker框架：项目复现/image-20210603185633663.png","d4c49755b11f5ced8d0b23e2a1d5b47a"],["/images/TLS-Attacker框架：项目复现/image-20210603190124612.png","2ad49631351bbdd292c07d8391f74a51"],["/images/TLS-Attacker框架：项目复现/image-20210603190159251.png","4553debc4c3538adc90ed042a9dab428"],["/images/TLS-Attacker框架：项目复现/image-20210805103458499.png","e49ffb86543a990fa6c1d50eb1dbfd48"],["/images/TLS-Attacker框架：项目复现/image-20210805103923743.png","e49ffb86543a990fa6c1d50eb1dbfd48"],["/images/TLS-Attacker框架：项目复现/image-20210811195437678.png","c5f94e3a2c746fe25b5bbbc8e6a7aba6"],["/images/TLS-Attacker框架：项目复现/image-20210820213000978.png","5d2c7748127f73cb747e0819bb0939d5"],["/images/TLS-Scanner项目/TLS-Scanner-cover.jpg","342861ffbecda91d61416bbb53447c2e"],["/images/TLS1-2-RFC-5246文档学习/image-20210726193027796-7299029.png","27e2d60d4d1ea32bf13658f2e5722435"],["/images/TLS1-2-RFC-5246文档学习/image-20210726193027796.png","27e2d60d4d1ea32bf13658f2e5722435"],["/images/TLS1-2-RFC-5246文档学习/image-20210731164643586-7721205.png","e341ff61fe4a644e0b887823376afe50"],["/images/TLS1-2-RFC-5246文档学习/image-20210731164643586.png","e341ff61fe4a644e0b887823376afe50"],["/images/TLS1-2-RFC-5246文档学习/image-20210731165408582-7721650.png","7e279cde22e225406befb43990241d12"],["/images/TLS1-2-RFC-5246文档学习/image-20210731165408582.png","7e279cde22e225406befb43990241d12"],["/images/USS-2020-paper/Figure-1.jpg","966d1b000a89432aa63d245818586bb0"],["/images/USS-2020-paper/Figure-2.jpg","e2ed7d5ce487dc9ab4568a034d0a6205"],["/images/USS-2020-paper/Figure-3.jpg","2857782b6c8d2bfc72a1404e24770ab5"],["/images/USS-2020-paper/Figure-4.jpg","c7c75c52f8f4e0160fbfdcbf26d3ec8f"],["/images/USS-2020-paper/Figure-5.jpg","57dd46553abaea9c132c2d915f8246ca"],["/images/USS-2020-paper/Figure-6.jpg","410c172c9c3dd07e53af424501a138a5"],["/images/USS-2020-paper/Figure-7.jpg","5090aca3289c0d495743ea25672c223b"],["/images/USS-2020-paper/Table-1.jpg","1e930563f429e7695aa60e94e1c44121"],["/images/USS-2020-paper/Table-2-exp.jpg","74abb7728b2d107241862be6ad2937f3"],["/images/USS-2020-paper/Table-2.jpg","d2da25acca1ee727b7bd3c74a1a89c96"],["/images/USS-2020-paper/USS-2020-paper-cover.jpg","35db7634cc9b1b35c7eb28eb704d52a4"],["/images/siteicon/README.html","4463bd4f0abf80cce537c57137ed390b"],["/images/siteicon/android-chrome-144x144.png","b23d65009a764566e589511251595dd5"],["/images/siteicon/android-chrome-192x192.png","c08b7aa79c03c1ed30fd2b31f3077930"],["/images/siteicon/android-chrome-256x256.png","2f8ef97f783fcfe7881839f9557fbbd7"],["/images/siteicon/android-chrome-36x36.png","0169569928c7ad049093f0a7a95f258d"],["/images/siteicon/android-chrome-384x384.png","bf4fe1916cc12b29c139a1e89503934d"],["/images/siteicon/android-chrome-48x48.png","64cfa5dc88cef73ef22cc22aa3dca6da"],["/images/siteicon/android-chrome-512x512.png","8a9e2c403da70f844c33b73cd8fb1fb0"],["/images/siteicon/android-chrome-72x72.png","76ba561d4238fc4d6aedce48f0601e74"],["/images/siteicon/android-chrome-96x96.png","83362d58800bfeef66ed8b99af2aedeb"],["/images/siteicon/apple-touch-icon.png","d6047ffe11ed5f06b039977f57b349a4"],["/images/siteicon/browserconfig.xml","9c130ef758edf37b28329f2beed58871"],["/images/siteicon/favicon-16x16.png","4cc96efa0cad0b32a58936b5dcb92880"],["/images/siteicon/favicon-32x32.png","db5a1e266f55a8162d45ed067fc85782"],["/images/siteicon/mstile-150x150.png","ae1e5ae07332159e61fe6e1ba8e09adc"],["/images/siteicon/safari-pinned-tab.svg","c83c635fcb7bbc1817ebcf1d18f6476e"],["/images/国密算法-协议-工控/1-one-cert-one-auth-anlysis.jpg","0b4ecedb56f71e61e0d4f00aaeebb559"],["/images/国密算法-协议-工控/GM-CipherSuites.png","26d7830c01784db887656ba447f95507"],["/images/国密算法-协议-工控/GM-SSL-Process.png","e593fe6ec0e15b508ecc5ce97e2fbf15"],["/images/国密算法-协议-工控/gmssl-cover.png","322c7c62c44de7a5a59356b4d8cee885"],["/images/国密算法-协议-工控/image-20210713210116996.png","1b6c4cc38edab00cf6eb9529a062f923"],["/images/国密算法-协议-工控/image-20210724095742763.png","37a3ae5e3d97a5affacd89e9be188136"],["/images/国密算法-协议-工控/image-20210724100828452.png","72e43fb63565afa7b9d3e8bcf04b2b1d"],["/images/国密算法-协议-工控/国密HTTPS在线Demo.png","57799234ca53cd20b37409e919b3ee9a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c7551fa0b4ba8206b80472b3c0c9dac4"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","fe4856c4c45097b1bedda136692a5069"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/search.xml","adef8eb04d205d86fb5bc05809fd1b9f"],["/service-worker.js","aded94ecc65404d62e6724babf2bf309"],["/sitemap.xml","deb4f6772d94db0ecc1e2c63ca742974"],["/sw-register.js","291af2f90c3d468a7ee9f80980771f90"],["/tags/blender/index.html","e4c119f1d9608e75c3735600a6e01edb"],["/tags/blog/index.html","612b5352d4da59e2a43a49cd32ff35eb"],["/tags/index.html","89112b06fe6010d25b29cf64458e0f62"],["/tags/security-robot-drone-vehicle/index.html","421e0d5034787bdd90acbd41c521f9de"],["/tags/writing-latex/index.html","ae3c66b7f2f4d86831c71dcc22b50961"],["/workbox-6da860f9.js","702d7e8470a98ffd62a0f774120e6ea7"]];
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
