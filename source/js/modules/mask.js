import IMask from 'imask';

export default () => {
  const telInputs = document.querySelectorAll(`input[type="tel"]`);

  const maskOptions = {
    mask: `+7 (000) 000-00-00`,
    lazy: false,
  };

  telInputs.forEach((input) => new IMask(input, maskOptions));
};
