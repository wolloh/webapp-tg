import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:9992/'
  });
