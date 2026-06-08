const effectsList = document.querySelector('.effects__list');
const previewImage = document.querySelector('.img-upload__preview img');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelField = document.querySelector('.img-upload__effect-level');

const EFFECTS = {
  none:   { filter: 'none',       range: { min: 0, max: 1 } },
  chrome: { filter: 'grayscale',  range: { min: 0, max: 1 } },
  sepia:  { filter: 'sepia',      range: { min: 0, max: 1 } },
  marvin: { filter: 'invert',     range: { min: 0, max: 100 }, unit: '%' },
  phobos: { filter: 'blur',       range: { min: 0, max: 3 },   unit: 'px' },
  heat:   { filter: 'brightness', range: { min: 1, max: 3 } },
};

let currentEffect = 'none';

const applyEffect = (value) => {
  const effect = EFFECTS[currentEffect];
  if (currentEffect === 'none') {
    previewImage.style.filter = '';
    return;
  }
  const unit = effect.unit || '';
  previewImage.style.filter = `${effect.filter}(${value}${unit})`;
  effectLevelValue.value = value;
};

const initEffects = () => {
  noUiSlider.create(effectLevelSlider, {
    range: { min: 0, max: 1 },
    start: 1,
    connect: 'lower',
  });

  effectLevelSlider.noUiSlider.on('update', (values) => {
    applyEffect(parseFloat(values[0]));
  });

  effectsList.addEventListener('change', (evt) => {
    currentEffect = evt.target.value;
    const effect = EFFECTS[currentEffect];

    if (currentEffect === 'none') {
      effectLevelField.classList.add('hidden');
      previewImage.style.filter = '';
      return;
    }

    effectLevelField.classList.remove('hidden');
    effectLevelSlider.noUiSlider.updateOptions({
      range: effect.range,
      start: effect.range.max,
    });
  });
};

const resetEffects = () => {
  currentEffect = 'none';
  previewImage.style.filter = '';
  previewImage.className = '';
  effectLevelField.classList.add('hidden');
};

export { initEffects, resetEffects };