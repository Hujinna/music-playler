import React from 'react';
import styles from './App.scss';

const App = () => {
  return (
    <div className={styles['login-wrap']}>
      <p>账号密码登录</p>
      <input type="text" placeholder="手机号" />
      <input type="password" placeholder="密码" />
      <button type="button">登录</button>
    </div>
  );
};

export default App;
