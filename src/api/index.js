import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  }
});


export const api = {
  get: ({ params, path, cancelToken }) => instance.get(path, { params } ),
  post: ({ params, path }) => instance.post(path, params),
};
