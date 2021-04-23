"use strict";

import burger from './modules/burger';
import slider from './modules/slider';
import sliderClient from './modules/slider-client';

window.addEventListener('DOMContentLoaded', () => {

  burger();

  slider('.projects__slide', '#projects-arrow-left', '#projects-arrow-right');

  sliderClient('.clients__slider-wrapper', '.clients__slide', '#clients-arrow-left', '#clients-arrow-right');

});