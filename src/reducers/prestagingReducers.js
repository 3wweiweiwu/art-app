import * as types from '../actions/actionTypes';

export default function prestagingReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_PRESTAGING:
      return [...state, Object.assign({}, action.prestaging)];
    default:
      return state;
  }
}
