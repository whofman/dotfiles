self.addEventListener("install",function(t){t.waitUntil(self.skipWaiting())}),self.addEventListener("activate",function(t){t.waitUntil(self.clients.claim())}),self.addEventListener("message",function(t){self.usageWorkerPort=t.data&&t.data.usageWorkerPort}),self.addEventListener("fetch",function(t){var n=5,e=t.request;if("GET"===e.method){var s,a=e.url;try{var o=a.startsWith("http")?a.lastIndexOf("?momo_cache_bg_uuid="):-1,r=null;if(0<o)r=a.substr(o+20),a=a.substring(0,o),s="http://momentumdash.com/photos/local-cache-key/"+r;else{if(!a.startsWith("https://modash.blob.core.windows.net/"))return;var c=a.split("?");2===c.length&&(s=c[0])}t.respondWith(caches.match(s).then(function(t){return t||function e(r,c,i,u){return new Promise(function(s,t){u=u||0;var a=Date.now();function o(){u<n?setTimeout(function(){e(r,c,i,u+1).then(s).catch(t)},100):(i&&f(r,i,u,!1),t())}fetch(r).then(function(t){if(t&&t.ok){var e=t.clone(),n=Date.now()-a;caches.open("modash-cache").then(function(t){t.put(c,e),i&&f(r,i,u,!0,n)}),s(t)}else o()}).catch(function(){o()})})}(a,s,r)}))}catch(t){console.log("caught error: "+t)}}function f(t,e,n,s,a){self.usageWorkerPort&&self.usageWorkerPort.postMessage({func:"savePhotoLoad",params:[{success:s,retries:n,url:t,uuid:e,time:a}]})}});