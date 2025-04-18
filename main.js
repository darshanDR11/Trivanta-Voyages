
/****Navigation Bar****/
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

/*****Slider*****/ 
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let slideInterval = setInterval(showNextSlide, 3000);

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIndex);
    dots[index].classList.toggle('active', index === currentIndex);
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
}

nextBtn.addEventListener('click', () => {
  showNextSlide();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  showPrevSlide();
  resetInterval();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlides();
    resetInterval();
  });
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(showNextSlide, 3000);
}
