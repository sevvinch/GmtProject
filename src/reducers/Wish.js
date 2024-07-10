const initialState = {
  wishlist: [],
  compare: [],
};

const wishReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WISHLIST':
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case 'ADD_COMPARE':
      return {
        ...state,
        compare: [...state.compare, action.payload],
      };
    default:
      return state;
  }
};

export const setWishlist = (item) => ({
  type: 'SET_WISHLIST',
  payload: item,
});

export const addCompare = (item) => ({
  type: 'ADD_COMPARE',
  payload: item,
});

export default wishReducer;
