
window.onload = function () {
	var togglebutton = document.querySelector(".mobile-nav-toggle");
	var topnav_links = document.querySelector(".topnav-links");

	togglebutton.addEventListener("click",() => {
		topnav_links.classList.toggle("navshow");
	});
	
	
	javascript:var h2s = document.getElementsByTagName("h2");
	h2s[0].classList.add("show");

	if(navigator.userAgent.toLowerCase().indexOf('firefox') < 0){
		// Not Firefox
		var herosector = document.querySelector("#Hero");
		herosector.style.animationName = "carouselhero";
	}
};








