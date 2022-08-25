import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER,
});

api.interceptors.request.use(
  (data: any) => {
    data.headers.authorization = localStorage.getItem("Authorization");
    return data;
  },
  () => {}
);

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
