import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reactburger-6a104.firebaseio.com/'
})

export default instance;
