function inspectWith(info, tab) {
    chrome.tabs.sendMessage(tab.id, {
        inspectWith: "jQuery"
    });
}

function loadAsteroids(info, tab) {
    chrome.tabs.sendMessage(tab.id, {
        loadScript: "asteroids"
    });
}

function loadTacoBarYes(info, tab) {
    chrome.tabs.sendMessage(tab.id, {
        loadScript: "tacoBarYes"
    });
}

chrome.contextMenus.create({
    "title": "Inspect Element with jQuery",
    "contexts": ["all"],
    "onclick": inspectWith
});

chrome.contextMenus.create({
    "title": "Asteroids!",
    "contexts": ["all"],
    "onclick": loadAsteroids
});

chrome.contextMenus.create({
    "title": "Taco Bar Yes!",
    "contexts": ["all"],
    "onclick": loadTacoBarYes
});

chrome.runtime.onConnect.addListener(function(port) {
    chrome.runtime.onMessage.addListener(function(message, sender) {
        port.postMessage(message);
    });
});
