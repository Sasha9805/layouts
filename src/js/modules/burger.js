function burger() {
  const headerList = document.querySelector('.nav__list'),
        burgerBtn = document.querySelector('.nav__burger-logo');

  burgerBtn.addEventListener('click', () => {
    headerList.classList.toggle('nav__list_burger');
  });

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 992) {
      headerList.classList.remove('nav__list_burger');
    }
  });
}

export default burger;