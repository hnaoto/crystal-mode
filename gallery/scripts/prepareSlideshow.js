function moveElement(elementID,final_x,final_y,interval) {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.left) {
    elem.style.left = "0px";
  }
  if (!elem.style.top) {
    elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
  if (xpos < final_x) {
    var dist = Math.ceil((final_x - xpos)/10);
    xpos = xpos + dist;
  }
  if (xpos > final_x) {
    var dist = Math.ceil((xpos - final_x)/10);
    xpos = xpos - dist;
  }
  if (ypos < final_y) {
    var dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if (ypos > final_y) {
    var dist = Math.ceil((ypos - final_y)/10);
    ypos = ypos - dist;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}



function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}





function prepareSlideshow() {
	
  var imgratio = 0.6; 
// Make sure the browser understands the DOM methods
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;

  var picHeight = document.documentElement.clientHeight; 
  var picWidth = document.documentElement.clientWidth;
  if (picWidth * imgratio > 1332)  picWidth = (1332/imgratio); 
  var moveDis = - picWidth * imgratio;


// Make sure the elements exist
  if (!document.getElementById("linklist")) return false;
  
  var slideshow = document.createElement("div");
  slideshow.setAttribute("id","slideshow");
  slideshow.style.height = picWidth* imgratio *  (832/1332) + 'px'; 
  
  
  
 
 var imgCount = 4;//number of images 
 var canvas=document.getElementById('canvas0');
 var context=canvas.getContext('2d'); 
 
 for (i = 0; i < imgCount; i++ ) {
	 var imgId = "g" + i;
	 var canvase = document.getElementById(imgId);
	 context.drawImage(canvase,i * 1332, 0, 1332, 832)
	 
 }

  
  var dataURL = canvas.toDataURL();




   
  var preview = document.createElement("img");
  preview.setAttribute("src",dataURL);
  preview.setAttribute("width",picWidth * imgratio * 4);
  preview.setAttribute("alt","building blocks of web design");
  preview.setAttribute("id","preview");
  slideshow.appendChild(preview);
  var list = document.getElementById("linklist");
  insertAfter(slideshow,list);
// Get all the links in the list
  var links = list.getElementsByTagName("a");

// Attach the animation behavior to the mouseover event
  links[1].onmouseover = function() {
    moveElement("preview", moveDis,0,10);
  }
  links[2].onmouseover = function() {
    moveElement("preview", moveDis * 2,0,10);
  }
  links[3].onmouseover = function() {
    moveElement("preview",moveDis * 3 ,0,10);
  }
   links[0].onmouseover = function() {
    moveElement("preview",0 ,0,10);
  }
}
//addLoadEvent(prepareSlideshow);
window.onload = function() {
	prepareSlideshow();
}