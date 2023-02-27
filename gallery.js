const slideShows = document.querySelectorAll('.one');

let slideShow, slideIndex; //will be set to the current slideShow as appropriate

for (let i=0; i < slideShows.length; i++) {
  slideShow = slideShows[i];
  slideShow.setAttribute('data-slideIndex', 1); //instead of slideIndex = 1 we remember the index for each slideshow in a data attribute
  slideIndex = 1;
  showSlides(1);
}

function plusSlides(n) {
  slideShow = event.target.parentElement;
  slideIndex = Number(slideShow.getAttribute('data-slideIndex'));
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  slideShow = event.target.parentElement.parentElement.parentElement;
  slideIndex = Number(slideShow.getAttribute('data-slideIndex'));
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = slideShow.getElementsByClassName("slide1");
  var dots = slideShow.getElementsByClassName("demo");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  slideShow.setAttribute('data-slideIndex', slideIndex); // remember the slideIndex for this slideShow
}
