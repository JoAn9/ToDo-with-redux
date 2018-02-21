import * as types from '../actions/actionTypes';

export default function nameReducer(state = 'you', action) {
  switch (action.type) {
    case types.CREATE_NAME:
      return state.name;

    default:
      return state;
  }
}
