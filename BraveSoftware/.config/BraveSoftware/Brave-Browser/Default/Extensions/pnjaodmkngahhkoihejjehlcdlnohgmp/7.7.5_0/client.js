var __extends = this && this.__extends || function() {
var e = function(t, n) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
})(t, n);
};
return function(t, n) {
function o() {
this.constructor = t;
}
e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, 
new o());
};
}(), __awaiter = this && this.__awaiter || function(e, t, n, o) {
function i(e) {
return e instanceof n ? e : new n(function(t) {
t(e);
});
}
return new (n || (n = Promise))(function(n, r) {
function s(e) {
try {
l(o.next(e));
} catch (e) {
r(e);
}
}
function a(e) {
try {
l(o.throw(e));
} catch (e) {
r(e);
}
}
function l(e) {
e.done ? n(e.value) : i(e.value).then(s, a);
}
l((o = o.apply(e, t || [])).next());
});
}, __generator = this && this.__generator || function(e, t) {
function n(e) {
return function(t) {
return o([ e, t ]);
};
}
function o(n) {
if (i) throw new TypeError("Generator is already executing.");
for (;l; ) try {
if (i = 1, r && (s = 2 & n[0] ? r.return : n[0] ? r.throw || ((s = r.return) && s.call(r), 
0) : r.next) && !(s = s.call(r, n[1])).done) return s;
switch (r = 0, s && (n = [ 2 & n[0], s.value ]), n[0]) {
case 0:
case 1:
s = n;
break;

case 4:
return l.label++, {
value: n[1],
done: !1
};

case 5:
l.label++, r = n[1], n = [ 0 ];
continue;

case 7:
n = l.ops.pop(), l.trys.pop();
continue;

default:
if (s = l.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
l = 0;
continue;
}
if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
l.label = n[1];
break;
}
if (6 === n[0] && l.label < s[1]) {
l.label = s[1], s = n;
break;
}
if (s && l.label < s[2]) {
l.label = s[2], l.ops.push(n);
break;
}
s[2] && l.ops.pop(), l.trys.pop();
continue;
}
n = t.call(e, l);
} catch (e) {
n = [ 6, e ], r = 0;
} finally {
i = s = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
var i, r, s, a, l = {
label: 0,
sent: function() {
if (1 & s[0]) throw s[1];
return s[1];
},
trys: [],
ops: []
};
return a = {
next: n(0),
throw: n(1),
return: n(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
}, __assign = this && this.__assign || function() {
return __assign = Object.assign || function(e) {
for (var t, n = 1, o = arguments.length; n < o; n++) {
t = arguments[n];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
return e;
}, __assign.apply(this, arguments);
};

System.register("app/library/ts/function", [], function(e, t) {
"use strict";
function n(e, t) {
e = e || {};
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && void 0 === e[n] && (e[n] = t[n]);
return e;
}
function o(e, t) {
void 0 === t && (t = !1);
var n = [];
for (var o in e) if (e.hasOwnProperty(o)) {
var i = e[o];
i && "object" == typeof i && i.constructor === Array ? i.forEach(function(e) {
n.push(encodeURIComponent(o) + (t ? "" : "[]") + "=" + encodeURIComponent(e));
}) : n.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
}
return n.join("&");
}
function i(e) {
return new Promise(function(t, n) {
setTimeout(function() {
return t();
}, e);
});
}
t && t.id;
return e("toOptions", n), e("objectToQueryString", o), e("sleep", i), {
setters: [],
execute: function() {}
};
}), System.register("app/ext/ext", [ "app/library/ts/function" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
if (o = {
getBackgroundPage: function() {
return chrome.extension.getBackgroundPage();
},
isExtensionInstalled: function() {
var e = document.getElementById("feeder-is-installed-flag");
return (e || !1) && -1 !== e.className.indexOf("feeder-is-installed");
},
hasReviewURL: function() {
return !!this.isChrome();
},
isChrome: function() {
return !("undefined" == typeof chrome || !chrome.extension);
},
isMobile: function() {
return !o.isChrome() && screen.width <= 480;
},
assetURL: function(e) {
if (this.isChrome()) return chrome.extension.getURL(e);
throw new Error("Could not find asset URL on this platform.");
},
pageURL: function(e, t, o) {
if (void 0 === t && (t = {}), o && (e += "#" + o), e += Object.keys(t).length ? "?" + n.objectToQueryString(t) : "", 
this.isChrome()) return chrome.extension.getURL(e);
throw new Error("Could not generate pageURL for platform.");
},
settingsURL: function(e, t, o) {
void 0 === t && (t = {});
var i = e + "/settings/";
return t = t || {}, o && (i += "#" + o), this.isChrome() && (t.ctx = "extension"), 
i += Object.keys(t).length ? "?" + n.objectToQueryString(t) : "", i = i.replace("/#/", "/");
},
getVersion: function() {
return "undefined" != typeof chrome && chrome.runtime && "function" == typeof chrome.runtime.getManifest ? chrome.runtime.getManifest().version : "?";
},
getPlatformName: function() {
return this.isChrome() ? "chrome" : "unknown";
}
}, window.document && document.documentElement) {
var t = o.getPlatformName();
document.body.className += " platform-" + t, document.documentElement.className += " html-platform-" + t;
}
e("default", o);
}
};
}), System.register("app/backend/config", [ "app/ext/ext" ], function(e, t) {
"use strict";
var n, o, i, r, s;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = localStorage.feederRoot || "https://feeder.co", i = localStorage.adderRoot || "https://adder.feeder.co", 
r = localStorage.pusherRoot || "https://pusher.feeder.co", s = localStorage.analyticsURL || "https://analytics.feeder.co", 
document && document.location && (0 === document.location.href.indexOf("http://dev.feeder.co") || 0 === o.indexOf("http://dev.feeder.co")) && (r = "http://localhost:3337", 
i = "http://localhost:60111", s = "http://localhost:3338"), "http:" !== document.location.protocol && "https:" !== document.location.protocol || (o = document.location.protocol + "//" + document.location.host), 
e("default", {
icon: {
addFeed: n.default.assetURL("icons/icon-add.png"),
standard: n.default.assetURL("icons/icon-retina.png")
},
images: {
folder: n.default.assetURL("icons/folder_2x.png")
},
feeder: {
root: o,
pusherURL: r,
analyticsURL: s,
adderAPI: i,
api: o + "/1",
adder: i + "/rss",
payURL: o + "/account/subscription",
trialOverURL: o + "/account/subscription?trial_over=yes",
upgradeURL: o + "/account/subscription",
connectURL: o + "/pro?flow=ext",
importURL: o + "/api/feed-imports",
getStartedFeedURL: "https://feeder.co/get-started-feed",
loginUrl: o + "/login?flow=login",
logoutUrl: o + "/logout",
welcomeUrl: o + "/?pro_trial=awesome&ref=welcomeUrl",
termsUrl: o + "/terms?inline=1",
loginStatusURL: o + "/api/feeder/status",
checkURL: o + "/api/feeder/check",
destroyTokenURL: o + "/api/feeder/invalidate-token",
postURL: o + "/api/post/{post_id}?redirect_if_empty=true",
addFeedWithPlugin: o + "/settings/feeds/new/{plugin}?q={query}",
iosURL: "https://itunes.apple.com/us/app/feeder.co-rss-feed-reader/id668210239?mt=8",
installedURL: o + "/installed",
uninstallURL: o + "/uninstalled?c={client_id}&i={installed_at}",
reviewURL: o + "/leave-a-review?c={client_id}&i={installed_at}"
},
pollTimeout: 3e4,
onLoadPollTimeout: 2e3,
retryInitializeTimeout: 3e4,
defaultUpdateInterval: 6e5,
maxConcurrentUpdates: 30,
maxPostsPerFeedFile: 50,
defaultNumPosts: 30,
minNumberOfPosts: 250,
maxNumberOfUnreads: 100,
chanceOfPruneOnCrawl: .1,
feederBlog: "https://feeder.co/blog.rss",
feederNotificationsURL: "http://notifications.feeder.co/rss",
feederNotificationCheckInterval: 216e5,
optionsPageSize: {
width: 1e3,
height: 600
},
popupSize: {
width: 337,
height: 412
},
defaultFavicon: function(e) {
return e ? "https://icons.feedercdn.com/" + new URI(e).domain() : this.defaultFaviconPath;
},
defaultFaviconPath: n.default.assetURL("icons/default-icon.png")
});
}
};
}), System.register("app/ext/platformport", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("app/ext/platformenv", [], function(e, t) {
"use strict";
var n;
t && t.id;
return {
setters: [],
execute: function() {
n = function() {
function e() {
this.events = {}, this.events.connect = [], this.events.message = [];
}
return e.prototype.makeCallback = function(e, t, n) {
return n["_" + e + "originalCallback"] = t, this._getCallbacks(e).push(n), n;
}, e.prototype.getCallback = function(e, t) {
for (var n, o = this._getCallbacks(e), i = 0; n = o[i]; i++) if (n["_" + e + "originalCallback"] === t) return n;
return !1;
}, e.prototype.fireCallback = function(e, t) {
var n = this;
this._getCallbacks(e).forEach(function(e) {
e.apply(n, t);
});
}, e.prototype.removeCallback = function(e, t) {
this._getCallbacks(e).remove(t);
}, e.prototype._getCallbacks = function(e) {
return this.events[e] || [];
}, e;
}(), e("default", n);
}
};
}), System.register("app/ext/uinotifications", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("app/ext/ui", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("app/ext/chrome/env", [ "app/ext/platformenv" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t() {
var t = null !== e && e.apply(this, arguments) || this;
return t.DBAdapter = "function" == typeof window.openDatabase ? "WebSQLDatabase" : "IndexedDBDatabase", 
t;
}
return __extends(t, e), t.prototype.connectToBackground = function() {
return new i();
}, t.prototype.setInstallListener = function(e) {
try {
chrome.runtime.onInstalled.addListener(function(t) {
e(t.reason, t.previousVersion);
});
} catch (e) {
console.error("Could not add install listener", e);
}
}, t.prototype.setUninstallUrl = function(e) {
chrome.runtime.setUninstallURL(e);
}, t.prototype.onBackgroundConnect = function(e) {
var t = this.makeCallback("connect", e, function(t) {
e(new i(t));
});
chrome.runtime.onConnect.addListener(t);
}, t.prototype.removeOnBackgroundConnect = function(e) {
var t = this.getCallback("connect", e);
t && (this.removeCallback("connect", t), chrome.runtime.onConnect.removeListener(t));
}, t.prototype.onMessage = function(e) {
var t = this.makeCallback("message", e, function(t, n) {
e(t, n);
});
chrome.runtime.onMessage.addListener(t);
}, t.prototype.removeOnMessage = function(e) {
var t = this.getCallback("message", e);
t && (this.removeCallback("message", t), chrome.runtime.onMessage.removeListener(t));
}, t.prototype.sendMessageToTab = function(e, t, n) {
n.type = t, chrome.tabs.sendMessage(e, n);
}, t;
}(n.default), i = function() {
function e(e) {
var t = !1;
if (this.customInitializer) try {
this.customInitializer.toString(), t = !0;
} catch (e) {
t = !1;
}
t ? this.customInitializer.call(this, e) : this.port = e || chrome.runtime.connect();
}
return e.prototype.onMessage = function(e) {
this.port.onMessage.addListener(function(t) {
e(t);
});
}, e.prototype.onDisconnect = function(e) {
var t = this;
this.port.onDisconnect.addListener(function() {
e(t);
});
}, e.prototype.postMessage = function(e) {
try {
this.port.postMessage(e);
} catch (e) {
console.error("ChromeENV.postMessage", e), e.message && -1 !== e.message.indexOf("Attempting to use a disconnected") && console.error("Port disconnected!");
}
}, e.prototype.disconnect = function() {
this.port.disconnect();
}, e;
}(), e("ChromePlatformPort", i), e("default", o);
}
};
}), System.register("app/ext/chrome/ui", [], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [],
execute: function() {
n = function() {
function e() {
this.Notifications = new o();
}
return e.prototype.activateTab = function(e) {
chrome.tabs.update(e, {
active: !0
});
}, e.prototype.openTab = function(e, t) {
void 0 === t && (t = !1), chrome.tabs.create({
url: e
}, function(e) {
t && (chrome.tabs.update(e.id, {
active: !0
}), chrome.windows.update(e.windowId, {
focused: !0
}));
});
}, e.prototype.closeTab = function(e) {
chrome.tabs.remove(e);
}, e.prototype.onTabRemoved = function(e) {
chrome.tabs.onRemoved.addListener(e);
}, e.prototype.removeOnTabRemoved = function(e) {
chrome.tabs.onRemoved.removeListener(e);
}, e.prototype.setBadge = function(e) {
chrome.browserAction.setBadgeText({
text: e.toString()
});
}, e.prototype.setBadgeIcon = function(e, t) {
var n = {
path: e
};
t && (n.tabId = t), chrome.browserAction.setIcon(n);
}, e.prototype.currentTab = function() {
return new Promise(function(e, t) {
try {
chrome.tabs.query({
active: !0,
currentWindow: !0
}, function(t) {
e(t[0] || {
id: 0
});
});
} catch (t) {
chrome.tabs.getSelected(null, function(t) {
e(t || {
id: 0
});
});
}
});
}, e.prototype.tabChangeURL = function(e, t) {
chrome.tabs.update(e, {
url: t
});
}, e.prototype.getTab = function(e, t) {
chrome.tabs.get(e, function(e) {
t({
url: e.url,
title: e.title
});
});
}, e.prototype.openPopup = function(e, t) {
var n = window.open(e, "", "width=500,height=400");
t && t(n);
}, e.prototype.getIntentFeedURL = function() {
return !1;
}, e.prototype.setPopupSize = function(e, t) {}, e.prototype.closePopup = function() {}, 
e.prototype.showPopup = function() {}, e.prototype.queryTabsByRegex = function(e) {
return new Promise(function(t) {
chrome.tabs.query({}, function(n) {
var o = n.map(function(e) {
return {
id: e.id,
url: e.url
};
});
t(o.filter(function(t) {
return e.test(t.url);
}));
});
});
}, e.prototype.executeScriptInTab = function(e, t) {
return new Promise(function(n) {
chrome.tabs.executeScript(e, {
code: t
}, function(e) {
n(e);
});
});
}, e;
}(), o = function() {
function e() {
var e = this;
this.image = "/icons/icon48x48.png", this.duration = 1e4, this.clickCallbacks = {}, 
chrome.notifications.onClicked.addListener(function(t) {
e.clickCallbacks[t] && e.clickCallbacks[t](), chrome.notifications.clear(t), delete e.clickCallbacks[t];
}), chrome.notifications.onClosed.addListener(function(t) {
delete e.clickCallbacks[t];
});
}
return e.prototype.show = function(e, t, n, o) {
void 0 === o && (o = {}), o.link = o.link || function() {}, o.keepAlive = o.keepAlive || !1;
var i = n;
try {
chrome.notifications.create(i, {
type: "basic",
title: e,
message: t,
iconUrl: this.image,
silent: !0,
requireInteraction: o.keepAlive
});
} catch (n) {
chrome.notifications.create(i, {
type: "basic",
title: e,
message: t,
iconUrl: this.image
});
}
this.clickCallbacks[i] = function() {
o.link && o.link();
}, setTimeout(function() {
o.keepAlive || chrome.notifications.clear(i);
}, this.duration);
}, e.prototype.can = function() {
return !0;
}, e.prototype.ask = function(e) {
e && e();
}, e;
}(), e("default", n);
}
};
}), System.register("app/ext/platform", [ "app/ext/ext", "app/ext/chrome/env", "app/ext/chrome/ui" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function() {
function e() {
var e = this;
if (n.default.isChrome()) {
if (this.name = "chrome", this.env = new o.default(), this.UI = new i.default(), 
"undefined" != typeof browser && "object" == typeof browser.runtime && "function" == typeof browser.runtime.getBrowserInfo) try {
browser.runtime.getBrowserInfo().then(function(t) {
("Mozilla" === t.vendor || "string" == typeof t.name && -1 !== t.name.toLowerCase().indexOf("fox")) && (e.name = "firefox");
});
} catch (e) {}
} else console.error("Unknown platform!");
}
return e;
}(), e("PlatformContainer", r);
}
};
}), System.register("client/appglobals", [ "app/backend/config", "app/ext/ext" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l, c, u, d;
t && t.id;
return {
setters: [ function(e) {
s = e;
}, function(e) {
a = e;
} ],
execute: function() {
e("Config", s.default), e("Ext", a.default), l = null === (n = a.default.getBackgroundPage()) || void 0 === n ? void 0 : n.app, 
e("app", l), c = null === (o = a.default.getBackgroundPage()) || void 0 === o ? void 0 : o.analytics, 
e("analytics", c), u = null === (i = a.default.getBackgroundPage()) || void 0 === i ? void 0 : i.UI, 
e("UI", u), d = null === (r = a.default.getBackgroundPage()) || void 0 === r ? void 0 : r.Platform, 
e("Platform", d);
}
};
}), System.register("client/init", [ "jquery", "client/appglobals" ], function(e, t) {
"use strict";
function n(e, t) {
a.callbacks.push({
success: e,
error: t || function() {}
});
}
function o() {
i.default(document.body).toggleClass("is-pro", (null === r.app || void 0 === r.app ? void 0 : r.app.user.backend.isPro()) || !1), 
i.default(document.body).toggleClass("is-logged-in", (null === r.app || void 0 === r.app ? void 0 : r.app.user.isLoggedIn()) || !1);
}
var i, r, s, a;
t && t.id;
return e("runOnLoad", n), e("reloadProClasses", o), {
setters: [ function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && window.chrome && !chrome.extension && (chrome.extension = window.parent.chrome.extension), 
s = function() {
function e() {
this.callbacks = [], this.onAppReady = this.onAppReady.bind(this), this.backendShowIsLoading = this.backendShowIsLoading.bind(this), 
this.onDOMLoad = this.onDOMLoad.bind(this), this.doTrackPageView = this.doTrackPageView.bind(this);
}
return e.prototype.start = function() {
return this.errorHide(), this.isFirefoxPrivateWindow() ? void this.firefoxErrorShow() : this.backendDoesntExistYet() ? void this.reloadWaitingForBackendToExist() : (r.Ext.isChrome() && this.chromeFixPortScopingIssues(), 
this.backendIsInBrokenState() ? void this.askBackendToRetryInitialize() : void window.addEventListener("load", this.onDOMLoad, !1));
}, e.prototype.isFirefoxPrivateWindow = function() {
return "undefined" != typeof browser && void 0 !== browser.runtime && "function" == typeof browser.runtime.getBrowserInfo && null === r.Ext.getBackgroundPage();
}, e.prototype.onDOMLoad = function() {
var e;
r.Ext.isMobile() && this.mobileHideScrollBars(), window.isLoaded = !0, setTimeout(function() {
window.isLoadedDone = !0;
}, 50), this.removeLoader(), null === (e = r.Ext.getBackgroundPage()) || void 0 === e || e.onAppReady(this.onAppReady, this.backendShowIsLoading);
}, e.prototype.onAppReady = function() {
o(), this.doTrackPageView(), this.removeLoader(), this.errorHide(), this.fireCallbacks(), 
this.fixStupidChromeScrollbarBug();
}, e.prototype.fireCallbacks = function() {
for (var e = null === r.app || void 0 === r.app ? void 0 : r.app.isFailedState(), t = 0, n = this.callbacks; t < n.length; t++) {
var o = n[t];
e ? o.error() : o.success();
}
}, e.prototype.backendIsInBrokenState = function() {
var e, t = null === (e = r.Ext.getBackgroundPage()) || void 0 === e ? void 0 : e.app;
return t ? t.isFailedState() : t;
}, e.prototype.askBackendToRetryInitialize = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return this.backendShowIsLoading(), r.app ? [ 4, r.app.retryInitialize() ] : [ 3, 2 ];

case 1:
e.sent(), e.label = 2;

case 2:
return (null === r.app || void 0 === r.app ? void 0 : r.app.isFailedState()) ? (this.errorShow(), 
this.removeLoader()) : this.onAppReady(), [ 2 ];
}
});
});
}, e.prototype.mobileHideScrollBars = function() {
i.default(".popup-content").css("min-height", i.default(window).height() + 60), 
window.scrollTo(0, 0);
}, e.prototype.doTrackPageView = function() {
null === r.app || void 0 === r.app || r.app.analytics.collectEvent("pageview", "popup"), 
null === r.analytics || void 0 === r.analytics || r.analytics.trackPageView();
}, e.prototype.chromeFixPortScopingIssues = function() {
var e = r.Ext.getBackgroundPage();
e && (e.ChromePlatformPort.prototype.customInitializer = function(e) {
this.port = e || chrome.runtime.connect();
});
}, e.prototype.backendShowIsLoading = function() {
var e = this, t = document.getElementById("ERROR");
t && (t.style.display = "none");
var n = document.getElementById("backend-is-loading");
if (!n) throw new Error("No loader element found.");
if (this.loader = n, this.loader.style.display = "flex", i.default(document.body).addClass("backend-is-loading"), 
this.isMigrating()) {
var o = this.loader.querySelector(".is-loading-text");
if (o) {
var r = function() {
var t = e.getMigrationStatus();
t ? o.innerHTML = "<h2>Data migration in progress</h2><p>This may take a while, so please wait.<br>Status: " + t.current + " out of " + t.total + " pending items.</p>" : o.textContent = "Done!";
};
r(), this.migrationTimer = window.setInterval(function() {
r();
}, 500);
}
}
this.loaderErrorTimer = window.setTimeout(function() {
e.isMigrating() ? document.location.reload() : (e.removeLoader(), e.errorShow());
}, 2e4);
}, e.prototype.removeLoader = function() {
window.clearTimeout(this.migrationTimer), this.loader && (i.default(document.body).removeClass("backend-is-loading"), 
this.loader.parentNode && this.loader.parentNode.removeChild(this.loader), this.loader = null, 
clearTimeout(this.loaderErrorTimer));
}, e.prototype.getMigrationStatus = function() {
var e = r.Ext.getBackgroundPage();
return !(!e || "object" != typeof e._migrationToRun) && e._migrationToRun;
}, e.prototype.isMigrating = function() {
return !!this.getMigrationStatus();
}, e.prototype.errorHide = function() {
var e = document.getElementById("ERROR");
e && (e.style.display = "none"), i.default(".popup").show();
}, e.prototype.errorShow = function() {
var e = document.getElementById("ERROR");
e && (e.style.display = "block"), i.default(".popup").hide();
}, e.prototype.firefoxErrorShow = function() {
var e = document.getElementById("firefox-and-mozilla-suck-and-are-developer-hostile");
e && (e.style.display = "block"), i.default(".popup").hide();
}, e.prototype.fixStupidChromeScrollbarBug = function() {
i.default("body").hasClass("is-not-standalone") && "undefined" != typeof chrome && chrome.tabs.getZoomSettings(function(e) {
var t = e.defaultZoomFactor;
if (!(t <= 1)) {
var n = 6;
t > 1.5 && (n = 12), t > 1.95 && (n = 16), t > 2.25 && (n = 20);
var o = Math.floor(540 / t) - n * t, i = Math.floor(510 / t) - n * t, r = document.createElement("style");
r.type = "text/css", r.innerHTML = ".platform-chrome .page-scroll-container { max-height: " + o + "px !important; }\n.platform-chrome.in-queue .page-scroll-container,\n.platform-chrome.with-notifications .page-scroll-container { max-height: " + i + "px !important; }\n", 
document.body.appendChild(r);
}
});
}, e.prototype.backendDoesntExistYet = function() {
var e = r.Ext.getBackgroundPage();
return r.Ext.isChrome() && (!e || !e.onAppReady);
}, e.prototype.backendPageHasntEvenLoadedYet = function() {
var e = r.Ext.getBackgroundPage();
return r.Ext.isChrome() && !(null === e || void 0 === e ? void 0 : e.onAppReady);
}, e.prototype.reloadWaitingForBackendToExist = function() {
setTimeout(function() {
document.location.reload();
}, 5e3);
}, e;
}(), a = new s(), e("Init", a), a.start();
}
};
}), System.register("client/backend-imports", [ "app/ext/ext", "app/backend/config" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l, c, u, d, p, f, h, m;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
e("Config", o.default), i = n.default.getBackgroundPage(), r = i ? i.Model : function() {
function e() {}
return e;
}(), e("Model", r), s = i ? i.Feed : function() {
function e() {}
return e;
}(), e("Feed", s), a = i ? i.FeedOnlyUnread : function() {
function e() {}
return e;
}(), e("FeedOnlyUnread", a), l = i ? i.FeedOnlyStarred : function() {
function e() {}
return e;
}(), e("FeedOnlyStarred", l), c = i ? i.PostFetcher : function() {
function e() {}
return e;
}(), e("PostFetcher", c), u = i ? i.Folder : function() {
function e() {}
return e;
}(), e("Folder", u), d = i ? i.Post : function() {
function e() {}
return e;
}(), e("Post", d), p = i ? i.Import : function() {
function e() {}
return e;
}(), e("Import", p), f = i ? i.Application : function() {
function e() {}
return e;
}(), e("Application", f), h = i ? i.Analytics : function() {
function e() {}
return e;
}(), e("Analytics", h), m = i ? i.UserMessage : function() {
function e() {}
return e;
}(), e("UserMessage", m);
}
};
}), System.register("client/eventlistener", [ "client/appglobals" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function() {
function e(e) {
var t = this;
if (this.listeners = {}, this.simpleListeners = {}, this.disable = !1, this.onUnload = function() {
t.port.disconnect(), t.listeners = {}, t.simpleListeners = {};
}, this.onMessage = this.onMessage.bind(this), this.element = e, !n.Platform) return void (this.port = {
postMessage: function() {},
onMessage: function() {},
onDisconnect: function() {},
disconnect: function() {}
});
this.port = n.Platform.env.connectToBackground(), this.port.onMessage(this.onMessage), 
window.addEventListener("unload", this.onUnload, !1);
}
return e.prototype.destroy = function() {
this.port.disconnect(), window.removeEventListener("unload", this.onUnload, !1);
}, e.prototype.onMessage = function(e) {
if (!this.disable) {
var t = e.name.replace(/(:\w)/, function(e) {
return e.charAt(1).toUpperCase();
});
if (this.fireSimpleEvent(e.name, e), "function" == typeof this[t]) {
var o = {};
e.feed && (o.feed = null === n.app || void 0 === n.app ? void 0 : n.app.store.feed(e.feed)), 
e.folder && (o.folder = null === n.app || void 0 === n.app ? void 0 : n.app.store.folder(e.folder)), 
e.post && (o.post = null === n.app || void 0 === n.app ? void 0 : n.app.store.post(e.post)), 
this[t](o);
}
}
}, e.prototype.feedUpdated = function(e) {
this.fireEvent("feed", e.feed);
}, e.prototype.feedAdded = function(e) {}, e.prototype.feedRemoved = function(e) {}, 
e.prototype.postUpdated = function(e) {
this.fireEvent("post", e.post);
}, e.prototype.folderUpdated = function(e) {
this.fireEvent("folder", e.folder);
}, e.prototype.listen = function(e, t) {
this.simpleListeners[e] || (this.simpleListeners[e] = []), this.simpleListeners[e].push(t);
}, e.prototype.unlisten = function(e, t) {
this.simpleListeners[e] && this.simpleListeners[e].remove(t);
}, e.prototype.fireSimpleEvent = function(e, t) {
this.simpleListeners[e] && this.simpleListeners[e].forEach(function(e) {
e(t);
});
}, e.prototype.fireEvent = function(e, t) {
t && this.listeners[e] && this.listeners[e][t.id] && this.listeners[e][t.id].forEach(function(e) {
e(t);
});
}, e.prototype.addModelListener = function(e, t) {
e.id && (this.listeners[e.mapperName] || (this.listeners[e.mapperName] = {}), this.listeners[e.mapperName][e.id] || (this.listeners[e.mapperName][e.id] = []), 
this.listeners[e.mapperName][e.id].push(t));
}, e.prototype.removeModelListener = function(e, t) {
e && e.id && this.listeners[e.mapperName] && this.listeners[e.mapperName][e.id] && this.listeners[e.mapperName][e.id].remove(t);
}, e.prototype.send = function(e, t) {
if (void 0 === window.CustomEvent) {
var n;
document.createEvent ? (n = document.createEvent("HTMLEvents"), n.initEvent(e, !0, !0)) : (n = document.createEventObject(), 
n.eventType = e), n.eventName = e;
for (var o in t) t.hasOwnProperty(o) && (n[o] = t[o]);
return void (document.createEvent ? this.element.dispatchEvent(n) : this.element.fireEvent("on" + n.eventType, n));
}
var n = new CustomEvent(e, t);
n.initCustomEvent(e, !0, !0, t), this.element.dispatchEvent(n);
}, e;
}(), e("default", o);
}
};
}), System.register("client/pui/component", [], function(e, t) {
"use strict";
var n;
t && t.id;
return {
setters: [],
execute: function() {
n = function() {
function e() {}
return e;
}(), e("default", n);
}
};
}), System.register("client/pui/modal", [ "jquery", "client/pui/component", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t() {
var t = e.call(this) || this;
return t.isDestroyed = !1, t.parent = n.default(document.body), t.makeContainer(), 
t;
}
return __extends(t, e), t.onGlobalKeyDown = function(e) {
return !(!t.currentModal || 13 !== e.keyCode) && (e.stopPropagation(), e.preventDefault(), 
t.currentModal.destroy(), t.currentModal = null, !0);
}, t.prototype.destroy = function() {
this.isDestroyed || (n.default(document.body).css("height", ""), this.isDestroyed = !0, 
this.outerContainer.remove(), this.onDestroy());
}, t.prototype.onDestroy = function() {}, t.prototype.onContainerClick = function() {}, 
t.prototype.makeContainer = function() {
var e = this;
this.outerContainer = n.default("<div></div>").addClass("pui-modal-outer").appendTo(this.parent), 
this.container = n.default("<div></div>").addClass("pui-modal").appendTo(this.outerContainer), 
this.outerContainer.on("click", function(t) {
t.target === e.outerContainer[0] && (t.preventDefault(), e.onContainerClick());
}), this.outerContainer.on("click", ".side-close", function(t) {
t.preventDefault(), e.onContainerClick();
});
}, t.prototype.show = function() {
this.outerContainer.show(), this.didResize();
}, t.prototype.setText = function(e) {
var t = this;
this.container.find(".pui-alert-text").html(e.replace(/\n/g, "<br>")).on("click", "a", function(e) {
e.preventDefault(), t.href && (null === i.UI || void 0 === i.UI || i.UI.openTab(t.href));
});
}, t.prototype.didResize = function() {
var e = this.container.prop("scrollHeight"), t = n.default(document.body).height();
n.default(document.body).height(Math.max(e, t));
}, t;
}(o.default), e("default", r);
}
};
}), System.register("client/pui/alert", [ "jquery", "client/pui/modal" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t, o, i) {
void 0 === o && (o = "Okay"), void 0 === i && (i = !1);
var r = e.call(this) || this;
return r.onClick = r.onClick.bind(r), r.onCancel = r.onCancel.bind(r), r.container.addClass("pui-alert"), 
r.container.append(n.default('<div class="pui-alert-text"></div>')), i && r.container.append(n.default('<div class="button--secondary button--100 pui-alert-cancel"></div>').text(i).click(r.onCancel)), 
r.container.append(n.default('<div class="button--primary button--100"></div>').text(o).click(r.onClick)), 
n.default("body").addClass("pui-modal-confirm"), r.setText(t), r;
}
return __extends(t, e), t.alert = function(e, n) {
var i = new t(e);
return i.okCallback = n, i.show(), o.default.currentModal = i, i;
}, t.alertWithButtons = function(e, n, i, r) {
void 0 === n && (n = "Okay"), void 0 === i && (i = !1);
var s = new t(e, n, i);
return s.okCallback = r, s.show(), o.default.currentModal = s, s;
}, t.alertLoader = function(e) {
var n = new t(e);
return n.container.addClass("pui-loading"), n.show(), n;
}, t.alertError = function(e) {
self.alert(e + "\nIf the problem persists, visit <a href='https://feeder.co/support' target=_blank>support</a>");
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), n.default("body").removeClass("pui-modal-confirm"), 
this.okCallback && this.okCallback();
}, t.prototype.onClick = function() {
this.destroy(), this.yesCallback && this.yesCallback();
}, t.prototype.onCancel = function() {
this.destroy(), this.cancelCallback && this.cancelCallback();
}, t.prototype.ok = function(e) {
return this.okCallback = e, this;
}, t.prototype.yes = function(e) {
return this.yesCallback = e, this;
}, t.prototype.no = function(e) {
return this.cancelCallback = e, this;
}, t;
}(o.default), e("default", i);
}
};
}), System.register("client/pui/confirm", [ "jquery", "client/pui/modal" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t, o) {
var i = e.call(this) || this;
return i.keydown = i.keydown.bind(i), i.container.addClass("pui-confirm"), o.length > 2 && i.container.addClass("many-buttons"), 
i.container.append(n.default('<div class="pui-confirm-text"></div>').html(t.replace(/\n/g, "<br>"))), 
n.default("body").addClass("pui-modal-confirm"), o.forEach(function(e, t) {
var r = t === o.length - 1;
n.default('<div class="pui-button ' + (r ? "confirm" : "") + '"></div>').text(e.text).click(function(t) {
i.destroy(), e.callback();
}).appendTo(i.container);
}), n.default(window).on("keydown", i.keydown), i;
}
return __extends(t, e), t.confirm = function(e, n, o) {
void 0 === n && (n = "Yes"), void 0 === o && (o = "No");
var i = new t(e, [ {
text: o,
callback: function() {
i.noCallback && i.noCallback();
}
}, {
text: n,
callback: function() {
i.yesCallback && i.yesCallback();
}
} ]);
return i.show(), i;
}, t.asyncConfirm = function(e, n) {
return new Promise(function(o, i) {
var r = new t(e, n.map(function(e) {
return {
text: e.text,
callback: function() {
o(e.value);
}
};
}));
return r.show(), r;
});
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), n.default("body").removeClass("pui-modal-confirm"), 
n.default(window).off("keydown", this.keydown);
}, t.prototype.keydown = function(e) {
13 === e.keyCode && this.yesClick();
}, t.prototype.yesClick = function() {
this.destroy(), this.yesCallback && this.yesCallback();
}, t.prototype.noClick = function() {
this.destroy(), this.noCallback && this.noCallback();
}, t.prototype.yes = function(e) {
return this.yesCallback = e, this;
}, t.prototype.no = function(e) {
return this.noCallback = e, this;
}, t;
}(o.default), e("default", i);
}
};
}), System.register("client/pui/data", [ "jquery", "client/backend-imports", "client/appglobals" ], function(e, t) {
"use strict";
function n(e, t) {
var n = e.split(" "), o = n.shift(), i = n.join(" ");
if (!o) throw new Error("Invalid datahook definition: " + e);
c[o] || (c[o] = []), c[o].push({
selector: i,
func: t
});
}
function o(e, t) {
u[e] = t;
}
function i(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
return [ 2, u[e.mapperName](e) ];
});
});
}
var r, s, a, l, c, u;
t && t.id;
return e("dataHook", n), e("translateHook", o), e("toTemplate", i), {
setters: [ function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
} ],
execute: function() {
l = function() {
function e(e, t) {
this.variables = {}, this.data = {}, this.ui = {}, this.vc = e, this.modelChanged = this.modelChanged.bind(this), 
t && this.addFromElement(t);
}
return e.prototype.destroy = function() {
this.model && this.vc.listener.removeModelListener(this.model, this.modelChanged);
}, e.prototype.addFromElement = function(e) {
this.element = e, e.store = this;
for (var t = e.querySelectorAll("[data]"), n = 0, o = void 0; o = t[n]; n++) this.add(o);
}, e.prototype.add = function(e) {
for (var t, n = (e.getAttribute("data") || "").split(";"), o = 0; t = n[o]; o++) {
var i = t.split(":");
this.variables[i[0]] = {
el: e,
attr: i[1]
};
}
}, e.prototype.set = function(e, t) {
this.data[e] = t, "htmlClass" === e && this.element && (this.element.className += " " + t);
var n = this.variables[e];
if (n) {
var o = n.el;
if ("text" == n.attr) r.default(o).text(t); else if ("html" == n.attr) r.default(o).html(t); else if ("background-image" == n.attr) r.default(o).css("background-image", "url(" + t + ")"); else if ("src-on-load" == n.attr) {
var i = function() {
window.removeEventListener("load", s, !1);
var e = new Image();
e.onload = function() {
o.setAttribute("src", t), delete e.onload, delete e.onerror;
}, e.onerror = function() {
o.setAttribute("src", t), delete e.onload, delete e.onerror;
}, e.src = t;
}, s = function() {
setTimeout(function() {
return i();
}, 50);
};
a.Ext.isChrome() ? window.isLoadedDone ? o.setAttribute("src", t) : window.isLoaded ? setTimeout(function() {
return i();
}, 50) : window.addEventListener("load", s, !1) : o.setAttribute("src", t);
} else o.setAttribute(n.attr, t);
var l = document.createEvent("HTMLEvents");
l.initEvent("data:change", !0, !0), o.dispatchEvent(l), this.runHook(o, e, t);
}
}, e.prototype.runHook = function(e, t, n) {
if (c[t]) {
var o = r.default(e);
c[t].forEach(function(t) {
o.is(t.selector) && t.func(n, e);
});
}
}, e.prototype.setModel = function(e) {
return this.model = e, this.vc.listener.addModelListener(e, this.modelChanged), 
this.setFromModel();
}, e.prototype.setFromModel = function() {
return __awaiter(this, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
if (!this.model) throw new Error("Could not call setFromModel without model.");
return [ 4, i(this.model) ];

case 1:
return e = t.sent(), this.setMany(e), [ 2 ];
}
});
});
}, e.prototype.setMany = function(e) {
if (e instanceof s.Model) return this.setModel(e);
for (var t in e) e.hasOwnProperty(t) && this.set(t, e[t]);
return Promise.resolve();
}, e.prototype.get = function(e) {
return this.data[e];
}, e.prototype.modelChanged = function(e) {
this.model = e, this.setFromModel();
}, e;
}(), c = {}, u = {}, e("default", l);
}
};
}), System.register("client/pui/events", [ "jquery", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function() {
function e(e, t) {
this.paused = !1, this.element = e, this.callbackObject = t;
}
return e.prototype.pause = function() {
this.paused, this.paused = !0;
}, e.prototype.unpause = function() {
this.paused = !1;
}, e.prototype.add = function(e) {
for (var t in e) e.hasOwnProperty(t) && this.addEvent(t, e[t]);
}, e.prototype.addEvent = function(t, i) {
function r(e, t) {
c ? u.on(e, c, t) : u.on(e, t);
}
var s = this, a = t.split(" "), l = a.shift() || "", c = a.join(" "), u = n.default(this.element), d = {};
if ("click-or-touch" === l && (l = o.Ext.isMobile() ? "touchend" : "click", o.Ext.isMobile())) {
r("touchstart", function() {
function t() {
e.metaObj.abort = !0;
}
function o() {
n.default(window).off("touchmove", t).off("touchend", o);
}
n.default(window).on("touchmove", t).on("touchend", o).on("scroll", o);
});
}
r(l, this.delegateEventFor(function() {
for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
return (e = s.callbackObject)[i].apply(e, t);
}, i, l, d));
}, e.prototype.delegateEventFor = function(t, n, o, i) {
var r = this;
if ("function" != typeof t) throw new Error("event callback method not found: " + n);
return function(n) {
if ("click" !== o && "touchend" !== o || n.preventDefault(), !0 === e.metaObj.abort) return n.stopPropagation(), 
void (e.metaObj.abort = !1);
if (r.paused) return void console.log("event happened when paused");
var i = n;
if (i.item = r.fetchDataStoreFromEvent(n), i.originalEvent && i.originalEvent.detail) for (var s in i.originalEvent.detail) i.originalEvent.detail.hasOwnProperty(s) && (i[s] = i.originalEvent.detail[s]);
t(i);
};
}, e.prototype.fetchDataStoreFromEvent = function(e) {
var t = e.target;
do {
if (t.store) return t.store;
} while (t = t.parentElement);
return this.callbackObject.template.data;
}, e.metaObj = {
abort: !1
}, e;
}(), e("default", i);
}
};
}), System.register("client/pui/linkqueue", [ "jquery", "client/pui/component", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t(t) {
var o = e.call(this) || this;
return o.queue = [], o.listeners = [], o.element = n.default(t), o.closeElement = o.element.find(".close"), 
o.numElement = o.element.find(".num"), o.pluralElement = o.element.find(".one"), 
o.setCount(), o.closeElement.on("click", function(e) {
return o.closeClick(e);
}), o.element.on("click", function(e) {
return o.pump();
}), o;
}
return __extends(t, e), t.prototype.destroy = function() {
delete this.element, delete this.closeElement, delete this.numElement, delete this.pluralElement, 
this.listeners = [];
}, t.prototype.setListener = function(e) {
this.listeners.push(e);
}, t.prototype.removeListener = function(e) {
this.listeners.remove(e);
}, t.prototype.toggle = function(e) {
return this.queue.contains(e) ? this.remove(e) : this.add(e);
}, t.prototype.add = function(e) {
return !this.queue.contains(e) && (this.queue.push(e), this.setCount(), this.fireListener(e, !0), 
!0);
}, t.prototype.remove = function(e) {
return this.queue.remove(e), this.setCount(), this.fireListener(e, !1), !1;
}, t.prototype.fireListener = function(e, t) {
this.listeners.forEach(function(n) {
n(e, t);
});
}, t.prototype.setCount = function() {
this.numElement.text(this.queue.length), 1 === this.queue.length ? this.pluralElement.hide() : this.pluralElement.show(), 
0 === this.queue.length ? this.element.hide() : this.element.show(), n.default(document.body).toggleClass("in-queue", !!this.queue.length);
}, t.prototype.contains = function(e) {
return this.queue.contains(e);
}, t.prototype.closeClick = function(e) {
e.preventDefault(), e.stopPropagation(), this.close();
}, t.prototype.close = function() {
var e = this;
this.queue.slice(0).forEach(function(t) {
e.remove(t);
}), this.queue = [];
}, t.prototype.pump = function() {
if (!this.isEmpty()) {
var e = this.queue.slice(0);
this.close(), null === i.app || void 0 === i.app || i.app.ui.openManyById(e);
}
}, t.prototype.isEmpty = function() {
return !this.queue.length;
}, t;
}(o.default), e("default", r);
}
};
}), System.register("client/pui/prompt", [ "jquery", "client/pui/confirm" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var o = e.call(this, t, [ {
text: "Cancel",
callback: function() {
o.noCallback && o.noCallback();
}
}, {
text: "OK",
callback: function() {
o.yesCallback && o.yesCallback();
}
} ]) || this;
o.container.addClass("pui-confirm");
var i = o.container.find(".pui-confirm-text");
return o.input = n.default('<div class="pui-prompt-text"><input type="text" /></div>').insertAfter(i).find("input"), 
o.input.on("keydown", function(e) {
return o.onKeyDown(e);
}), o;
}
return __extends(t, e), t.prompt = function(e) {
var n = new t(e);
return n.show(), n;
}, t.prototype.onKeyDown = function(e) {
13 === e.keyCode && (e.preventDefault(), e.stopPropagation(), this.input.val().length > 0 && this.yesClick());
}, t.prototype.show = function() {
e.prototype.show.call(this), this.input.focus();
}, t.prototype.yesClick = function() {
this.destroy(), this.promptCallback && this.promptCallback(this.input.val());
}, t.prototype.done = function(e) {
this.promptCallback = e;
}, t;
}(o.default), e("default", i);
}
};
}), System.register("client/pui/screenmodal", [ "client/pui/modal" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
var n = e.call(this) || this;
return n.autoWidth = !1, n.canClose = !0, n.translucent = !1, n.white = !1, n.factory = t, 
n;
}
return __extends(t, e), t.prototype.show = function() {
e.prototype.show.call(this), this.instance = this.factory(), this.instance.modal = this, 
this.container.append(this.instance.template.container), this.autoWidth && this.container.addClass("auto-width"), 
this.translucent && this.container.addClass("translucent"), this.white && (this.container.addClass("white"), 
this.outerContainer.addClass("white")), this.instance.onVisible();
}, t.prototype.onContainerClick = function() {
this.canClose && (e.prototype.destroy.call(this), this.destroy());
}, t;
}(n.default), e("default", o);
}
};
}), System.register("client/pui/twophasemodal", [ "jquery", "client/pui/component" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var o = e.call(this) || this;
return o.setupSizes = o.setupSizes.bind(o), o.el = n.default(t), o.setupSizes(), 
n.default(window).on("resize", o.setupSizes), o;
}
return __extends(t, e), t.prototype.destroy = function() {
n.default(window).off("resize", this.setupSizes);
}, t.prototype.setupSizes = function() {
var e = this.el.width();
if (this.el.find(".phase").width(e), void 0 !== this.activePage) {
var t = e * this.activePage;
this.el.find(".two-phase-modal-inner").css("margin-left", -t);
}
}, t.prototype.gotoPage = function(e) {
this.activePage = e, this.setupSizes();
}, t;
}(o.default), e("default", i);
}
};
}), System.register("client/pui/pui", [ "client/pui/alert", "client/pui/confirm", "client/pui/events", "client/pui/linkqueue", "client/pui/modal", "client/pui/prompt", "client/pui/screenmodal", "client/pui/twophasemodal" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l, c, u;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
l = e;
}, function(e) {
c = e;
} ],
execute: function() {
u = {
Alert: n.default,
Confirm: o.default,
Events: i.default,
LinkQueue: r.default,
Modal: s.default,
Prompt: a.default,
ScreenModal: l.default,
TwoPhaseModal: c.default,
get: function(e) {
return this[e];
}
}, e("default", u);
}
};
}), System.register("client/pui/template", [ "jquery", "client/pui/pui", "client/pui/data" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function() {
function e(e, t) {
if (void 0 === t && (t = {}), this.root = document.getElementById(e), !this.root) throw new Error(e + " template not found");
this.makeContainer(t), this.prepare(), this.stores = [], this.many = {}, this.element = n.default(this.container);
}
return e.prototype.destroy = function() {
this.many = {}, this.data && this.data.destroy(), this.stores.forEach(function(e) {
e.destroy();
}), this.container.parentNode && this.container.parentNode.removeChild(this.container);
}, e.prototype.prepareVariables = function(e) {
this.data = new i.default(e), this.vc = e;
for (var t = this.container.querySelectorAll("[data]"), n = 0, o = void 0; o = t[n]; n++) this.addVariableFromElement(o);
for (var r = this.container.querySelectorAll("[many]"), n = 0, o = void 0; o = r[n]; n++) this.addManyFromElement(o);
}, e.prototype.getComponents = function(e) {
for (var t = (e || this.container).querySelectorAll("[pui]"), n = {}, i = 0, r = void 0; r = t[i]; i++) {
var s = (r.getAttribute("key") || "").replace(/(-\w)/g, function(e) {
return e.charAt(1).toUpperCase();
}), a = o.default.get(r.getAttribute("pui") || "");
if (!a) throw new Error("Could not find component for " + s);
n[s] = new a(r);
}
return n;
}, e.prototype.getControllers = function() {
var e = this;
this.controllers = {};
var t = this.container.querySelectorAll("controller");
return [].slice.call(t).forEach(function(t) {
e.parseController(t);
}), this.controllers;
}, e.prototype.addVariableFromElement = function(e) {
e.getParents().some(function(e) {
return "string" == typeof e.getAttribute("many");
}) || this.data.add(e);
}, e.prototype.addManyFromElement = function(e) {
var t = document.createElement("div");
t.className = "placeholder", e.parentNode && e.parentNode.replaceChild(t, e);
var n = e.getAttribute("many");
if (!n) throw new Error('Trying to parse "many" key with empty attribute.');
this.many[n] = {
reference: e,
placeholder: t
};
}, e.prototype.makeContainer = function(e) {
function t(e, t, n) {
"class" === t ? e.className = (e.className + " " + n).trim() : e.setAttribute(t, n);
}
void 0 === e && (e = {});
var n = this.root ? this.root.getAllAttributes() : {};
if (this.container = document.createElement("div"), this.temp = document.createElement("tmp"), 
this.root && (this.temp.innerHTML = this.root.innerHTML), n.id.contains("screen#") ? (this.innerContainer = document.createElement("div"), 
this.container.appendChild(this.innerContainer)) : this.innerContainer = this.container, 
delete e.from, n.id) {
var o = "tpl-" + n.id.replace("#", "-");
n.class = n.class ? n.class + " " + o : o, delete n.id;
}
for (var i = 0, r = Object.keys(e); i < r.length; i++) {
var s = r[i];
t(this.container, s, e[s]);
}
for (var a = 0, l = Object.keys(n); a < l.length; a++) {
var s = l[a];
t(this.container, s, n[s]);
}
this.innerContainer.cloneChildrenFrom(this.temp);
}, e.prototype.prepare = function() {
this.traverseAndParse(this.container);
}, e.prototype.traverseAndParse = function(e) {
var t = this;
e.forEachElement(function(e) {
t.parseChild(e);
});
}, e.prototype.parseChild = function(e) {
"TPL" === e.tagName ? this.parseTPL(e) : this.traverseAndParse(e);
}, e.prototype.parseTPL = function(t) {
var n = t.getAttribute("from");
if (!n) throw new Error('Trying to parse "from" with empty attribute.');
var o = new e(n, t.getAllAttributes());
t.parentNode ? t.parentNode.replaceChild(o.container, t) : console.error("Parsing template into empty parent.");
}, e.prototype.parseController = function(e) {
var t = e.getAttribute("name");
if (!t) throw new Error('Parsing "name" attribute of controller where empty.');
var n = this.vc.controllerInjector(t);
if (!n) throw new Error("Controller Screen. " + t + " not found");
var o = this.toKey(t), i = new n(this.vc);
this.controllers[o] = i, e.parentNode ? e.parentNode.replaceChild(i.template.container, e) : console.error("Parsing into empty element."), 
i.onVisible();
}, e.prototype.toKey = function(e) {
return e.replace(/^./, function(e) {
return e.toLowerCase();
});
}, e.prototype.set = function(e, t) {
this.data.set(e, t);
}, e.prototype.setItems = function(e, t) {
if (!this.many[e]) throw new Error("Could not set many " + e + ", not found");
this.stores.forEach(function(e) {
e.destroy();
}), this.stores = [];
var n = this.many[e];
n.placeholder.forEachElement(function(e) {
e.store && e.store.destroy();
});
for (var o = document.createDocumentFragment(); t.length; ) this.addItem(e, t.shift(), o);
n.placeholder.clearChildren(), n.placeholder.appendChild(o);
}, e.prototype.addItem = function(e, t, n, o) {
var r = this.many[e], s = r.reference.cloneNode(!0);
this.stores.length % 2 == 1 && (s.className += " odd"), n = n || r.placeholder;
var a = new i.default(this.vc, s);
return a.reference = t, a.setMany(t).then(o), this.stores.push(a), a.ui = this.getComponents(s), 
n.appendChild(s), a;
}, e.prototype.el = function(e) {
return this.element.find(e);
}, e;
}(), e("default", r);
}
};
}), System.register("client/library/keyboard-navigation", [ "jquery" ], function(e, t) {
"use strict";
function n(e) {
return !!i(e) && !!p[e.keyCode];
}
function o(e) {
return !!i(e) && !!f[e.keyCode];
}
function i(e) {
return 0 === u.default(e.target).closest("input, textarea, a").length;
}
function r(e) {
return p[e.keyCode];
}
function s(e) {
return f[e.keyCode];
}
function a(e, t) {
if (!(e.ctrlKey || e.metaKey || e.altKey) && (n(e) || o(e))) {
e.preventDefault();
var i = r(e), a = s(e);
"up" === i ? t.historyPrevious() : "down" === i ? t.historyNext() : "forward" === i ? t.navForward() : "back" === i ? t.navBack() : a && t.performKeyboardAction(a);
}
}
var l, c, u, d, p, f;
t && t.id;
return e("validNavigationEvent", n), e("validActionEvent", o), e("canOverrideKeyboardEvent", i), 
e("eventNavigationDirection", r), e("eventNavigationAction", s), e("onKeyDownEvent", a), 
{
setters: [ function(e) {
u = e;
} ],
execute: function() {
e("KEYS", d = {
BACKSPACE: 8,
ESCAPE: 27,
ENTER: 13,
SPACE: 32,
LEFT: 37,
UP: 38,
RIGHT: 39,
DOWN: 40,
F: 70,
H: 72,
J: 74,
K: 75,
L: 76,
N: 78,
M: 77,
P: 80,
Q: 81,
R: 82,
S: 83,
T: 84
}), e("NAVIGATION_KEYS", (l = {}, l[d.BACKSPACE] = "back", l[d.ENTER] = "forward", 
l[d.SPACE] = "forward", l[d.UP] = "up", l[d.DOWN] = "down", l[d.H] = "back", l[d.J] = "down", 
l[d.K] = "up", l[d.L] = "forward", p = l)), e("KEYBOARD_KEYS", (c = {}, c[d.RIGHT] = "column-next", 
c[d.LEFT] = "column-previous", c[d.S] = "star", c[d.M] = "star", c[d.N] = "read", 
c[d.R] = "read", c[d.F] = "toggle-readability", c[d.ESCAPE] = "close", c[d.Q] = "queue", 
c[d.T] = "next-tab", c[d.P] = "post-collections", f = c));
}
};
}), System.register("client/controller", [ "client/pui/template", "client/pui/events", "client/pui/confirm", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
s = 20, a = function() {
function e(e) {
this.onDone = !1, this.lastScroll = 0, this.vc = e, this.created = Date.now(), this.template = new n.default(this.templateName()), 
this.template.prepareVariables(this.vc), this.ui = this.template.getComponents(), 
this.event = new o.default(this.template.container, this), this.event.add(this.events()), 
this.addStandardEvents(), this.setupPerfectScrollbar();
}
return e.prototype.destroy = function() {
this.template.destroy();
}, e.prototype.setupPerfectScrollbar = function() {
var e = this, t = this.template.container.querySelector(".page-scroll-container");
t && !r.Ext.isMobile() && (this.perfectScrollbar = new window.PerfectScrollbar(t), 
t.addEventListener("ps-scroll-y", function() {
e.lastScroll = e.getCurrentScroll();
}));
}, e.prototype.onVisible = function() {}, e.prototype.onCurrent = function() {}, 
e.prototype.onOff = function() {}, e.prototype.onPopupVisible = function() {}, e.prototype.onFeedConnectChanged = function() {}, 
e.prototype.navigateTo = function(e) {}, e.prototype.navNext = function(e) {}, e.prototype.navPrevious = function(e) {}, 
e.prototype.navForward = function(e) {}, e.prototype.navBack = function() {}, e.prototype.setCurrentNavFromItem = function(e) {}, 
e.prototype.callbackAfterAnimation = function(e) {
for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
this.vc.addAnimationDoneCallback(e, t);
}, e.prototype.addStandardEvents = function() {
this.event.addEvent("click-or-touch .back, .escape", "back"), this.event.addEvent("click .get-feeder-pro", "getFeederPro"), 
this.event.addEvent("click .feeder-online", "openOnline"), this.event.addEvent("click .settings", "openSettingsPage");
}, e.prototype.openOnline = function(e) {
e.preventDefault(), (null === r.app || void 0 === r.app ? void 0 : r.app.user.isPro()) ? null === r.UI || void 0 === r.UI || r.UI.openTab(r.Config.feeder.root) : (null === r.app || void 0 === r.app ? void 0 : r.app.user.isLoggedIn()) ? null === r.UI || void 0 === r.UI || r.UI.openTab(r.Config.feeder.upgradeURL) : null === r.UI || void 0 === r.UI || r.UI.openTab(r.Config.feeder.connectURL);
}, e.prototype.back = function(e) {
e && (e.preventDefault(), e.stopPropagation()), this.vc.popScreen();
}, e.prototype.clearAllUnread = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return r.app ? [ 4, r.app.user.unreads.count() ] : [ 2 ];

case 1:
return e = n.sent(), [ 4, l(e) ];

case 2:
return (t = n.sent()) ? (this.disableEvents(), [ 4, r.app.user.unreads.clearAll() ]) : [ 2 ];

case 3:
return n.sent(), this.enableEvents(), this.vc.currentScreen.onClearAllUnread(), 
[ 4, this.vc.currentScreen.populate() ];

case 4:
return n.sent(), r.app.analytics.collectEvent("mark-all-as-read", "all"), [ 2 ];
}
});
});
}, e.prototype.onClearAllUnread = function() {}, e.prototype.populate = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2 ];
});
});
}, e.prototype.getFeederPro = function(e) {
e && (e.preventDefault(), e.stopPropagation()), null === r.UI || void 0 === r.UI || r.UI.openTab(r.Config.feeder.connectURL), 
null === r.UI || void 0 === r.UI || r.UI.closePopup();
}, e.prototype.disableEvents = function() {
this.vc.listener.disable = !0;
}, e.prototype.enableEvents = function() {
this.vc.listener.disable = !1;
}, e.prototype.openSettingsPage = function() {
this.vc.openSettingsPage("/feeds");
}, e.prototype.saveScroll = function() {
this.lastScroll = this.getCurrentScroll();
}, e.prototype.getCurrentScroll = function() {
return this.perfectScrollbar ? this.perfectScrollbar.element.scrollTop : 0;
}, e.prototype.getLastScroll = function() {
return this.lastScroll;
}, e.prototype.tryToRestoreScroll = function() {
this.lastScroll && (this.perfectScrollbar.element.scrollTop = this.lastScroll);
}, e.prototype.performKeyboardAction = function(e) {}, e.prototype.showDeckSettings = function(e) {}, 
e;
}(), e("default", a), l = function(e) {
return __awaiter(void 0, void 0, void 0, function() {
var t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return e > s && "suppress" !== (null === r.app || void 0 === r.app ? void 0 : r.app.user.preferences.get("ask:markMany")) ? [ 4, i.default.asyncConfirm("Are you sure you want to<br>mark <b>" + e + " posts</b> as read?", [ {
text: "Cancel",
value: "cancel"
}, {
text: "Yes",
value: "yes"
} ]) ] : [ 3, 2 ];

case 1:
switch (t = n.sent()) {
case "yes":
return [ 2, !0 ];

case "cancel":
return [ 2, !1 ];
}
n.label = 2;

case 2:
return [ 2, !0 ];
}
});
});
}, e("askMarkManyAsRead", l);
}
};
}), System.register("client/components/FeederIcon", [ "react" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = {
checkmark: '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19.5984032 6.34444824.0362419.03939341-8.8518966 12.24524515-.0037424-.0033484c-.0100453.011621-.0169392.0250148-.0273784.0364389-.562144.6111887-1.45873809.6267491-2.04648779.059484l-.00374238.0043333-.02324211-.0283633c-.01339376-.0133937-.02875719-.0228482-.04175702-.0368328-.04825693-.0525902-.08646854-.1112864-.12664982-.1686038l-3.99981008-4.8804498c-.01043926-.0108332-.02284818-.0185149-.0328935-.029939-.54126548-.5993708-.52728082-1.5536762.0317117-2.1311836.55859858-.5775074 1.45026846-.5597804 1.99153394.0397873.05219627.0577114.09474115.1213318.13649817.1851491l3.03979264 3.4829685 8.81841225-10.01419926.029545.03210563c.2970264-.31849574.7750654-.31770787 1.070516.00374237.2954506.32125328.2962385.84124632.0033485 1.1642723" fill="#979797"/></svg>',
"arrow-up-small": '<svg class="feeder-icon" aria-hidden=true  height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 10.2728932-2.14644661-2.14644657c-.19526215-.19526215-.51184463-.19526215-.70710678 0-.19526215.19526214-.19526215.51184463 0 .70710678l3.02493781 3.02493779c.19526215.1952622.51184464.1952622.70710678 0l3.0000622-3.00006217c.1952621-.19526214.1952621-.51184463 0-.70710678-.1952622-.19526215-.5118446-.19526215-.7071068 0l-2.1714466 2.17144665v-5.34276888c0-.27614238-.22385763-.5-.5-.5s-.5.22385762-.5.5z" fill="#979797" transform="matrix(1 0 0 -1 0 16.485)"/></svg>',
"arrow-down-small": '<svg class="feeder-icon" aria-hidden=true  height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 9.79289322-2.14644661-2.14644661c-.19526215-.19526215-.51184463-.19526215-.70710678 0s-.19526215.51184463 0 .70710678l3.02493781 3.02493781c.19526215.1952621.51184464.1952621.70710678 0l3.0000622-3.00006219c.1952621-.19526214.1952621-.51184463 0-.70710678-.1952622-.19526214-.5118446-.19526214-.7071068 0l-2.1714466 2.17144661v-5.34276884c0-.27614237-.22385763-.5-.5-.5s-.5.22385763-.5.5z" fill="#979797"/></svg>',
"more-small": '<svg class="feeder-icon" aria-hidden=true  height="2" viewBox="0 0 10 2" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m5 0c.55228475 0 1 .44771525 1 1 0 .55228475-.44771525 1-1 1s-1-.44771525-1-1c0-.55228475.44771525-1 1-1zm4 0c.55228475 0 1 .44771525 1 1 0 .55228475-.44771525 1-1 1s-1-.44771525-1-1c0-.55228475.44771525-1 1-1zm-8 0c.55228475 0 1 .44771525 1 1 0 .55228475-.44771525 1-1 1s-1-.44771525-1-1c0-.55228475.44771525-1 1-1z" fill="#707070" fill-rule="evenodd"/></svg>',
"star-filled": '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.9390596 20.203454c-.1162292 0-.2579102-.0373291-.419104-.1535583l-4.3725958-3.1076481c-.0610839-.041571-.2027649-.0424194-.2630005.0008484l-4.37259569 3.1076481c-.35971684.2570618-.62186897.1272583-.71688851.0585388-.09671632-.0678711-.30796512-.274878-.18240358-.7084046l1.50843523-5.2540717c.02545166-.0848389-.02205811-.2417908-.08823243-.2935425l-4.21309863-3.3350163c-.34868779-.2774231-.29778446-.56672366-.26045535-.67786259.0373291-.11113893.17137453-.36904911.60659797-.37922978l5.30752014-.14083253c.06956788-.00169678.19173586-.08908082.21973269-.17222292l1.76804216-5.16838439c.1459229-.42589116.4369203-.47170415.5548463-.47170415s.4089234.04581299.5548462.47170415l1.7680422 5.167536c.0288453.08399049.1510132.17137453.218036.17307131l5.3109137.14083253c.4352234.01018067.5684204.26809085.6057495.37922978s.0882325.40043949-.2604553.67701429l-4.2122503 3.3358646c-.0661743.0517517-.1136841.209552-.0899292.2943909l1.5092837 5.2540716c.1264099.4326783-.0856873.6396852-.1815552.7075563-.0534485.0381775-.156952.0941711-.2994813.0941711" fill="#8c8c8c" fill-rule="evenodd"/></svg>',
"star-outline": '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9.27147391 9.300825c-.0017.0051-.0034.0102-.0051.01445zm-1.4535 4.6223c-.0017.00425-.00255.00935-.00425.0136zm8.23224999.4046-.00255.00255c.00085-.00085.0017-.0017.00255-.00255zm-8.09794999.0017c.00085.00085.0017.00085.00255.0017zm4.30014999 2.8492-.00765.0051c.00255-.0017.0051-.00255.00765-.0051zm-.2533-1.1849c.17085 0 .3417.04675.48025.1411l3.7774 2.6843-1.3005-4.54325c-.09265-.33405.03655-.73865.3009-.9469l3.6499-2.89-4.59595-.1258c-.32895-.0085-.67405-.2669-.7854-.58735l-1.52405-4.45315-1.52745 4.4523c-.10795.3196-.45475.58055-.78794999.5882l-4.59085.1224 3.64905 2.8951c.26265.20655.39355.62475.29665.9503l-1.3022 4.53645 3.77059999-2.67495c.1377-.09945.3128-.14875.4896-.14875zm-4.50924999 4.2942c-.25585 0-.48195-.08755-.64855-.20825-.31535-.22185-.5933-.6953-.40545-1.34215l1.31155-4.57045-3.65415-2.8934c-.52105-.41395-.57205-.95625-.4471-1.32515.1224-.36635.48875-.765 1.14495-.7803l4.56705-.12155 1.52999999-4.471c.2176-.63665.71655-.8636 1.11095-.8636.39525 0 .8942.22695 1.1118.8636l1.53 4.471 4.5713.12155c.6511.01445 1.01745.4131 1.1424.7803.1241.37145.0714.91205-.44625 1.3243l-3.6567 2.8951 1.31325 4.5713c.18785.64345-.08925 1.1169-.4114 1.3447-.391.27965-.94435.2686-1.39655-.05525l-3.757-2.6707-3.75869999 2.67155c-.2601.18615-.51765.2584-.7514.2584z" fill="#979797" fill-rule="evenodd"/></svg>',
"checked-badge": '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.946 9.688-4.321 6.012c-.399.385-1.046.385-1.446 0l-1.892-1.788c-.399-.385-.399-1.009 0-1.394s1.047-.385 1.446 0l1.132 1.07 4.196-4.393c.12-.202.417-.256.661-.119.245.136.345.41.224.612m.054-5.688h-8c-1.104 0-2 .895-2 2v12c0 1.105.896 2 2 2h8c1.105 0 2-.895 2-2v-12c0-1.105-.895-2-2-2" fill="#979797" fill-rule="evenodd"/></svg>',
"small-close": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n  <path fill="#8C8C8C" fill-rule="evenodd" d="M12,12 L6.49374104,12 C6.22563934,12 6,12.2238576 6,12.5 C6,12.7680664 6.22105539,13 6.49374104,13 L12,13 L12,18.506259 C12,18.7743607 12.2238576,19 12.5,19 C12.7680664,19 13,18.7789446 13,18.506259 L13,13 L18.506259,13 C18.7743607,13 19,12.7761424 19,12.5 C19,12.2319336 18.7789446,12 18.506259,12 L13,12 L13,6.49374104 C13,6.22563934 12.7761424,6 12.5,6 C12.2319336,6 12,6.22105539 12,6.49374104 L12,12 Z" transform="rotate(45 12.5 12.5)"/>\n</svg>\n',
"open-in": '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="#979797" fill-rule="evenodd"><path d="m16.1568542 7h-2.6568542c-.2761424 0-.5-.22385763-.5-.5 0-.27614237.2238576-.5.5-.5h4c.1380712 0 .2630712.05596441.3535534.14644661s.1464466.2154822.1464466.35355339v4c0 .2761424-.2238576.5-.5.5s-.5-.2238576-.5-.5v-2.92893219l-6.1464466 6.14644659c-.1952622.1952622-.5118446.1952622-.7071068 0-.19526214-.1952621-.19526214-.5118446 0-.7071068z"/><path d="m14 8h-2v.5.5h2c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1v-2h-.5-.5v2c0 1.105.895 2 2 2h6c1.105 0 2-.895 2-2v-6c0-1.105-.895-2-2-2" transform="matrix(0 1 -1 0 24 2)"/><path d="m10.5 8.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5.224.5.5.5.5-.224.5-.5m5 5c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5"/></g></svg>',
"small-wrench": '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6.33411078 11.8555545c1.24251751 1.2425175 3.15143996 1.4910149 4.66457762.6438486l.4284949-.2399032.3175349.3746106 4.508086 5.321517c.470062.4700619 1.231957.4700619 1.702019 0 .4700619-.470062.4700619-1.231957.0360714-1.6687996l-5.7321136-4.8587679.2397526-.4284509c.8472177-1.514024.5987995-3.42211112-.6439555-4.66486618-.8641647-.86487074-2.06121859-1.26020063-3.24346409-1.11199962l.90557595.90557607c1.04125504 1.04246864.90955974 2.77260646-.30494209 3.64751927-.95705325.68851046-2.30227358.52271506-3.151977-.3269884l-.83688659-.83688766c-.14819899 1.1830249.24661137 2.37897682 1.1112265 3.24359192zm-.84312807.8431281c-1.21597003-1.2159701-1.72064333-2.93618268-1.3935975-4.59237632.1617506-.82135732 1.18185706-1.12214821 1.77233524-.53376259l1.03317849 1.03317848c.45056126.45056127 1.14783744.53649904 1.61221093.2024258.61590355-.44368974.68203643-1.31250561.15820657-1.83694613l-1.10067708-1.10067708c-.58913181-.58913181-.28932955-1.60921849.53286261-1.77323522 1.65604648-.32701677 3.37730943.17843786 4.59237633 1.39449748 1.5033851 1.50338519 1.8923486 3.75177451 1.0621794 5.64590478l5.0378935 4.2727887c.9357088.9357087.9357088 2.4525663 0 3.388275-.9357087.9357088-2.4525663.9357088-3.4214944-.0360715l-4.239649-5.0017103c-1.89352892.8300553-4.14255934.4409746-5.64582509-1.0622911z" fill="#979797"/></svg>',
"filter-small": '<svg class="feeder-icon" aria-hidden=true  height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="#979797" fill-rule="evenodd"><path d="m3 5.5c0-.27614237.22765279-.5.50964952-.5h8.98070098c.2814716 0 .5096495.23193359.5096495.5 0 .27614237-.2276528.5-.5096495.5h-8.98070098c-.28147166 0-.50964952-.23193359-.50964952-.5z"/><path d="m5 8.5c0-.27614237.22788048-.5.49100518-.5h5.01798962c.2711747 0 .4910052.23193359.4910052.5 0 .27614237-.2278805.5-.4910052.5h-5.01798962c-.27117467 0-.49100518-.23193359-.49100518-.5z"/><path d="m7 11.5c0-.2761424.21403503-.5.50468445-.5h.9906311c.27872953 0 .50468445.2319336.50468445.5 0 .2761424-.21403503.5-.50468445.5h-.9906311c-.27872953 0-.50468445-.2319336-.50468445-.5z"/></g></svg>',
"all-posts": '<svg class="feeder-icon" aria-hidden=true  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\n  <path fill="#707070" fill-rule="evenodd" d="M0,4 C0,3.44771525 0.444630861,3 1.00087166,3 L14.9991283,3 C15.5518945,3 16,3.44386482 16,4 C16,4.55228475 15.5553691,5 14.9991283,5 L1.00087166,5 C0.448105505,5 0,4.55613518 0,4 Z M0,8 C0,7.44771525 0.453036308,7 0.997030139,7 L7.00296986,7 C7.5536144,7 8,7.44386482 8,8 C8,8.55228475 7.54696369,9 7.00296986,9 L0.997030139,9 C0.446385598,9 0,8.55613518 0,8 Z M0,12 C0,11.4477153 0.455760956,11 1.00247329,11 L10.9975267,11 C11.5511774,11 12,11.4438648 12,12 C12,12.5522847 11.544239,13 10.9975267,13 L1.00247329,13 C0.448822582,13 0,12.5561352 0,12 Z"/>\n</svg>\n',
settings: '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11.8738492 7.98646825c-2.14623015 0-3.88623015 1.74-3.88623015 3.88738095 0 2.1462302 1.74 3.8862302 3.88623015 3.8862302 2.1462302 0 3.887381-1.74 3.887381-3.8862302 0-2.14738095-1.7411508-3.88738095-3.887381-3.88738095zm7.3340079 5.62047615c-.3360317.1162302-.6904761.4315477-.7871428.6985318s-.2946032 1.1956746-.1369445 1.5144444l.4234921 1.2532143c.0874603.3452381-.0471825.8331746-.2992063 1.0851984l-.2497223.2497223c-.2520238.2520238-.7399603.384365-1.0840476.2957539l-1.2497619-.4246428c-.3199206-.1553572-.7894444-.1806746-1.042619-.0552381-.2543254.1254365-1.0587302.6478968-1.1749604.9839285l-.5788492 1.171508c-.1806746.3072619-.6202777.5581349-.975873.5581349h-.3532936c-.3567461 0-.7963492-.250873-.9770238-.5569841l-.5823016-1.1761111c-.1150794-.3371826-.43154764-.6893254-.70083336-.7836905-.27043651-.0955159-1.20142857-.2934524-1.52134921-.1369445l-1.24055555.4200397c-.3452381.0886111-.8331746-.0437301-1.08519841-.2957539l-.24972223-.2497223c-.25087301-.2520238-.38436507-.7399603-.29690476-1.0851984l.42234127-1.2474603c.15650794-.3199206.18527778-.7894444.06444445-1.042619-.12083334-.2543254-.63869048-1.0564286-.97587302-1.171508l-1.18531746-.5846032c-.3072619-.1806746-.55813492-.6191269-.55813492-.975873v-.3532936c0-.3555953.25087302-.7951984.55813492-.975873l1.18992064-.5880556c.33603174-.1150794.69047619-.42464285.78714285-.6881746.09551588-.26353174.28884921-1.18301587.13234127-1.5029365l-.43154762-1.26702381c-.0897619-.3452381.04142857-.83202381.29345238-1.08404762l.24972223-.24972223c.25202381-.25202381.73996031-.38436507 1.08519841-.29575396l1.2693254.43154762c.31992063.15650793.78484127.18527777 1.0322619.06214285.24972222-.12313492 1.03916662-.64329365 1.15309522-.98047619l.5892064-1.18992063c.1818254-.30726191.6214285-.55698413.9781746-.55698413h.3532936c.3555953 0 .7951984.25087302.975873.55698413l.5834524 1.18761904c.117381.33603175.4315476.68702381.6996826.77908731.2669841.09321428 1.193373.28539682 1.5132936.12888889l1.2486111-.42234127c.3452381-.08746032.8331746.04718253 1.0851984.29920634l.2497223.24972223c.2520238.25202381.3855158.73996031.2969047 1.08404762l-.4211905 1.24170634c-.1553571.32107143-.1818254.79059524-.0598412 1.04607143.1219841.2543254.6432936 1.05757934.9804762 1.17265874l1.1772619.5834524c.3061111.1818254.5558333.6225793.5558333.9781746v.3532936c0 .3567461-.250873.7963492-.5569841.9770238z" fill="#8c8c8c" fill-rule="evenodd"/></svg>',
plus: '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13 11v-5.99912834c0-.5562408-.4477153-1.00087166-1-1.00087166-.5561352 0-1 .4481055-1 1.00087166v5.99912834h-5.99912834c-.5562408 0-1.00087166.4477153-1.00087166 1 0 .5561352.4481055 1 1.00087166 1h5.99912834v5.9991283c0 .5562408.4477153 1.0008717 1 1.0008717.5561352 0 1-.4481055 1-1.0008717v-5.9991283h5.9991283c.5562408 0 1.0008717-.4477153 1.0008717-1 0-.5561352-.4481055-1-1.0008717-1z" fill="#8c8c8c" fill-rule="evenodd"/></svg>',
"arrow-up": '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11.9986646 15c-.2734938 0-.5459192-.1040478-.7542445-.3100198l-5.93032756-5.87232766c-.41771898-.41406758-.41878731-1.08613111-.003205-1.5012604s1.09290669-.41725271 1.51169401-.00318514l5.17608305 5.1259443 5.179288-5.13019114c.4166507-.41300587 1.0929067-.41194416 1.5106257.00318513.4166506.41512929.414514 1.08719282-.0021367 1.5012604l-5.9335325 5.87657451c-.2083253.205972-.4807508.3100198-.7542445.3100198" fill="#8c8c8c" fill-rule="evenodd" transform="matrix(-1 0 0 -1 24 22)"/></svg>',
"arrow-down": '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11.9986646 16c-.2734938 0-.5459192-.1040478-.7542445-.3100198l-5.93032756-5.87232766c-.41771898-.41406758-.41878731-1.08613111-.003205-1.5012604s1.09290669-.41725271 1.51169401-.00318514l5.17608305 5.1259443 5.179288-5.13019114c.4166507-.41300587 1.0929067-.41194416 1.5106257.00318513.4166506.41512929.414514 1.08719282-.0021367 1.5012604l-5.9335325 5.87657451c-.2083253.205972-.4807508.3100198-.7542445.3100198" fill="#707070" fill-rule="evenodd"/></svg>',
share: '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="#979797" fill-rule="evenodd"><path d="m11.25 16-.25-12h2l-.25 12c0 .4142136-.3357864.75-.75.75s-.75-.3357864-.75-.75zm3.75 4h-6c-1.657 0-3-1.343-3-3v-3c0-1.588 1.2375-2.874 2.7985-2.9795.065-.0135.1325-.0205.2015-.0205.5525 0 1 .4475 1 1s-.4475 1-1 1-1 .4475-1 1v3c0 .5525.4475 1 1 1h6c.5525 0 1-.4475 1-1v-3c0-.5525-.4475-1-1-1s-1-.4475-1-1 .4475-1 1-1c.069 0 .1365.007.2015.0205 1.561.1055 2.7985 1.3915 2.7985 2.9795v3c0 1.657-1.343 3-3 3z"/><path d="m15.2884986 8.7026847c.3880821.39295136 1.0212347.39689872 1.4141861.00881668.3929514-.38808205.3968987-1.02123472.0088167-1.41418608l-3.9750622-4.02493781c-.389794-.39468476-1.0263612-.39666906-1.4186082-.00442208l-4.02493778 4.02493781c-.39052429.39052429-.39052429 1.02368927 0 1.41421356s1.02368927.39052429 1.41421356 0l3.31340882-3.31340886z" fill-rule="nonzero"/></g></svg>',
"star-favicon": '<svg class="feeder-icon" aria-hidden=true  height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12.6420938 15.7435182c-.1096022 0-.2432049-.0352007-.395208-.1448029l-4.1232833-2.9304592c-.05760117-.0392008-.19120387-.0400009-.24800501.0008l-4.12328335 2.9304592c-.33920685.2424049-.58641185.1200024-.67601366.0552011-.09120184-.0640013-.29040587-.2592052-.17200348-.6680135l1.42242875-4.9545001c.02400049-.08000164-.02080042-.22800463-.08320168-.27680562l-3.9728803-3.14486356c-.32880665-.26160529-.28080568-.53441081-.24560496-.63921292.03520071-.10480212.16160326-.34800704.57201156-.35760723l5.00490116-.13280269c.06560133-.00160003.18080365-.08400169.20720419-.16240328l1.6672337-4.87369851c.13760278-.40160812.41200832-.44480899.52321057-.44480899s.3856078.04320087.52321058.44480899l1.66723373 4.87289849c.0272005.07920161.1424028.16160327.2056041.1632033l5.0081012.13280269c.4104083.00960019.5360109.25280511.5712116.35760723.0352007.10480211.0832017.37760763-.245605.6384129l-3.9720803 3.14566358c-.0624012.04880099-.1072021.197604-.0848017.27760562l1.4232288 4.9545001c.1192024.4080083-.0808016.6032122-.1712035.6672135-.050401.0360007-.148003.0888018-.2824057.0888018" fill="#707070" fill-rule="evenodd"/></svg>',
expanded: '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 6v7h14v-7zm-1-2h16c.5522847 0 1 .44771525 1 1v9c0 .5522847-.4477153 1-1 1h-16c-.55228475 0-1-.4477153-1-1v-9c0-.55228475.44771525-1 1-1zm0-4h16c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-16c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#979797" transform="translate(3 5)"/></svg>',
collapsed: '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m1 0h16c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-16c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h16c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-16c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h16c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-16c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h16c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-16c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1z" fill="#8c8c8c" fill-rule="evenodd" transform="translate(3 5)"/></svg>',
close: '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.4142136 12 4.2420243 4.2420243c.3908647.3908647.3938633 1.021583.0006163 1.4148299-.3905242.3905243-1.0215082.3927053-1.4148299-.0006163l-4.2420243-4.2420243-4.24202433 4.2420243c-.3908647.3908647-1.02158296.3938633-1.41482992.0006163-.39052429-.3905242-.39270528-1.0215082.00061636-1.4148299l4.24202429-4.2420243-4.24202429-4.24202433c-.3908647-.3908647-.39386331-1.02158296-.00061636-1.41482992.39052429-.39052429 1.02150828-.39270528 1.41482992.00061636l4.24202433 4.24202429 4.2420243-4.24202429c.3908647-.3908647 1.021583-.39386331 1.4148299-.00061636.3905243.39052429.3927053 1.02150828-.0006163 1.41482992z" fill="#707070" fill-rule="evenodd"/></svg>',
more: '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 8c-.8284271 0-1.5-.67157288-1.5-1.5s.6715729-1.5 1.5-1.5 1.5.67157288 1.5 1.5-.6715729 1.5-1.5 1.5zm0 5.5c-.8284271 0-1.5-.6715729-1.5-1.5s.6715729-1.5 1.5-1.5 1.5.6715729 1.5 1.5-.6715729 1.5-1.5 1.5zm0 5.5c-.8284271 0-1.5-.6715729-1.5-1.5s.6715729-1.5 1.5-1.5 1.5.6715729 1.5 1.5-.6715729 1.5-1.5 1.5z" fill="#707070" fill-rule="evenodd"/></svg>',
dashboard: '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18.5 11.75v-1.75h-1.5v1.75h-1.75v1.5h1.75v1.75h1.5v-1.75h1.75v-1.5zm-15.5-6.75h18c.5522847 0 1 .44771525 1 1v12c0 .5522847-.4477153 1-1 1h-18c-.55228475 0-1-.4477153-1-1v-12c0-.55228475.44771525-1 1-1zm.5 1c-.27614237 0-.5.22385763-.5.5v11c0 .2761424.22385763.5.5.5h4c.27614237 0 .5-.2238576.5-.5v-11c0-.27614237-.22385763-.5-.5-.5zm6 0c-.27614237 0-.5.22385763-.5.5v11c0 .2761424.22385763.5.5.5h4c.2761424 0 .5-.2238576.5-.5v-11c0-.27614237-.2238576-.5-.5-.5z" fill="#707070" fill-rule="evenodd"/></svg>',
label: '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.8388348 19.9099026-8.54594158-8.5459416c-.18753638-.1875363-.29289322-.4418903-.29289322-.7071068v-5.6568542c0-.55228475.44771525-1 1-1h5.6568542c.2652165 0 .5195705.10535684.7071068.29289322l8.5459416 8.54594158c.1952621.1952621.1952621.5118446 0 .7071067l-6.3639611 6.3639611c-.1952621.1952621-.5118446.1952621-.7071067 0zm-3.27817463-10.34924243c.58578643-.58578644.58578643-1.5355339 0-2.12132034-.58578644-.58578644-1.5355339-.58578644-2.12132034 0s-.58578644 1.5355339 0 2.12132034c.58578644.58578643 1.5355339.58578643 2.12132034 0z" fill="#707070"/></svg>',
"checkmark-circle": '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5c3.8659932 0 7 3.13400675 7 7 0 3.8659932-3.1340068 7-7 7-3.86599325 0-7-3.1340068-7-7 0-3.86599325 3.13400675-7 7-7zm0 1c-3.3137085 0-6 2.6862915-6 6s2.6862915 6 6 6 6-2.6862915 6-6-2.6862915-6-6-6zm2.6464466 3.64644661.7071068.70710679-4.3535534 4.3535534-2.35355339-2.3535534.70710678-.7071068 1.64644661 1.6465534z" fill="#707070"/></svg>',
lock: '<svg class="feeder-icon" aria-hidden=true  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 9v-2c0-2.76142375 2.23857625-5 5-5 2.7614237 0 5 2.23857625 5 5v2h.9931545c.5560654 0 1.0068455.45576096 1.0068455 1.0024733v9.9950534c0 .5536507-.4499488 1.0024733-1.0068455 1.0024733h-11.98630903c-.5560654 0-1.00684547-.455761-1.00684547-1.0024733v-9.9950534c0-.55365072.44994876-1.0024733 1.00684547-1.0024733zm2 0h6v-2c0-1.65685425-1.3431458-3-3-3s-3 1.34314575-3 3z" fill="#707070"/></svg>\n'
}, i = {}, Object.keys(o).forEach(function(e) {
var t = document.createElement("div");
t.innerHTML = o[e], i[e] = t.firstElementChild;
}), r = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.componentDidMount = function() {
var e = this.refs.base, t = e.parentNode;
t && (this.currentElement = i[this.props.icon].cloneNode(!0), t.replaceChild(this.currentElement, e));
}, t.prototype.componentDidUpdate = function() {
var e = this.currentElement && this.currentElement.parentNode;
if (this.currentElement && e) {
var t = this.currentElement;
this.currentElement = i[this.props.icon].cloneNode(!0), e.replaceChild(this.currentElement, t);
}
}, t.prototype.render = function() {
return n.default.createElement("span", {
ref: "base"
});
}, t;
}(n.default.PureComponent), e("FeederIcon", r);
}
};
}), System.register("client/components/DisplaySettingsDialog", [ "react", "client/components/FeederIcon" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.toggleSetting = function(e) {
var t = n.props.toggled.slice(0);
t.contains(e) ? t.remove(e) : t.push(e), n.props.didChangeSelection(t);
}, n.state = {}, n;
}
return __extends(t, e), t.prototype.render = function() {
return n.default.createElement("div", {
className: "ios-table"
}, n.default.createElement("div", {
className: "ios-table--header"
}, "Filters"), n.default.createElement("div", null, n.default.createElement("div", {
className: "ios-table--row-header"
}, "Show only"), n.default.createElement("div", {
onClick: this.toggleSetting.bind(this, "unread"),
className: "ios-table--item ios-table--action"
}, n.default.createElement("div", {
className: "ios-table--item-label"
}, "Unread"), this.props.toggled.contains("unread") ? n.default.createElement("div", {
className: "ios-table--item-right"
}, n.default.createElement(o.FeederIcon, {
icon: "checkmark"
})) : null), n.default.createElement("div", {
onClick: this.toggleSetting.bind(this, "starred"),
className: "ios-table--item ios-table--action"
}, n.default.createElement("div", {
className: "ios-table--item-label"
}, "Starred"), this.props.toggled.contains("starred") ? n.default.createElement("div", {
className: "ios-table--item-right"
}, n.default.createElement(o.FeederIcon, {
icon: "checkmark"
})) : null)), this.props.canSeeFiltered ? n.default.createElement("div", null, n.default.createElement("div", {
className: "ios-table--row-header"
}, "Include"), n.default.createElement("div", {
onClick: this.toggleSetting.bind(this, "filtered"),
className: "ios-table--item ios-table--action"
}, n.default.createElement("div", {
className: "ios-table--item-label"
}, "Filtered"), this.props.toggled.contains("filtered") ? n.default.createElement("div", {
className: "ios-table--item-right"
}, n.default.createElement(o.FeederIcon, {
icon: "checkmark"
})) : null)) : null);
}, t;
}(n.default.Component), e("DisplaySettingsDialog", i);
}
};
}), System.register("client/dto/SortAndDisplayOptions", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("client/StateFactory", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("client/screenstack", [ "client/controller" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function() {
function e(e, t) {
this.stack = [], this.vc = e, this.stateFactory = t;
}
return e.prototype.serialize = function() {
var e = this.stack.map(function(e) {
var t = e instanceof n.default && e.id();
return t || e;
});
return !!e.length && JSON.stringify(e);
}, e.prototype.count = function() {
return this.stack.length;
}, e.prototype.createCheckpoint = function() {
this.store();
}, e.prototype.store = function() {
this.stateFactory.shouldPersistScreenChain(this.vc, this.serialize());
}, e.prototype.forget = function() {
this.stateFactory.shouldPersistScreenChain(this.vc, !1);
}, e.prototype.remember = function() {
var e = JSON.parse(this.stateFactory.getRememberedScreenChain(this.vc) || "false");
if (!e) return !1;
this.forget();
for (var t, n = 0; t = e[n]; n++) this.stack.push(t);
var o;
try {
for (;this.stack.length && !(o = this.pop()); ) ;
} catch (e) {
console.error("Could not reload stack because error:", e);
}
return o ? (this.vc.setCurrentScreen(o), !0) : (console.error("Could not reload stack from this point.", e), 
!1);
}, e.prototype.serializeStackObject = function(e) {
var t = this.stack[e];
if (t instanceof n.default) {
var o = t.id();
o && (this.stack[e] = o);
}
}, e.prototype.unserializeStackObject = function(e) {
if (e instanceof n.default) return e;
if (e && void 0 !== e.id) {
var t = this.vc.controllerInjector(e.id);
if (t) return t.fromId(this.vc, e) || void 0;
}
}, e.prototype.pop = function() {
var e = this.stack.pop();
if (e) return this.unserializeStackObject(e);
}, e.prototype.clearAll = function() {
this.stack.forEach(function(e) {
e instanceof n.default && e.destroy();
}), this.stack = [];
}, e;
}(), e("ScreenStack", o);
}
};
}), System.register("client/actionhistory", [], function(e, t) {
"use strict";
var n;
t && t.id;
return {
setters: [],
execute: function() {
n = function() {
function e() {
this.wrapAround = !0, this.reset(), this.onEndCallback = function() {};
}
return e.prototype.reset = function() {
this.list = [], this.index = -1;
}, e.prototype.addAction = function(e) {
this.list.push(e);
}, e.prototype.prependAction = function(e) {
this.list.unshift(e), this.index >= 0 && (this.index += 1);
}, e.prototype.setActiveAction = function(e) {
this.index = this.list.indexOf(e);
}, e.prototype.setActiveActionIndex = function(e) {
this.index = e;
}, e.prototype.next = function() {
return this.byOffset(1), this.current();
}, e.prototype.previous = function() {
return this.byOffset(-1), this.current();
}, e.prototype.current = function() {
return this.list[this.index];
}, e.prototype.byOffset = function(e) {
this.index += e, this.wrapAround ? this.index >= this.list.length ? this.index = 0 : this.index < 0 && (this.index = this.list.length - 1) : this.index >= this.list.length ? (this.index = this.list.length - 1, 
this.onEndCallback()) : this.index < 0 && (this.index = 0);
}, e.prototype.onEnd = function(e) {
this.onEndCallback = e;
}, e;
}(), e("default", n);
}
};
}), System.register("client/library/css-transitions", [], function(e, t) {
"use strict";
function n(e) {
return "onwebkittransitionend" in window ? "webkitTransitionEnd" : "onotransitionend" in e || "Opera" == navigator.appName ? "oTransitionEnd" : "transitionend";
}
function o(e, t) {
Modernizr.csstransitions && e.addEventListener(n(e), t, !1);
}
function i(e, t) {
Modernizr.csstransitions && e.removeEventListener(n(e), t, !1);
}
t && t.id;
return e("getTransitionEndEventName", n), e("addTransitionEndEvent", o), e("removeTransitionEndEvent", i), 
{
setters: [],
execute: function() {}
};
}), System.register("client/viewcontroller", [ "jquery", "client/eventlistener", "client/screenstack", "client/actionhistory", "client/backend-imports", "client/appglobals", "client/library/css-transitions" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l, c;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
l = e;
} ],
execute: function() {
c = function() {
function e(e, t, s) {
this.animationDuration = 300, this.disableScreenAnimation = !1, this.inAnimation = !1, 
this.shouldAlwaysHideNotification = !1, this.animationCallbacks = [], this.isActuallyPopup = !0, 
this.currentFilter = "all", this.stateFactory = t, this.screenStack = new i.ScreenStack(this, this.stateFactory), 
this.container = n.default(e)[0], this.controllerInjector = s, this.listener = new o.default(this.container), 
this.history = new r.default();
}
return e.prototype.destroy = function() {
delete this.notification, this.listener.destroy();
}, e.prototype.onScreenChange = function() {}, e.prototype.isPopup = function() {
return this.isActuallyPopup || !!document.getElementById("is-popup");
}, e.prototype.getScrollElement = function() {
return this.scrollElement || (this.scrollElement = n.default(this.container).parents("[data-scroll-main]")[0] || document.body), 
this.scrollElement;
}, e.prototype.scrollTo = function(e) {
n.default(this.getScrollElement()).scrollTop(e), n.default(window).scrollTop(e);
}, e.prototype.setCurrentScreen = function(e) {
this.scrollTo(0), this.currentScreen && (this.currentScreen.onOff(), this.currentScreen.destroy()), 
this.currentScreen = e, n.default(this.container).hasClass("has-initial") && n.default(this.container).removeClass("has-initial").find(".the-initial").remove(), 
n.default(this.container).children().is(e.template.container) || this.container.appendChild(e.template.container), 
e.onVisible(), this.screenStack.count() && this.screenStack.serializeStackObject(this.screenStack.count() - 1), 
this.screenStack.stack.push(e), e.onCurrent(), this.listener.send("screen:navigate", {
page: this.currentScreen
}), this.refreshWindowHeight(), e.tryToRestoreScroll(), this.stateFactory.didChangePage(this);
}, e.prototype.pushScreen = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return this.currentScreen.saveScroll(), this.stateFactory.willChangePage(this, e), 
[ 4, this.slideHScreen(this.currentScreen, e, "in") ];

case 1:
return t.sent(), [ 2 ];
}
});
});
}, e.prototype.popScreen = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return (e = this.screenStack.pop()) ? (t = this.screenStack.pop(), t ? [ 4, this.slideScreen(e._inFunc || "h-animation", e, t, "out") ] : [ 3, 2 ]) : [ 3, 2 ];

