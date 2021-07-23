import { DEFAULT_API_URL, FALLBACK_ERROR_MESSAGE } from './constants';

export const getPoints = (start, end) => {
  const url = new URL(DEFAULT_API_URL, 'http://localhost:3000');
  const formatedDateTimeParams = [
    ['start', start.format()],
    ['end', end.format()],
  ];

  url.search = new URLSearchParams(formatedDateTimeParams).toString();

  return fetch(url)
    .then((res) =>
      res.json().then((data) => ({
        ok: res.ok,
        status: res.status,
        data,
      }))
    )
    .then((res) => {
      const { ok, data } = res;

      if (ok) {
        return data;
      }

      // when res failed and no errors info - fallback to front-end default error message
      if (!data && (!data.errors || data.errors.length === 0)) {
        return Promise.reject({ message: FALLBACK_ERROR_MESSAGE });
      }

      // default validation errors from swagger. Message from first error should be enough
      return Promise.reject({ message: data.errors[0].message });
    });
};
