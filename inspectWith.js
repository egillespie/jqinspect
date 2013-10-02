var s = document.createElement("script");
s.src = chrome.extension.getURL("captureClick.js");
document.body.appendChild(s);

var inspectWithJQuery = function() {
    alert('hi');
    var s = document.createElement("script");
    s.src = chrome.extension.getURL("logElement.js");
    s.onload = function() {
        this.parentNode.removeChild(this);
    };
    document.body.appendChild(s);
    chrome.experimental.devtools.console.addMessage("Log", "$($0)");
};

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.inspectWith === "jQuery") {
        inspectWithJQuery();
    }
});
