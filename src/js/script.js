"use strict";

import burger from './modules/burger';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {

  burger();

  slider('.projects__slide', '.arrow-left', '.arrow-right');

});