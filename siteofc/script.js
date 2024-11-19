function toggleMenu(){
    var l = document.getElementById("links")
    if (l.style.display == "flex") {
        l.style.display = "none";
    }else {
        l.style.display = "flex";
    }
    document.body.classList.toggle("menu-open");
    
}



let currentSlide = 0;

function changeSlide(direction) {
    const carouselImages = document.querySelector('.conteiner');
    const totalSlides = document.querySelectorAll('.conteiner img').length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    carouselImages.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

 
  const hiddenElements = document.querySelectorAll('.hidden');

  function handleScroll() {
    hiddenElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }


  window.addEventListener('scroll', handleScroll);

  
  handleScroll();
