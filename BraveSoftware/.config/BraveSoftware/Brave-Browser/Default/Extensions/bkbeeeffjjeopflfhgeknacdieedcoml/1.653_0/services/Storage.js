"use strict";
var Storage = function() {
    var n = function(n, t, i) {
            n.get(t, function(n) {
                var r = n && n[t];
                i(r)
            })
        },
        t = function(n, t, i, r) {
            var u = {};
            u[t] = i;
            n.set(u, r)
        },
        i = function(t, i) {
            n(chrome.storage.local, t, i)
        },
        r = function(n, i, r) {
            t(chrome.storage.local, n, i, r)
        },
        u = function(t, i) {
            n(chrome.storage.sync, t, i)
        },
        f = function(n, i, r) {
            t(chrome.storage.sync, n, i, r)
        };
    return {
        getFromLocalStore: i,
        setToLocalStore: r,
        getFromSyncStore: u,
        setToSyncStore: f
    }
}()