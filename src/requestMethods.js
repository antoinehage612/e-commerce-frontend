import axios from "axios";

const BASE_URL = "https://nutrihub.onrender.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWQzNGEzZjhjZjE1OGU3OTc2ZmUxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDg4NTY5NCwiZXhwIjoxNzA1MTQ0ODk0fQ.ZzaMKdHLxCdBBK5SyXdrzxzQ7yCFkH4ncoKfCPAWdGg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
