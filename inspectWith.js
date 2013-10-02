var s = document.createElement("script");
s.src = chrome.runtime.getURL("captureClick.js");
document.body.appendChild(s);

function loadScript(script) {
    var s = document.createElement("script");
    s.src = chrome.runtime.getURL(script + ".js");
    document.body.appendChild(s);
}

chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message.inspectWith) {
        chrome.runtime.sendMessage(message);
    } else if (message.loadScript) {
        loadScript(message.loadScript);
    }
});
