import axios from 'axios';

export default axios.create({
  baseURL: "http//localhost:3000"
})

await api.post("/app/backend/src/models/User.js",{
  nome,
  email,
  senha
});

await api.post("/app/backend/src/controllers/authController.js",{
  email,
  senha
})


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

export default api