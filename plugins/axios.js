import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com/repos/',
  headers: {
    Accept: 'application/vnd.github.VERSION.html'
  }
});

export const particleAPI = axios.create({
  baseURL: 'https://api.particle.io/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
