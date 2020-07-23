import 'core-js';
import picturefill from 'picturefill';
import createLifeSlider from './modules/life-slider';
import createPopups from './modules/popups';
import createFaqAccordion from './modules/faq';
import createReviewsSlider from './modules/reviews-slider';
import createMasks from './modules/mask.js';
import svg4everybody from 'svg4everybody';

picturefill();
createLifeSlider();
createPopups();
createFaqAccordion();
createReviewsSlider();
createMasks();
svg4everybody();
