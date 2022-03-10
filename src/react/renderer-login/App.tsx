/* eslint-disable promise/always-return */
import { ipcRenderer } from 'electron';
import React, { useState } from 'react';
import { message } from 'antd';
import api from '../../utils/axios';
import styles from './App.scss';
import './App.global.css';

const App = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [userinfo, setUserinfo] = useState({});

  const handleLogin = () => {
    api
      .login(phone, password)
      .then((res) => {
        const { data } = res;
        if (data.code === 200) {
          message.success('登录成功');
          setTimeout(() => {
            ipcRenderer.send('login-success');
            setUserinfo(data.account);
          }, 1000);
          localStorage.setItem('userinfo', JSON.stringify(data.account));
          console.log(data.account);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles['login-wrap']}>
      <p>账号密码登录</p>
      <input
        type="text"
        placeholder="手机号"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        value={phone}
      />
      <input
        type="password"
        placeholder="密码"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button type="button" onClick={handleLogin}>
        登录
      </button>
    </div>
  );
};

export default App;
