import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com/repos/',
  headers: {
    Accept: 'application/vnd.github.VERSION.html'
  }
});
