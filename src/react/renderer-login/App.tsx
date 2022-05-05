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
  const [nickname, setNickname] = useState('');

  const register = () => {
    api
      .getUserDetails(userinfo.id)
      .then((res) => {
        const { profile } = res.data;
        setNickname(profile.nickname);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .register(userinfo.id, nickname, phone, password)
      .then((res) => {
        // if (res.code === 200) {
        message.success('登录成功');
        setTimeout(() => {
          ipcRenderer.send('login-success', userinfo.id);
        }, 1000);
        // }
      })
      .catch((err) => {
        message.error('登录失败');
        console.error(err);
      });
  };

  const handleLogin = () => {
    api
      .login(phone, password)
      .then((res) => {
        const { data } = res;
        if (data.code === 200) {
          // register();
          setUserinfo(data.account);
          localStorage.setItem('userinfo', JSON.stringify(data.account));
          message.success('登录成功');
          setTimeout(() => {
            ipcRenderer.send('login-success', data.account.id);
          }, 1000);
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
