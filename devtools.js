var port = chrome.runtime.connect({
    name: "devtools"
});

port.onMessage.addListener(function(message) {
    chrome.devtools.inspectedWindow.eval("console.log(\"%o\", jQuery(window.lastElementClicked))");
});
