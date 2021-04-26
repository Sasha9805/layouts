function scrollUp(arrowSelector, heightToVisible) {

  const arrow = document.querySelector(arrowSelector);

  window.addEventListener('scroll', () => {

    if (window.pageYOffset >= heightToVisible) {
      arrow.style.display = 'flex';
    } else {
      arrow.style.display = '';
    }

  });
  
  // let timer;
  // arrow.addEventListener('click', () => {
  //   timer = setInterval(() => step(50), 20);
  //   timer = null;
  // });

  // function step(count) {
  //   window.scrollBy(0, -count);
  //   if (window.pageYOffset === 0) {
  //     clearInterval(timer);
  //   }
  // }

  arrow.addEventListener('click', () => {
    console.log(1);
    step();
  });

  function step() {
    window.scrollBy(0, -50);
    if (window.pageYOffset > 0) {
      requestAnimationFrame(step);
    }
  }

}

export default scrollUp;