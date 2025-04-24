import axios from "axios";

const URL_DOMAIN = "https://aimathprojectv2.azurewebsites.net/api";


const https = axios.create({
  baseURL: URL_DOMAIN,
  headers: {
    'accept': 'application/json',
    // 'Authorization': `Bearer ${localStorage.getItem('access-token')}`
  },
});

https.interceptors.request.use(
  function (config) {
    return {
      ...config,
    };
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  }
);

export { https, URL_DOMAIN };
