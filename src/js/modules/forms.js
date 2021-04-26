function forms() {

  const allForms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

  const stateOfResponse = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    error: 'Произошла ошибка...'
  };

  allForms.forEach(form => {

    form.addEventListener('submit', (event) => {

      event.preventDefault();

      const btn = form.querySelector('button');

      // btn.disabled = true;
      // btn.classList.add('disabled');

      const div = document.createElement('div');
      div.classList.add('message');
      div.textContent = stateOfResponse.loading;
      btn.remove();
      form.append(div);

      const formData = new FormData(form);

      fetch('server.php', {
        method: 'POST',
        body: formData
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('Could not fetch');
          } else {
            return res.text();
          }
        })
        .then(res => {
          console.log(res);
          div.textContent = stateOfResponse.success;
          div.classList.add('success');
        })
        .catch(() => {
          div.textContent = stateOfResponse.error;
          div.classList.add('error');
        })
        .finally(() => {
          setTimeout(() => {
            form.reset();
            div.remove();
            form.append(btn);
            // btn.disabled = false;
            // btn.classList.remove('disabled');
          }, 3000);
        });

    });

  });

}

export default forms;