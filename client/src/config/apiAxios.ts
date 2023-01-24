import axios from 'axios';
import { URL } from './endpoints';

const axiosApi = axios.create({
  baseURL: URL.BASE_URL,
});

const defaultConfig = {
  headers: {
    'Content-type': 'application/json',
  },
}

axiosApi.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      console.log('Posted Successfully');
    }
    return res;
  },
  (err) => {
    console.log('api response error', err);
    return Promise.reject(err);
  }
);

export async function get(url: any) {
  return await axiosApi
    .get(url, {
      ...defaultConfig,
    })
    .then((response) => response.data);
}

export async function post(url: any, data: any) {
  return await axiosApi
    .post(url, data, { ...defaultConfig })
    .then((response) => response.data);
}