case 1:
n.sent(), n.label = 2;

case 2:
return [ 2 ];
}
});
});
}, e.prototype.popScreenInstant = function() {
if (this.screenStack.pop()) {
var e = this.screenStack.pop();
e && this.setCurrentScreen(e);
}
}, e.prototype.slideHScreen = function(e, t, n) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(o) {
switch (o.label) {
case 0:
return [ 4, this.slideScreen("h-animation", e, t, n) ];

case 1:
return o.sent(), [ 2 ];
}
});
});
}, e.prototype.slideVScreen = function(e, t, n) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(o) {
switch (o.label) {
case 0:
return [ 4, this.slideScreen("v-animation", e, t, n) ];

case 1:
return o.sent(), [ 2 ];
}
});
});
}, e.prototype.slideScreen = function(e, t, o, i) {
var r = this;
if (!o) return console.error("Bad `to` sent"), Promise.resolve();
var s = window.scrollY || 0;
n.default(document.body).toggleClass("scroll-at-top", 0 == s);
var c = o.inAppURL();
if (c && (null === a.analytics || void 0 === a.analytics || a.analytics.trackInAppPageView(c), 
null === a.app || void 0 === a.app || a.app.analytics.collectEvent("pageview", c.join("/"))), 
t.event.pause(), this.scrollTo(0), "in" === i && (o._inFunc = e), this.disableScreenAnimation) return t.event.unpause(), 
this.setCurrentScreen(o), Promise.resolve();
var u = n.default(this.container).addClass(e);
u.addClass("in-progress").addClass("viewcontroller-animated"), this.container.appendChild(o.template.container), 
"out" === i && u.addClass("reverse-animation");
var d = n.default(t.template.container).addClass("out"), p = n.default(o.template.container).addClass("in"), f = {
width: "",
height: ""
}, h = d.sizeRect(), m = n.default(window).height() - parseInt(n.default("body").css("padding-top"), 10) - parseInt(n.default("body").css("padding-botton"), 10), g = {
width: h.width,
height: m
};
return document.body.style.minHeight = g.height + "px", p.css(g), n.default(this.container).css(g).css("overflow", "hidden"), 
o.tryToRestoreScroll(), setTimeout(function() {
var e = u[0].className;
e = e.replace("in-progress", ""), e += " in-animation", u[0].className = e;
}, 10), new Promise(function(i, s) {
function a(e) {
e && -1 === [ d[0], p[0] ].indexOf(e.target) || (c(), l.removeTransitionEndEvent(u[0], a));
}
Modernizr.csstransitions ? l.addTransitionEndEvent(u[0], a) : setTimeout(function() {
a();
}, 20), setTimeout(function() {
r.inAnimation = !0, r.onScreenChange();
}, 0);
var c = function() {
r.animationDone(), t.event.unpause(), r.setCurrentScreen(o), document.body.style.minHeight = "", 
u.removeClass("in-animation " + e + " reverse-animation viewcontroller-animated"), 
p.removeClass("in").css(f), n.default(r.container).css(f).css("overflow", ""), r.scrollTo(o.getLastScroll()), 
i();
};
});
}, e.prototype.addAnimationDoneCallback = function(e, t) {
if (!this.inAnimation || !Modernizr.touch) return e.apply(this, t);
this.animationCallbacks.push([ e, t ]);
}, e.prototype.animationDone = function() {
for (this.inAnimation = !1; this.animationCallbacks.length; ) {
var e = this.animationCallbacks.pop();
e && e[0].apply(this, e[1]);
}
}, e.prototype.refreshWindowHeight = function() {
var e = this;
window.requestAnimationFrame(function() {
e.currentScreen.perfectScrollbar && e.currentScreen.perfectScrollbar.update();
});
}, e.prototype.slideUpScreen = function(e) {
return this.slideVScreen(this.currentScreen, e, "in");
}, e.prototype.toHome = function() {
var e = this;
return this.screenStack.count() > 1 ? this.popScreen().then(function() {
return e.toHome();
}) : Promise.resolve();
}, e.prototype.toIndex = function(e) {
var t = this;
return this.screenStack.count() - 1 - e <= 0 ? Promise.resolve() : this.popScreen().then(function() {
return t.toIndex(e);
});
}, e.prototype.showAddScreen = function(e) {
var t = void 0 === e ? {} : e, n = t.q, o = t.tabId;
this.openSettingsPage("/feeds/new", {
q: n || "",
tabId: o || ""
});
}, e.prototype.showSettingsScreen = function(e) {
e instanceof s.Feed ? this.openSettingsPage("/feeds/" + e.id + "/edit") : e instanceof s.Folder ? this.openSettingsPage("/folders/" + e.id + "/edit") : this.openSettingsPage();
}, e.prototype.openSettingsPage = function(e, t) {
void 0 === e && (e = !1), void 0 === t && (t = {});
var n = a.Ext.settingsURL(a.Config.feeder.root, t, e || "/feeds");
null === a.UI || void 0 === a.UI || a.UI.openTab(n), null === a.UI || void 0 === a.UI || a.UI.closePopup();
}, e.prototype.toggleNotification = function() {
var e = this;
if (this.notification = n.default("#notifications"), this.notification.off("click.notification"), 
a.app && a.app.user.review.shouldSee()) {
var t = document.createElement("a");
t.href = a.app.user.review.getURL(), t.innerText = "Help Feeder? Leave a review 🎉", 
this.showNotification(t.outerHTML), this.notification.on("click.notification", function(t) {
return e.noteClicked(t, function() {
null === a.app || void 0 === a.app || a.app.user.review.markSeen();
});
});
} else a.app && !this.shouldAlwaysHideNotification && a.app.notifications.current && !a.app.user.backend.isPro() ? (this.showNotification(a.app.notifications.current || ""), 
this.notification.on("click.notification", function(t) {
return e.noteClicked(t, function() {
null === a.app || void 0 === a.app || a.app.notifications.hideCurrent();
});
})) : this.hideNotification();
}, e.prototype.showNotification = function(e) {
this.notification.find("div").html(e), n.default(document.body).addClass("with-notifications");
}, e.prototype.hideNotification = function() {
n.default(document.body).removeClass("with-notifications");
}, e.prototype.noteClicked = function(e, t) {
e.preventDefault(), t(), n.default(e.target).closest(".close").length ? n.default(document.body).removeClass("with-notifications") : null === a.UI || void 0 === a.UI || a.UI.openTab(this.notification.find("a").attr("href"));
}, e.prototype.navForward = function() {
this.currentScreen.navForward(this.history.current());
}, e.prototype.navBack = function() {
this.currentScreen.back();
}, e.prototype.historyNext = function() {
var e = this.history.next();
this.currentScreen.navigateTo(e);
}, e.prototype.historyPrevious = function() {
var e = this.history.previous();
this.currentScreen.navigateTo(e);
}, e.prototype.performKeyboardAction = function(e) {
this.currentScreen.performKeyboardAction(e);
}, e.prototype.returnFromFeedView = function() {
this.popScreen();
}, e;
}(), e("default", c);
}
};
}), System.register("app/library/ts/library", [], function(e, t) {
"use strict";
function n(e) {
try {
return JSON.parse(e);
} catch (e) {}
return null;
}
function o(e) {
for (var t = window.location.search.substring(1), n = t.split("&"), o = 0; o < n.length; o++) {
var i = n[o].split("=");
if (i[0] == e) return decodeURIComponent(i[1]);
}
return "";
}
function i(e, t) {
var n = new FileReader();
if (n.onload = function(e) {
t && t(e.target.result);
}, n.onerror = function(e) {
t && t(!1);
}, !e.files[0]) return void (t && t(!1));
n.readAsText(e.files[0]);
}
function r(e, t) {
var n = {};
for (var o in e) n[o] = e[o];
for (var o in t) n[o] = t[o];
return n;
}
function s() {
var e = function() {
return Math.floor(65536 * Math.random()).toString(16);
};
return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
}
t && t.id;
return e("tryToParseJSON", n), e("getQueryParameter", o), e("readFileInput", i), 
e("mergeObjects", r), e("GUID", s), {
setters: [],
execute: function() {
Object.values = function(e) {
var t = [];
for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
return t;
};
}
};
}), System.register("client/controllers/screenconnectedautomatically", [ "client/controller", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return o.app && n.template.set("email", o.app.user.preferences.getLocalSystemSetting("feeder:email")), 
n;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#connected-automatically";
}, t.prototype.events = function() {
return {
"click .good": "hideAndConfirm",
"click .bad": "gotoSyncSettings"
};
}, t.prototype.inAppURL = function() {
return [ "connected-automatically" ];
}, t.prototype.id = function() {
return !1;
}, t.prototype.hideAndConfirm = function() {
this.vc.stateFactory.shouldUpdatePreference(this.vc, "backend:hasChangedStatusAndNeedsToVerifyWithUser", !1), 
this.modal && this.modal.destroy();
}, t.prototype.gotoSyncSettings = function() {
this.vc.openSettingsPage("/account"), this.modal && this.modal.destroy();
}, t;
}(n.default), e("default", i);
}
};
}), System.register("client/controllers/screenconsume", [ "jquery", "client/controller" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t, n) {
var o = e.call(this, t) || this;
return o.isInitialized = !1, o.initialPost = n, o;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#popup-consume";
}, t.prototype.events = function() {
return {
"click-or-touch .title": "toggleStar",
"click-or-touch .history-previous": "goPrevious",
"click-or-touch .history-next": "goNext"
};
}, t.prototype.id = function() {
return !1;
}, t.prototype.inAppURL = function() {
return [ "consume" ];
}, t.prototype.onVisible = function() {
this.setPost(this.initialPost);
}, t.prototype.setPost = function(e) {
if (!this.isInitialized && e && this.post !== e) {
this.post = e, this.isInitialized = !0, this.template.set("title", e.title);
var t = n.default('<iframe class="popup-consume-iframe">');
t.attr("src", e.getConsumePath()), t.css("height", "calc(100vh - 45px)"), this.template.el("iframe, x-iframe").replaceWith(t), 
this.post.markAsRead(), this.setStar();
}
}, t.prototype.toggleStar = function(e) {
e.preventDefault(), this.post.toggleStar(), this.setStar();
}, t.prototype.setStar = function() {
this.template.el(".bar").toggleClass("starred-post", !!this.post.is_starred);
}, t.prototype.navigateTo = function(e) {
e && (this.isInitialized = !1, this.setPost(e));
}, t.prototype.goPrevious = function() {
this.vc.historyPrevious();
}, t.prototype.goNext = function() {
this.vc.historyNext();
}, t;
}(o.default), e("default", i);
}
};
}), System.register("client/controllers/screencouldnotverifytoken", [ "client/controller", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return o.app && o.app.analytics.collectEvent("screen:visible", "couldnotverifytoken"), 
n;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#could-not-verify-token";
}, t.prototype.events = function() {
return {
"click .goto-settings-button": "gotoSyncSettings"
};
}, t.prototype.inAppURL = function() {
return [ "could-not-verify-token" ];
}, t.prototype.id = function() {
return !1;
}, t.prototype.gotoSyncSettings = function() {
null === o.app || void 0 === o.app || o.app.analytics.collectEvent("screen:couldnotverifytoken:button", "go_to_sync"), 
this.vc.openSettingsPage("/account"), this.modal && this.modal.destroy();
}, t;
}(n.default), e("default", i);
}
};
}), System.register("client/controllers/screenexpired", [ "jquery", "client/controller", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t(t) {
var o = e.call(this, t) || this;
null === i.app || void 0 === i.app || i.app.analytics.collectEvent("screen:visible", "expired");
var r = n.default(o.template.container);
return r.find(".is-online").hide(), r.find(".is-not-online").show(), r.find(".product-name").text((null === i.app || void 0 === i.app ? void 0 : i.app.user.getProductName()) || ""), 
o.modal && o.modal.didResize(), setTimeout(function() {
n.default("#feeder-is-installed-flag.feeder-is-installed").length ? (r.find(".is-extension-installed").show(), 
r.find(".is-extension-not-installed").hide()) : (r.find(".is-extension-installed").hide(), 
r.find(".is-extension-not-installed").show()), o.modal && o.modal.didResize();
}, 500), o;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#expired";
}, t.prototype.events = function() {
return {
"click .add-payment": "addPayment"
};
}, t.prototype.inAppURL = function() {
return [ "expired" ];
}, t.prototype.id = function() {
return !1;
}, t.prototype.addPayment = function(e) {
e.preventDefault(), null === i.app || void 0 === i.app || i.app.analytics.collectEvent("screen:expired:button", "add_payment"), 
null === i.UI || void 0 === i.UI || i.UI.openTab(i.Config.feeder.payURL), null === i.UI || void 0 === i.UI || i.UI.closePopup();
}, t;
}(o.default), e("default", r);
}
};
}), System.register("app/library/ts/debounce", [], function(e, t) {
"use strict";
function n(e, t, n) {
void 0 === n && (n = !1);
var o;
return function() {
var i = this, r = arguments, s = function() {
o = null, n || e.apply(i, r);
}, a = n && !o;
clearTimeout(o), o = setTimeout(s, t), a && e.apply(i, r);
};
}
t && t.id;
return e("default", n), {
setters: [],
execute: function() {}
};
}), System.register("client/components/CountGroup", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
return e.text !== this.props.text;
}, t.prototype.render = function() {
return n.default.createElement("div", {
className: "tpl-count-group",
onClick: this.props.onClick
}, n.default.createElement("div", {
className: "mark-as-read green-button--extra"
}, "✔"), n.default.createElement("div", {
className: "count"
}, this.props.text));
}, t;
}(n.default.Component), e("CountGroup", o);
}
};
}), System.register("client/components/ModalContainer", [ "react", "react-dom" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.container = document.createElement("div"), n.container.className = t.className || "", 
n.container.addEventListener("click", function(e) {
n.props.onClick && n.props.onClick(e);
}, !1), n.modalRoot = document.body, n;
}
return __extends(t, e), t.prototype.componentDidMount = function() {
this.modalRoot.appendChild(this.container);
}, t.prototype.componentWillUnmount = function() {
this.modalRoot.removeChild(this.container);
}, t.prototype.render = function() {
return o.default.createPortal(this.props.children, this.container);
}, t;
}(n.default.Component), e("ModalContainer", i);
}
};
}), System.register("client/components/ContextMenu", [ "react", "react-dom", "jquery", "client/components/ModalContainer" ], function(e, t) {
"use strict";
var n, o, i, r, s, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
s = 30, a = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.boundGlobalEventHandlers = !1, n.hideEvent = function(e) {
if (!e.target.doNotTriggerHideEvent) {
var t = o.default.findDOMNode(n);
t instanceof Element && (t.contains(e.target) || t === e.target) || (e.stopPropagation(), 
e.preventDefault(), n.props.shouldClose && n.props.shouldClose());
}
}, n.resizeEvent = function() {
n.revertDocumentSize(), n.adjustDocumentSize();
}, n.state = {
stepAnimationsEnabled: !1,
stepShow: !1,
x: 0,
y: 0,
marginLeft: t.marginLeft || 0,
marginTop: t.marginTop || 0,
sides: []
}, n;
}
return __extends(t, e), t.prototype.componentDidMount = function() {
this.props.isVisible && (this.reposition(), this.adjustDocumentSize(), this.bindGlobalEventHandlers(), 
this.startAnimationSequence());
}, t.prototype.componentWillUnmount = function() {
this.cleanUp();
}, t.prototype.componentDidUpdate = function(e, t, n) {
!e.isVisible && this.props.isVisible && (this.adjustDocumentSize(), this.reposition(), 
this.bindGlobalEventHandlers(), this.startAnimationSequence()), this.props.isVisible || this.cleanUp(), 
t.y !== this.state.y && this.adjustDocumentSize();
}, t.prototype.cleanUp = function() {
this.revertDocumentSize(), this.boundGlobalEventHandlers = !1, window.removeEventListener("click", this.hideEvent, !0), 
window.removeEventListener("contextmenu", this.hideEvent, !0), window.removeEventListener("resize", this.resizeEvent, !0);
}, t.prototype.startAnimationSequence = function() {
var e = this;
this.props.noAnimateIn ? this.setState({
stepShow: !0
}) : (setTimeout(function() {
e.setState({
stepAnimationsEnabled: !0
});
}, 10), setTimeout(function() {
e.setState({
stepShow: !0
});
}, 20));
}, t.prototype.reposition = function() {
if (this.props.isVisible) {
var e = this.state.x, t = this.state.y, n = this.props.elementPosition();
if (n instanceof Element) {
var r = i.default(n).rect(), s = {
x: {
left: r.left,
right: r.left + r.width,
center: r.left + r.width / 2
},
y: {
top: r.top,
bottom: r.top + r.height,
center: r.top + r.height / 2
}
};
e = s.x[this.props.elementSticky ? this.props.elementSticky.x : "center"] || s.x.center, 
t = s.y[this.props.elementSticky ? this.props.elementSticky.y : "center"] || s.y.center;
} else n && (e = n.x, t = n.y);
var a = [], l = o.default.findDOMNode(this), c = i.default(l).rect();
if (t + c.height > window.innerHeight && t - i.default(window).scrollTop() - c.height > 0 ? a.push("bottom") : a.push("top"), 
(e + c.width > window.innerWidth || this.props.forceRight) && a.push("right"), n instanceof Element) var r = i.default(n).rect();
a.contains("bottom") && (t -= c.height), this.setState({
x: e,
y: t,
sides: a
});
}
}, t.prototype.adjustDocumentSize = function() {
if (this.props.isVisible) {
var e = o.default.findDOMNode(this), t = i.default(e).rect(), n = this.state.y + t.height;
document.body.clientHeight > n + s || (i.default(document.body).css("height", n + s), 
this.adjustedDocumentSize = !0);
}
}, t.prototype.revertDocumentSize = function() {
this.adjustedDocumentSize && (i.default(document.body).css("height", ""), this.adjustedDocumentSize = !1);
}, t.prototype.bindGlobalEventHandlers = function() {
var e = this;
this.boundGlobalEventHandlers || this.props.isVisible && setTimeout(function() {
if (!e.props.isVisible) return !1;
e.boundGlobalEventHandlers = !0, window.addEventListener("click", e.hideEvent, !0), 
window.addEventListener("contextmenu", e.hideEvent, !0), window.addEventListener("resize", e.resizeEvent, !0);
}, 100);
}, t.prototype.render = function() {
var e = {
left: this.state.x + this.state.marginLeft,
top: this.state.y + this.state.marginTop
}, t = [ this.state.stepAnimationsEnabled ? "animations-on" : null, this.props.isVisible && this.state.stepShow ? "show" : null, this.props.noAnimateIn ? "no-animate-in" : null, this.props.className ];
return t = t.concat(this.state.sides), n.default.createElement(r.ModalContainer, {
className: this.props.className ? this.props.className : ""
}, this.props.isVisible ? n.default.createElement("div", {
className: "tooltip context-menu " + t.join(" "),
style: e
}, this.props.children) : null);
}, t;
}(n.default.Component), e("ContextMenu", a);
}
};
}), System.register("client/components/ContextMenuItem", [ "react" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e, o = e;
} ],
execute: function() {
i = function(e) {
var t = e.children, i = e.onClick, r = e.className, s = e.isDisabled, a = o.useCallback(function(e) {
e.stopPropagation(), e.preventDefault(), i && i();
}, [ i ]);
return n.default.createElement("div", {
className: "tooltip-item " + (s ? "is-disabled" : "") + " " + (r || ""),
onClick: a
}, t);
}, e("ContextMenuItem", i);
}
};
}), System.register("client/dto/PostCollectionable", [], function(e, t) {
"use strict";
t && t.id;
return {
setters: [],
execute: function() {}
};
}), System.register("client/components/ContextMenuForPost", [ "react", "client/components/ContextMenu", "client/components/ContextMenuItem" ], function(e, t) {
"use strict";
function n(e) {
return "string" == typeof e && [ "mark-all-as-read", "open-all-unread", "open-every-unread-post", "clear-all-unread" ].includes(e);
}
var o, i, r, s;
t && t.id;
return e("isGlobalContextMenuAction", n), {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
s = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.state = {
isJumpMenuOpen: !1
}, n;
}
return __extends(t, e), t.prototype.toggleJumpMenu = function(e) {
this.setState({
isJumpMenuOpen: e
});
}, t.prototype.render = function() {
var e = this;
return o.default.createElement(i.ContextMenu, {
ref: "contextMenu",
className: "with-arrow",
isVisible: !0,
elementPosition: this.props.elementPosition,
shouldClose: this.props.shouldClose
}, this.state.isJumpMenuOpen ? o.default.createElement("div", null, o.default.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("jump-midnight");
}
}, "Midnight"), o.default.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("jump-day");
}
}, "1 day"), o.default.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("jump-week");
}
}, "1 week"), o.default.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("jump-month");
}
}, "1 month")) : o.default.createElement("div", null, o.default.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("toggle-read");
}
}, "Toggle read"), o.default.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("toggle-star");
},
className: this.props.highlightItem && this.props.highlightItem.includes("starred") ? "highlighted" : ""
}, "Toggle star"), this.props.canPostCollections ? o.default.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("add-to-collection");
}
}, "Add to collection") : null, o.default.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("mark-all-as-read");
}
}, "Mark feed as read"), this.props.hide && this.props.hide.includes("open-many") ? null : o.default.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("open-all-unread");
}
}, "Open all unread in feed"), this.props.hide && this.props.hide.includes("open-many") ? null : o.default.createElement("div", null, o.default.createElement("div", {
className: "tooltip-item separator"
}, o.default.createElement("span", null, "...")), o.default.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("open-every-unread-post");
}
}, "Open every unread post")), o.default.createElement("div", {
className: "tooltip-item separator"
}, o.default.createElement("span", null, "...")), o.default.createElement(r.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("clear-all-unread");
}
}, "Mark all as read"), this.props.hide && this.props.hide.includes("jump") ? null : o.default.createElement("div", null, o.default.createElement("div", {
className: "tooltip-item separator"
}, o.default.createElement("span", null, "...")), o.default.createElement(r.ContextMenuItem, {
onClick: function() {
return e.toggleJumpMenu(!0);
}
}, "Jump..."))));
}, t;
}(o.default.Component), e("ContextMenuForPost", s);
}
};
}), System.register("client/components/ContextMenuForFeed", [ "react", "client/components/ContextMenu", "client/components/ContextMenuItem", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r, s;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
s = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.state = {
canOpenManyTabs: r.Ext.isChrome()
}, n;
}
return __extends(t, e), t.prototype.render = function() {
var e = this;
return n.default.createElement(o.ContextMenu, {
ref: "contextMenu",
className: "with-arrow",
isVisible: !0,
elementPosition: this.props.elementPosition,
shouldClose: this.props.shouldClose
}, n.default.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("edit");
}
}, "Edit feed"), n.default.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("goto-page");
}
}, "Go to page"), this.state.canOpenManyTabs ? n.default.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("open-all-unread");
}
}, "Open all unread in feed") : null, n.default.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("mark-feed-as-read");
}
}, "Mark feed as read"), n.default.createElement("div", {
className: "tooltip-item separator"
}, n.default.createElement("span", null, "...")), n.default.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("reload-sync");
}
}, "Reload feeds"), this.state.canOpenManyTabs ? n.default.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("open-every-unread-post");
}
}, "Open every unread post") : null, n.default.createElement("div", {
className: "tooltip-item separator"
}, n.default.createElement("span", null, "...")), n.default.createElement(i.ContextMenuItem, {
onClick: function() {
return e.props.didClickItem("clear-all-unread");
}
}, "Mark all as read"));
}, t;
}(n.default.Component), e("ContextMenuForFeed", s);
}
};
}), System.register("client/components/FeedListItem", [ "react", "react-dom", "client/components/CountGroup", "client/components/FeederIcon", "client/components/ContextMenuForFeed" ], function(e, t) {
"use strict";
var n, o, i, r, s, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
} ],
execute: function() {
a = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.toggleFlerp = function(e) {}, n.toggleContextMenu = function(e) {
n.setState({
isContextMenuOpen: e
});
}, n.didClickOpenFlerp = function(e) {
e.stopPropagation(), n.setState({
rightClick: {
x: e.pageX,
y: e.pageY
}
}), n.toggleContextMenu(!n.state.isContextMenuOpen);
}, n.didClickCloseFlerp = function(e) {
e.stopPropagation(), n.toggleFlerp(!1);
}, n.didActivateContextMenu = function(e) {
e.preventDefault(), n.setState({
rightClick: {
x: e.pageX,
y: e.pageY
}
}), n.toggleContextMenu(!n.state.isContextMenuOpen);
}, n.didClickListItem = function(e) {
if (n.refs.contextMenu) {
var t = o.default.findDOMNode(n.refs.contextMenu);
if (t instanceof Element && t.contains(e.target)) return;
}
if (e.ctrlKey || e.metaKey) return void n.toggleFlerp(!0);
n.props.shouldOpen(n.props.item);
}, n.didClickContextMenu = function(e) {
n.toggleContextMenu(!1), n.props.shouldAction(n.props.item, e);
}, n.didClickFlerpAction = function(e, t) {
t.stopPropagation(), n.toggleFlerp(!1), n.props.shouldAction(n.props.item, e);
}, n.didClickMarkAsRead = function(e) {
e.stopPropagation(), n.props.shouldAction(n.props.item, "mark-feed-as-read");
}, n.state = {
isFlerpOpen: !1,
isFlerpAnimationOn: !1,
isContextMenuOpen: !1,
rightClick: {
x: 0,
y: 0
}
}, n;
}
return __extends(t, e), t.prototype.componentDidUpdate = function(e, t) {
if (e.isHighlighted !== this.props.isHighlighted && this.props.isHighlighted) {
var n = o.default.findDOMNode(this);
n instanceof Element && n.scrollIntoViewSmart();
}
}, t.prototype.render = function() {
var e = this, t = [ "tpl-list-item-feed", "list-item", this.props.isOdd ? "odd" : "even", this.state.isFlerpOpen ? "opened" : "", this.props.isHighlighted ? "active-highlighted" : "", this.props.typeClass, this.props.isDisabled ? "is-feed-disabled" : "" ];
return n.default.createElement("div", {
onClick: this.didClickListItem,
onContextMenu: this.didActivateContextMenu,
className: t.join(" ")
}, n.default.createElement("div", {
className: "item"
}, n.default.createElement("div", {
className: "flerp",
onClick: this.didClickOpenFlerp
}, n.default.createElement("div", {
className: "flerp-icon"
}, n.default.createElement(r.FeederIcon, {
icon: "more-small"
}))), n.default.createElement("div", {
className: "cover"
}), n.default.createElement("div", {
className: "item-icon"
}, "string" == typeof this.props.favicon ? n.default.createElement("img", {
src: this.props.favicon
}) : this.props.favicon), n.default.createElement("div", {
className: "item-title"
}, n.default.createElement("span", {
className: "item-title--text"
}, this.props.title)), n.default.createElement("div", {
className: "item-count-holder"
}, this.props.count > 0 ? n.default.createElement(i.CountGroup, {
text: this.props.count.toString(),
onClick: this.didClickMarkAsRead
}) : null)), this.state.isFlerpOpen || this.state.isFlerpAnimationOn ? n.default.createElement("div", {
className: "tpl-drawer-menu"
}, n.default.createElement("div", {
className: "drawer-buttons-container"
}, n.default.createElement("div", {
onClick: this.didClickFlerpAction.bind(this, "edit"),
className: "drawer-button edit-feed"
}, n.default.createElement(r.FeederIcon, {
icon: "small-wrench"
}), " Edit"), n.default.createElement("div", {
onClick: this.didClickFlerpAction.bind(this, "open-all-unread"),
className: "drawer-button open-all-unread"
}, n.default.createElement(r.FeederIcon, {
icon: "open-in"
}), " Open all unread")), n.default.createElement("div", {
className: "drawer-button cancel",
title: "Cancel",
onClick: this.didClickCloseFlerp
}, n.default.createElement(r.FeederIcon, {
icon: "small-close"
}))) : null, this.state.isContextMenuOpen ? n.default.createElement(s.ContextMenuForFeed, {
elementPosition: function() {
return e.state.rightClick;
},
shouldClose: function() {
return e.toggleContextMenu(!1);
},
didClickItem: this.didClickContextMenu
}) : null);
}, t;
}(n.default.PureComponent), e("FeedListItem", a);
}
};
}), System.register("client/components/LoadingScreen", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return __extends(t, e), t.prototype.render = function() {
return n.default.createElement("div", {
className: "loading-screen"
});
}, t;
}(n.default.Component), e("LoadingScreen", o);
}
};
}), System.register("client/components/NoFeedsInFolderScreen", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.gotoSettings = function() {
n.props.shouldOpenSettings();
}, n.state = {}, n;
}
return __extends(t, e), t.prototype.render = function() {
return n.default.createElement("div", {
className: "tpl-screen-no-posts no-screen"
}, n.default.createElement("div", {
className: "no-screen--message"
}, n.default.createElement("div", {
className: "no-screen--title"
}, "Folder is empty"), n.default.createElement("div", {
className: "no-screen--text"
}, n.default.createElement("a", {
href: "",
className: "button--secondary",
onClick: this.gotoSettings
}, "Go to settings and add feeds"))));
}, t;
}(n.default.Component), e("NoFeedsInFolderScreen", o);
}
};
}), System.register("client/components/FeedList", [ "react", "client/backend-imports", "client/components/FeedListItem", "client/components/FeederIcon", "client/components/LoadingScreen", "client/components/NoFeedsInFolderScreen" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
} ],
execute: function() {
l = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.state = {}, n;
}
return __extends(t, e), t.prototype.render = function() {
var e = this, t = this.props.items.map(function(t, s) {
var a, l, c, u, d, p = !1;
return t instanceof o.Feed ? (a = "is-feed", l = t.countUnread(), c = t.favicon, 
u = t.title, p = t.is_disabled, d = !0) : t instanceof o.Folder ? (a = "is-folder", 
l = t.countUnread(), c = o.Config.images.folder, u = t.name, d = !0, p = t.hasDisabledChildren()) : (a = "is-magic-item", 
"function" == typeof t.updateUnread && t.updateUnread(), l = t.count, c = n.default.createElement(r.FeederIcon, {
icon: t.icon
}), u = t.title, d = !1), n.default.createElement(i.FeedListItem, {
key: t.id,
item: t,
title: u,
favicon: c,
count: l,
typeClass: a,
isOdd: s % 2 == 1,
isHighlighted: s === e.props.highlightedIndex,
hasContextMenu: d,
isDisabled: p,
shouldOpen: e.props.shouldOpenItem,
shouldAction: e.props.shouldActionFromItem
});
});
return this.props.isLoading ? n.default.createElement(s.LoadingScreen, null) : n.default.createElement("div", {
className: "tpl-feed-list"
}, t.length ? t : n.default.createElement(a.NoFeedsInFolderScreen, {
shouldOpenSettings: this.props.shouldOpenSettings
}));
}, t;
}(n.default.Component), e("FeedList", l);
}
};
}), System.register("client/controllers/feedcontainer", [ "react", "react-dom", "app/library/ts/debounce", "client/controller", "client/backend-imports", "client/appglobals", "client/components/FeedList", "client/pui/confirm" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l, c, u, d, p, f, h, m, g;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
l = e;
}, function(e) {
c = e;
} ],
execute: function() {
u = 20, d = function() {
function e(e, t, n, o) {
var r = this;
this.renderCallbacks = [], this.lastScroll = 0, this.folderChanged = function(e) {
r.folder = e, r.populate();
}, this.gotoItem = function(e) {
if (!r.controller.event.paused) {
var t = e, n = e;
if (n instanceof p && (n = n.createModel()), n instanceof s.Folder) {
var o = r.controller.vc.controllerInjector("Folder"), i = new o(r.controller.vc, n);
r.controller.vc.pushScreen(i), r.controller.vc.history.setActiveAction(n);
} else n instanceof s.Feed && (r.controller.vc.stateFactory.shouldGotoPostList(r.controller.vc, n), 
r.controller.vc.history.setActiveAction(n), r.navigateTo(t));
}
}, this.performFeedAction = function(e, t) {
switch (t) {
case "reload-sync":
null === a.app || void 0 === a.app || a.app.poller.forceUpdate();
break;

case "goto-page":
r.gotoPage(e);
break;

case "mark-feed-as-read":
r.markAllAsRead(e);
break;

case "edit":
r.controller.vc.showSettingsScreen(e);
break;

case "open-all-unread":
r.openAllUnread(e);
break;

case "open-every-unread-post":
r.openAllUnread("global");
break;

case "clear-all-unread":
r.controller.clearAllUnread(), r.render();
}
}, this.renderDebounced = i.default(this._render.bind(this), 5), this.folder = e, 
this.controller = n, this.container = t, this.props = o, this.state = {
highlightedIndex: "number" == typeof o.highlightedIndex && o.highlightedIndex,
isLoading: !1,
listItems: []
}, this.controller.vc.listener.addModelListener(e, this.folderChanged), this.populate(!0);
}
return e.prototype.destroy = function() {
o.default.unmountComponentAtNode(this.container), this.controller.vc.listener.removeModelListener(this.folder, this.folderChanged);
}, e.prototype.clearItems = function() {
this.state.listItems = [], this.controller.vc.history.reset();
}, e.prototype.addItem = function(e) {
this.state.listItems.push(e), this.controller.vc.history.addAction(e), this.state.listItems.indexOf(e) === this.state.highlightedIndex && this.controller.vc.history.setActiveAction(e);
}, e.prototype.markAllAsRead = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n;
return __generator(this, function(o) {
switch (o.label) {
case 0:
return e instanceof p ? null === a.app || void 0 === a.app || a.app.analytics.collectEvent("mark-all-as-read", "all-folder") : e instanceof s.Feed ? null === a.app || void 0 === a.app || a.app.analytics.collectEvent("mark-all-as-read", "feed") : e instanceof s.Folder && (null === a.app || void 0 === a.app || a.app.analytics.collectEvent("mark-all-as-read", "folder")), 
[ 4, e.countUnread() ];

case 1:
return t = o.sent(), [ 4, r.askMarkManyAsRead(t) ];

case 2:
return n = o.sent(), n ? [ 4, e.markAllAsRead() ] : [ 2 ];

case 3:
return o.sent(), this.render(), [ 2 ];
}
});
});
}, e.prototype.openAllUnread = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return [ 4, m(e) ];

