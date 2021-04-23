function sliderClient(sliderSelector, sliderItemsSelector, arrowLeftSelector, arrowRightSelector) {

  let slider = document.querySelector(sliderSelector),
      sliderItems = document.querySelectorAll(sliderItemsSelector),
      btnLeft = document.querySelector(arrowLeftSelector),
      btnRight = document.querySelector(arrowRightSelector);

  btnRight.addEventListener('click', () => {

    slider.append(sliderItems[0]);
    const sliderCopy = slider.cloneNode(true);
    slider.replaceWith(sliderCopy);

    slider = document.querySelector(sliderSelector);
    sliderItems = document.querySelectorAll(sliderItemsSelector);

  });

  btnLeft.addEventListener('click', () => {

    slider.prepend(sliderItems[sliderItems.length - 1]);
    const sliderCopy = slider.cloneNode(true);
    slider.replaceWith(sliderCopy);

    slider = document.querySelector(sliderSelector);
    sliderItems = document.querySelectorAll(sliderItemsSelector);

  });

}

export default sliderClient;