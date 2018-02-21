import * as types from './actionTypes';

export function createName(name) {
  return {
    type: types.CREATE_NAME,
    name
  };
}
