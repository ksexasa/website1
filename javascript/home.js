var slideIndex = 1;
var slideshowInterval;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  if (slideIndex != 1){
	dots[slideIndex-1].className += " active";
  }
}

function slideshow() {
  let i;
  let slides = document.getElementsByClassName("project");
  let dots = document.getElementsByClassName("demo");
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  if (slideIndex !== 1) {
    dots[slideIndex - 1].className += " active";
  }
  slideIndex++; 
}

function handleSwipe(startX, endX) {
  const threshold = 50; // Adjust this value to set the swipe threshold

  if (startX - endX > threshold) {
    plusSlides(1); // Swipe left, move to the next slide
  } else if (endX - startX > threshold) {
    plusSlides(-1); // Swipe right, move to the previous slide
  }
}



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
	
	
	showSlides(slideIndex);
	slideshowInterval = setInterval(slideshow, 2000);

	const rowElement = document.querySelector('.row');
	const contElement = document.querySelector('.container');

	let touchStartX = 0;

	rowElement.addEventListener('touchstart', function (e) {
	  touchStartX = e.touches[0].clientX;
	});
	rowElement.addEventListener('touchend', function (e) {
	  const touchEndX = e.changedTouches[0].clientX;
	  handleSwipe(touchStartX, touchEndX);
	});
	contElement.addEventListener('touchstart', function (e) {
	  touchStartX = e.touches[0].clientX;
	});
	contElement.addEventListener('touchend', function (e) {
	  const touchEndX = e.changedTouches[0].clientX;
	  handleSwipe(touchStartX, touchEndX);
	});
	
};


function plusSlides(n) {
  clearInterval(slideshowInterval);
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  clearInterval(slideshowInterval);
  showSlides(slideIndex = n);
}

	
	
	
	




