function inspectWith(info, tab) {
    chrome.tabs.sendMessage(tab.id, {
        inspectWith: "jQuery"
    });
}

chrome.contextMenus.create({
	"title": "Inspect Element with jQuery",
	"contexts": ["all"],
	"onclick": inspectWith
});
