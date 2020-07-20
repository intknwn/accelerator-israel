'use strict';

(function () {
  var swiper = new Swiper('.israel-life__slider', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
})();

(function () {
  $(document).ready(function () {
    $('.page-header__callback-btn').magnificPopup({
      items: [{
        src: '.callback-modal',
        type: 'inline',
        midClick: true,
        closeBtnInside: true,
        preloader: false,
        focus: 'input'
      }],
    });

    $('.callback-modal__form, .contact-me__form, .details__form').on('submit', function (evt) {
      evt.preventDefault();

      var formData = new FormData(evt.target);

      if (formData.has('name')) {
        localStorage.setItem('name', formData.get('name'));
      }

      if (formData.has('phone')) {
        localStorage.setItem('phone', formData.get('phone'));
      }


      $.magnificPopup.open({
        items: [{
          src: '.success-modal',
          type: 'inline',
          midClick: true,
          closeBtnInside: true,
          preloader: false,
        }]
      });
    });

    $('.success-modal__close-btn').on('click', function () {
      $.magnificPopup.close();
    });
  });
})();

(function () {
  var headings = document.querySelectorAll('.faq__question');

  headings.forEach(function (heading) {
    heading.classList.add('faq__question--hidden');
    heading.addEventListener('click', function (evt) {
      var target = evt.target;
      if (target.classList.contains('faq__question--shown')) {
        target.classList.remove('faq__question--shown');
        target.classList.add('faq__question--hidden');
      } else {
        target.classList.remove('faq__question--hidden');
        target.classList.add('faq__question--shown');
      }
    });
  });

})();

(function () {
  var nextButtons = document.querySelectorAll('.reviews__button-next');
  var prevButtons = document.querySelectorAll('.reviews__button-prev');
  var slideCounters = document.querySelectorAll('.reviews__slide-counter');

  var swiper = new Swiper('.reviews__swiper-container');

  var totalSlides = swiper.slides.length;

  slideCounters.forEach(function (counter, index) {
    counter.textContent = (index + 1) + ' / ' + totalSlides;
  });

  nextButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      swiper.slideNext();
    });
  });

  prevButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      swiper.slidePrev();
    });
  });

})();

(function () {
  var telInputs = document.querySelectorAll('input[type="tel"]');

  var maskOptions = {
    mask: '+7 (000) 000-00-00',
    lazy: false,
  };

  telInputs.forEach(function (input) {
    var mask = new IMask(input, maskOptions);
  });
})();
