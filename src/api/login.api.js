import axios from 'axios';

const { API_URL } = process.env;

export const login = (email, password, token) => {
  return axios.post(`${API_URL}/user/login`, { email, password, token });
};
