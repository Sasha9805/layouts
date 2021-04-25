"use strict";

import burger from './modules/burger';
import slider from './modules/slider';
import sliderClient from './modules/slider-client';
import scrollUp from './modules/scroll-up';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

  burger();

  slider('.projects__slide', '#projects-arrow-left', '#projects-arrow-right');

  sliderClient('.clients__slider-wrapper', '.clients__slide', '#clients-arrow-left', '#clients-arrow-right');

  scrollUp('.arrow-up', 1000);

  modal('.modal-link', '.modal', '.modal-close');

});