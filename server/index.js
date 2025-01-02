import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;
const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (config) => {
    return config.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const instance = {
  // 创建一个方法来发送请求
  request: async (method, url, options = {}) => {
    // 动态设置 baseURL
    try {
      // 发送请求
      return await axiosInstance({
        method: method,
        url: url,
        baseURL: baseURL,
        headers: {
          //   Authorization: token,
        },
        withCredentials: true,
        ...options,
      });
    } catch (error) {
      console.error(
        `Error with ${method.toUpperCase()} request to ${url}:`,
        error
      );
      throw error;
    }
  },
  get: (url, options) => instance.request("get", url, options),
  post: (url, data, options) =>
    instance.request("post", url + "?timestamp=" + Date.now(), {
      data,
      ...options,
    }),
  put: (url, data, options) =>
    instance.request("put", url, { data, ...options }),
  delete: (url, options) => instance.request("delete", url, options),
};
export default instance;
