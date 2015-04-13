// JavaScript Document

window.onload = function() {
	
	var nav = document.getElementsByTagName('nav');
	for (var i = 0; i < nav.length; i++) {
		var sticky = nav[i].getAttribute("cr-sticky");
		var res = nav[i].getAttribute("cr-res");
		if (sticky == "true") {
		     sticktyNav();
		}
		if (res == "true") {
			resNav();
			
		}
	}

   
	
	

	
}


function sticktyNav(){
	alert("Sticky Nav is enbabled.");
	var nav = document.getElementsByTagName("nav")[0];
	var banner = document.getElementsByTagName("header")[0];
	var navbutton = document.getElementById("demo");
	var windowTop = document.body.scrollHeight;

	
	window.onscroll = function(){
		
		if (windowTop>1600){
			document.body.style.backgroundColor = "#000";
		}

	}
}

function resNav(){
	alert("Responsive Nav is enbabled.");
	var navul = document.querySelector('nav ul');
	var navbutton = document.getElementById("demo");
	navbutton.onclick = function(){
	navul.classList.toggle("showing");
	}
	
}// JavaScript Document