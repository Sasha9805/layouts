function slider(slidesSelector, arrowLeftSelector, arrowRightSelector) {

  const sliderItems = document.querySelectorAll(slidesSelector),
        sliderItemsCount = sliderItems.length,
        btnLeft = document.querySelector(arrowLeftSelector),
        btnRight = document.querySelector(arrowRightSelector);

  let slideIndex = 0;

  function hideAll() {
    sliderItems.forEach(item => {
      item.style.display = 'none';
    });
  }

  function showSlide(ind = 0) {
    sliderItems[ind].style.display = '';
  }

  hideAll();
  showSlide();

  btnLeft.addEventListener('click', () => {
    hideAll();
    slideIndex = slideIndex - 1 < 0 ? sliderItemsCount - 1 : slideIndex - 1;
    console.log(slideIndex);
    showSlide(slideIndex);
  });

  btnRight.addEventListener('click', () => {
    hideAll();
    slideIndex = slideIndex + 1 > sliderItemsCount - 1 ? 0 : slideIndex + 1;
    console.log(slideIndex);
    showSlide(slideIndex);
  });
}

export default slider;