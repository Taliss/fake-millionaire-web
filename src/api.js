import { fetch } from './lib/fetch';

export const getPoints = () => {
  return fetch().then((res) => Promise.reject('guz'));
};
