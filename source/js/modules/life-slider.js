import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

export default () => {
  return new Swiper(`.israel-life__slider`, {
    pagination: {
      el: `.israel-life__pagination`,
    },
  });
};

