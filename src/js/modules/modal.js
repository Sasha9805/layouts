function modal(btnSelector, modalSelector, closeSelector) {

  const btns = document.querySelectorAll(btnSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        scrollWidth = calcScroll();

  btns.forEach(btn => {

    btn.addEventListener('click', () => {

      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollWidth + 'px';

    });
    
  });

  modal.addEventListener('click', (event) => {

    if (event.target.closest('.modal-dialog')) {
      return;
    }

    modal.style.display = '';
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';

  });

  close.addEventListener('click', () => {

    modal.style.display = '';
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';

  });

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    const widthBefore = div.clientWidth;
    div.style.overflow = 'scroll';
    const widthAfter = div.clientWidth;
    div.remove();
    div = null;
    return widthBefore - widthAfter;
  }

}

export default modal;