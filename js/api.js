// Модуль для взаимодействия с сервером

const BASE_URL = 'https://30.javascript.htmlacademy.pro/kekstagram';

/**
 * Загружает данные с сервера
 * @returns {Promise} - промис с данными
 */
function fetchPictures() {
  // TODO: Реализовать загрузку данных
  // return fetch(`${BASE_URL}/data`)
  //   .then(response => response.json());
}

/**
 * Отправляет новую фотографию на сервер
 * @param {FormData} formData - данные формы
 * @returns {Promise} - промис с результатом
 */
function sendPicture(formData) {
  // TODO: Реализовать отправку данных
  // return fetch(BASE_URL, {
  //   method: 'POST',
  //   body: formData,
  // });
}

export { fetchPictures, sendPicture };
