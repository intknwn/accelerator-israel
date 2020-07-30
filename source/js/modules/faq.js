export default () => {
  const listItems = document.querySelectorAll(`.faq__list-item`);

  listItems.forEach((item) => {
    item.classList.add(`faq__list-item--hidden`);
    item.addEventListener(`click`, () => {
      if (item.classList.contains(`faq__list-item--shown`)) {
        item.classList.remove(`faq__list-item--shown`);
        item.classList.add(`faq__list-item--hidden`);
      } else {
        item.classList.remove(`faq__list-item--hidden`);
        item.classList.add(`faq__list-item--shown`);
      }
    });
  });
};