case 1:
return t.sent(), this.render(), [ 2 ];
}
});
});
}, e.prototype.gotoPage = function(e) {
e instanceof s.Feed && (null === a.UI || void 0 === a.UI || a.UI.openTab(e.link));
}, e.prototype.navForward = function(e) {
this.gotoItem(e);
}, e.prototype.navigateTo = function(e) {
e && (this.state.highlightedIndex = this.controller.vc.history.list.indexOf(e), 
this.render());
}, e.prototype.populate = function(e) {
var t = this;
void 0 === e && (e = !1), this.clearItems(), this.props.showAllItem && (this.folder.isEmpty() || this.addItem(new f(this.folder, this.props.unreadOfAll || function() {
return 0;
}))), this.props.showStarredItem && this.addItem(new h(this.folder)), this.folder.forEachItem(function(e) {
t.addItem(e);
}), e ? this._render() : this.render();
}, e.prototype.render = function(e) {
e && this.renderCallbacks.push(e), this.renderDebounced();
}, e.prototype._render = function() {
var e = n.default.createElement(l.FeedList, {
isLoading: this.state.isLoading,
items: this.state.listItems,
highlightedIndex: this.state.highlightedIndex,
shouldOpenItem: this.gotoItem,
shouldActionFromItem: this.performFeedAction,
shouldOpenSettings: this.controller.vc.openSettingsPage
}, null);
o.default.render(e, this.container), this.controller.vc.refreshWindowHeight(), this.renderCallbacks.forEach(function(e) {
return e();
}), this.renderCallbacks = [];
}, e;
}(), e("default", d), p = function() {
function e() {}
return e;
}(), e("MagicItem", p), f = function(e) {
function t(t, n) {
var o = e.call(this) || this;
return o.id = "posts-for-" + t.id, o.folder = t, o.title = "All posts", o.favicon = s.Config.images.folder, 
o.getUnread = n, o.icon = "all-posts", o.updateUnread(), o;
}
return __extends(t, e), t.prototype.updateUnread = function() {
this.count = this.getUnread();
}, t.prototype.countUnread = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, this.getUnread() ];
});
});
}, t.prototype.createModel = function() {
return this.folder.standard ? null === a.app || void 0 === a.app ? void 0 : a.app.user.createFeedOnlyUnread() : null === a.app || void 0 === a.app ? void 0 : a.app.user.createFeedOfFolder(this.folder);
}, t.prototype.markAllAsRead = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return this.folder.standard ? [ 4, null === a.app || void 0 === a.app ? void 0 : a.app.user.unreads.clearAll() ] : [ 3, 2 ];

