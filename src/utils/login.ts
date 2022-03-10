const isLogin = () => {
  if (localStorage.getItem('userinfo')) {
    return true;
  }
  return false;
};

const setLoginInfo = (useinfo: any) => {
  localStorage.setItem('userinfo', useinfo);
};

const removeLoginInfo = () => {
  localStorage.removeItem('userinfo');
};

const getLoginInfo = () => {
  const data = localStorage.getItem('userinfo');
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export { isLogin, setLoginInfo, removeLoginInfo, getLoginInfo };
