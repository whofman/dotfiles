function sendMessage(data) {
  if (isChrome()) {
    chrome.runtime.sendMessage(data);
  }
}

function listenForMessage(type, callback) {
  if (isChrome()) {
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      if (request.type === type) {
        callback(request);
      }
    });
  }
}

function assetURL(url) {
  if (isChrome()) {
    return chrome.extension.getURL(url);
  }
}

function isChrome() {
  return typeof chrome !== "undefined" && chrome.extension;
}

function sendMessageToExtension(name, message) {
  message = message || {};

  if (isChrome()) {
    message.type = name;
    chrome.runtime.sendMessage(message);
  }
}

function listenForFeederEvents(name, callback) {
  if (isChrome()) {
    chrome.runtime.connect().onMessage.addListener(function(msg) {
      if (msg.name === name) {
        callback(msg);
      }
    });
  }
}
;
(function() {
  var loadId = Date.now() + "-" + Math.random();

  // Connect request
  if (document.getElementById('feeder-connect-url')) {
    var url = document.getElementById('feeder-connect-url').value;
    sendMessageToExtension("feeder:connect", {
      connectURL: url,
      doMerge: document.getElementById('do-merge').value == "yes"
    });

    listenForFeederEvents("sync:merge", function(evt) {
      document.getElementById("sync-status").innerText = evt.status;
    });
  }

  if (
    (document.location.search || "").indexOf("logged_in=yes") !== -1 ||
    (document.location.search || "").indexOf("pro_trial=awesome") !== -1
  ) {
    sendMessageToExtension("feeder:didLogin", {});
  }

  // Fetch feeds
  if (document.getElementById('feeder-feeds-json')) {
    var resultElement = document.getElementById('feeder-feeds-json');
    listenForFeederEvents("feeder:feedsFetched", function(msg) {
      resultElement.value = msg.feeds;
      resultElement.setAttribute("data-loaded", "true");
    });
    sendMessageToExtension("feeder:fetchFeeds", {});
  }

  // Fetch feeds
  if (document.getElementById('feeder-account-status-might-have-changed')) {
    sendMessageToExtension("feeder:statusMightHaveChanged", {});
  }

  if (document && document.getElementById && document.getElementById("feeder-is-installed-flag")) {
    var beacon = document.getElementById("feeder-is-installed-flag");
    beacon.className += " feeder-api-enabled";
    listenForMessage("dom:gotUserKey", function(message) {
      sendToPage({
        type: "gotUserKey",
        userKey: message.userKey,
        email: message.email
      });
    });
    sendMessageToExtension("dom:getUserKey");
  }

  var hasSetupApiListener = false;
  window.addEventListener("message", function(e) {
    var messageData;
    try {
      messageData = JSON.parse(e.data);
    } catch (e) {
      return;
    }

    if (messageData.from === "feeder.co" && messageData.sanityCheck === "feeder.co-version1") {
      switch (messageData.payload.action) {
      case "checkSubscriptionStatus":
        sendMessageToExtension("feeder:statusMightHaveChanged", {});
        break;
      case "preferencesChanged":
        sendMessageToExtension("feeder:preferencesChanged", {
          key: messageData.payload.key,
          value: messageData.payload.value
        });
        break;
      case "globalChange":
        sendMessageToExtension("feeder:globalChange", {
          url: messageData.payload.url,
          method: messageData.payload.method,
          body: messageData.payload.body,
        });
        break;
      case "ping":
        sendToPage({
          type: "pong",
          pong: Date.now(),
          originalPayload: messageData.payload
        });
        break;
      case "callApi":
        if (!hasSetupApiListener) {
          hasSetupApiListener = true;
          setupApiResponseListener();
        }
        sendToPage({
          type: "api:startRequest",
          requestId: messageData.payload.request.requestId
        });

        sendMessageToExtension("api:request", messageData.payload.request);
        break;
      default:
        console.log("UNKNOWN MESSAGE", messageData.payload);
      }
    }
  }, false);

  function setupApiResponseListener() {
    listenForFeederEvents("api:response", function(message) {
      sendToPage({
        type: "api:response",
        response: message
      });
    });
  }

  function sendToPage(message) {
    window.postMessage(JSON.stringify({
      from: "extension.feeder.co",
      sanityCheck: "feeder.co-version1",
      payload: message,
      loadId: loadId
    }), "*");
  }
})();

