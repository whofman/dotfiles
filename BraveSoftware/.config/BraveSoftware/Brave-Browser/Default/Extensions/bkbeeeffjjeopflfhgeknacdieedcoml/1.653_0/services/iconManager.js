"use strict";var IconManager=function(){var n=function(n){chrome.browserAction.setIcon({path:{"16":"assets/red16.png","24":"assets/red24.png","32":"assets/red32.png"},tabId:n.id});chrome.browserAction.setTitle({title:""})},t=function(n){chrome.browserAction.setIcon({path:{"16":"assets/red16.png","24":"assets/red24.png","32":"assets/red32.png"},tabId:n.id});chrome.browserAction.setTitle({title:""})},i=function(n){chrome.browserAction.setIcon({path:{"16":"assets/icon16.png","24":"assets/icon24.png","32":"assets/icon32.png"},tabId:n.id});chrome.browserAction.setTitle({title:"Microsoft Defender Browser Protection"})},r=function(r){var u,f;r.url&&(u=!0,r.url.indexOf("ErrorPages/BrowserProtectionWarning.htm")!==-1&&(f=UrlHelpers.extractThreatCode(r.url),f&&(f&BrowserProtectionResult.ThreatCodes.MALICIOUS?(n(r),u=!1):f&BrowserProtectionResult.ThreatCodes.PHISHING&&(t(r),u=!1))),u&&i(r))};return{updateIcon:r}}()