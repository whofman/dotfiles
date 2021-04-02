"use strict";

function BrowserProtectionResult(n, t, i, r) {
    this.url = n;
    this.result = t;
    this.origin = i;
    this.reportUrl = r
}
BrowserProtectionResult.ResultType = {
    KNOWNSAFE: "knownsafe",
    ALLOWED: "allowed",
    MALICIOUS: "malicious",
    PHISHING: "phishing",
    UNTRUSTED: "untrusted"
};
BrowserProtectionResult.ThreatCodes = {
    PHISHING: 1,
    MALICIOUS: 2
};
BrowserProtectionResult.ResultOrigin = {
    TOPSITE: 1,
    ENDPOINT: 2,
    FAIL: 3
}