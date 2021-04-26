function scroll() {

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {

    link.addEventListener('click', (event) => {

      event.preventDefault();

      const target = document.querySelector(link.getAttribute('href'));
      const upBorder = target.getBoundingClientRect().top + window.pageYOffset;

      stepScroll();

      function stepScroll() {
        window.scrollBy(0, 50);

        if (document.documentElement.clientHeight + window.pageYOffset !== document.documentElement.scrollHeight) {
          if (window.pageYOffset < upBorder) {
            requestAnimationFrame(stepScroll);
          } else {
            window.scrollTo(0, upBorder);
          }
        }
        
      }

    });

  });

}

export default scroll;