var inspectWithJQuery = function () {
	console.log($($0));
};

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.inspectWith === "jQuery") {
        inspectWithJQuery();
    }
});