case 1:
return [ 2, e.sent() ];

case 2:
return [ 4, this.folder.markAllAsRead() ];

case 3:
return [ 2, e.sent() ];
}
});
});
}, t;
}(p), e("AllPostsInFeedsItem", f), h = function(e) {
function t(t) {
var n = e.call(this) || this;
return n.id = "starred-for-" + t.id, n.folder = t, n.title = "Starred", n.favicon = s.Config.images.folder, 
n.icon = "star-favicon", n.count = 0, n;
}
return __extends(t, e), t.prototype.updateUnread = function() {}, t.prototype.countUnread = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return [ 2, 0 ];
});
});
}, t.prototype.createModel = function() {
return null === a.app || void 0 === a.app ? void 0 : a.app.user.createFeedOnlyStarred();
}, t.prototype.markAllAsRead = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.folder.markAllAsRead() ];

case 1:
return [ 2, e.sent() ];
}
});
});
}, t;
}(p), e("AllStarredInFeedsItem", h), m = function(e) {
return __awaiter(void 0, void 0, void 0, function() {
var t, n, o, i, o;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return "global" !== e ? [ 3, 7 ] : (null === a.app || void 0 === a.app || a.app.analytics.collectEvent("open-all", "every"), 
a.app ? [ 4, a.app.user.unreads.count() ] : [ 3, 2 ]);

case 1:
return n = r.sent(), [ 3, 3 ];

case 2:
n = 0, r.label = 3;

case 3:
return t = n, t > u ? [ 4, g(t) ] : [ 3, 5 ];

case 4:
return o = r.sent(), null === a.app || void 0 === a.app || a.app.user.unreads.openAll(o), 
[ 3, 6 ];

case 5:
null === a.app || void 0 === a.app || a.app.user.unreads.openAll("open_all"), r.label = 6;

case 6:
return [ 2 ];

case 7:
return [ 4, e.unreadPosts() ];

case 8:
return i = r.sent(), i.length > u ? [ 4, g(i.length) ] : [ 3, 10 ];

case 9:
switch (o = r.sent()) {
case "cancel":
return [ 2 ];

case "open_minimum":
i = i.slice(0, 20);
}
r.label = 10;

case 10:
return null === a.app || void 0 === a.app || a.app.ui.openMany(i), [ 2 ];
}
});
});
}, e("openAllUnread", m), g = function(e) {
return __awaiter(void 0, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return "suppress" === (null === a.app || void 0 === a.app ? void 0 : a.app.user.preferences.get("ask:openMany")) ? [ 2, "open_all" ] : [ 4, c.default.asyncConfirm("This will open a large number of tabs (" + e + "). Are you sure?", [ {
text: "Cancel",
value: "cancel"
}, {
text: "Open all " + e,
value: "open_all"
}, {
text: "Open only 20",
value: "open_minimum"
} ]) ];

case 1:
return [ 2, t.sent() ];
}
});
});
};
}
};
}), System.register("client/controllers/screenfolder", [ "client/controllers/feedcontainer", "client/controller", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t(t, o, r) {
void 0 === r && (r = {});
var s = e.call(this, t) || this;
s.updateUnreadCount = function() {
s.populate();
}, s.folder = o, r.scrollTop && (s.lastScroll = r.scrollTop), s.template.set("title", s.folder.name), 
s.template.set("favicon", i.Config.images.folder), s.template.set("count", 0), s.vc.listener.listen("feeds:recount", s.updateUnreadCount), 
s.vc.history.wrapAround = !0;
var a = s.template.el(".tpl-feed-list")[0];
return s.feedContainer = new n.default(o, a, s, {
highlightedIndex: !1,
showAllItem: !0,
showStarredItem: !1,
unreadOfAll: function() {
return s.folder.countUnread();
}
}), s.populate(), s;
}
return __extends(t, e), t.fromId = function(e, n) {
var o = null === i.app || void 0 === i.app ? void 0 : i.app.user.structure.folder(n.folder);
return !!o && new t(e, o, {
active: n.active
});
}, t.prototype.events = function() {
return {};
}, t.prototype.templateName = function() {
return "screen#folder";
}, t.prototype.inAppURL = function() {
return [ "folder", this.folder.id || "new" ];
}, t.prototype.id = function() {
return {
id: "Folder",
folder: this.folder.id,
active: this.feedContainer.state.highlightedIndex,
scrollTop: this.lastScroll
};
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), this.feedContainer.destroy(), this.vc.listener.unlisten("feeds:recount", this.updateUnreadCount);
}, t.prototype.markAllAsReadFromBar = function(e) {
e.preventDefault(), this.folder.markAllAsRead(), this.updateUnreadCount();
}, t.prototype.navForward = function() {
this.feedContainer.navForward(this.vc.history.current());
}, t.prototype.navigateTo = function(e) {
this.feedContainer.navigateTo(e);
}, t.prototype.populate = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return this.feedContainer.populate(), this.tryToRestoreScroll(), [ 2 ];
});
});
}, t;
}(o.default), e("default", r);
}
};
}), System.register("client/controllers/screengetstarted", [ "jquery", "client/controller", "client/appglobals", "client/pui/twophasemodal", "client/pui/alert", "client/backend-imports", "app/library/ts/library" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l, c;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
l = e;
} ],
execute: function() {
c = function(e) {
function t(t) {
var n, o = e.call(this, t) || this;
return o.opmlUploadStatusChange = o.opmlUploadStatusChange.bind(o), o.whenDone = o.whenDone.bind(o), 
o.toggleGetStartedButton(), o.template.setItems("suggestions", (null === (n = i.Ext.getBackgroundPage()) || void 0 === n ? void 0 : n.STANDARD_FEEDS) || []), 
o;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#get-started";
}, t.prototype.events = function() {
return {
"click [data-to]": "goToClicked",
"click .skip": "skipClicked",
"click .tpl-suggestion-box-item": "toggleActiveSuggestion",
"click .add-and-get-started": "addAndGetStarted",
"change .opml-file": "uploadAndImport"
};
}, t.prototype.id = function() {
return !1;
}, t.prototype.inAppURL = function() {
return [ "get-started" ];
}, t.prototype.onVisible = function() {
this.twoPhaseModal = new r.default(this.template.el(".two-phase-modal"));
}, t.prototype.goToClicked = function(e) {
e.preventDefault(), this.goTo(n.default(e.currentTarget).data("to"));
}, t.prototype.goTo = function(e) {
switch (e) {
case "payment":
null === i.UI || void 0 === i.UI || i.UI.openTab(i.Config.feeder.payURL);
break;

case "app":
null === i.UI || void 0 === i.UI || i.UI.openTab(i.Config.feeder.iosURL);
break;

case "add-feed":
this.vc.showAddScreen(), this.modal && this.modal.destroy();
break;

default:
throw new Error("Bad go to " + e);
}
}, t.prototype.skipClicked = function(e) {
e.preventDefault(), this.whenDone();
}, t.prototype.toggleActiveSuggestion = function(e) {
e.preventDefault(), n.default(e.currentTarget).toggleClass("is-active"), this.toggleGetStartedButton();
}, t.prototype.addAndGetStarted = function(e) {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
return e.preventDefault(), this.twoPhaseModal.gotoPage(1), this.startTimeoutTimer(), 
i.app ? [ 4, i.app.user.addStandardFeeds(this.getSelected()) ] : [ 3, 2 ];

case 1:
t.sent(), t.label = 2;

case 2:
return this.whenDone(), [ 2 ];
}
});
});
}, t.prototype.whenDone = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return i.app ? [ 4, i.app.user.addGetStartedFeed() ] : [ 3, 2 ];

