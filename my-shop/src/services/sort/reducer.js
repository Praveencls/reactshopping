import { UPDATE_SORT } from './actionTypes';

const initialState = {
  type: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SORT:
      return {
        ...state,
        type: action.payload
      };
    default:
      return state;
  }
}
export default reducer;