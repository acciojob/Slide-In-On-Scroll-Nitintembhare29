// Your JS code here.
 const slideInImages = document.querySelectorAll('.slide-in');

  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function checkSlide() {
    slideInImages.forEach(slideInImage => {
      const slideInAt = (window.scrollY + window.innerHeight) - slideInImage.height / 2;
      const imageBottom = slideInImage.offsetTop + slideInImage.height;
      const isHalfShown = slideInAt > slideInImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        slideInImage.classList.add('active');
      } else {
        slideInImage.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));