case 1:
e.sent(), e.label = 2;

case 2:
return this.lastStep(), [ 2 ];
}
});
});
}, t.prototype.lastStep = function() {
clearTimeout(this.waitTimer), document.location.href = document.location.toString().replace("get_started=", "").replace("pro_trial=", "");
}, t.prototype.getSelected = function() {
return this.template.el(".is-active [data-id]").toArray().map(function(e) {
return n.default(e).data("id");
});
}, t.prototype.toggleGetStartedButton = function() {
this.template.el(".add-and-get-started-container").toggle(this.template.el(".is-active").length > 0), 
this.template.el(".pick-one-to-get-started-container").toggle(0 === this.template.el(".is-active").length);
}, t.prototype.uploadAndImport = function() {
var e = this;
this.twoPhaseModal.gotoPage(1);
var t = this.template.el(".opml-file")[0];
l.readFileInput(t, function(t) {
e.uploadDone(t);
});
}, t.prototype.uploadDone = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
return i.app ? "string" != typeof e ? [ 3, 2 ] : (i.app.events.subscribe("sync:merge", this.opmlUploadStatusChange), 
t = new a.Import(e), [ 4, t.execute(i.app) ]) : [ 2 ];

case 1:
return n.sent(), this.importDone(), [ 3, 3 ];

case 2:
this.twoPhaseModal.gotoPage(0), s.default.alertError("Could not read contents of OPML file."), 
n.label = 3;

