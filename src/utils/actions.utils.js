import { REQUEST, SUCCESS, FAILURE } from '../constants';

export function action(type, payload = {}, error = null) {
  return { type, payload, error };
}

export function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}
