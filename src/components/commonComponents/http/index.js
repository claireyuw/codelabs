import axios from 'axios';
import { decode } from 'js-base64';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/repos',
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const getGithubStatis = async () => {
  try {
    const res = await axiosInstance.get(`/milvus-io/milvus`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default axiosInstance;
