import { getRandomNumber } from './util.js';

// Массивы сообщений и имён
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра...',
  'Моя бабушка случайно чихнула с фотоаппаратом...',
  'Я поскользнулся на банановой кожуре...',
  'Лица у людей на фотке перекошены...',
];

const NAMES = ['Артём', 'Катя', 'Олег', 'Соня', 'Иван', 'Маша'];

// Количество генерируемых фотографий
const PHOTOS_COUNT = 25;

// Функция для получения случайного сообщения
function getRandomCommentMessage() {
  return MESSAGES[getRandomNumber(0, MESSAGES.length - 1)];
}

// Функция для получения случайного имени
function getRandomName() {
  return NAMES[getRandomNumber(0, NAMES.length - 1)];
}

// Функция для создания одного комментария
function createComment() {
  return {
    id: getRandomNumber(1, 1000),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomCommentMessage(),
    name: getRandomName()
  };
}

// Функция для создания одной фотографии
function createPhoto(index) {
  const photo = {
    id: index,
    url: `photos/${index}.jpg`,
    description: `Фото номер ${index}`,
    likes: getRandomNumber(15, 200),
    comments: []
  };

  const commentCount = getRandomNumber(1, 3);
  for (let i = 0; i < commentCount; i++) {
    photo.comments.push(createComment());
  }

  return photo;
}

// Главная функция — создаёт массив фотографий
function getPictures() {
  const photos = [];

  for (let i = 1; i <= PHOTOS_COUNT; i++) {
    photos.push(createPhoto(i));
  }

  return photos;
}

export { getPictures };
