import axios from 'axios';

axios.defaults.baseURL = 'https://music-player-olive.vercel.app';

const api = {
  getBanner: () => {
    return axios.get('/banner');
  },
};

export default api;
