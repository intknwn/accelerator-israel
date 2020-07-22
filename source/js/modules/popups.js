import $ from 'jquery';
import 'magnific-popup';

export default () => {
  $(document).ready(() => {
    $(`.page-header__callback-btn`).magnificPopup({
      items: [{
        src: `.callback-modal`,
        type: `inline`,
        midClick: true,
        closeBtnInside: true,
        preloader: false,
        focus: `input`
      }],
    });

    $(`.callback-modal__form, .contact-me__form, .details__form`).on(`submit`, (evt) => {
      evt.preventDefault();

      const form = evt.target;
      form.noValidate = true;

      const phoneInput = form.querySelector(`input[name="phone"]`);

      const formData = new FormData(form);
      const nameValue = formData.get(`name`);
      const phoneValue = formData.get(`phone`);

      if (phoneValue.includes(`_`)) {
        phoneInput.setCustomValidity(`Пожалуйста, укажите Ваш номер телефона согласно шаблону`);
      } else {
        phoneInput.setCustomValidity(``);
      }

      if (form.checkValidity()) {
        $.magnificPopup.open({
          items: [{
            src: `.success-modal`,
            type: `inline`,
            midClick: true,
            closeBtnInside: true,
            preloader: false,
          }]
        });

        if (nameValue) {
          localStorage.setItem(`name`, nameValue);
        }

        localStorage.setItem(`phone`, phoneValue);
      } else {
        form.reportValidity();
      }
    });

    $(`.success-modal__close-btn`).on(`click`, () => {
      $.magnificPopup.close();
    });
  });
};

