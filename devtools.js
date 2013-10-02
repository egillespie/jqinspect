var port = chrome.runtime.connect({
    name: "devtools"
});

port.onMessage.addListener(function(message) {
    chrome.devtools.inspectedWindow.eval("console.log(jQuery(window.lastElementClicked))");
});

chrome.experimental.devtools.console.onMessageAdded.addListener(function(message) {
    //alert("Got message: " + message.text);
});
