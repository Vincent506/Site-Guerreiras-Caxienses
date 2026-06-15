import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:5173"
});

api.interceptors.request.use(req => {

  console.log("REQUEST");
  console.log(req.url);
  console.log(req.data);

  return req;
});

api.interceptors.response.use(res => {

  console.log("RESPONSE");
  console.log(res.data);

  return res;
});

export default api;