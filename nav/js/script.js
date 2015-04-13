// JavaScript Document

window.onload = function() {
	var rblist = document.getElementsByClassName("report-box");
	var rb_content = rblist.childNodes;
	
	for (var i = 0; i < rblist.length; i++) {
		rblist[i].onclick = function(e) {
			var el = e.target;
			switch (el.className) {
				case 'close':
					removeNode(el.parentNode);
					break;
				
				
				
			}
			
		}
	}
	

	
	
}



//remove a node
function removeNode(node) {
	node.parentNode.removeChild(node);
}


function replaceContentInContainer(matchClass, content) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1) {
            elems[i].innerHTML = content;
        }
    }
}