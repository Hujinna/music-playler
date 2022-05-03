/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable promise/always-return */
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../../utils/axios';
import { getLoginInfo, removeLoginInfo } from '../../../../utils/login';
import styles from './Center.scss';

const Local = () => {
  const [userinfo, setUserinfo] = useState({});
  const [playlists, setPlaylists] = useState([]);
  const history = useHistory();

  const getInfo = () => {
    api
      .getPlaylist(getLoginInfo().id)
      .then((res) => {
        const { playlist } = res.data;
        setPlaylists(playlist);
        console.log(playlist);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserDetail = () => {
    api
      .getUserDetails(getLoginInfo().id)
      .then((res) => {
        const { profile } = res.data;
        setUserinfo(profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserDetail();
    getInfo();
  }, []);

  const handleLogout = () => {
    // api.logout();
    // removeLoginInfo();
    // history.push('/music');
  };

  const handlePush = () => {
    history.push('/favor');
  };

  return (
    <div className={styles.center}>
      <div className={styles['center-top']}>
        <img src={userinfo.avatarUrl} alt="avatar" />
        <div className={styles['center-right']}>
          <h2>{userinfo.nickname}</h2>
          <p>个性签名：{userinfo.signature ?? '暂无'}</p>
        </div>
        <button
          type="button"
          className={styles['center-btn']}
          onClick={handleLogout}
        >
          退出登录
        </button>
      </div>
      <div className={styles['center-playlists']}>
        我创建的歌单({playlists.length})
        <div className={styles['center-playlists-content']}>
          <img src={playlists[0]?.coverImgUrl} alt="111" onClick={handlePush} />
          <p>我喜欢的音乐</p>
        </div>
      </div>
      <div className={styles['center-feedback']}>
        信息反馈：
        <textarea
          name="feedback"
          cols={30}
          rows={10}
          placeholder="如果你有什么好的建议和想法，快来写下吧"
        />
        {/* <TextArea
          rows={6}
          placeholder="如果你有什么好的建议和想法，快来写下吧"
          maxLength={6}
        /> */}
        <button type="button">点击提交</button>
      </div>
    </div>
  );
};

export default Local;
