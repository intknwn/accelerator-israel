import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

export default () => {
  const nextButtons = document.querySelectorAll(`.reviews__button-next`);
  const prevButtons = document.querySelectorAll(`.reviews__button-prev`);
  const slideCounters = document.querySelectorAll(`.reviews__slide-counter`);

  const swiper = new Swiper(`.reviews__swiper-container`);

  const totalSlides = swiper.slides.length;

  slideCounters.forEach((counter, index) => {
    counter.textContent = `${(index + 1)} / ${totalSlides}`;
  });

  nextButtons.forEach((button) => {
    button.addEventListener(`click`, () => {
      swiper.slideNext();
    });
  });

  prevButtons.forEach((button) => {
    button.addEventListener(`click`, () => {
      swiper.slidePrev();
    });
  });
};
