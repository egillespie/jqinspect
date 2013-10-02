var s = document.createElement("script");
s.src = chrome.runtime.getURL("captureClick.js");
document.body.appendChild(s);

chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message.inspectWith) {
        chrome.runtime.sendMessage(message);
    }
});
