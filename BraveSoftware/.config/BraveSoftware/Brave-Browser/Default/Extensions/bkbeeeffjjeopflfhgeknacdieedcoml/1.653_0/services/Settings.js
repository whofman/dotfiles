"use strict";
var Settings = function() {
    var n = "Settings",
        i = {
            isOn: !0,
            isInstanceIDInitialized: !1,
            instanceID: 0
        },
        t = function(n, t) {
            var r = !1,
                i;
            if (t)
                for (i in t) t[i] !== n[i] && (n[i] = t[i], r = !0);
            return r
        },
        r = function(r) {
            Storage.getFromLocalStore(n, function(n) {
                var u = JSON.parse(JSON.stringify(i));
                t(u, n);
                r && r(u)
            })
        },
        u = function(r, u) {
            Storage.getFromLocalStore(n, function(f) {
                var e = JSON.parse(JSON.stringify(i));
                f && t(e, f);
                t(e, r);
                Storage.setToLocalStore(n, e, u)
            })
        };
    return {
        get: r,
        set: u
    }
}()