case 3:
return [ 2 ];
}
});
});
}, t.prototype.importDone = function() {
this.whenDone(), null === i.app || void 0 === i.app || i.app.events.unsubscribe("sync:merge", this.opmlUploadStatusChange);
}, t.prototype.opmlUploadStatusChange = function(e) {
this.template.set("loadingText", e.status);
}, t.prototype.startTimeoutTimer = function() {
this.waitTimer = window.setTimeout(this.whenDone, 3e4);
}, t;
}(o.default), e("default", c);
}
};
}), System.register("client/controllers/screeniframe", [ "jquery", "client/controller" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t, o, i) {
var r = e.call(this, t) || this;
return r.vc.hideNotification && r.vc.hideNotification(), r.template.set("count", !1), 
r.template.set("title", i), r.src = o, n.default.makeArray(r.template.element.find("x-iframe")).forEach(function(e) {
r.fixIframe(e);
}), r;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#iframe";
}, t.prototype.id = function() {
return !1;
}, t.prototype.events = function() {
return {};
}, t.prototype.inAppURL = function() {
return [ "iframe" ];
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), this.vc.toggleNotification();
}, t.prototype.fixIframe = function(e) {
n.default(e).replaceWith(n.default("<iframe></iframe>").attr("src", this.src));
}, t.prototype.back = function(e) {
e && (e.preventDefault(), e.stopPropagation()), this.vc.popScreenInstant();
}, t;
}(o.default), e("default", i);
}
};
}), System.register("client/controllers/screenwelcome", [ "client/controller" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#welcome";
}, t.prototype.id = function() {
return !1;
}, t.prototype.events = function() {
return {
"click .start-using-feeder": "huzzah"
};
}, t.prototype.inAppURL = function() {
return [ "welcome" ];
}, t.prototype.huzzah = function() {
this.template.element.addClass("byebye");
}, t;
}(n.default), e("default", o);
}
};
}), System.register("client/controllers/screensignup", [ "client/controller", "client/controllers/screeniframe", "client/appglobals", "client/pui/alert" ], function(e, t) {
"use strict";
var n, o, i, r, s, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
s = [ "An error ocurred.\nPlease try again later" ], a = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.onSuccess = !1, n.byebye = !1, n.showSignup(), n;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#signup";
}, t.prototype.events = function() {
return {
"submit .signup-form": "signup",
"submit .login-form": "login",
"click .i-dont-want-pro": "noPro",
"click .already-account": "toggleLogin",
"click .signup-please": "toggleSignup",
"click .terms-and-conditions": "clickedTermsAndConditions"
};
}, t.prototype.inAppURL = function() {
return [ "signup" ];
}, t.prototype.id = function() {
return !1;
}, t.prototype.onVisible = function() {
this.vc.shouldAlwaysHideNotification = !0, this.vc.toggleNotification(), null === i.app || void 0 === i.app || i.app.analytics.collectEvent("onVisible", "signup");
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), this.vc.shouldAlwaysHideNotification = !1, this.vc.toggleNotification();
}, t.prototype.signup = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n, o, a, l, c, u = this;
return __generator(this, function(d) {
switch (d.label) {
case 0:
if (e.preventDefault(), this.currentAlert) return this.currentAlert.destroy(), [ 2 ];
if (!i.app) return [ 2 ];
i.app.analytics.collectEvent("signup:clicked", "signup"), t = {}, this.template.el(".signup-form").serializeArray().forEach(function(e) {
t[e.name] = e.value;
}), this.template.el(".signup-form").addClass("loading"), this.template.el(".signup-form input").blur(), 
d.label = 1;

case 1:
return d.trys.push([ 1, 3, , 4 ]), [ 4, i.app.user.signupToPro(t) ];

case 2:
return c = d.sent(), n = c[0], o = c[1], [ 3, 4 ];

case 3:
return a = d.sent(), console.error(a), n = !1, o = s, [ 3, 4 ];

case 4:
return this.template.el(".signup-form").removeClass("loading"), n ? (i.app.analytics.collectEvent("signup:signup", "success"), 
this.succeeded()) : (i.app.analytics.collectEvent("signup:signup", "error"), l = (o || s).join("\n"), 
this.currentAlert = r.default.alert(l, function() {
u.currentAlert = null, u.template.el(".signup-form [name=email]")[0].focus();
})), [ 2 ];
}
});
});
}, t.prototype.login = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n, o, a, l = this;
return __generator(this, function(c) {
switch (c.label) {
case 0:
return e.preventDefault(), this.currentAlert ? (this.currentAlert.destroy(), [ 2 ]) : i.app ? (i.app.analytics.collectEvent("signup:clicked", "login"), 
t = {}, this.template.el(".login-form").serializeArray().forEach(function(e) {
t[e.name] = e.value;
}), this.template.el(".login-form").addClass("loading"), this.template.el(".login-form input").blur(), 
[ 4, i.app.user.loginToPro(t) ]) : [ 2 ];

case 1:
return n = c.sent(), o = n[0], a = n[1], this.template.el(".login-form").removeClass("loading"), 
o ? (i.app.analytics.collectEvent("signup:login", "success"), this.succeeded()) : (i.app.analytics.collectEvent("signup:login", "error"), 
this.currentAlert = r.default.alert((a || s).join("\n"), function() {
l.currentAlert = null, l.template.el(".login-form [name=email]")[0].focus();
})), [ 2 ];
}
});
});
}, t.prototype.noPro = function(e) {
var t = this;
e.preventDefault(), null === i.app || void 0 === i.app || i.app.analytics.collectEvent("signup:clicked", "no-pro"), 
r.default.alertWithButtons('\n      <h2 class="margin-bottom-small">Are you sure?</h2>\n      <p>With a free account you get:</p>\n      <ul class="alert-list">\n        <li>Full backups</li>\n        <li>Sync between devices</li>\n        <li>iOS &amp; Android apps</li>\n        <li class="inset-list-item">… and more</ku>\n      </ul>\n      <p class="margin-bottom-medium">You can of course sign up later.</p>\n    '.replace(/\n/g, ""), "Continue without account", "Cancel").yes(function() {
null === i.app || void 0 === i.app || i.app.analytics.collectEvent("signup:noAccount", "yes"), 
null === i.app || void 0 === i.app || i.app.user.setDidChooseToUseBasic(!0), t.hide();
}).no(function() {
null === i.app || void 0 === i.app || i.app.analytics.collectEvent("signup:noAccount", "no");
});
}, t.prototype.hide = function() {
this.template.element.addClass("byebye"), this.byebye = !0;
}, t.prototype.showSignup = function() {
this.template.el(".signup-container").addClass("signup").removeClass("login"), this.template.el(".pill-buttons a").removeClass("active").filter(".signup-please").addClass("active");
}, t.prototype.showLogin = function() {
this.template.el(".signup-container").addClass("login").removeClass("signup"), this.template.el(".pill-buttons a").removeClass("active").filter(".already-account").addClass("active");
}, t.prototype.toggleLogin = function(e) {
e.preventDefault(), null === i.app || void 0 === i.app || i.app.analytics.collectEvent("signup:tab-switch", "login"), 
this.showLogin();
}, t.prototype.toggleSignup = function(e) {
e.preventDefault(), null === i.app || void 0 === i.app || i.app.analytics.collectEvent("signup:tab-switch", "signup"), 
this.showSignup();
}, t.prototype.succeeded = function() {
this.hide(), this.onSuccess && this.onSuccess();
}, t.prototype.clickedTermsAndConditions = function(e) {
e.preventDefault();
var t = new o.default(this.vc, i.Config.feeder.termsUrl, "Terms & Conditions");
this.vc.setCurrentScreen(t), null === i.app || void 0 === i.app || i.app.analytics.collectEvent("signup:terms-and-conditions", "read");
}, t.prototype.removeDelayInMilliseconds = function() {
return this.byebye ? 3e3 : 0;
}, t;
}(n.default), e("default", a);
}
};
}), System.register("client/components/PageStyleDialog", [ "react", "client/appglobals", "client/backend-imports" ], function(e, t) {
"use strict";
function n(e, t) {
return t.length === e.columns.length && t.every(function(t) {
return e.columns.includes(t);
});
}
var o, i, r, s;
t && t.id;
return e("comparePageStyleColumns", n), {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
} ],
execute: function() {
s = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.setColumnStyle = function(e) {
n.props.shouldChangePageStyle(__assign(__assign({}, n.props.pageStyle), {
defaultPage: "reader",
columns: e
}));
}, n.setDefaultPage = function(e) {
n.props.shouldChangePageStyle(__assign(__assign({}, n.props.pageStyle), {
defaultPage: e
}));
}, n.state = {}, n;
}
return __extends(t, e), t.prototype.render = function() {
var e = this, t = "dashboard" !== this.props.pageStyle.defaultPage, s = [ {
name: "Minimal",
description: "Two panes with collapsing folders",
image: i.Ext.assetURL("icons/view-mode-1@2x.png"),
isActive: t && n(this.props.pageStyle, [ "sidebar", "content" ]) || n(this.props.pageStyle, [ "sidebar" ]),
onClick: function() {
return e.setColumnStyle([ "sidebar", "content" ]);
}
}, {
name: "Reader",
description: "Read posts inline for fast consuming",
image: i.Ext.assetURL("icons/view-mode-2@2x.png"),
isActive: t && n(this.props.pageStyle, [ "sidebar", "feed" ]),
onClick: function() {
return e.setColumnStyle([ "sidebar", "feed" ]);
}
}, {
name: "3-pane",
description: "The entire hierarchy for the best overview",
image: i.Ext.assetURL("icons/view-mode-3@2x.png"),
isActive: t && n(this.props.pageStyle, [ "sidebar", "feed", "content" ]),
onClick: function() {
return e.setColumnStyle([ "sidebar", "feed", "content" ]);
}
}, {
name: "Dashboard",
description: "Real-time streams of information.",
image: i.Ext.assetURL("icons/view-mode-4@2x.png"),
isActive: "dashboard" === this.props.pageStyle.defaultPage,
onClick: function() {
return e.setDefaultPage("dashboard");
}
} ];
return o.default.createElement("div", {
className: "PageStyleDialog"
}, o.default.createElement("div", {
className: "PageStyleDialog--header"
}, o.default.createElement("div", {
className: "PageStyleDialog--title"
}, "Change viewing mode"), o.default.createElement("a", {
href: i.Ext.settingsURL(r.Config.feeder.root, {}, "/themes"),
className: "PageStyleDialog--themes-button button--secondary"
}, "Switch theme")), o.default.createElement("div", {
className: "PageStyleDialog--modes"
}, s.map(function(e) {
return o.default.createElement("div", {
onClick: e.onClick,
className: "PageStyleDialog--mode " + (e.isActive ? "is-active" : "not-active"),
key: e.name
}, o.default.createElement("div", {
className: "PageStyleDialog--mode-image"
}, o.default.createElement("img", {
src: e.image
})), o.default.createElement("div", {
className: "PageStyleDialog--mode-name"
}, e.name), o.default.createElement("div", {
className: "PageStyleDialog--mode-description"
}, e.description));
})));
}, t;
}(o.default.Component), e("PageStyleDialog", s);
}
};
}), System.register("client/components/SortToolbar", [ "react", "react-dom", "client/components/ContextMenu", "client/components/FeederIcon", "client/components/DisplaySettingsDialog", "client/components/PageStyleDialog" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
} ],
execute: function() {
l = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.setShowDisplaySettings = function(e) {
n.setState({
showDisplaySettings: e
});
}, n.setShowSortSettings = function(e) {
n.setState({
showSortSettings: e
});
}, n.setShowPageStyleDialog = function(e) {
n.setState({
showPageStyleDialog: e
});
}, n.didChooseSort = function(e) {
n.props.shouldChangeSortOrder(e), n.setState({
showSortSettings: !1
});
}, n.didChooseTimestampType = function(e) {
var t = e.target.value;
n.props.shouldChangeTimestampType(t);
}, n.toggleAutoUpdate = function(e) {
n.props.shouldChangeAutoUpdate(e);
}, n.setShowContentStyle = function(e) {
n.props.shouldChangePostListStyle(__assign(__assign({}, n.props.postListStyle), {
showContent: e
}));
}, n.setCompactMode = function(e) {
n.props.shouldChangePostListStyle(__assign(__assign({}, n.props.postListStyle), {
compactMode: e
}));
}, n.state = {
showSortSettings: !1,
showDisplaySettings: !1,
showPageStyleDialog: !1
}, n;
}
return __extends(t, e), t.prototype.getNumberOfAppliedFilters = function() {
var e = this.props.postDisplayOptions.filters, t = this.props.defaultDisplayOptions.filters, n = e.filter(function(e) {
return !t.includes(e);
}), o = t.filter(function(t) {
return !e.includes(t);
});
return n.length + o.length;
}, t.prototype.render = function() {
var e, t, l = this, c = "small" === this.props.barHeight;
switch (this.props.sortOrder) {
case "oldest-first":
t = n.default.createElement(r.FeederIcon, {
icon: "arrow-up-small"
}), e = [ n.default.createElement("span", {
key: "icon",
className: "sort--button-icon icon",
ref: "sortButton"
}, n.default.createElement(r.FeederIcon, {
icon: "arrow-up-small"
})), n.default.createElement("span", {
key: "text",
className: "sort--button-label"
}, "Oldest first") ];
break;

default:
t = n.default.createElement(r.FeederIcon, {
icon: "arrow-down-small"
}), e = [ n.default.createElement("span", {
key: "icon",
className: "sort--button-icon icon",
ref: "sortButton"
}, n.default.createElement(r.FeederIcon, {
icon: "arrow-down-small"
})), n.default.createElement("span", {
key: "text",
className: "sort--button-label"
}, "Newest first ") ], "newest-first" !== this.props.sortOrder && console.warn("Unknown sortOrder", this.props.sortOrder);
}
var u = this.getNumberOfAppliedFilters();
return n.default.createElement("div", {
className: "tpl-sort-toolbar tpl-sort-toolbar--" + this.props.barHeight
}, this.props.pageStyle.columns.includes("feed") && !this.props.pageStyle.columns.includes("content") ? n.default.createElement("div", {
className: "nav-button nav-button--icon prev hide-in-dashboard",
title: "Previous post",
onClick: function() {
return l.props.shouldNavigate("up");
}
}, n.default.createElement(r.FeederIcon, {
icon: "arrow-up"
})) : null, this.props.pageStyle.columns.includes("feed") && !this.props.pageStyle.columns.includes("content") ? n.default.createElement("div", {
className: "nav-button nav-button--icon next hide-in-dashboard",
title: "Next post",
onClick: function() {
return l.props.shouldNavigate("down");
}
}, n.default.createElement(r.FeederIcon, {
icon: "arrow-down"
})) : null, this.props.pageStyle.columns.includes("feed") && !this.props.pageStyle.columns.includes("content") ? n.default.createElement("div", {
className: "sort--select hide-in-dashboard"
}, n.default.createElement("div", {
className: "sort--select-item nav-button nav-button--icon " + ("collapsed" === this.props.postListStyle.showContent ? "active" : ""),
onClick: function() {
return l.setShowContentStyle("collapsed");
},
title: "Collapsed"
}, n.default.createElement(r.FeederIcon, {
icon: "collapsed"
})), n.default.createElement("div", {
className: "sort--select-item nav-button nav-button--icon " + ("expanded" === this.props.postListStyle.showContent ? "active" : ""),
onClick: function() {
return l.setShowContentStyle("expanded");
},
title: "Expanded"
}, n.default.createElement(r.FeederIcon, {
icon: "expanded"
}))) : null, n.default.createElement("div", {
className: "nav-button nav-button--text-icon sort--filters sort--button " + (this.state.showDisplaySettings ? "context-active" : ""),
onClick: function() {
return l.setShowDisplaySettings(!l.state.showDisplaySettings);
}
}, n.default.createElement("span", {
className: "icon",
ref: "filtersButton"
}, n.default.createElement(r.FeederIcon, {
icon: "filter-small"
})), n.default.createElement("span", {
className: "sort--button-label"
}, "Filters", u ? n.default.createElement("span", {
className: "sort--number-of-filters"
}, u) : null)), n.default.createElement("div", {
className: "nav-button nav-button--text-icon sort--order sort--button " + (this.state.showSortSettings ? "context-active" : ""),
onClick: function() {
return l.setShowSortSettings(!l.state.showSortSettings);
}
}, e), this.props.pageStyle.columns.includes("feed") && !this.props.pageStyle.columns.includes("content") ? n.default.createElement("div", {
ref: "pageStyleButton",
className: "nav-button display--button hide-in-dashboard " + (this.state.showPageStyleDialog ? "context-active" : ""),
onClick: function() {
return l.setShowPageStyleDialog(!l.state.showPageStyleDialog);
}
}, "Display") : null, n.default.createElement(i.ContextMenu, {
isVisible: this.state.showDisplaySettings,
className: c ? "with-tab" : "with-arrow",
elementPosition: function() {
return o.default.findDOMNode(l.refs.filtersButton);
},
elementSticky: {
x: "center",
y: "bottom"
},
marginLeft: c ? -11 : 0,
noAnimateIn: c,
shouldClose: function() {
return l.setShowDisplaySettings(!1);
}
}, c ? n.default.createElement("div", {
className: "context-menu-tab",
onClick: function() {
return l.setShowDisplaySettings(!1);
}
}, n.default.createElement(r.FeederIcon, {
icon: "filter-small"
})) : null, n.default.createElement(s.DisplaySettingsDialog, {
toggled: this.props.postDisplayOptions.filters,
canSeeFiltered: this.props.canSeeFiltered,
didChangeSelection: this.props.shouldChangeDisplaySettings
})), n.default.createElement(i.ContextMenu, {
isVisible: this.state.showSortSettings,
className: c ? "with-tab" : "with-arrow",
forceRight: !0,
elementPosition: function() {
return o.default.findDOMNode(l.refs.sortButton);
},
elementSticky: {
x: "center",
y: "bottom"
},
marginLeft: c ? 10 : 0,
noAnimateIn: c,
shouldClose: function() {
return l.setShowSortSettings(!1);
}
}, c ? n.default.createElement("div", {
className: "context-menu-tab",
onClick: function() {
return l.setShowSortSettings(!1);
}
}, t) : null, n.default.createElement("div", {
className: "ios-table"
}, n.default.createElement("div", {
className: "ios-table--header"
}, "Display"), n.default.createElement("div", null, n.default.createElement("div", {
className: "ios-table--row-header"
}, "Order"), n.default.createElement("div", {
onClick: function() {
return l.didChooseSort("oldest-first");
},
className: "ios-table--item ios-table--action"
}, n.default.createElement("div", {
className: "ios-table--item-label"
}, "Oldest first"), "oldest-first" === this.props.sortOrder ? n.default.createElement("div", {
className: "ios-table--item-right"
}, n.default.createElement(r.FeederIcon, {
icon: "checkmark"
})) : null), n.default.createElement("div", {
onClick: function() {
return l.didChooseSort("newest-first");
},
className: "ios-table--item ios-table--action ios-table--section-end"
}, n.default.createElement("div", {
className: "ios-table--item-label"
}, "Newest first"), "newest-first" === this.props.sortOrder ? n.default.createElement("div", {
className: "ios-table--item-right"
}, n.default.createElement(r.FeederIcon, {
icon: "checkmark"
})) : null), n.default.createElement("div", {
className: "ios-table--row-header"
}, "Realtime"), n.default.createElement("div", {
onClick: function() {
return l.toggleAutoUpdate(!l.props.autoUpdate);
},
className: "ios-table--item ios-table--action ios-table--section-end"
}, n.default.createElement("div", {
className: "ios-table--item-label"
}, "Auto-update"), this.props.autoUpdate ? n.default.createElement("div", {
className: "ios-table--item-right"
}, n.default.createElement(r.FeederIcon, {
icon: "checkmark"
})) : null), n.default.createElement("div", {
className: "ios-table--row-header"
}, "Style"), n.default.createElement("div", {
onClick: function() {
return l.setCompactMode(!l.props.postListStyle.compactMode);
},
className: "ios-table--item ios-table--action ios-table--section-end"
}, n.default.createElement("div", {
className: "ios-table--item-label"
}, "Compact mode"), this.props.postListStyle.compactMode ? n.default.createElement("div", {
className: "ios-table--item-right"
}, n.default.createElement(r.FeederIcon, {
icon: "checkmark"
})) : null), n.default.createElement("div", {
className: "ios-table--row-header"
}, "Timestamp"), n.default.createElement("div", {
className: "ios-table--item ios-table--action"
}, n.default.createElement("select", {
value: this.props.timestampType,
onChange: this.didChooseTimestampType
}, n.default.createElement("option", {
value: "relative"
}, "Relative (1m ago)"), n.default.createElement("option", {
value: "absolute"
}, "Absolute (09:30)"), n.default.createElement("option", {
value: "none"
}, "None")))))), n.default.createElement(i.ContextMenu, {
isVisible: this.state.showPageStyleDialog,
elementPosition: function() {
return l.refs.pageStyleButton;
},
elementSticky: {
x: "center",
y: "bottom"
},
className: "with-arrow wide page-style-menu",
shouldClose: function() {
return l.setShowPageStyleDialog(!1);
}
}, n.default.createElement(a.PageStyleDialog, {
pageStyle: this.props.pageStyle,
shouldChangePageStyle: this.props.shouldChangePageStyle
})));
}, t;
}(n.default.Component), e("SortToolbar", l);
}
};
}), System.register("client/controllers/datahooks", [ "jquery", "client/pui/data", "client/appglobals" ], function(e, t) {
"use strict";
function n(e) {
var t = e.getMonth() + 1, n = e.getDate(), o = e.getHours(), i = e.getMinutes(), s = r(t), a = r(n), l = r(o), c = r(i);
return e.getFullYear() + "-" + s + "-" + a + " " + l + ":" + c;
}
function o(e) {
var t = e.getMonth() + 1, n = e.getDate(), o = e.getHours(), i = e.getMinutes(), s = r(t), a = r(n), l = r(o), c = r(i);
return e.getFullYear() + "-" + s + "-" + a + " " + l + ":" + c;
}
function i(e) {
var t = e.getHours(), n = e.getMinutes();
return r(t) + ":" + r(n);
}
function r(e) {
return e < 10 ? "0" + e : "" + e;
}
function s(e, t) {
void 0 === t && (t = {
allowFuture: !0
});
var n = (new Date().getTime() - e.getTime()) / 1e3, o = Math.abs(Math.floor(n / 60));
if (n < 0 && !t.allowFuture) return "";
var i = n < 0 ? " from now" : " ago";
switch (!0) {
case 0 == o:
return Math.floor(Math.abs(n)) < 2 ? "just now" : Math.floor(Math.abs(n)) + " sec " + i;

case o < 60:
return o + " min " + i;

case o < 1440:
return Math.floor(o / 60) + " hrs " + i;

case o < 44640:
var r = Math.floor(o / 1440);
return 1 === r ? r + " day " + i : r + " days " + i;

case o < 525600:
return Math.floor(o / 43200) + " mon " + i;

case o < 5256e3:
var s = Math.floor(o / 525960);
return 1 === s ? s + " year " + i : s + " yrs " + i;

case o < 5256e4:
return Math.floor(o / 525960 / 10) + " decades " + i;

case o < 5256e5:
return Math.floor(o / 525960 / 100) + " centuries " + i;

case o < 5256e6:
return Math.floor(o / 525960 / 1e3) + " millenia " + i;

case o < 5256e7:
return Math.floor(o / 525960 / 1e4) + " megaannums " + i;
}
return "∞ " + i;
}
function a(e) {
var t = (new Date().getTime() - e.getTime()) / 1e3, n = Math.abs(Math.floor(t / 60));
if (t < 0) return "";
switch (!0) {
case 0 == n:
return Math.floor(Math.abs(t)) + "s";

case n < 60:
return n + "m";

case n < 1440:
return Math.floor(n / 60) + "h";

case n < 44640:
return Math.floor(n / 1440) + "d";

case n < 525600:
return Math.floor(n / 43200) + "M";

default:
return Math.floor(n / 525960) + "y";
}
return "";
}
var l, c, u;
t && t.id;
return e("getFormattedDate", n), e("shortTimestamp", o), e("reallyShortTimestamp", i), 
e("timeSince", s), e("shortTimeSince", a), {
setters: [ function(e) {
l = e;
}, function(e) {
c = e;
}, function(e) {
u = e;
} ],
execute: function() {
c.dataHook("count .tpl-count-group .count", function(e, t) {
l.default(t).closest(".tpl-count-group").toggle(!!e), l.default(t).closest(".list-item").toggleClass("has-unread", !!e);
}), c.dataHook("starred .item", function(e, t) {
l.default(t).toggleClass("is-starred", !!e);
}), c.translateHook("post", function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, o, i, r;
return __generator(this, function(a) {
return t = !!e.feed_id && (null === u.app || void 0 === u.app ? void 0 : u.app.user.feed(e.feed_id)), 
o = "", i = "", (e.published || e.created_at) && (r = new Date(e.created_at ? e.created_at : e.published), 
o = s(r), i = n(r)), [ 2, {
title: e.title,
link: e.getLink(),
count: e.is_read ? "" : "NEW",
starred: e.is_starred,
favicon: t ? t.favicon : u.Config.defaultFavicon(),
subTitle: t ? t.title : "",
timestamp: o,
timestampHover: i
} ];
});
});
}), c.translateHook("feed", function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n;
return __generator(this, function(o) {
return t = {
title: e.title || "error",
favicon: e.favicon || "",
link: e.link || ""
}, n = e.countUnread(), t.count = n, [ 2, t ];
});
});
}), c.translateHook("folder", function(e) {
return __awaiter(this, void 0, void 0, function() {
var t;
return __generator(this, function(n) {
return t = e.countUnread(), [ 2, {
folder: e,
title: e.name,
favicon: u.Config.images.folder,
count: t
} ];
});
});
});
}
};
}), System.register("client/components/PostListItem", [ "react", "react-dom", "client/components/CountGroup", "client/components/FeederIcon", "client/controllers/datahooks", "client/components/ContextMenuForPost" ], function(e, t) {
"use strict";
function n(e, t, n) {
var o = "", i = "";
if (e) {
var r = new Date(e);
switch (t) {
case "none":
o = "";
break;

case "absolute":
o = n ? a.reallyShortTimestamp(r) : a.shortTimestamp(r);
break;

default:
o = n ? a.shortTimeSince(r) : a.timeSince(r, {
allowFuture: !1
});
}
i = a.getFormattedDate(r);
}
return [ o, i ];
}
var o, i, r, s, a, l, c, u, d;
t && t.id;
return e("makeTimestamp", n), {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
l = e;
} ],
execute: function() {
c = 2, u = 1, d = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.toggleContextMenu = function(e) {
n.setState({
isJumpMenuOpen: !1,
isContextMenuOpen: e
});
}, n.toggleJumpMenu = function(e) {
n.setState({
isContextMenuOpen: !1,
isJumpMenuOpen: e
});
}, n.didActivateContextMenu = function(e) {
e.preventDefault(), n.setState({
rightClick: {
x: e.pageX,
y: e.pageY
}
}), n.toggleContextMenu(!n.state.isContextMenuOpen);
}, n.didClickListItem = function(e) {
if (e.button !== u) {
if (n.refs.contextMenu) {
var t = i.default.findDOMNode(n.refs.contextMenu);
if (t instanceof Element && t.contains(e.target)) return;
}
e.ctrlKey || e.metaKey || e.button === c ? n.props.shouldQueue(n.props.post) : n.props.shouldOpen(n.props.post);
}
}, n.didMouseDown = function(e) {
e.button === u && (e.preventDefault(), n.props.shouldQueue(n.props.post));
}, n.didClickMarkAsStarred = function(e) {
e.stopPropagation(), n.props.shouldMarkAsStarred(n.props.post, !0);
}, n.didClickUnmarkAsStarred = function(e) {
e.stopPropagation(), n.props.shouldMarkAsStarred(n.props.post, !1);
}, n.didClickToggleStar = function(e) {
e.stopPropagation(), n.props.shouldMarkAsStarred(n.props.post, !n.props.isStarred);
}, n.didClickMarkAsRead = function(e) {
e.stopPropagation(), n.props.shouldMarkAsRead(n.props.post, !0);
}, n.didClickUnmarkAsRead = function(e) {
e.stopPropagation(), n.props.shouldMarkAsRead(n.props.post, !1);
}, n.didClickOpenFlerp = function(e) {
e.stopPropagation(), n.setState({
rightClick: {
x: e.pageX,
y: e.pageY
}
}), n.toggleContextMenu(!n.state.isContextMenuOpen);
}, n.toggleOnHover = function() {
n.setState({
isHover: !0
});
}, n.toggleOffHover = function() {
n.setState({
isHover: !1
});
}, n.didClickJump = function(e) {
n.props.shouldJumpUntil(e), n.toggleJumpMenu(!1);
}, n.performAction = function(e) {
if (n.toggleContextMenu(!1), l.isGlobalContextMenuAction(e)) n.props.shouldAction(n.props.post, e); else switch (e) {
case "toggle-read":
n.props.shouldMarkAsRead(n.props.post, !n.props.post.is_read);
break;

case "toggle-star":
n.props.shouldMarkAsStarred(n.props.post, !n.props.post.is_starred);
break;

case "add-to-collection":
n.props.shouldPromptPostCollections(n.props.post);
break;

case "jump-midnight":
n.didClickJump("midnight");
break;

case "jump-day":
n.didClickJump("day");
break;

case "jump-week":
n.didClickJump("week");
break;

case "jump-month":
n.didClickJump("month");
}
}, n.state = {
isHover: !1,
rightClick: {
x: 0,
y: 0
},
isContextMenuOpen: !1,
isJumpMenuOpen: !1
}, n;
}
return __extends(t, e), t.prototype.componentDidUpdate = function(e, t) {
if (e.isHighlighted !== this.props.isHighlighted && this.props.isHighlighted) {
var n = i.default.findDOMNode(this);
n instanceof Element && n.scrollIntoViewSmart();
}
}, t.prototype.render = function() {
var e = this, t = n(this.props.published, this.props.timestampType, !!this.props.postListStyle.compactMode), i = t[0], a = t[1], c = [ "list-item", "tpl-list-item-post", this.props.isOdd ? "odd" : "even", this.props.isQueued ? "queued" : "", this.props.isHighlighted ? "active-highlighted" : "", this.state.isHover ? "hover" : "", this.props.postListStyle.compactMode ? "compact-mode" : "" ], u = [ "item", this.props.isStarred ? "is-starred" : "", this.props.isFiltered ? "is-filtered" : "" ];
return o.default.createElement("div", {
id: "post-" + this.props.postId,
onClick: this.didClickListItem,
onMouseDown: this.didMouseDown,
onContextMenu: this.didActivateContextMenu,
className: c.join(" "),
onMouseEnter: this.toggleOnHover,
onMouseLeave: this.toggleOffHover
}, o.default.createElement("div", {
className: u.join(" ")
}, this.state.isHover ? o.default.createElement("div", {
className: "flerp",
onClick: this.didClickOpenFlerp
}, o.default.createElement("div", {
className: "flerp-icon"
}, o.default.createElement(s.FeederIcon, {
icon: "more-small"
}))) : null, this.props.isStarred ? o.default.createElement("div", {
className: "item-starred",
onClick: this.didClickUnmarkAsStarred
}, o.default.createElement(s.FeederIcon, {
icon: "star-filled"
})) : null, o.default.createElement("div", {
className: "item-favicon"
}, o.default.createElement("img", {
src: this.props.feedFavicon
})), o.default.createElement("div", {
className: "item-title"
}, o.default.createElement("span", {
className: "item-title--text"
}, this.props.title), o.default.createElement("div", {
className: "item-meta"
}, o.default.createElement("div", {
className: "item-sub-title"
}, this.props.feedTitle), o.default.createElement("div", {
className: "item-date",
title: a
}, i), this.props.collections.length ? o.default.createElement("div", {
className: "item-collections"
}, this.props.collections.join(", ")) : null)), o.default.createElement("div", {
className: "item-count-holder"
}, this.props.isRead ? null : o.default.createElement(r.CountGroup, {
text: "NEW",
onClick: this.didClickMarkAsRead
}))), this.state.isContextMenuOpen ? o.default.createElement(l.ContextMenuForPost, {
canPostCollections: this.props.canPostCollections,
elementPosition: function() {
return e.state.rightClick;
},
shouldClose: function() {
return e.toggleContextMenu(!1);
},
didClickItem: function(t) {
return e.performAction(t);
}
}) : null);
}, t;
}(o.default.PureComponent), e("PostListItem", d);
}
};
}), System.register("client/components/ErrorScreen", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.render = function() {
return n.default.createElement("div", {
className: "error-screen no-screen"
}, n.default.createElement("div", {
className: "no-screen--message"
}, n.default.createElement("span", {
className: "no-screen--icon error-icon"
}), n.default.createElement("div", {
className: "no-screen--title"
}, "Error loading posts"), n.default.createElement("div", {
className: "no-screen--text"
}, "Try again later. If the problem persists after 15 minutes, please contact support.")));
}, t;
}(n.default.PureComponent), e("ErrorScreen", o);
}
};
}), System.register("client/components/NoPostsScreen", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return __extends(t, e), t.prototype.render = function() {
return n.default.createElement("div", {
className: "tpl-screen-no-posts no-screen"
}, n.default.createElement("div", {
className: "no-screen--message"
}, n.default.createElement("div", {
className: "no-screen--title"
}, "No posts here yet"), n.default.createElement("div", {
className: "no-screen--text"
}, "Posts will display when available")));
}, t;
}(n.default.Component), e("NoPostsScreen", o);
}
};
}), System.register("client/components/NoStarredScreen", [ "react", "client/appglobals", "client/backend-imports", "client/components/CountGroup", "client/components/FeederIcon", "client/components/ContextMenuForPost" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
} ],
execute: function() {
l = function(e) {
function t(t) {
var n = e.call(this, t) || this;
n.flerpButton = null, n.startTutorial = function() {
n.setState({
showStartButton: !1,
showTutorial: !0,
inTutorial: !0
}), setTimeout(function() {
n.step1();
}, 2e3);
}, n.step1 = function() {
n.setState({
clickToOpenArrow: !0
}), setTimeout(function() {
n.step2();
}, 1200);
}, n.step2 = function() {
n.setState({
clickToOpenArrow: !1,
contextMenuVisible: !0
}), setTimeout(function() {
n.step3();
}, 1e3);
}, n.step3 = function() {
n.setState({
clickToStarArrow: !0
}), setTimeout(function() {
n.step4();
}, 5e3);
}, n.step4 = function() {
n.setState({
showEndButton: !0,
clickToStarArrow: !1,
contextMenuVisible: !1
});
}, n.endTutorial = function() {
n.setState({
showStartButton: !0,
showTutorial: !1,
inTutorial: !1,
clickToOpenArrow: !1,
clickToStarArrow: !1,
postOpened: !1,
showEndButton: !1
});
};
var r, s, a = !!o.app && o.app.store.randomPost();
if (a) {
r = a.title;
var l = !!o.app && o.app.store.feed(a.feed_id);
s = l ? l.favicon : i.Config.defaultFavicon();
} else r = "The greatest RSS extension ever", s = i.Config.defaultFavicon();
return n.state = {
showStartButton: !0,
showTutorial: !1,
inTutorial: !1,
clickToOpenArrow: !1,
clickToStarArrow: !1,
postOpened: !1,
showEndButton: !1,
contextMenuVisible: !1,
postTitle: r,
feedFavicon: s
}, n;
}
return __extends(t, e), t.prototype.render = function() {
var e = this;
return n.default.createElement("div", {
className: "tpl-screen-no-starred no-screen " + (this.state.inTutorial ? "in-tutorial" : "")
}, n.default.createElement("div", {
className: "no-screen--message"
}, n.default.createElement("span", {
className: "no-screen--icon big-icons star"
}), n.default.createElement("div", {
className: "no-screen--title"
}, "You have no starred posts"), n.default.createElement("div", {
className: "no-screen--text spacing--small-bottom"
}, "Star posts to save for later"), n.default.createElement("div", {
className: "help-button"
}, n.default.createElement("div", {
className: "button--secondary start-tutorial " + (this.state.showStartButton ? "" : "hidden"),
onClick: this.startTutorial
}, "How do I star posts?")), n.default.createElement("div", {
className: "tutorial " + (this.state.showTutorial ? "" : "hidden")
}, n.default.createElement("div", {
className: "tpl-post-list tpl-post-list--no-border-bottom"
}, n.default.createElement("div", {
className: "tpl-list-item-post list-item hover " + (this.state.postOpened ? "opened" : "")
}, n.default.createElement("div", {
className: "item"
}, n.default.createElement("div", {
className: "cover"
}), n.default.createElement("div", {
className: "flerp",
ref: function(t) {
return e.flerpButton = t;
}
}, n.default.createElement("div", {
className: "flerp-icon"
}, n.default.createElement(s.FeederIcon, {
icon: "more-small"
}))), n.default.createElement("div", {
className: "item-starred"
}, n.default.createElement(s.FeederIcon, {
icon: "star-filled"
})), n.default.createElement("div", {
className: "item-favicon"
}, n.default.createElement("img", {
src: this.state.feedFavicon
})), n.default.createElement("div", {
className: "item-title"
}, n.default.createElement("span", {
className: "item-title--text"
}, this.state.postTitle)), n.default.createElement("div", {
className: "item-count-holder"
}, n.default.createElement(r.CountGroup, {
text: "new",
onClick: function() {}
}))))), n.default.createElement("div", {
className: "tutorial-arrows"
}, n.default.createElement("div", {
className: "arrow-text right-up click-to-open " + (this.state.clickToOpenArrow ? "" : "hidden")
}, "Click to open")), n.default.createElement("div", {
className: "help-button"
}, n.default.createElement("div", {
className: "button--secondary end-tutorial spacing--small-top " + (this.state.showEndButton ? "" : "hidden"),
onClick: this.endTutorial
}, "Thanks, got it!"))), this.state.contextMenuVisible ? n.default.createElement(a.ContextMenuForPost, {
canPostCollections: !!o.app && o.app.user.canPostCollections(),
highlightItem: this.state.clickToStarArrow ? [ "starred" ] : [],
elementPosition: function() {
return e.flerpButton;
},
shouldClose: function() {
return !1;
},
didClickItem: function() {
return !1;
}
}) : null));
}, t;
}(n.default.Component), e("NoStarredScreen", l);
}
};
}), System.register("client/components/NoUnreadScreen", [ "react" ], function(e, t) {
"use strict";
function n() {
var e = "day";
try {
e = new Date().toLocaleDateString([].slice.call(navigator.languages), {
weekday: "long"
});
} catch (e) {}
var t = [ "You're awesome!", "#feedboxzero", "Hope something great pops up soon!", "Worked hard to get here? Why not take a break!", "That was fun! We should do it again sometimes.", "Have a great " + e + "!", "More content will surely arrive soon.", "You did great!", "Enjoying Feeder? Why not tell a friend!" ];
return t[Math.floor(Math.random() * t.length)];
}
function o() {
return "https://twitter.com/intent/tweet?status=" + encodeURIComponent("#feedboxzero with @feederco");
}
var i, r;
t && t.id;
return e("getUnreadText", n), e("getUnreadLink", o), {
setters: [ function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return __extends(t, e), t.prototype.render = function() {
return i.default.createElement("div", {
className: "tpl-screen-no-unread no-screen"
}, i.default.createElement("div", {
className: "no-screen--message"
}, i.default.createElement("span", {
className: "no-screen--icon big-icons check"
}), i.default.createElement("div", {
className: "no-screen--title"
}, "You have no unread posts"), i.default.createElement("div", {
className: "no-screen--text"
}, i.default.createElement("a", {
href: o(),
target: "_blank"
}, n()))));
}, t;
}(i.default.Component), e("NoUnreadScreen", r);
}
};
}), System.register("client/components/FeedDisabledSection", [ "react", "client/components/FeederIcon", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function() {
var e = n.useCallback(function(e) {
e.preventDefault(), null === i.UI || void 0 === i.UI || i.UI.openTab(i.Config.feeder.payURL + "?utm_campaign=ext_feed_disabled_section"), 
null === i.UI || void 0 === i.UI || i.UI.closePopup();
}, []);
return n.default.createElement("div", {
className: "feed-disabled-section"
}, n.default.createElement("div", {
className: "feed-disabled-section--icon spacing--small-bottom"
}, n.default.createElement(o.FeederIcon, {
icon: "lock"
})), n.default.createElement("div", {
className: "feed-disabled-section--title spacing--small-bottom"
}, n.default.createElement("h2", null, "This feed is locked")), n.default.createElement("div", {
className: "feed-disabled-section--description spacing--medium-bottom"
}, "Your account is over the limit for maximum feeds."), n.default.createElement("div", {
className: "feed-disabled-section--button"
}, n.default.createElement("a", {
href: "",
onClick: e,
className: "button--green"
}, "Upgrade to start reading")));
}, e("FeedDisabledSection", r);
}
};
}), System.register("client/components/PostList", [ "react", "client/appglobals", "client/components/SortToolbar", "client/components/PostListItem", "client/components/ErrorScreen", "client/components/LoadingScreen", "client/components/NoPostsScreen", "client/components/NoStarredScreen", "client/components/NoUnreadScreen", "client/components/FeedDisabledSection" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l, c, u, d, p;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
l = e;
}, function(e) {
c = e;
}, function(e) {
u = e;
}, function(e) {
d = e;
} ],
execute: function() {
p = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.state = {
postCollectionDialogOpen: !1
}, n;
}
return __extends(t, e), t.prototype.render = function() {
var e, t = this, p = this.props.isFirstPostOdd ? 1 : 0, f = this.props.posts.map(function(e, i) {
var s = null === o.app || void 0 === o.app ? void 0 : o.app.store.feed(e.feed_id), a = i === t.props.highlightedIndex, l = i % 2 === p, c = !!e.id && t.props.queuedPosts.contains(e.id), u = e.getCollectionsNamed();
return n.default.createElement(r.PostListItem, {
key: e.id ? e.id : "",
postId: e.id ? e.id : "none",
isOdd: l,
isQueued: c,
isHighlighted: a,
isRead: !!e.is_read,
isStarred: !!e.is_starred,
isFiltered: e.is_filtered,
title: e.title,
feedTitle: s ? s.title : e.feed_title || "",
feedFavicon: s ? s.favicon : e.getFeedFavicon() || "",
published: e.getTimestamp() || null,
collections: u,
timestampType: t.props.timestampType,
postListStyle: t.props.postListStyle,
post: e,
canPostCollections: t.props.canPostCollections,
shouldMarkAsRead: t.props.shouldMarkAsRead,
shouldMarkAsStarred: t.props.shouldMarkAsStarred,
shouldPromptPostCollections: t.props.shouldPromptPostCollections,
shouldOpen: t.props.shouldOpenPost,
shouldQueue: t.props.shouldQueuePost,
shouldAction: t.props.shouldAction,
shouldJumpUntil: t.props.shouldJumpUntil
});
});
switch (this.props.emptyScreenType) {
case "unread":
e = n.default.createElement(u.NoUnreadScreen, null);
break;

case "starred":
e = n.default.createElement(c.NoStarredScreen, null);
break;

default:
e = n.default.createElement(l.NoPostsScreen, null);
}
return this.props.isLoading ? n.default.createElement(a.LoadingScreen, null) : this.props.isDisabled ? n.default.createElement(d.FeedDisabledSection, null) : n.default.createElement("div", {
className: "tpl-post-list"
}, n.default.createElement(i.SortToolbar, __assign({
barHeight: "small",
shouldNavigate: this.props.shouldPage
}, this.props)), this.props.pendingPosts > 0 && 0 === this.props.postsUp.length ? n.default.createElement("div", {
className: "load-more",
onClick: this.props.shouldLoadReload
}, n.default.createElement("span", {
className: "num"
}, this.props.pendingPosts), " new post", 1 === this.props.pendingPosts ? "" : "s", ". Click to load.") : null, this.props.postsUp.length > 0 ? n.default.createElement("div", {
className: "load-more",
onClick: function() {
return t.props.shouldPage("up");
}
}, n.default.createElement("span", {
className: "num"
}, this.props.postsUp.length), " more post", 1 === this.props.postsUp.length ? "" : "s", ". Click to load.") : null, this.props.isError ? n.default.createElement(s.ErrorScreen, null) : f.length > 0 ? f : e, this.props.postsDown.length > 0 ? n.default.createElement("div", {
className: "load-more",
onClick: function() {
return t.props.shouldPage("down");
}
}, n.default.createElement("span", {
className: "num"
}, this.props.postsDown.length), " more post", 1 === this.props.postsDown.length ? "" : "s", ". Click to load.") : null, this.props.hasMore && 0 === this.props.postsDown.length ? n.default.createElement("div", {
onClick: function() {
return t.props.shouldLoadMore();
},
className: "load-more " + (this.props.isLoadingMore ? "loading" : "")
}, "Load more") : null);
}, t;
}(n.default.Component), e("PostList", p);
}
};
}), System.register("client/components/Modal", [ "react", "client/components/ModalContainer" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.onClick = function(e) {
e.target instanceof HTMLElement && e.target.classList.contains("Modal--overlay") && (e.preventDefault(), 
e.stopPropagation(), n.props.onClickOverlay && n.props.onClickOverlay());
}, n;
}
return __extends(t, e), t.prototype.render = function() {
return n.default.createElement(o.ModalContainer, {
className: "Modal--overlay",
onClick: this.onClick
}, n.default.createElement("div", {
className: "Modal--content " + this.props.className
}, this.props.children));
}, t;
}(n.default.Component), e("Modal", i);
}
};
}), System.register("client/components/PostCollectionDialog", [ "react", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = 400, r = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.didClickDone = function(e) {
e.preventDefault(), n.props.shouldClose();
}, n.didClickManage = function(e) {
e.preventDefault(), n.gotoSettings({
collections: "manage"
});
}, n.didClickAdd = function(e) {
e.preventDefault(), n.gotoSettings({
showAddPostCollection: !0
});
}, n.didClickReload = function(e) {
return __awaiter(n, void 0, void 0, function() {
var t;
return __generator(this, function(n) {
switch (n.label) {
case 0:
e.preventDefault(), this.setState({
isReloading: !0
}), n.label = 1;

case 1:
return n.trys.push([ 1, 3, 4, 5 ]), [ 4, this.props.shouldLoadCollections() ];

case 2:
return n.sent(), [ 3, 5 ];

case 3:
return t = n.sent(), console.error(t), [ 3, 5 ];

case 4:
return this.setState({
isReloading: !1
}), [ 7 ];

case 5:
return [ 2 ];
}
});
});
}, n.toggleSelected = function(e) {
return __awaiter(n, void 0, void 0, function() {
var t, n;
return __generator(this, function(o) {
switch (o.label) {
case 0:
this.setState({
isError: !1,
loadingCollections: this.state.loadingCollections.concat([ e.id ])
}), o.label = 1;

case 1:
return o.trys.push([ 1, 6, 7, 8 ]), t = !1, this.props.post.hasCollection(e.feed_guid) ? [ 4, this.props.shouldRemoveFromCollections(this.props.post, [ e ]) ] : [ 3, 3 ];

case 2:
return t = o.sent(), [ 3, 5 ];

case 3:
return [ 4, this.props.shouldAddToCollections(this.props.post, [ e ]) ];

case 4:
t = o.sent(), o.label = 5;

case 5:
return t ? this.forceUpdate() : this.setState({
isError: !0
}), [ 3, 8 ];

case 6:
return n = o.sent(), console.error(n), this.setState({
isError: !0
}), [ 3, 8 ];

case 7:
return this.setState({
loadingCollections: this.state.loadingCollections.filter(function(t) {
return t !== e.id;
})
}), [ 7 ];

case 8:
return [ 2 ];
}
});
});
}, n.state = {
loadingCollections: [],
isError: !1,
isReloading: !1
}, n;
}
return __extends(t, e), t.prototype.componentWillMount = function() {
o.Ext.isChrome() && document.body.clientHeight < i && (document.body.style.height = i + "px");
}, t.prototype.componentWillUnmount = function() {
o.Ext.isChrome() && (document.body.style.height = "");
}, t.prototype.gotoSettings = function(e) {
var t = o.Ext.settingsURL(o.Config.feeder.root, e, "/feeds");
o.Ext.isChrome() ? null === o.UI || void 0 === o.UI || o.UI.openTab(t) : document.location.href = t;
}, t.prototype.render = function() {
var e = this, t = null === o.app || void 0 === o.app ? void 0 : o.app.store.feed(this.props.post.feed_id);
return n.default.createElement("div", {
className: "PostCollectionDialog platform-name-" + o.Ext.getPlatformName()
}, n.default.createElement("div", {
className: "modal-title"
}, n.default.createElement("div", {
className: "modal-title--left"
}), n.default.createElement("div", {
className: "modal-title--title"
}, "Add to collection"), n.default.createElement("div", {
className: "modal-title--right"
}, n.default.createElement("a", {
href: "",
className: "button--primary",
onClick: this.didClickDone
}, "Done"))), n.default.createElement("div", {
className: "post-collection--name"
}, n.default.createElement("div", {
className: "post-collection--preview"
}, n.default.createElement("div", {
className: "post-collection--favicon"
}, t ? n.default.createElement("img", {
src: t.favicon,
className: "feed-icon"
}) : null), n.default.createElement("div", {
className: "post-title"
}, this.props.post.title))), this.state.isError ? n.default.createElement("div", {
className: "post-collection--error"
}, "Something went wrong. Please try again later.") : null, n.default.createElement("div", {
className: "modal-sub-header"
}, "Collections", n.default.createElement("a", {
href: "",
className: "reload-button",
onClick: this.didClickReload
}, this.state.isReloading ? "..." : "Reload")), n.default.createElement("div", {
className: "post-collections-list"
}, 0 === this.props.postCollections.length ? n.default.createElement("div", {
className: "post-collections-empty"
}, "Organize posts in collections,", n.default.createElement("br", null), "start by creating one ", n.default.createElement("a", {
href: "",
onClick: this.didClickAdd
}, "here")) : null, this.props.postCollections.map(function(t, o) {
return n.default.createElement("div", {
key: t.id,
className: [ "post-collections-list--item", e.state.loadingCollections.includes(t.id) ? "loading" : "", e.props.post.hasCollection(t.feed_guid) ? "selected" : "", e.props.activeIndex === o ? "highlighted" : "" ].join(" "),
onClick: function(n) {
return e.toggleSelected(t);
}
}, n.default.createElement("div", {
className: "post-collections-list--icon"
}, n.default.createElement("img", {
src: t.icon
})), n.default.createElement("div", {
className: "post-collections-list--name"
}, t.title), n.default.createElement("div", {
className: "post-collections-list--keyboard-shortcut"
}, t.keyboard_shortcut ? n.default.createElement("span", null, t.keyboard_shortcut) : null), n.default.createElement("div", {
className: "post-collections-list--select"
}));
})), n.default.createElement("div", {
className: "post-collections-bottom-bar"
}, n.default.createElement("a", {
href: "",
className: "button--secondary button--small",
onClick: this.didClickManage
}, "Manage collections")));
}, t;
}(n.default.Component), e("PostCollectionDialog", r);
}
};
}), System.register("client/LegacyBaseComponent", [ "react", "client/components/Modal", "client/components/PostCollectionDialog" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.render = function() {
var e = this;
return n.default.createElement("div", null, this.props.children, this.props.postCollections && this.props.postCollectionDialogOpen ? n.default.createElement(o.Modal, {
onClickOverlay: function() {
return e.props.shouldPromptPostCollections(!1);
}
}, n.default.createElement(i.PostCollectionDialog, {
post: this.props.postCollectionDialogOpen,
postCollections: this.props.postCollections,
shouldAddToCollections: this.props.shouldAddToCollections,
shouldRemoveFromCollections: this.props.shouldRemoveFromCollections,
shouldLoadCollections: this.props.shouldLoadCollections,
shouldClose: function() {
return e.props.shouldPromptPostCollections(!1);
}
})) : null);
}, t;
}(n.default.Component), e("LegacyBaseComponent", r);
}
};
}), System.register("client/controllers/screenposts", [ "jquery", "react", "react-dom", "app/library/ts/debounce", "client/controller", "client/pui/alert", "client/appglobals", "client/components/PostList", "client/LegacyBaseComponent", "client/controllers/feedcontainer" ], function(e, t) {
"use strict";
function n(e, t) {
for (var o in e) {
if (e.hasOwnProperty(o) !== t.hasOwnProperty(o)) return !1;
if (null === e[o] && null !== t[o]) return !1;
if (null === t[o] && null !== e[o]) return !1;
switch (typeof e[o]) {
case "object":
if (!n(e[o], t[o])) return !1;
break;

case "function":
if (void 0 === t[o] || "compare" != o && e[o].toString() != t[o].toString()) return !1;
break;

default:
if ("" === e[o] && "" !== t[o]) return !1;
if ("" === t[o] && "" !== e[o]) return !1;
if (e[o] != t[o]) return !1;
}
}
for (var o in t) if (void 0 === e[o]) return !1;
return !0;
}
var o, i, r, s, a, l, c, u, d, p, f, h, m;
t && t.id;
return {
setters: [ function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
l = e;
}, function(e) {
c = e;
}, function(e) {
u = e;
}, function(e) {
d = e;
}, function(e) {
p = e;
} ],
execute: function() {
f = 150, h = 1500, m = function(e) {
function t(t, n, i, r) {
void 0 === i && (i = !1), void 0 === r && (r = {});
var l, u = e.call(this, t) || this;
return u.currentHighlightedIndex = !1, u.forceReload = !1, u.error = !1, u.postDisplayOptions = {
filters: []
}, u.posts = [], u.currentPostOffset = 0, u.queuedPosts = [], u.pendingPosts = 0, 
u.loadedPostCollections = !1, u.promptedPostCollection = !1, u.isLoading = !1, u.lastWasLoading = !1, 
u.isLoadingMore = !1, u.isErrorLoadingPosts = !1, u.isFirstPostOdd = !1, u.renderCallbacks = [], 
u.updateUnreadCount = function() {
u.template.data.setModel(u.feed);
}, u.checkIfHasToGoBackToClosestScreenWithUnreadPostsIfNoUnreadPostsHere = function() {
return __awaiter(u, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return this.vc.screenStack.count() ? [ 2 ] : (e = (this.feed || this.folder).countUnread(), 
e ? [ 2 ] : [ 4, this.vc.popScreen() ]);

case 1:
return t.sent(), this.checkIfHasToGoBackToClosestScreenWithUnreadPostsIfNoUnreadPostsHere(), 
[ 2 ];
}
});
});
}, u.gotoPost = function(e) {
return __awaiter(u, void 0, void 0, function() {
return __generator(this, function(t) {
return this.vc.queue && !this.vc.queue.isEmpty() ? (e.markAsRead(), this.vc.queue.add(e.id), 
this.vc.queue.pump(), this.render(), [ 2 ]) : (this.vc.history.setActiveAction(e), 
this.setCurrentNavFromPost(e), e.markAsRead(), this.rememberScreen(), this.vc.stateFactory.shouldGotoPost(this.vc, e), 
this.render(), [ 2 ]);
});
});
}, u.queuePost = function(e) {
e.markAsRead(), u.vc.queue && u.vc.queue.toggle(e.id), u.render();
}, u.markPostAsRead = function(e, t) {
t ? (e.markAsRead(), null === c.app || void 0 === c.app || c.app.analytics.collectEvent("user:toggle_read:read", e.id)) : (e.markAsUnread(), 
null === c.app || void 0 === c.app || c.app.analytics.collectEvent("user:toggle_read:unread", e.id)), 
u.render();
}, u.markPostAsStarred = function(e, t) {
e.toggleStar(), u.render();
}, u.markAllAsReadFromBar = function(e) {
null === c.app || void 0 === c.app || c.app.analytics.collectEvent("mark-all-as-read", "feed"), 
u.markAllAsRead();
}, u.markAllAsRead = function(e) {
return __awaiter(u, void 0, void 0, function() {
var t, n, o, i;
return __generator(this, function(r) {
switch (r.label) {
case 0:
return t = void 0, e ? (n = null === c.app || void 0 === c.app ? void 0 : c.app.store.feed(e)) && (t = n) : t = this.feed, 
t ? [ 4, t.countUnread() ] : [ 2 ];

case 1:
return o = r.sent(), [ 4, a.askMarkManyAsRead(o) ];

case 2:
return i = r.sent(), i ? [ 4, t.markAllAsRead() ] : [ 2 ];

case 3:
return r.sent(), this.populate(), [ 2 ];
}
});
});
}, u.queueChanged = function(e, t) {
t ? u.queuedPosts.push(e) : u.queuedPosts.remove(e), u.render();
}, u.loadMoreUntil = function(e) {
return __awaiter(u, void 0, void 0, function() {
var t, n, i, r, s = this;
return __generator(this, function(a) {
switch (a.label) {
case 0:
switch (t = new Date(), e) {
case "midnight":
t.setHours(0, 0, 0, 0);
break;

case "day":
t.setDate(t.getDate() - 1);
break;

case "week":
t.setDate(t.getDate() - 7);
break;

case "month":
t.setMonth(t.getMonth() - 1);
}
n = t.getTime(), i = this.posts[this.posts.length - 1], a.label = 1;

case 1:
return i.getTimestamp() > n && this.posts.length < h ? this.hasMore() ? [ 4, this.loadMore() ] : [ 3, 3 ] : [ 3, 5 ];

case 2:
return a.sent(), [ 3, 4 ];

case 3:
return [ 3, 5 ];

case 4:
return i = this.posts[this.posts.length - 1], [ 3, 1 ];

case 5:
return r = this.posts.find(function(e) {
return e.getTimestamp() <= n;
}) || this.posts[this.posts.length - 1], this.render(function() {
if (s.perfectScrollbar.element) {
var e = s.template.el("#post-" + r.id)[0];
if (e) {
var t = e.getVisibleScrollOffsetTop();
t && o.default(t[0]).animate({
scrollTop: t[1]
});
}
}
}), [ 2 ];
}
});
});
}, u.loadMore = function() {
return __awaiter(u, void 0, void 0, function() {
var e, t, n, o, i = this;
return __generator(this, function(r) {
switch (r.label) {
case 0:
if (!this.hasMore()) return [ 2 ];
if (!this.postIterator) return [ 2 ];
this.isLoadingMore = !0, this.render(), e = this.posts.length, r.label = 1;

case 1:
return r.trys.push([ 1, 3, , 4 ]), [ 4, this.postIterator.fetch() ];

case 2:
return t = r.sent(), t.forEach(function(e) {
i.addPost(e);
}), this.uniqPosts(), n = this.posts.length - e, this.currentPostOffset > 0 && (this.currentPostOffset += n), 
[ 3, 4 ];

case 3:
return o = r.sent(), console.error("Could not load more posts", o), [ 3, 4 ];

case 4:
return this.isLoadingMore = !1, this.render(), [ 2 ];
}
});
});
}, u.changePage = function(e) {
var t = Math.floor(f / 2), n = 0;
switch (e) {
case "up":
n = -Math.min(t, u.currentPostOffset);
break;

case "down":
n = Math.min(t, u.posts.length - (u.currentPostOffset + f));
}
u.currentPostOffset += n, u.render();
}, u.setCurrentNavFromPost = function(e) {
var t = u.posts.indexOf(e);
u.currentHighlightedIndex = -1 !== t && t, !1 !== u.currentHighlightedIndex && (u.currentHighlightedIndex < u.currentPostOffset && (u.currentPostOffset = Math.max(u.currentHighlightedIndex - Math.floor(f / 2), 0)), 
u.currentHighlightedIndex >= u.currentPostOffset + f && (u.currentPostOffset = Math.max(u.currentHighlightedIndex - Math.floor(f / 2), 0))), 
u.render();
}, u.shouldChangeSortOrder = function(e) {
u.vc.stateFactory.shouldUpdateSortOrderForFeed(u.vc, u.feed, e), u.populate();
}, u.shouldChangeDisplaySettings = function(e) {
u.postDisplayOptions.filters = e, u.vc.stateFactory.shouldUpdatePostDisplayOptionsForFeed(u.vc, u.feed, u.postDisplayOptions), 
u.populate();
}, u.shouldChangeAutoUpdate = function(e) {
u.vc.stateFactory.shouldUpdatePreference(u.vc, "display:autoUpdate", e), u.vc.stateFactory.getPreference(u.vc, "display:autoUpdate") && u.pendingPosts > 0 ? u.populate() : u.render();
}, u.shouldChangePostListStyle = function(e) {
u.postListStyle = e, u.vc.stateFactory.shouldUpdatePreference(u.vc, "display:postListStyle", e), 
u.render();
}, u.shouldChangePageStyle = function(e) {
u.pageStyle = e, u.vc.stateFactory.shouldChangePageStyle(e), u.render();
}, u.shouldChangeTimestampType = function(e) {
u.vc.stateFactory.shouldUpdatePreference(u.vc, "global:timestampType", e), u.render();
}, u.addPostToPostCollections = function(e, t) {
return __awaiter(u, void 0, void 0, function() {
var n, o, i, r;
return __generator(this, function(s) {
switch (s.label) {
case 0:
n = 0, o = t, s.label = 1;

case 1:
return n < o.length ? (i = o[n], [ 4, i.addPost(e) ]) : [ 3, 4 ];

case 2:
if (!(r = s.sent())) return [ 2, !1 ];
s.label = 3;

case 3:
return n++, [ 3, 1 ];

case 4:
return [ 2, !0 ];
}
});
});
}, u.removePostFromPostCollections = function(e, t) {
return __awaiter(u, void 0, void 0, function() {
var n, o, i, r;
return __generator(this, function(s) {
switch (s.label) {
case 0:
n = 0, o = t, s.label = 1;

case 1:
return n < o.length ? (i = o[n], [ 4, i.removePost(e) ]) : [ 3, 4 ];

case 2:
if (!(r = s.sent())) return [ 2, !1 ];
s.label = 3;

case 3:
return n++, [ 3, 1 ];

case 4:
return [ 2, !0 ];
}
});
});
}, u.shouldReloadPostCollections = function() {
return __awaiter(u, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return c.app && c.app.postCollectionMapper.shouldReload() ? [ 4, c.app.postCollectionMapper.getAll() ] : [ 3, 2 ];

case 1:
e = t.sent(), this.loadedPostCollections = e, this.render(), t.label = 2;

case 2:
return [ 2 ];
}
});
});
}, u.forceReloadPostCollections = function() {
return __awaiter(u, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return c.app ? [ 4, c.app.postCollectionMapper.performReload() ] : [ 2 ];

case 1:
return e = t.sent(), this.loadedPostCollections = e, this.render(), [ 2 ];
}
});
});
}, u.performGlobalAction = function(e, t) {
switch (u.render(), t) {
case "mark-all-as-read":
e.feed_id && u.markAllAsRead(e.feed_id);
break;

case "open-all-unread":
u.openAllUnread();
break;

case "open-every-unread-post":
p.openAllUnread("global");
break;

case "clear-all-unread":
u.clearAllUnread();
}
}, u.postUpdated = function(e) {
u.hasPostInList(e.post) ? u.render() : u.postAdded(e);
}, u.postAdded = function(e) {
var t = null === c.app || void 0 === c.app ? void 0 : c.app.store.post(e.post);
if (t) {
if (!u.vc.stateFactory.getPreference(u.vc, "display:autoUpdate")) return u.pendingPosts += 1, 
void u.render();
var n = u.feed.matchesPost(t);
u.postDisplayOptions.filters.forEach(function(e) {
switch (e) {
case "unread":
t.is_read && (n = !1);
break;

case "starred":
t.is_starred || (n = !1);
}
}), n && (u.hasPostInList(t.id) || u.pushPost(t));
}
}, u.showPostCollectionDialog = function(e) {
u.promptedPostCollection = e, u.render();
}, u.populate = u.populate.bind(u), u.renderDebounced = s.default(u._render.bind(u), 5), 
u.postListContainer = u.template.el(".post-list-container")[0], u.feed = n, r.scrollTop && (u.lastScroll = r.scrollTop), 
u.postDisplayOptions = u.vc.stateFactory.getPostDisplayOptionsForFeed(u.vc, n), 
u.pageStyle = u.vc.stateFactory.getPreference(u.vc, "display:pageStyle") || {
columns: [ "sidebar", "content" ]
}, u.postListStyle = u.vc.stateFactory.getPreference(u.vc, "display:postListStyle") || {
showContent: "collapsed",
compactMode: !1
}, u.template.data.setModel(n), u.options = r, u.feed.isMagic && u.template.element.addClass("is-magic-feed"), 
u.isLoading = !0, i || u.populate(), u.vc.queue && u.vc.queue.setListener(u.queueChanged), 
u.vc.listener.listen("post:added", u.postAdded), u.vc.listener.listen("post:updated", u.postUpdated), 
u.vc.listener.listen("feeds:recount", u.updateUnreadCount), u.vc.history.wrapAround = !1, 
u.vc.history.onEnd(u.loadMoreForActions.bind(u)), u.loadedPostCollections = null !== (l = null === c.app || void 0 === c.app ? void 0 : c.app.postCollectionMapper.getLoadedCollections()) && void 0 !== l && l, 
u.shouldReloadPostCollections(), u._render(), u;
}
return __extends(t, e), t.fromId = function(e, n) {
var o;
return n.magicFeed ? o = null === c.app || void 0 === c.app ? void 0 : c.app.user.createMagicFeedFromId(n.magicFeed) : n.feed && (o = null === c.app || void 0 === c.app ? void 0 : c.app.user.feed(n.feed)), 
!!o && new t(e, o, !1, {
scrollTop: "number" == typeof n.scrollTop ? n.scrollTop : 0
});
}, t.prototype.templateName = function() {
return "screen#posts";
}, t.prototype.id = function() {
return this.feed.isMagic ? {
id: "Posts",
magicFeed: this.feed.magicId,
scrollTop: this.lastScroll
} : !!this.feed.id && {
id: "Posts",
feed: this.feed.id,
scrollTop: this.lastScroll
};
}, t.prototype.events = function() {
return {
"click .tpl-bar-top": "gotoPage",
"click .bar .tpl-count-group": "markAllAsReadFromBar"
};
}, t.prototype.inAppURL = function() {
return [ "posts", this.feed.id || "new" ];
}, t.prototype.destroy = function() {
r.default.unmountComponentAtNode(this.postListContainer), e.prototype.destroy.call(this), 
this.vc.queue && this.vc.queue.removeListener(this.queueChanged), this.vc.listener.unlisten("post:added", this.postAdded), 
this.vc.listener.unlisten("post:updated", this.postUpdated), this.vc.listener.unlisten("feeds:recount", this.updateUnreadCount);
}, t.prototype.setPosts = function(e) {
var t = this;
this.vc.history.reset(), this.posts = [], this.currentPostOffset = 0, e.length && (e.forEach(function(e) {
t.addPost(e);
}), this.uniqPosts()), this.render(function() {
t.perfectScrollbar && t.perfectScrollbar.update();
});
}, t.prototype.addPost = function(e) {
e.id && (this.posts.push(e), this.vc.history.addAction(e), this.vc.queue && this.vc.queue.contains(e.id) && this.queuedPosts.push(e.id), 
this.render());
}, t.prototype.pushPost = function(e) {
if (e.id) {
var t = this.vc.stateFactory.getSortOrderForFeed(this.vc, this.feed), n = this.template.element.find(".page-scroll-container"), o = n.scrollTop(), i = n.prop("scrollHeight");
"newest-first" === t ? (this.posts.unshift(e), this.currentPostOffset > 0 && (this.currentPostOffset += 1), 
this.vc.history.prependAction(e), !1 !== this.currentHighlightedIndex && (this.currentHighlightedIndex += 1), 
this.isFirstPostOdd = !this.isFirstPostOdd) : (this.posts.push(e), this.vc.history.addAction(e)), 
this.uniqPosts(), this.render(function() {
if ("newest-first" === t && o > 0) {
var e = n.prop("scrollHeight");
n.scrollTop(o + (e - i));
}
});
}
}, t.prototype.gotoPage = function(e) {
o.default(e.target).is(".title-click-area") && (this.feed.link || this.feed.path) && (null === c.UI || void 0 === c.UI || c.UI.openTab(this.feed.link || this.feed.path));
}, t.prototype.rememberScreen = function() {
this.feed.hasUnread() ? this.vc.screenStack.createCheckpoint() : this.vc.screenStack.forget();
}, t.prototype.openAllUnread = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
return p.openAllUnread(this.feed), [ 2 ];
});
});
}, t.prototype.loadMoreForActions = function() {
return __awaiter(this, void 0, void 0, function() {
return __generator(this, function(e) {
switch (e.label) {
case 0:
return this.hasMore() ? [ 4, this.loadMore() ] : [ 2 ];

case 1:
return e.sent(), this.vc.historyNext(), [ 2 ];
}
});
});
}, t.prototype.hasMore = function() {
return !this.isErrorLoadingPosts && (!!this.postIterator && this.postIterator.hasMore());
}, t.prototype.hasCustomDisplaySettings = function() {
return !n(this.postDisplayOptions, this.feed.defaultDisplayOptions());
}, t.prototype.shouldSeeNoPostsPage = function() {
return !this.isErrorLoadingPosts && (!this.hasCustomDisplaySettings() && (!this.posts || !this.posts.length));
}, t.prototype.getFeed = function() {
return this.feed;
}, t.prototype.navForward = function(e) {
e && this.gotoPost(e);
}, t.prototype.navigateTo = function(e) {
e && (this.setCurrentNavFromPost(e), this.vc.stateFactory.shouldNavigationEventOpenPost() && this.gotoPost(e));
}, t.prototype.hasPostInList = function(e) {
return !!this.posts.find(function(t) {
return t.id == e;
});
}, t.prototype.uniqPosts = function() {
var e = {};
this.posts = this.posts.filter(function(t) {
return !(!t.id || e[t.id]) && (e[t.id] = !0, !0);
});
}, t.prototype.performKeyboardAction = function(e) {
var t = !1 !== this.currentHighlightedIndex && this.posts[this.currentHighlightedIndex];
switch (e) {
case "star":
t && this.markPostAsStarred(t, !t.is_starred);
break;

case "read":
t && this.markPostAsRead(t, !t.is_read);
break;

case "queue":
t && this.queuePost(t);
break;

case "post-collections":
t && this.showPostCollectionDialog(t);
}
}, t.prototype.populate = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, n = this;
return __generator(this, function(o) {
switch (o.label) {
case 0:
this.isLoading = !0, this.pendingPosts = 0, this.isFirstPostOdd = !0, this.postIterator = this.feed.getPostIterator(this.postDisplayOptions), 
o.label = 1;

case 1:
return o.trys.push([ 1, 3, , 4 ]), this.isErrorLoadingPosts = !1, [ 4, this.postIterator.fetch() ];

case 2:
return e = o.sent(), this.posts = e, this.currentPostOffset = 0, this.callbackAfterAnimation(function() {
n.isLoading = !1, n.setPosts(e);
}), [ 3, 4 ];

case 3:
return t = o.sent(), console.error(t), l.default.alert("Could not load posts. Try again or contact support."), 
this.isErrorLoadingPosts = !0, this.isLoading = !1, this.render(), [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
}, t.prototype.render = function(e) {
e && this.renderCallbacks.push(e), this.renderDebounced();
}, t.prototype._render = function() {
var e = this, t = "default";
switch (this.feed.feedTypeId) {
case "unread":
t = "unread";
break;

case "starred":
t = "starred";
}
var n = i.default.createElement(d.LegacyBaseComponent, {
postCollections: this.loadedPostCollections,
postCollectionDialogOpen: this.promptedPostCollection,
shouldAddToCollections: this.addPostToPostCollections,
shouldRemoveFromCollections: this.removePostFromPostCollections,
shouldLoadCollections: this.forceReloadPostCollections,
shouldPromptPostCollections: this.showPostCollectionDialog
}, [ i.default.createElement(u.PostList, {
key: 1,
isError: this.isErrorLoadingPosts,
isLoading: this.isLoading,
isDisabled: !!this.feed && this.feed.is_disabled,
emptyScreenType: t,
postsUp: this.posts.slice(0, this.currentPostOffset),
posts: (this.posts || []).slice(this.currentPostOffset, this.currentPostOffset + f),
postsDown: this.posts.slice(this.currentPostOffset + f),
queuedPosts: this.queuedPosts,
pendingPosts: this.pendingPosts,
highlightedIndex: !1 !== this.currentHighlightedIndex && this.currentHighlightedIndex - this.currentPostOffset,
hasMore: this.hasMore(),
isLoadingMore: this.isLoadingMore,
isFirstPostOdd: this.isFirstPostOdd,
sortOrder: this.feed ? this.vc.stateFactory.getSortOrderForFeed(this.vc, this.feed) : "newest-first",
timestampType: this.vc.stateFactory.getPreference(this.vc, "global:timestampType"),
defaultDisplayOptions: this.feed ? this.feed.defaultDisplayOptions() : {
filters: []
},
postDisplayOptions: this.postDisplayOptions,
postListStyle: this.postListStyle,
pageStyle: this.pageStyle,
canSeeFiltered: (null === c.app || void 0 === c.app ? void 0 : c.app.user.isPro()) || !1,
autoUpdate: this.vc.stateFactory.getPreference(this.vc, "display:autoUpdate"),
shouldChangeSortOrder: this.shouldChangeSortOrder,
shouldChangeTimestampType: this.shouldChangeTimestampType,
shouldChangeDisplaySettings: this.shouldChangeDisplaySettings,
shouldChangeAutoUpdate: this.shouldChangeAutoUpdate,
shouldChangePostListStyle: this.shouldChangePostListStyle,
shouldChangePageStyle: this.shouldChangePageStyle,
canPostCollections: (null === c.app || void 0 === c.app ? void 0 : c.app.user.canPostCollections()) || !1,
shouldMarkAsRead: this.markPostAsRead,
shouldMarkAsStarred: this.markPostAsStarred,
shouldPromptPostCollections: this.showPostCollectionDialog,
shouldOpenPost: this.gotoPost,
shouldQueuePost: this.queuePost,
shouldAddPostToPostCollections: this.addPostToPostCollections,
shouldRemoveFromPostCollections: this.removePostFromPostCollections,
shouldLoadMore: this.loadMore,
shouldPage: this.changePage,
shouldJumpUntil: this.loadMoreUntil,
shouldLoadReload: this.populate,
shouldAction: this.performGlobalAction
}, null) ]);
r.default.render(n, this.postListContainer), window.requestAnimationFrame(function() {
e.perfectScrollbar && e.perfectScrollbar.update();
}), this.lastWasLoading && !this.isLoading && this.tryToRestoreScroll(), this.lastWasLoading = this.isLoading, 
this.renderCallbacks.forEach(function(e) {
return e();
}), this.renderCallbacks = [];
}, t;
}(a.default), e("default", m);
}
};
}), System.register("client/controllers/screennofeeds", [ "client/controller", "client/appglobals", "client/pui/alert" ], function(e, t) {
"use strict";
var n, o, i, r;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
r = function(e) {
function t(t) {
var n = e.call(this, t) || this;
n.template.set("title", "Recommended feeds");
var i = [ {
title: "Feeder development blog",
path: o.Config.feederBlog,
favicon: "https://icons.feedercdn.com/feeder.co",
count: "+ Follow"
}, {
title: "BBC News - Home",
path: "http://feeds.bbci.co.uk/news/rss.xml",
favicon: "https://icons.feedercdn.com/bbc.co.uk",
count: "+ Follow"
}, {
title: "XKCD",
path: "http://xkcd.com/rss.xml",
favicon: "https://icons.feedercdn.com/xkcd.com",
count: "+ Follow"
}, {
title: "Lifehacker",
path: "http://lifehacker.com/rss",
favicon: "https://icons.feedercdn.com/lifehacker.com",
count: "+ Follow"
}, {
title: "TechCrunch",
path: "http://techcrunch.com/feed/",
favicon: "https://icons.feedercdn.com/techcrunch.com",
count: "+ Follow"
}, {
title: "The Oatmeal - Comics, Quizzes, & Stories",
path: "http://feeds.feedburner.com/oatmealfeed",
favicon: "https://icons.feedercdn.com/theoatmeal.com",
count: "+ Follow"
} ];
return n.template.setItems("feeds", i), n.doneButton = n.template.element.find(".done"), 
n.followChanged(), n;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#no-feeds";
}, t.prototype.events = function() {
return {
"click .tpl-list-item-feed": "follow",
"click .open-sync-settings": "openSyncSettings",
"click .done": "done"
};
}, t.prototype.id = function() {
return !1;
}, t.prototype.inAppURL = function() {
return [ "no-feeds" ];
}, t.prototype.follow = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n, r, s;
return __generator(this, function(a) {
switch (a.label) {
case 0:
return e.stopPropagation(), (t = e.item, n = t.reference, o.app) ? o.app.user.hasFeedByPath(n.path) ? (t.set("count", "Loading..."), 
r = o.app.store.feedBy("path", n.path), r && r.id ? [ 4, o.app.user.removeFeed(r.id) ] : [ 3, 2 ]) : [ 3, 3 ] : [ 2 ];

case 1:
a.sent(), a.label = 2;

case 2:
return this.followChanged(), t.set("count", "+ Follow"), [ 3, 5 ];

case 3:
return t.set("count", "Loading..."), [ 4, o.app.feedMapper.addFeed({
path: n.path
}) ];

case 4:
s = a.sent(), s.errors ? (t.set("count", "+ Follow"), i.default.alert("There was an error adding this feed.")) : t.set("count", "✔ Followed"), 
this.followChanged(), a.label = 5;

case 5:
return [ 2 ];
}
});
});
}, t.prototype.followChanged = function() {
this.doneButton.toggleClass("visible", (null === o.app || void 0 === o.app ? void 0 : o.app.user.hasFeeds()) || !1);
}, t.prototype.openSyncSettings = function() {
this.vc.openSettingsPage();
}, t.prototype.done = function() {
this.onDone && this.onDone();
}, t;
}(n.default), e("default", r);
}
};
}), System.register("client/components/ContextMenuForMarkAsRead", [ "react", "client/components/ContextMenu", "client/components/ContextMenuItem" ], function(e, t) {
"use strict";
var n, o, i, r, s;
t && t.id;
return {
setters: [ function(e) {
n = e, r = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
} ],
execute: function() {
s = function(e) {
var t = e.isLoading, s = e.elementPosition, a = e.shouldClose, l = e.didClickItem, c = r.useCallback(function(e) {
t || l(e);
}, [ t ]);
return n.default.createElement(o.ContextMenu, {
className: "with-arrow",
isVisible: !0,
elementPosition: s,
shouldClose: a,
marginTop: 15
}, n.default.createElement(i.ContextMenuItem, {
isDisabled: "all" === t,
onClick: function() {
return c("all");
}
}, "all" === t ? n.default.createElement(n.default.Fragment, null, "Loading...") : n.default.createElement(n.default.Fragment, null, "Mark everything as read")), n.default.createElement("div", {
className: "tooltip-item separator"
}), n.default.createElement(i.ContextMenuItem, {
isDisabled: !0
}, "Mark as read older than:"), n.default.createElement(i.ContextMenuItem, {
isDisabled: "1week" === t,
onClick: function() {
return c("1week");
}
}, "1week" === t ? n.default.createElement(n.default.Fragment, null, "Loading...") : n.default.createElement(n.default.Fragment, null, "1 week")), n.default.createElement(i.ContextMenuItem, {
isDisabled: "30days" === t,
onClick: function() {
return c("30days");
}
}, "30days" === t ? n.default.createElement(n.default.Fragment, null, "Loading...") : n.default.createElement(n.default.Fragment, null, "30 days")));
}, e("ContextMenuForMarkAsRead", s);
}
};
}), System.register("client/controllers/screenmain", [ "jquery", "client/controller", "client/controllers/screenwelcome", "client/controllers/screensignup", "client/controllers/feedcontainer", "client/controllers/screenposts", "client/controllers/screennofeeds", "client/init", "client/appglobals", "client/backend-imports", "client/pui/confirm", "client/pui/alert", "app/library/ts/library", "react-dom", "react", "client/components/ContextMenuForMarkAsRead" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l, c, u, d, p, f, h, m, g, v, y;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
l = e;
}, function(e) {
c = e;
}, function(e) {
u = e;
}, function(e) {
d = e;
}, function(e) {
p = e;
}, function(e) {
f = e;
}, function(e) {
h = e;
}, function(e) {
m = e;
}, function(e) {
g = e;
}, function(e) {
v = e;
} ],
execute: function() {
y = function(e) {
function t(t, n) {
void 0 === n && (n = {});
var o = e.call(this, t) || this;
return o.error = !1, o.numFeedsInTab = 0, o.showNoScreen = !1, o.currentNoScreen = !1, 
o.currentSignupScreen = !1, o.currentWelcomeScreen = !1, o.lastActiveIndex = !1, 
o.markAllLoading = !1, o.shouldShowMarkAll = !1, o.populate = o.populate.bind(o), 
o.feedsFound = o.feedsFound.bind(o), o.feedsCountChanged = o.feedsCountChanged.bind(o), 
o.errorOnLoad = o.errorOnLoad.bind(o), o.currentNoScreenCallback = o.currentNoScreenCallback.bind(o), 
o.updateAvailable = o.updateAvailable.bind(o), "number" == typeof n.active && (o.lastActiveIndex = n.active), 
n.scrollTop && (o.lastScroll = n.scrollTop), o.feedList = o.template.element.find(".put-feed-list-here"), 
o.markContextMenu = o.template.el(".mark-all-container")[0], o.markAllAsReadButton = o.template.el(".mark-all-in-tab")[0], 
o.updateAvailable(), o.updateUnread(), o.setActiveFilter(), o.vc.listener.listen("feeds:found", o.feedsFound), 
o.vc.listener.listen("feeds:recount", o.feedsCountChanged), o.vc.history.wrapAround = !0, 
u.app && u.app.user.structure.base ? o.populate() : c.runOnLoad(o.populate, o.errorOnLoad), 
o;
}
return __extends(t, e), t.fromId = function(e, n) {
return new t(e, n);
}, t.prototype.templateName = function() {
return "screen#main";
}, t.prototype.events = function() {
return {
"click .global-settings, .settings-button": "showSettings",
"click .add, .add-feed-button": "showAdd",
"click #filter-settings .all": "filterAll",
"click #filter-settings .starred": "filterStarred",
"click #filter-settings .unread": "filterUnread",
"click .mark-all-in-tab": "toggleMarkAll"
};
}, t.prototype.id = function() {
return {
id: "Main",
active: this.lastActiveIndex,
scrollTop: this.lastScroll
};
}, t.prototype.inAppURL = function() {
return [ "main" ];
}, t.prototype.destroy = function() {
m.default.unmountComponentAtNode(this.markContextMenu), e.prototype.destroy.call(this), 
this.lastActiveIndex = !!this.feedContainer && this.feedContainer.state.highlightedIndex, 
this.clearCurrentPage(), this.vc.listener.unlisten("feeds:found", this.feedsFound), 
this.vc.listener.unlisten("feeds:recount", this.feedsCountChanged), this.clearCurrentNoScreen(), 
this.removeSignupScreen();
}, t.prototype.errorOnLoad = function() {
f.default.alertError("Error loading everything."), this.showError();
}, t.prototype.onPopupVisible = function() {
var e = this;
this.updateAvailable(), (null === u.app || void 0 === u.app ? void 0 : u.app.user.structure.base) && this.populate(), 
this.currentSignupScreen && !this.shouldSeeSignup() && setTimeout(function() {
e.removeSignupScreen();
}, this.currentSignupScreen.removeDelayInMilliseconds());
}, t.prototype.removeSignupScreen = function() {
this.currentSignupScreen && (this.currentSignupScreen.template.element.remove(), 
this.currentSignupScreen.destroy(), this.currentSignupScreen = !1);
}, t.prototype.onClearAllUnread = function() {
this.updateUnread();
}, t.prototype.feedsFound = function() {
this.updateAvailable();
}, t.prototype.updateUnread = function() {
this.setUnread((null === u.app || void 0 === u.app ? void 0 : u.app.user.unreads.countStored()) || 0);
}, t.prototype.updateAvailable = function() {
var e = this;
null === u.UI || void 0 === u.UI || u.UI.currentTab().then(function(t) {
e.setNewFeeds((null === u.app || void 0 === u.app ? void 0 : u.app.finder.countFeedsInTab(t.id)) || 0);
});
}, t.prototype.feedsCountChanged = function(e) {
this.setUnread(e.total), this.render();
}, t.prototype.shouldSeeSignup = function() {
return !(null === u.app || void 0 === u.app ? void 0 : u.app.user.isLoggedIn()) && !this.vc.stateFactory.getPreference(this.vc, "didChooseToUseBasic");
}, t.prototype.getCurrentFilter = function() {
return this.vc.stateFactory.getPreference(this.vc, "popup:filter") || "all";
}, t.prototype.setCurrentFilter = function(e) {
this.vc.stateFactory.shouldUpdatePreference(this.vc, "popup:filter", e);
}, t.prototype.setUnread = function(e) {
this.template.set("num_unread", e > 9999 ? "9999" : e), this.feedContainer && this.feedContainer.render();
}, t.prototype.setNewFeeds = function(e) {
this.numFeedsInTab = e, this.template.set("num_feeds", e), this.template.element.find(".add .bubble").toggle(!!e);
}, t.prototype.toggleMarkAll = function() {
this.shouldShowMarkAll = !this.shouldShowMarkAll, this.render();
}, t.prototype.didClickMarkAll = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t, n, i, r, s = this;
return __generator(this, function(a) {
switch (a.label) {
case 0:
t = function() {
s.markAllLoading = e, s.render();
}, a.label = 1;

case 1:
return a.trys.push([ 1, , 12, 13 ]), "all" !== e ? [ 3, 7 ] : (this.shouldShowMarkAll = !1, 
this.render(), u.app ? [ 4, u.app.user.unreads.count() ] : [ 3, 3 ]);

case 2:
return i = a.sent(), [ 3, 4 ];

case 3:
i = 0, a.label = 4;

case 4:
return n = i, [ 4, o.askMarkManyAsRead(n) ];

case 5:
return (r = a.sent()) ? (t(), [ 4, null === u.app || void 0 === u.app ? void 0 : u.app.user.unreads.clearAll() ]) : [ 2 ];

case 6:
return a.sent(), [ 3, 11 ];

case 7:
return "30days" !== e ? [ 3, 9 ] : (t(), [ 4, null === u.app || void 0 === u.app ? void 0 : u.app.user.unreads.clearOlderThan(30) ]);

case 8:
return a.sent(), [ 3, 11 ];

case 9:
return "1week" !== e ? [ 3, 11 ] : (t(), [ 4, null === u.app || void 0 === u.app ? void 0 : u.app.user.unreads.clearOlderThan(7) ]);

case 10:
a.sent(), a.label = 11;

case 11:
return this.populate(), [ 3, 13 ];

case 12:
return this.markAllLoading = !1, this.shouldShowMarkAll = !1, this.render(), [ 7 ];

case 13:
return [ 2 ];
}
});
});
}, t.prototype.showAdd = function() {
this.vc.stateFactory.shouldGotoSettings(this.vc, "add-feed");
}, t.prototype.showSettings = function() {
this.vc.stateFactory.shouldGotoSettings(this.vc, "main");
}, t.prototype.showLoading = function() {
this.template.element.find(".settings").addClass("loading");
}, t.prototype.hideLoading = function() {
this.template.element.find(".settings").removeClass("loading");
}, t.prototype.filterAll = function() {
null === u.app || void 0 === u.app || u.app.analytics.collectEvent("popup:change-filter", "all"), 
this.setCurrentFilter("all"), this.setActiveFilter(), this.populate();
}, t.prototype.filterStarred = function() {
null === u.app || void 0 === u.app || u.app.analytics.collectEvent("popup:change-filter", "starred"), 
this.setCurrentFilter("starred"), this.setActiveFilter(), this.populate();
}, t.prototype.filterUnread = function() {
null === u.app || void 0 === u.app || u.app.analytics.collectEvent("popup:change-filter", "unread"), 
this.setCurrentFilter("unread"), this.setActiveFilter(), this.populate();
}, t.prototype.setActiveFilter = function() {
var e = this.getCurrentFilter();
this.template.element.find("#filter-settings .current").removeClass("current"), 
this.template.element.find("#filter-settings ." + e).addClass("current");
}, t.prototype.hasFeeds = function() {
return !(!u.app || !u.app.user.structure.base) && u.app.user.structure.base.items().length > 0;
}, t.prototype.currentNoScreenCallback = function() {
this.clearCurrentNoScreen(), this.populate();
}, t.prototype.clearCurrentNoScreen = function() {
this.template.element.removeClass("no-feeds"), this.currentNoScreen && (this.currentNoScreen.template.element.remove(), 
this.currentNoScreen.destroy()), this.currentWelcomeScreen && (this.currentWelcomeScreen.template.element.remove(), 
this.currentWelcomeScreen.destroy());
}, t.prototype.openAddFeed = function() {
var e = h.getQueryParameter("url");
e && p.default.confirm("Subscribe to:\n" + e).yes(function() {
null === u.app || void 0 === u.app || u.app.feedMapper.addFeed({
path: e
}).then(function(e) {
e.errors && f.default.alert("Could not subscribe to feed...");
});
});
}, t.prototype.startOrganizeMode = function() {
this.vc.openSettingsPage("/feeds/");
}, t.prototype.triggerIntercom = function() {
n.default(".intercom-activator:first").click();
}, t.prototype.getFeed = function() {
return !!(this.postsPage && this.postsPage.feed && this.postsPage.feed) && this.postsPage.feed;
}, t.prototype.navForward = function() {
this.postsPage ? this.postsPage.navForward(this.vc.history.current()) : this.feedContainer ? this.feedContainer.navForward(this.vc.history.current()) : e.prototype.navForward.call(this, this.vc.history.current());
}, t.prototype.navigateTo = function(t) {
this.postsPage && t instanceof d.Post ? this.postsPage.navigateTo(t) : this.feedContainer ? this.feedContainer.navigateTo(t) : e.prototype.navigateTo.call(this, t);
}, t.prototype.setFeedsPage = function(e) {
if (this.clearCurrentNoScreen(), this.clearCurrentPage(), e.isEmpty() && e.standard) this.showNoScreen = !0; else {
var t = this.vc.stateFactory.shouldOverrideMagicPostsLists(), n = this.template.el(".put-feed-list-here")[0];
this.feedContainer = new s.default(e, n, this, {
highlightedIndex: this.lastActiveIndex,
showAllItem: t,
showStarredItem: t,
unreadOfAll: function() {
return (null === u.app || void 0 === u.app ? void 0 : u.app.user.unreads.countStored()) || 0;
}
}), this.lastActiveIndex = !1, this.showNoScreen = !1;
}
}, t.prototype.setPostsPage = function(e) {
return __awaiter(this, void 0, void 0, function() {
var t = this;
return __generator(this, function(n) {
return this.magicFeed = e, this.vc.stateFactory.shouldOverrideMagicPostsLists() ? [ 2 ] : (this.showNoScreen = !1, 
this.clearCurrentNoScreen(), this.clearCurrentPage(), this.postsPage = new a.default(this.vc, e, !0), 
this.postsPage.forceReload = function() {
t.populate();
}, this.template.element.addClass("screen-has-posts-page"), this.template.element.find(".screen-container").append(this.postsPage.template.container), 
this.postsPage.populate(), [ 2 ]);
});
});
}, t.prototype.clearCurrentPage = function() {
this.template.element.removeClass("no-posts-page screen-has-posts-page"), this.magicFeed = !1, 
this.postsPage && (this.postsPage.destroy(), this.postsPage.template.element.remove(), 
this.postsPage = !1), this.feedContainer && (this.feedContainer.destroy(), this.feedContainer = !1);
}, t.prototype.showError = function() {
n.default(document.body).addClass("in-error");
}, t.prototype.performKeyboardAction = function(e) {
"next-tab" === e ? this.nextTab() : this.postsPage && this.postsPage.performKeyboardAction(e);
}, t.prototype.nextTab = function() {
switch (this.getCurrentFilter()) {
case "starred":
this.filterUnread();
break;

case "unread":
this.filterAll();
break;

case "all":
this.filterStarred();
}
}, t.prototype.populate = function() {
return __awaiter(this, void 0, void 0, function() {
var e, t, n = this;
return __generator(this, function(o) {
switch (o.label) {
case 0:
return ("all" === this.getCurrentFilter() || this.vc.stateFactory.shouldOverrideMagicPostsLists()) && (e = null === u.app || void 0 === u.app ? void 0 : u.app.user.structure.base, 
e ? (this.error = !1, this.setFeedsPage(e)) : this.error = !0), u.app ? "starred" !== this.getCurrentFilter() ? [ 3, 2 ] : [ 4, this.setPostsPage(u.app.user.createFeedOnlyStarred()) ] : [ 3, 4 ];

case 1:
return o.sent(), [ 3, 4 ];

case 2:
return "unread" !== this.getCurrentFilter() ? [ 3, 4 ] : [ 4, this.setPostsPage(u.app.user.createFeedOnlyUnread()) ];

case 3:
o.sent(), o.label = 4;

case 4:
try {
this.vc.refreshWindowHeight();
} catch (e) {}
if (this.tryToRestoreScroll(), this.error || this.postsPage && this.postsPage.error) return this.showError(), 
[ 2 ];
if (!this.showNoScreen) return [ 2 ];
switch (this.getCurrentFilter()) {
case "all":
t = new l.default(this.vc), this.template.element.removeClass("no-posts-page");
break;

default:
throw new Error("Invalid this.getCurrentFilter(): " + this.getCurrentFilter());
}
return this.clearCurrentPage(), this.clearCurrentNoScreen(), this.currentNoScreen = t, 
this.currentNoScreen.onDone = this.currentNoScreenCallback, this.feedList.parent().append(this.currentNoScreen.template.container), 
this.template.element.addClass("no-feeds"), "all" === this.getCurrentFilter() && this.shouldSeeSignup() && !this.currentSignupScreen && (this.currentSignupScreen = new r.default(this.vc), 
this.currentSignupScreen.onSuccess = function() {
n.onPopupVisible();
}, this.feedList.closest(".page-scroll-container").parent().append(this.currentSignupScreen.template.container), 
this.currentSignupScreen.onVisible()), localStorage.hasSeenWelcome || "all" !== this.getCurrentFilter() || (localStorage.hasSeenWelcome = !0, 
this.currentWelcomeScreen = new i.default(this.vc), this.feedList.closest(".page-scroll-container").parent().append(this.currentWelcomeScreen.template.container)), 
[ 2 ];
}
});
});
}, t.prototype.render = function() {
var e = this;
this.postsPage && this.postsPage.render(), this.feedContainer && this.feedContainer.render(), 
this.shouldShowMarkAll ? m.default.render(g.default.createElement(v.ContextMenuForMarkAsRead, {
elementPosition: function() {
return e.markAllAsReadButton;
},
isLoading: this.markAllLoading,
didClickItem: function(t) {
e.didClickMarkAll(t);
},
shouldClose: function() {
return e.toggleMarkAll();
}
}), this.markContextMenu) : m.default.unmountComponentAtNode(this.markContextMenu), 
this.markAllAsReadButton.classList.toggle("on", this.shouldShowMarkAll);
}, t;
}(o.default), e("default", y);
}
};
}), System.register("client/controllers/screenpaymentrequired", [ "client/controller", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
} ],
execute: function() {
i = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return null === o.app || void 0 === o.app || o.app.analytics.collectEvent("screen:visible", "paymentrequired"), 
n;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#payment-required";
}, t.prototype.events = function() {
return {
"click .go-to-billing-button": "goToBilling"
};
}, t.prototype.id = function() {
return !1;
}, t.prototype.inAppURL = function() {
return [ "payment-required" ];
}, t.prototype.goToBilling = function() {
null === o.app || void 0 === o.app || o.app.analytics.collectEvent("screen:paymentrequired:button", "go_to_billing"), 
this.vc.openSettingsPage("/billing/");
}, t;
}(n.default), e("default", i);
}
};
}), System.register("client/controllers/screenisinsync", [ "client/controller" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#is-in-sync";
}, t.prototype.events = function() {
return {};
}, t.prototype.id = function() {
return !1;
}, t.prototype.inAppURL = function() {
return [ "is-in-sync" ];
}, t;
}(n.default), e("default", o);
}
};
}), System.register("client/controllers/controllers", [ "client/controllers/screenconnectedautomatically", "client/controllers/screenconsume", "client/controllers/screencouldnotverifytoken", "client/controllers/screenexpired", "client/controllers/screenfolder", "client/controllers/screengetstarted", "client/controllers/screeniframe", "client/controllers/screenmain", "client/controllers/screennofeeds", "client/controllers/screenpaymentrequired", "client/controllers/screenposts", "client/controllers/screensignup", "client/controllers/screenwelcome", "client/controllers/screenisinsync" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l, c, u, d, p, f, h, m, g;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
l = e;
}, function(e) {
c = e;
}, function(e) {
u = e;
}, function(e) {
d = e;
}, function(e) {
p = e;
}, function(e) {
f = e;
}, function(e) {
h = e;
}, function(e) {
m = e;
} ],
execute: function() {
g = {
Connectedautomatically: n.default,
Consume: o.default,
Couldnotverifytoken: i.default,
Expired: r.default,
Folder: s.default,
Getstarted: a.default,
Iframe: l.default,
Main: c.default,
NoFeeds: u.default,
Paymentrequired: d.default,
Posts: p.default,
Signup: f.default,
Welcome: h.default,
IsInSync: m.default,
get: function(e) {
return this[e];
}
}, e("default", g);
}
};
}), System.register("client/controllers/screenproonlyfeature", [ "client/controller" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
return e.call(this, t) || this;
}
return __extends(t, e), t.prototype.templateName = function() {
return "screen#pro-only-feature";
}, t.prototype.events = function() {
return {
"click .action-button": "goToBilling"
};
}, t.prototype.id = function() {
return !1;
}, t.prototype.inAppURL = function() {
return [ "pro-only-feature" ];
}, t.prototype.goToBilling = function() {
this.vc.openSettingsPage("/billing/");
}, t;
}(n.default), e("default", o);
}
};
}), System.register("client/components/UserMessageModal", [ "react" ], function(e, t) {
"use strict";
var n, o;
t && t.id;
return {
setters: [ function(e) {
n = e;
} ],
execute: function() {
o = function(e) {
function t(t) {
var n = e.call(this, t) || this;
return n.didClickOK = function(e) {
return __awaiter(n, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
e.preventDefault(), this.setState({
isLoading: !0
}), t.label = 1;

case 1:
return t.trys.push([ 1, , 3, 4 ]), [ 4, this.props.shouldDismiss() ];

case 2:
return t.sent(), [ 3, 4 ];

case 3:
return this.setState({
isLoading: !1
}), [ 7 ];

case 4:
return [ 2 ];
}
});
});
}, n.didClickCallToAction = function(e) {
return __awaiter(n, void 0, void 0, function() {
return __generator(this, function(t) {
switch (t.label) {
case 0:
e.preventDefault(), this.setState({
isLoadingCallToAction: !0
}), t.label = 1;

case 1:
return t.trys.push([ 1, , 3, 4 ]), [ 4, this.props.shouldPerformCallToAction() ];

case 2:
return t.sent(), [ 3, 4 ];

case 3:
return this.setState({
isLoadingCallToAction: !1
}), [ 7 ];

case 4:
return [ 2 ];
}
});
});
}, n.state = {
isLoading: !1,
isLoadingCallToAction: !1
}, n;
}
return __extends(t, e), t.prototype.render = function() {
return n.default.createElement("div", {
className: "UserMessageModal"
}, n.default.createElement("h2", {
className: "margin-bottom-small"
}, this.props.title), n.default.createElement("p", {
className: "margin-bottom-medium",
dangerouslySetInnerHTML: {
__html: this.props.body
}
}), this.props.callToActionLink ? n.default.createElement("p", {
className: "margin-bottom-small"
}, n.default.createElement("a", {
className: "button--primary button--100 " + (this.state.isLoadingCallToAction ? "is-loading" : ""),
onClick: this.didClickCallToAction
}, this.state.isLoadingCallToAction ? "Loading..." : this.props.callToActionText)) : null, !0 !== this.props.hideOk ? n.default.createElement("p", null, n.default.createElement("a", {
className: "button--secondary button--100 large " + (this.state.isLoading ? "is-loading" : ""),
onClick: this.didClickOK
}, this.state.isLoading ? "Loading..." : this.props.okText || "OK")) : null);
}, t;
}(n.default.PureComponent), e("UserMessageModal", o);
}
};
}), System.register("client/controllers/ScreenUserMessage", [ "client/controller", "client/appglobals", "client/components/UserMessageModal", "react", "react-dom" ], function(e, t) {
"use strict";
var n, o, i, r, s, a;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
} ],
execute: function() {
a = function(e) {
function t(t, n) {
var i = e.call(this, t) || this;
return i.dismiss = function() {
return __awaiter(i, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return t.trys.push([ 0, 2, , 3 ]), [ 4, this.userMessage.acknowledge() ];

case 1:
return t.sent(), [ 3, 3 ];

case 2:
return e = t.sent(), console.error("Could not acknowledge call to action", e), [ 2, !1 ];

case 3:
return [ 2, !1 ];
}
});
});
}, i.performCallToAction = function() {
return __awaiter(i, void 0, void 0, function() {
var e;
return __generator(this, function(t) {
switch (t.label) {
case 0:
return t.trys.push([ 0, 2, , 3 ]), [ 4, this.userMessage.acknowledge() ];

case 1:
return t.sent(), [ 3, 3 ];

case 2:
return e = t.sent(), console.error("Could not acknowledge call to action", e), [ 2, !1 ];

case 3:
return this.userMessage.callToActionLink && (null === o.UI || void 0 === o.UI || o.UI.openTab(this.userMessage.callToActionLink)), 
[ 2, !0 ];
}
});
});
}, i.userMessage = n, i.reactElementContainer = i.template.el(".user-message-container")[0], 
i.render(), i;
}
return __extends(t, e), t.prototype.inAppURL = function() {
return [ "user-message" ];
}, t.prototype.id = function() {
return !1;
}, t.prototype.templateName = function() {
return "screen#user-message";
}, t.prototype.events = function() {
return {};
}, t.prototype.render = function() {
var e = r.default.createElement(i.UserMessageModal, {
title: this.userMessage.title,
body: this.userMessage.body,
callToActionText: this.userMessage.callToActionText,
callToActionLink: this.userMessage.callToActionLink,
okText: this.userMessage.okText,
hideOk: this.userMessage.hideOk,
shouldPerformCallToAction: this.performCallToAction,
shouldDismiss: this.dismiss
});
s.default.render(e, this.reactElementContainer);
}, t;
}(n.default), e("ScreenUserMessage", a);
}
};
}), System.register("client/popup", [ "jquery", "client/init", "client/viewcontroller", "client/pui/template", "client/pui/linkqueue", "client/pui/alert", "client/pui/modal", "client/pui/screenmodal", "app/library/ts/library", "client/library/keyboard-navigation", "client/controllers/controllers", "client/controllers/screenmain", "client/controllers/screenconnectedautomatically", "client/controllers/screencouldnotverifytoken", "client/controllers/screenexpired", "client/controllers/screenpaymentrequired", "client/controllers/screenisinsync", "client/controllers/screenconsume", "client/controllers/ScreenUserMessage", "client/controllers/datahooks", "client/appglobals" ], function(e, t) {
"use strict";
var n, o, i, r, s, a, l, c, u, d, p, f, h, m, g, v, y, C, b, w, S;
t && t.id;
return {
setters: [ function(e) {
n = e;
}, function(e) {
o = e;
}, function(e) {
i = e;
}, function(e) {
r = e;
}, function(e) {
s = e;
}, function(e) {
a = e;
}, function(e) {
l = e;
}, function(e) {
c = e;
}, function(e) {
u = e;
}, function(e) {
d = e;
}, function(e) {
p = e;
}, function(e) {
f = e;
}, function(e) {
h = e;
}, function(e) {
m = e;
}, function(e) {
g = e;
}, function(e) {
v = e;
}, function(e) {
y = e;
}, function(e) {
C = e;
}, function(e) {
b = e;
}, function(e) {}, function(e) {
w = e;
} ],
execute: function() {
S = function(e) {
function t(t, o) {
var i = e.call(this, t, o, function(e) {
return p.default.get(e);
}) || this;
return i.onPopupCloseListeners = [], i.destroy = i.destroy.bind(i), i.queueChanged = i.queueChanged.bind(i), 
i.feederConnectChanged = i.feederConnectChanged.bind(i), i.feederExpiredChanged = i.feederExpiredChanged.bind(i), 
i.onKeyDown = i.onKeyDown.bind(i), i.refreshTheme = i.refreshTheme.bind(i), i.head = new r.default("popup#head"), 
n.default(i.head.container).insertBefore(i.container), i.refreshTheme(), null === w.app || void 0 === w.app || w.app.events.subscribe("theme:changed", i.refreshTheme), 
i.queue = new s.default(i.head.element.find(".link-queue")), i.queue.setListener(i.queueChanged), 
window.addEventListener("unload", i.destroy, !1), i.listener.listen("feeder:connected", i.feederConnectChanged), 
i.listener.listen("feeder:expiredChanged", i.feederExpiredChanged), document.addEventListener("keydown", i.onKeyDown, !1), 
i.toggleNotification(), i.feederExpiredChanged(), i;
}
return __extends(t, e), t.defaultStateFactory = function() {
return {
getRememberedScreenChain: function(e) {
return (null === w.app || void 0 === w.app ? void 0 : w.app.rememberedScreenChain) || !1;
},
getPreference: function(e, t) {
if ("display:pageStyle" === t) {
return {
columns: [ "sidebar" ]
};
}
return null === w.app || void 0 === w.app ? void 0 : w.app.user.preferences.get(t);
},
getPostDisplayOptionsForFeed: function(e, t) {
return t.displayOptions();
},
getSortOrderForFeed: function(e, t) {
return t.getSortOrder();
},
shouldNavigationEventOpenPost: function() {
return !1;
},
shouldOverrideMagicPostsLists: function() {
return !1;
},
shouldRemoveDeck: function(e) {},
shouldMoveDeck: function(e, t) {},
shouldUpdatePreference: function(e, t, n) {
null === w.app || void 0 === w.app || w.app.user.preferences.set(t, n);
},
shouldUpdatePostDisplayOptionsForFeed: function(e, t, n) {
t.persistDisplaySettings(n);
},
shouldUpdateSortOrderForFeed: function(e, t, n) {
t.changeSortOrder(n), t.save();
},
shouldPersistScreenChain: function(e, t) {
w.app && (w.app.rememberedScreenChain = t);
},
willChangePage: function(e, t) {},
didChangePage: function(e) {},
shouldGotoSettings: function(e, t) {
"main" === t ? e.showSettingsScreen() : "add-feed" === t && (null === w.UI || void 0 === w.UI || w.UI.currentTab().then(function(t) {
(null === w.app || void 0 === w.app ? void 0 : w.app.finder.countFeedsInTab(t.id)) ? e.showAddScreen({
tabId: t.id
}) : e.showAddScreen();
}));
},
shouldGotoPost: function(e, t) {
null === w.app || void 0 === w.app || w.app.analytics.collectEvent("open-post", "post-item", {
postId: t.id
}), w.Ext.isMobile() ? e.pushScreen(new C.default(e, t)) : e.stateFactory.getPreference(e, "global:openPostsInNewTab") ? null === w.UI || void 0 === w.UI || w.UI.openTab(t.getLink()) : null === w.UI || void 0 === w.UI || w.UI.currentTab().then(function(e) {
e && (null === w.UI || void 0 === w.UI || w.UI.tabChangeURL(e.id, t.getLink()));
});
},
shouldGotoPostList: function(e, t) {
var n = e.controllerInjector("Posts"), o = new n(e, t);
e.pushScreen(o);
},
shouldChangePageStyle: function(e) {},
onGlobalKeyDown: function(e, t) {
l.default.onGlobalKeyDown(t) || d.onKeyDownEvent(t, e);
}
};
}, t.prototype.destroy = function() {
e.prototype.destroy.call(this), window.removeEventListener("unload", this.destroy, !1), 
null === w.app || void 0 === w.app || w.app.events.unsubscribe("theme:changed", this.refreshTheme), 
this.listener.unlisten("feeder:connected", this.feederConnectChanged), this.listener.unlisten("feeder:expiredChanged", this.feederExpiredChanged), 
window.removeEventListener("keydown", this.onKeyDown, !1), this.queue && (this.queue.pump(), 
this.queue.queue = [], this.queue.destroy()), this.listener.unlisten("feeder:connect", this.feederConnectChanged), 
null === w.app || void 0 === w.app || w.app.events.unsubscribe("theme:changed", this.refreshTheme), 
this.screenStack.clearAll(), this.currentScreen && (this.currentScreen.onOff(), 
this.currentScreen.destroy(), delete this.currentScreen), this.head.destroy(), delete this.head, 
this.queue && this.queue.removeListener(this.queueChanged), this.onPopupCloseListeners.forEach(function(e) {
e();
}), this.onPopupCloseListeners = [];
}, t.prototype.start = function() {
if (!this.screenStack.remember()) {
var e = new f.default(this);
this.stateFactory.willChangePage(this, e), this.setCurrentScreen(e);
}
}, t.prototype.feederConnectChanged = function() {
o.reloadProClasses(), this.toggleNotification(), this.currentScreen.onFeedConnectChanged(), 
this.feederExpiredChanged(), this.currentScreen.onPopupVisible();
}, t.prototype.feederExpiredChanged = function() {
var e = this;
if (n.default(document.body).toggleClass("is-expired", (null === w.app || void 0 === w.app ? void 0 : w.app.user.proHasExpired()) || !1), 
(null === w.app || void 0 === w.app ? void 0 : w.app.user.isTrial()) ? (n.default(".trial-days-left").show(), 
n.default(".trial-days-left-text").text((null === w.app || void 0 === w.app ? void 0 : w.app.user.proTrialDaysLeft()) || "0")) : n.default(".trial-days-left").hide(), 
null === w.app || void 0 === w.app ? void 0 : w.app.sync.feederAccountManager.isInSync) this.currentInSyncModal || (this.currentInSyncModal = new c.default(function() {
return new y.default(e);
}), this.currentInSyncModal.canClose = !1, this.currentInSyncModal.autoWidth = !0, 
this.currentInSyncModal.show()); else if (this.stateFactory.getPreference(this, "backend:hasChangedStatusAndNeedsToVerifyWithUser")) this.currentConnectedModal || (this.currentConnectedModal = new c.default(function() {
return new h.default(e);
}), this.currentConnectedModal.canClose = !1, this.currentConnectedModal.show()); else if (w.app && w.app.user.hasMessage()) {
if (!this.currentUserMessageModal) {
var t = w.app.user.getUserMessages()[0];
this.currentUserMessageModal = new c.default(function() {
return new b.ScreenUserMessage(e, t);
}), this.currentUserMessageModal.canClose = !1, this.currentUserMessageModal.autoWidth = !0, 
this.currentUserMessageModal.show();
}
} else w.app && w.app.user.proHasExpired() && !w.app.user.hasChosenPlan() ? this.currentExpiredModal || (this.currentExpiredModal = new c.default(function() {
return new g.default(e);
}), this.currentExpiredModal.canClose = !1, this.currentExpiredModal.autoWidth = !0, 
this.currentExpiredModal.show()) : w.app && w.app.user.doesProRequirePayment() ? this.currentPaymentRequiredScreen || (this.currentPaymentRequiredScreen = new c.default(function() {
return new v.default(e);
}), this.currentPaymentRequiredScreen.canClose = !1, this.currentPaymentRequiredScreen.show()) : w.app && w.app.sync.feederAccountManager.checkResponse && w.app.sync.feederAccountManager.checkResponse.no_pro_for_token ? this.currentCouldNotVerifyTokenModal || (this.currentCouldNotVerifyTokenModal = new c.default(function() {
return new m.default(e);
}), this.currentCouldNotVerifyTokenModal.canClose = !1, this.currentCouldNotVerifyTokenModal.show()) : this.stateFactory.getPreference(this, "feeder:shouldSeeDowngradeSuccessMessage") ? (null === w.app || void 0 === w.app || w.app.analytics.collectEvent("screen:visible", "downgradesuccess"), 
a.default.alert("You have downgraded to Feeder Lite. All feeds and settings are now stored locally.", function() {
null === w.app || void 0 === w.app || w.app.analytics.collectEvent("screen:downgradesuccess:button", "ok"), 
e.stateFactory.shouldUpdatePreference(e, "feeder:shouldSeeDowngradeSuccessMessage", !1);
})) : (this.currentInSyncModal && (this.currentInSyncModal.destroy(), this.currentInSyncModal = void 0), 
this.currentConnectedModal && (this.currentConnectedModal.destroy(), this.currentConnectedModal = void 0), 
this.currentExpiredModal && (this.currentExpiredModal.destroy(), this.currentExpiredModal = void 0), 
this.currentPaymentRequiredScreen && (this.currentPaymentRequiredScreen.destroy(), 
this.currentPaymentRequiredScreen = void 0), this.currentCouldNotVerifyTokenModal && (this.currentCouldNotVerifyTokenModal.destroy(), 
this.currentCouldNotVerifyTokenModal = void 0), this.currentPaidOnlyScreen && (this.currentPaidOnlyScreen.destroy(), 
this.currentPaidOnlyScreen = void 0), this.currentUserMessageModal && (this.currentUserMessageModal.destroy(), 
this.currentUserMessageModal = void 0));
}, t.prototype.refreshTheme = function() {
var e = u.getQueryParameter("theme") || this.stateFactory.getPreference(this, "activeTheme");
"theme-light-old" === e && (e = "theme-light"), "theme-dark-old" === e && (e = "theme-dark");
var t = !1;
null === w.app || void 0 === w.app || w.app.user.preferences.allThemes.forEach(function(n) {
n.identifier === e && (t = !0);
}), t || (e = "theme-light"), null === w.app || void 0 === w.app || w.app.user.preferences.allThemes.forEach(function(e) {
n.default(document.body).removeClass(e.identifier);
}), n.default(document.body).addClass(e);
}, t.prototype.onScreenChange = function() {
this.disableTopBar();
}, t.prototype.disableTopBar = function() {
n.default(".bar.bottom, .bar.top").css("top", ""), n.default(document.body).addClass("at-top");
}, t.prototype.queueChanged = function(e, t) {
this.queue && this.queue.isEmpty() && this.disableTopBar();
}, t.prototype.onKeyDown = function(e) {
this.stateFactory.onGlobalKeyDown(this, e);
}, t.prototype.returnFromFeedView = function() {
this.currentScreen instanceof f.default && [ "unread", "starred" ].includes(this.currentScreen.getCurrentFilter()) ? this.currentScreen.filterAll() : this.popScreen();
}, t;
}(i.default), e("Popup", S);
}
};
}), System.register("client/client", [ "client/popup" ], function(e, t) {
"use strict";
function n() {
window.popup = new o.Popup(".popup-content", o.Popup.defaultStateFactory()), window.popup.start(), 
$(document.body).removeClass("popup-loading");
}
var o, i;
t && t.id;
return {
setters: [ function(e) {
o = e;
} ],
execute: function() {
n(), i = window.setInterval(function() {
window.popup._lolSize = document.body.offsetHeight + document.documentElement.offsetHeight;
}, 1), setTimeout(function() {
clearInterval(i);
}, 1999);
}
};
});