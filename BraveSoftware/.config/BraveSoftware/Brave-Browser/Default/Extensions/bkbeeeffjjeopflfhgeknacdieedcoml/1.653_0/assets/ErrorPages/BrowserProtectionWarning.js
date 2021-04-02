"use strict";

function initializeBody() {

    var n = UrlHelpers.extractThreatCode(window.document.URL);
    n & BrowserProtectionResult.ThreatCodes.PHISHING && (document.getElementById("PhishingThreat").style.display = "list-item", document.getElementById("PhishingThreat").innerText = L_PhishingThreat_TEXT);
    n & BrowserProtectionResult.ThreatCodes.MALICIOUS && (document.getElementById("MalwareThreat").style.display = "list-item", document.getElementById("MalwareThreat").innerText = L_MalwareThreat_TEXT)
}

function expandCollapseElement(n) {
    var t, r, i;
    document.getElementById && (t = document.getElementById(n), r = document.getElementById(n + "Span"), t && (i = getDisplayValue(t), i && i !== "none" ? i === "block" && (t.style.display = "none", r.innerHTML = "&#x0e70d;") : (t.style.display = "block", r.innerHTML = "&#x0e70e;")))
}

function getDisplayValue(n) {
    var t;
    return t = window.getComputedStyle ? window.getComputedStyle(n) : n.currentStyle, t.display
}

function postFeedback(n) {
    var u = document.createElement("a"),
        t, r;
    u.href = n;
    u.target = "_blank";
    var e = u.href.split("?"),
        h = e[0],
        c = e[1],
        o = c.split("&");
    if (document.getElementById) {
        for (t = document.getElementById("postFeedbackForm"), t.setAttribute("action", h), t.setAttribute("method", "POST"); t.firstChild;) t.removeChild(t.firstChild);
        for (r = 0; r < o.length; r++) {
            var f = o[r],
                s = f.indexOf("="),
                l = f.substr(0, s),
                a = f.substr(s + 1),
                i = document.createElement("input");
            i.name = l;
            i.value = a;
            i.type = "text";
            i.style.display = "none";
            t.appendChild(i)
        }
        t.submit()
    }
}
var L_PhishingThreat_TEXT = "Phishing threat: This is a phishing website that impersonates a trusted website to trick you into revealing personal or financial information.",
    L_MalwareThreat_TEXT = "Malicious software threat: This site contains links to viruses or other software programs that can reveal personal information stored or typed on your computer to malicious persons.",
    L_PUAATitle_TEXT = "Reported Website: Navigation Cancelled",
    L_TopFrameUnsafe_TEXT = "This website has been reported as unsafe",
    L_TopFrameUnwanted_TEXT = "Be careful when downloading programs from this website",
    L_ContentUnsafe_TEXT = "Content on this website has been reported as unsafe",
    L_Content_TEXT = "Hosted by:  ",
    L_MOREINFO_TEXT = "More information";
window.addEventListener("load", function load() {
    var n, u, f, s, i, e, h, r, c, t, o;
    if (window.removeEventListener("load", load, !1), initializeBody(), TelemetryManager.initialize(Config.smartScreenPageJsllConfig), n = UrlHelpers.extractMaliciousUrl(window.document.URL), document.getElementById("homepageButton").addEventListener("click", function() {
            return window.location.replace("about:newtab"), chrome.runtime.sendMessage({
                messageType: Messages.MessageType.CONTINUE_TO_SAFETY,
                maliciousUrl: n,
                hostUrl: t
            }), !1
        }), document.getElementById("reportSafeLink").addEventListener("click", function() {
            chrome.runtime.sendMessage({
                messageType: Messages.MessageType.CONTINUE_TO_REPORT,
                maliciousUrl: n,
                hostUrl: t
            })
        }), u = document.getElementsByClassName("js-reportIncorrect"), f = UrlHelpers.extractReportUrl(window.document.URL), f)
        for (s = function() {
                return postFeedback(f), !1
            }, i = 0; i < u.length; i++) u[i].addEventListener("click", s);
    for (e = document.getElementsByClassName("js-expand-collapse-phish"), h = function() {
            return expandCollapseElement("infoBlockID"), !1
        }, r = 0; r < e.length; r++) e[r].addEventListener("click", h);
    c = new URI(n);
	
	document.getElementById('bingsearch').innerText = n;
	document.getElementById('bingsearch').href = "https://www.bing.com/search?pc=U561&q="+ n;
    document.getElementById("contentlocations").innerText = c.host();
    t = UrlHelpers.extractContinueUrl(window.document.URL);
    o = document.getElementById("overrideLink");
    o.href = t;
    o.addEventListener("click", function() {
        chrome.runtime.sendMessage({
            messageType: Messages.MessageType.CONTINUE_TO_SITE,
            maliciousUrl: n,
            hostUrl: t
        })
    });
	var bs = document.getElementById("bingsearch");
	
    bs.addEventListener("click", function() {
        chrome.runtime.sendMessage({
            messageType: Messages.MessageType.BING_SEARCH_CLICKED,
            maliciousUrl: n,
            hostUrl: t
        })
    });
    TelemetryManager.logImpression()
})