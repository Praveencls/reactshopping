import { UPDATE_FILTER } from './actionTypes';

const initialState = {
  item: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
export default reducer;