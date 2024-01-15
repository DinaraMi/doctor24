export const likeCard = (id) => ({
  type: 'LIKE_CARD',
  payload: id,
});

export const dislikeCard = (id) => ({
  type: 'DISLIKE_CARD',
  payload: id,
});

export const deleteCard = (id) => ({
  type: 'DELETE_CARD',
  payload: id,
});

export const toggleFilter = () => ({
  type: 'TOGGLE_FILTER',
});