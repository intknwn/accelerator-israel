export default () => {
  const headings = document.querySelectorAll(`.faq__question`);

  headings.forEach((heading) => {
    heading.classList.add(`faq__question--hidden`);
    heading.addEventListener(`click`, (evt) => {
      const target = evt.target;
      if (target.classList.contains(`faq__question--shown`)) {
        target.classList.remove(`faq__question--shown`);
        target.classList.add(`faq__question--hidden`);
      } else {
        target.classList.remove(`faq__question--hidden`);
        target.classList.add(`faq__question--shown`);
      }
    });
  });
};
