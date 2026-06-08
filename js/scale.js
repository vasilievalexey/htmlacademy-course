const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;

const scaleInput = document.querySelector('.scale__control--value');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const previewImage = document.querySelector('.img-upload__preview img');

const setScale = (value) => {
  scaleInput.value = `${value}%`;
  previewImage.style.transform = `scale(${value / 100})`;
};

const initScale = () => {
  setScale(SCALE_DEFAULT);

  scaleSmaller.addEventListener('click', () => {
    const current = parseInt(scaleInput.value, 10);
    setScale(Math.max(current - SCALE_STEP, SCALE_MIN));
  });

  scaleBigger.addEventListener('click', () => {
    const current = parseInt(scaleInput.value, 10);
    setScale(Math.min(current + SCALE_STEP, SCALE_MAX));
  });
};

const resetScale = () => setScale(SCALE_DEFAULT);

export { initScale, resetScale };