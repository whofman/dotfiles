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
if (self != top) {
  sendMessage({
    type: "executeOnReader"
  });

  listenForMessage("executeOnReader:true", function(msg) {
    setTimeout(function() {
      document.documentElement.style.display = "block";
    }, 100);
  });
}
