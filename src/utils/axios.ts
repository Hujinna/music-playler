import axios from 'axios';

axios.defaults.baseURL = 'https://music-player-olive.vercel.app';
// axios.defaults.baseURL = 'http://localhost:3000';

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
  getSongList: () => {
    return axios.get('/personalized?limit=8');
  },
  getDiantai: () => {
    return axios.get('/personalized/djprogram');
  },
  getDjHot: () => {
    return axios.get('/dj/hot');
  },
  getTopList: () => {
    return axios.get('/toplist/detail');
  },
  getSinger: () => {
    return axios.get('/toplist/artist');
  },
  getVideoBanner: () => {
    return axios.get('/dj/banner');
  },
  getCreate: () => {
    return axios.get('/dj/radio/hot?cateId=2001');
  },
  getUserDetails: (uid: string) => {
    return axios.get(`/user/detail?uid=${uid}`);
  },
  getRecent: (uid: string) => {
    return axios.get(`/user/record?uid=${uid}`);
  },
  getUrl: (id: string) => {
    return axios.get(`/song/url?id=${id}`);
  },
  getVideoUrl: (id: string) => {
    return axios.get(`/video/url?id=${id}`);
  },
  getSubcount: () => {
    return axios.get('/user/subcount');
  },
  getPlaylist: (uid: string) => {
    return axios.get(`/user/playlist?uid=${uid}`);
  },
  getFavorSinger: () => {
    return axios.get('/artist/sublist');
  },
  getFavorVideo: () => {
    return axios.get('/mv/sublist');
  },
  getSuggestVideo: () => {
    return axios.get('/video/timeline/recommend?offset=10');
  },
  getLyrics: (id: string) => {
    return axios.get(`/lyric?id=${id}`);
  },
  search: (query: string) => {
    return axios.get(`/search/suggest?keywords=${query}`);
  },
  add: (userid: string, username: string, content: string) => {
    return axios({
      method: 'post',
      url: 'http://localhost:4000/service/add',
      data: {
        userid,
        username,
        content,
        time: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      },
      headers: {
        'Content-type': 'application/json',
      },
    });
  },
  register: (id: string, name: string, phone: string, password: string) => {
    return axios({
      method: 'post',
      url: 'http://localhost:4000/user/ifregister',
      data: {
        id,
        name,
        phone,
        password,
      },
      headers: {
        'Content-type': 'application/json',
      },
    });
  },
};

export default api;
