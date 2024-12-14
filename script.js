let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 4000);

function setupCarousel(leftBtnClass, rightBtnClass, carouselId) {
    const leftButton = document.querySelector(leftBtnClass);
    const rightButton = document.querySelector(rightBtnClass);
    const carouselContainer = document.querySelector(carouselId);
  
    leftButton.addEventListener("click", () => {
      carouselContainer.scrollBy({ left: -200, behavior: "smooth" });
    });
  
    rightButton.addEventListener("click", () => {
      carouselContainer.scrollBy({ left: 200, behavior: "smooth" });
    });
  }

  setupCarousel(".movies-left-btn", ".movies-right-btn", "#moviesCarousel");
  setupCarousel(".tv-left-btn", ".tv-right-btn", "#tvCarousel");

  const searchInput = document.getElementById('searchInput');
const carouselItems = document.querySelectorAll('.carousel-items .item');

searchInput.addEventListener('input', function() {
  const query = searchInput.value.toLowerCase();

  carouselItems.forEach(item => {
    const title = item.querySelector('img').alt.toLowerCase(); 

    if (title.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

