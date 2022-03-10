import axios from 'axios';

axios.defaults.baseURL = 'https://music-player-olive.vercel.app';

const api = {
  login: (phone: string, password: string) => {
    return axios.get(`/login/cellphone?phone=${phone}&password=${password}`);
  },
  logout: () => {
    return axios.get(`/logout`);
  },
  getBanner: () => {
    return axios.get('/banner');
  },
  getRecommondSong: () => {
    return axios.get('/personalized?limit=4');
  },
  getRadioList: () => {
    return axios.get('/personalized/djprogram');
  },
  getNewest: () => {
    return axios.get('/mv/first?limit=3');
  },
  getDujia: () => {
    return axios.get('/personalized/privatecontent/list?limit=3');
  },
};

export default api;
