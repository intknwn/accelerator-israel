import $ from 'jquery';
import "animatescroll.js";

export default () => {
  const scrollButton = document.querySelector(`.page-header__scroll-button`);

  scrollButton.addEventListener(`click`, () => {
    $(`.about-program`).animatescroll();
  });
};
