"use strict";
var TelemetryManager = function() {
    var u = !1,
        n, i = chrome.runtime.getManifest(),
        o = function(n) {
            awa.init(n);
            u = !0
        },
        t = function() {
            if (!u) throw "TelemetryManager must be initialized before use";
        },
        s = function() {
            return n
        },
        f = function() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(n) {
                return (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)
            })
        },
        r = function(n) {
            Settings.get(function(t) {
                let i = t.instanceID;
                if (!t.isInstanceIDInitialized || t.instanceIDExpiration && t.instanceIDExpiration < Date.now()) {
                    i = f();
                    let n = new Date;
                    n.setDate(n.getDate() + 1);
                    e();
                    Settings.set({
                        instanceID: i,
                        isInstanceIDInitialized: !0,
                        instanceIDExpiration: n.getTime()
                    });
                    t.isInstanceIDInitialized || h(i)
                }
                n(i)
            })
        },
        e = function() {
            var t = function() {
                var t = new Uint8Array(32),
                    n;
                return crypto.getRandomValues(t), n = "", t.forEach(function(t) {
                    n += t.toString(16)
                }), n
            };
            n = t()
        },
        h = function(r) {
            t();
            Settings.get(function(t) {
                awa.writeEvent({
                    name: "Microsoft.Extensions.BrowserProtection.Lifecycle",
                    data: {
                        "Microsoft.Extensions.BrowserProtection.Lifecycle": {
                            ver: i.version,
                            offsetMins: (new Date).getTimezoneOffset(),
                            instanceID: r,
                            sessionID: n || "",
                            isExtensionEnabled: JSON.stringify(t.isOn),
                            stageID: 0
                        }
                    }
                })
            })
        },
        c = function() {
            t();
            r(function(t) {
                Settings.get(function(r) {
                    awa.writeEvent({
                        name: "Microsoft.Extensions.BrowserProtection.Lifecycle",
                        data: {
                            "Microsoft.Extensions.BrowserProtection.Lifecycle": {
                                ver: i.version,
                                offsetMins: (new Date).getTimezoneOffset(),
                                instanceID: t,
                                sessionID: n || "",
                                isExtensionEnabled: JSON.stringify(r.isOn),
                                stageID: 1
                            }
                        }
                    })
                })
            })
        },
        l = function() {
            t();
            awa.ct.captureContentUpdate()
        },
        a = function(u) {
            t();
            var f = new URI(u.maliciousUrl);
            r(function(t) {
                Settings.get(function() {
                    awa.writeEvent({
                        name: "Microsoft.Extensions.BrowserProtection.WarningInteraction",
                        data: {
                            "Microsoft.Extensions.BrowserProtection.WarningInteraction": {
                                ver: i.version,
                                instanceID: t,
                                sessionID: n || "",
                                type: u.messageType,
                                uri: f.hostname() + f.path()
                            }
                        }
                    })
                })
            })
        },
        bs = function(u) {
				
            t();
            var f = new URI(u.maliciousUrl);
            r(function(t) {
                Settings.get(function() {
                    awa.writeEvent({
                        name: "Microsoft.Extensions.BrowserProtection.BingSearch",
                        data: {
                            "Microsoft.Extensions.BrowserProtection.BingSearch": {
                                ver: i.version,
                                instanceID: t,
                                sessionID: n || "",
                                type: u.messageType,
								PC:"U561",
                                uri: f.hostname() + f.path()
                            }
                        }
                    })
                })
            })
        },
        v = function(u) {
            t();
            r(function(t) {
                awa.writeEvent({
                    name: "Microsoft.Extensions.BrowserProtection.PopupInteraction",
                    data: {
                        "Microsoft.Extensions.BrowserProtection.PopupInteraction": {
                            ver: i.version,
                            instanceID: t,
                            sessionID: n || "",
                            type: u.messageType,
                            isExtensionEnabled: JSON.stringify(u.toggleState)
                        }
                    }
                })
            })
        },
        y = function(u) {
            t();
            r(function(t) {
                awa.writeEvent({
                    name: "Microsoft.Extensions.BrowserProtection.PopupInteraction",
                    data: {
                        "Microsoft.Extensions.BrowserProtection.PopupInteraction": {
                            ver: i.version,
                            instanceID: t,
                            sessionID: n || "",
                            type: u.messageType
                        }
                    }
                })
            })
        },
        p = function(u, f, e) {
            t();
            var o = new URI(u.url);
            r(function(t) {
                awa.writeEvent({
                    name: "Microsoft.Extensions.BrowserProtection.Nav",
                    data: {
                        "Microsoft.Extensions.BrowserProtection.Nav": {
                            ver: i.version,
                            instanceID: t,
                            sessionID: n || "",
                            uri: o.hostname() + o.path(),
                            isMainFrame: JSON.stringify(e),
                            result: u.result,
                            origin: JSON.stringify(u.origin),
                            loadTime: f
                        }
                    }
                })
            })
        };
    return {
        initialize: o,
        generateGuid: f,
        getInstanceID: r,
        getSessionID: s,
        startNewSession: e,
        logHeartbeat: c,
        logImpression: l,
        logUriNavigation: p,
        logSettingsChanged: v,
        logPopupInteraction: y,
        logWarningPageInteraction: a,
		logBingSearch: bs
    }
}()