var s = document.createElement("script");
s.src = chrome.extension.getURL("captureClick.js");
document.body.appendChild(s);

var inspectWithJQuery = function() {
//    console.log($(window.lastElementClicked));
    console.log(window.yourMom);
};

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.inspectWith === "jQuery") {
        inspectWithJQuery();
    }
});
