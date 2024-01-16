const likedCardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'LIKE_CARD':
      return [...state, { id: action.payload, isLiked: true }];
    case 'DISLIKE_CARD':
      return state.map(card =>
        card.id === action.payload ? { ...card, isLiked: false } : card
      );
    case 'DELETE_CARD':
      return state.filter(card => card.id !== action.payload);
    default:
      return state;
  }
};

const showLikedOnlyReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      return !state;
    default:
      return state;
  }
};

const fetchCardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CARDS':
      return action.payload;
    default:
      return state;
  }
};

export { likedCardsReducer, showLikedOnlyReducer, fetchCardsReducer };
