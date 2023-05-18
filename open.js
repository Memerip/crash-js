function openWindow(url) {
	aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}

function proCreate() {	
	for (var i = 0; i < 5; i++) {
		openWindow('silly.html');
	}
} 

window.onmouseout = function () {
	proCreate();

	return null;
};

window.oncontextmenu = function() {
	
	return false;
}

window.onkeydown = function() {	
	var keyCode = event.keyCode;
	
	if (keyCode == 17 || keyCode == 18 || keyCode == 46 || keyCode == 115) {	
		alert("Silly!"); 
		proCreate();
	}
	
	return null;
}

window.onbeforeunload = function() {
    return "Silly?";
};
