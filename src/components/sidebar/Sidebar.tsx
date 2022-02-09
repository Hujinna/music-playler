import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <p>在线音乐</p>
      <NavLink to="/">音乐馆</NavLink>
      <NavLink to="/video">视频</NavLink>
      <NavLink to="/audio">电台</NavLink>
      <p>我的音乐</p>
      <NavLink to="/favor">我喜欢</NavLink>
      <NavLink to="/local">本地歌曲</NavLink>
      <NavLink to="/download">下载歌曲</NavLink>
      <NavLink to="/recent">最近播放</NavLink>
    </div>
  );
};

export default Sidebar;
