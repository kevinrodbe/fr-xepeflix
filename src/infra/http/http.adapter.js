import axios from 'axios';

export const fetcher = (mainConf) => {
  const token = 'get token from auth service';
  const http = axios.create({
    timeout: 10000,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
    ...mainConf,
  });

  return {
    get: (url, config) => http.get(url, config).then((res) => res.data),
    post: (url, body, config) => http.post(url, body, config).then((res) => res.data),
  };
};
