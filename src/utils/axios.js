import axios from "axios";
import errorHandle from "./errorHandle";
const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    errorHandle(err);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      return Promise.resolve(res.data);
    } else {
      Promise.reject(res);
    }
  },
  (err) => {
    debugger;
    errorHandle(err);
  }
);

export default instance;
