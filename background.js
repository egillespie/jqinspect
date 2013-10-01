function jqInspect(info, tab) {
	chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            inspectWith: "jQuery"
        });
    });
}

chrome.contextMenus.create({
	"title": "Inspect Element with jQuery",
	"contexts": ["all"],
	"onclick": jqInspect
});
