"use strict";
var Config = function() {
    var n = "Microsoft.BrowserExperiences.Prod.Chrome.BrowserProtection",
        t = {
            autoCapture: {
                pageView: !0,
                onLoad: !1,
                onUnload: !1,
                click: !0,
                scroll: !1,
                resize: !1,
                jsError: !0,
                addIn: !1,
                perf: !1,
                assets: !1,
                lineage: !1,
                invalidEvents: !1,
                msTags: !1,
                eventTooLong: !1,
                corsDisallowed: !1
            },
            coreData: {
                appId: n
            }
        },
        i = {
            autoCapture: {
                pageView: !1,
                onLoad: !1,
                onUnload: !1,
                click: !1,
                scroll: !1,
                resize: !1,
                jsError: !0,
                addIn: !1,
                perf: !1,
                assets: !1,
                lineage: !1,
                invalidEvents: !1,
                msTags: !1,
                eventTooLong: !1,
                corsDisallowed: !1
            },
            coreData: {
                appId: n
            }
        };
    return {
        smartScreenPageJsllConfig: t,
        backgroundPageJsllConfig: i
    }
}()