import { FETCH_PRODUCTS } from './actionTypes';

const initialState = {
  products: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
export default reducer;