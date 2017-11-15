import * as types from './actionTypes';
// eslint-disable-next-line
export function createPrestaging(prestaging) {
  return { type: types.CREATE_PRESTAGING, prestaging };
}
