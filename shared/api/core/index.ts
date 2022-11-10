import axios from "axios";

const api = axios.create({
  baseURL: "http://13.124.107.239",
});

api.interceptors.request.use(
  (data: any) => {
    data.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYmNkMTJAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjY3Mzk1ODkyLCJleHAiOjI2Njc0MDY2OTJ9.J7Vv2WeXjSiwOHZQdWX3QdgpuzX1yl8GethTmH8US2g`;
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
