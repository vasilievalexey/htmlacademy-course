// Функция, возвращающая случайное целое число из диапазона включительно
function getRandomNumber(from, to) {
  if (from === to) {
    return from;
  }
  const min = Math.min(from, to);
  const max = Math.max(from, to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция, возвращающая случайное число с плавающей точкой
function getRandomFloat(from, to, decimals) {
  if (from === to) {
    return Number(from.toFixed(decimals));
  }
  const min = Math.min(from, to);
  const max = Math.max(from, to);
  const result = Math.random() * (max - min) + min;
  return Number(result.toFixed(decimals));
}

// Функция проверки длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

export { getRandomNumber, getRandomFloat, checkStringLength, debounce, throttle };