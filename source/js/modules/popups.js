import $ from 'jquery';
import 'magnific-popup';
import 'formdata-polyfill';

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

      const nameInput = form.querySelector(`input[name='name']`);
      const phoneInput = form.querySelector(`input[type='tel']`);
      const nameErrorTip = form.querySelector(`.error-msg-tip--name`);
      const phoneErrorTip = form.querySelector(`.error-msg-tip--phone`);

      const formData = new FormData(form);
      const nameValue = formData.get(`name`);
      const phoneValue = formData.get(`phone`);

      const validateName = () => {
        const errorMsg = `Пожалуйста, укажите Ваше имя`;

        if (nameValue.length === 0) {
          nameInput.setCustomValidity(errorMsg);
          nameErrorTip.classList.remove(`visually-hidden`);
          nameErrorTip.textContent = errorMsg;
        } else {
          nameErrorTip.classList.add(`visually-hidden`);
          nameErrorTip.textContent = ``;
          nameInput.setCustomValidity(``);
        }
      };

      const validatePhone = () => {
        const errorMsg = `Пожалуйста, укажите Ваш номер телефона согласно шаблону`;

        if (phoneValue.includes(`_`)) {
          phoneInput.setCustomValidity(errorMsg);
          phoneErrorTip.classList.remove(`visually-hidden`);
          phoneErrorTip.textContent = errorMsg;
        } else {
          phoneErrorTip.classList.add(`visually-hidden`);
          phoneErrorTip.textContent = ``;
          phoneInput.setCustomValidity(``);
        }
      };

      if (nameInput) {
        validateName();
      }

      validatePhone();

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
        if (nameInput) {
          validateName();
        }

        validatePhone();
      }
    });

    $(`.success-modal__close-btn`).on(`click`, () => {
      $.magnificPopup.close();
    });
  });
};

