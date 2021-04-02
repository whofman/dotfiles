"use strict";
TelemetryManager.initialize(Config.backgroundPageJsllConfig);
TelemetryManager.startNewSession();
TelemetryManager.logHeartbeat();
DataManager.initialize();
var getRedirectUrl = function(n, t, i, r) {
        var f = TabNavigator.getLocalUrl("en-US/assets/ErrorPages/BrowserProtectionWarning.htm"),
            e = t.result === BrowserProtectionResult.ResultType.MALICIOUS ? 2 : 1,
            u = new URI(f);
        return u.addSearch({
            u: t.url,
            tc: e,
            rep: t.reportUrl,
            cu: n,
            iid: i || "",
            sid: r || ""
        }), u.toString()
    },
    schemesToVerify = ["http", "https"];
chrome.webNavigation.onBeforeNavigate.addListener(function(n) {
    Settings.get(function(t) {
        var f;
        if (t.isOn) {
            var r = n.tabId,
                u = n.frameId,
                i = n.url,
                e = new URI(i);
            u === 0 && NavigationManager.logNavigationStarted(r, i, n.timeStamp);
            schemesToVerify.includes(e.scheme()) && (f = u === 0 && BrowserProtection.isUrlOnBypassList(i), f || BrowserProtection.checkIfUriIsMalicious(i, function(n, t) {
                TelemetryManager.logUriNavigation(n, t, u === 0);
                (n.result === BrowserProtectionResult.ResultType.PHISHING || n.result === BrowserProtectionResult.ResultType.MALICIOUS) && chrome.tabs.get(r, function(t) {
                    t && t.url && NavigationManager.isNavigationCurrentForTab(r, t.url) && (n.result === BrowserProtectionResult.ResultType.ALLOWED || BrowserProtection.isUrlOnBypassList(t.url) || TelemetryManager.getInstanceID(function(i) {
                        var r = getRedirectUrl(t.url, n, i, TelemetryManager.getSessionID());
                        TabNavigator.goTo(t, r)
                    }))
                })
            }))
        }
    })
});
chrome.webNavigation.onCreatedNavigationTarget.addListener(function(n) {
    console.log(n)
});
chrome.webNavigation.onCommitted.addListener(function(n) {
    n.frameId === 0 && NavigationManager.logNavigationCommitted(n.tabId, n.url, n.timeStamp)
});
chrome.webNavigation.onCompleted.addListener(function(n) {
    n.frameId === 0 && (NavigationManager.logNavigationCompleted(n.tabId, n.url, n.timeStamp), setTimeout(function() {
        BrowserProtection.removeUrlFromBypassList(n.url)
    }, 1e4))
});
chrome.webNavigation.onErrorOccurred.addListener(function(n) {
    n.frameId === 0 && NavigationManager.logNavigationCancelled(n.tabId, n.timeStamp)
});
chrome.tabs.onUpdated.addListener(function(n, t, i) {
    IconManager.updateIcon(i)
});
chrome.runtime.onMessage.addListener(function(n) {
    if (n && n.messageType) switch (n.messageType) {
        case Messages.MessageType.CONTINUE_TO_SITE:
            n.hostUrl && (BrowserProtection.addUrlToBypassList(n.hostUrl), TelemetryManager.logWarningPageInteraction(n));
            break;
		case Messages.MessageType.BING_SEARCH_CLICKED:
			TelemetryManager.logWarningPageInteraction(n);
			TelemetryManager.logBingSearch(n);
			break;
        case Messages.MessageType.CONTINUE_TO_REPORT:
        case Messages.MessageType.CONTINUE_TO_SAFETY:
            TelemetryManager.logWarningPageInteraction(n);
            break;
        case Messages.MessageType.PROTECTION_TOGGLED:
            TelemetryManager.logSettingsChanged(n);
            break;
        case Messages.MessageType.POPUP_LAUNCHED:
        case Messages.MessageType.FEEDBACK_CLICKED:
        case Messages.MessageType.PRIVACY_CLICKED:
        case Messages.MessageType.UNINSTALL_CLICKED:
        case Messages.MessageType.LEARNMORE_CLICKED:
        case Messages.MessageType.REPORT_SITE_CLICKED:
            TelemetryManager.logPopupInteraction(n);
            break;
        default:
            console.log("Received unknown message type: " + n.messageType)
    }
})