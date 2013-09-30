function jqInspect(info, tab) {
	alert("about to call eval");
	chrome.devtools.inspectedWindow.eval(
	    "jQuery.fn.jquery",
	     function(result, isException) {
	       if (isException)
	         alert("the page is not using jQuery");
	       else
	         alert("The page is using jQuery v" + result);
	     });
}

chrome.contextMenus.create({
	"title": "Inspect Element with jQuery",
	"contexts": ["all"],
	"onclick": jqInspect
});
