window.addEventListener('DOMContentLoaded', () => {

  const slides = document.querySelectorAll('.slide');
  
  for (let slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    });
  }
  
  function clearActiveClasses() { 
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }
});