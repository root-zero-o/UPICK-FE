import axios from "axios";

const api = axios.create({
  baseURL: "http://13.124.107.239",
});

api.interceptors.request.use(
  (data: any) => {
    data.headers.authorization = localStorage.getItem("authorization");
    console.log(data);
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
