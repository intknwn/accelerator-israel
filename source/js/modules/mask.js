import IMask from 'imask';

export default () => {
  const telInputs = document.querySelectorAll(`input[type="tel"]`);

  const maskOptions = {
    mask: `+7 (000) 000-00-00`,
    lazy: true,
  };

  telInputs.forEach((input) => {
    const mask = new IMask(input, maskOptions);

    input.addEventListener(`focus`, () => {
      mask.updateOptions({lazy: false});
    });

    input.addEventListener(`blur`, () => {
      mask.updateOptions({lazy: true});

      const regExp = /\+7 \((\d{3})\) (\d{3})\-(\d{2})\-(\d{2})/;

      if (!mask.value.match(regExp)) {
        mask.value = ``;
      }
    });
  });
};

