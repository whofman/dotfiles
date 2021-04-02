
 
  var title = "The Pirate Bay Forwarder Options";
  var id = chrome.contextMenus.create({"title": title, "onclick": genericOnClick});

function genericOnClick(info, tab) {
  window.open('options.html', '_blank');
}


