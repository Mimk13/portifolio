document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
  
    let counter = 1;
  
    setInterval(() => {
      container.style.transition = 'transform 0.5s ease-in-out';
      container.style.transform = 'translateX(' + (-counter * 100) + 'vw)';
  
      counter++;
  
      if (counter === slides.length) {
        setTimeout(() => {
          container.style.transition = 'none';
          container.style.transform = 'translateX(0)';
          counter = 1;
        }, 500);
      }
    }, 3000);
  });
  