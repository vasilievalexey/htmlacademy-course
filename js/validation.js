const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;
const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;

function validateHashtags(value) {
  if (!value) return true;

  const tags = value.trim().split(/\s+/);

  if (tags.length > MAX_HASHTAG_COUNT) return false;

  const uniqueTags = new Set(tags.map((tag) => tag.toLowerCase()));
  if (uniqueTags.size !== tags.length) return false;

  return tags.every((tag) => HASHTAG_REGEX.test(tag));
}

function validateComment(value) {
  return value.length <= MAX_COMMENT_LENGTH;
}

export { validateHashtags, validateComment };