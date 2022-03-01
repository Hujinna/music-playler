import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Sidebar.scss';

interface SidebarProps {
  location: { pathname: string };
}

const onlineList = [
  {
    id: '音乐馆',
    path: '/music',
  },
  {
    id: '视频',
    path: '/video',
  },
  {
    id: '电台',
    path: '/audio',
  },
];
const myList = [
  {
    id: '我喜欢',
    path: '/favor',
  },
  {
    id: '本地歌曲',
    path: '/local',
  },
  {
    id: '下载歌曲',
    path: '/download',
  },
  {
    id: '最近播放',
    path: '/recent',
  },
];

const Sidebar = (props: SidebarProps) => {
  const {
    location: { pathname },
  } = props;
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
            {item.id}
          </NavLink>
        );
      })}
      <p>我的音乐</p>
      {myList.map((item) => {
        return (
          <NavLink
            to={item.path}
            key={item.id}
            className={pathname.startsWith(item.path) ? styles.active : ''}
          >
            {item.id}
          </NavLink>
        );
      })}
    </div>
  );
};

export default withRouter(Sidebar);
