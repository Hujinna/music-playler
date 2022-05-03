import {
  AudioOutlined,
  ClockCircleOutlined,
  CloudDownloadOutlined,
  HeartOutlined,
  HomeOutlined,
  StarOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { message } from 'antd';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { isLogin } from '../../../../utils/login';
import styles from './Sidebar.scss';

const onlineList = [
  {
    id: '音乐馆',
    path: '/music',
    icon: <StarOutlined />,
  },
  {
    id: '视频',
    path: '/video',
    icon: <VideoCameraOutlined />,
  },
  {
    id: '电台',
    path: '/audio',
    icon: <AudioOutlined />,
  },
];
const myList = [
  {
    id: '我喜欢',
    path: '/favor',
    icon: <HeartOutlined />,
  },
  {
    id: '下载歌曲',
    path: '/download',
    icon: <CloudDownloadOutlined />,
  },
  {
    id: '最近播放',
    path: '/recent',
    icon: <ClockCircleOutlined />,
  },
  {
    id: '个人中心',
    path: '/center',
    icon: <HomeOutlined />,
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  const handleClick = () => {
    if (!isLogin()) {
      message.info('请先登录');
    }
  };

  return (
    <div className={styles.sidebar}>
      <p>在线音乐</p>
      {onlineList.map((item) => {
        return (
          <NavLink
            to={item.path}
            key={item.id}
            className={pathname.startsWith(item.path) ? styles.active : ''}
          >
            {item.icon}
            <span className={styles['sidebar-span']}>{item.id}</span>
          </NavLink>
        );
      })}
      <p>我的音乐</p>
      {myList.map((item) => {
        return (
          <NavLink
            to={isLogin() ? item.path : '/music'}
            key={item.id}
            onClick={handleClick}
            className={pathname.startsWith(item.path) ? styles.active : ''}
          >
            {item.icon}
            <span className={styles['sidebar-span']}>{item.id}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
