import axios from 'axios';

const instance = axios.create({
  baseURL: '//localhost:7000/',
});

export default instance;
