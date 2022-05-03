import React from 'react';
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import styles from './Download.scss';
import Downloaded from './downloaded/Downloaded';
import Downloading from './downloading/Downloading';
import History from './history/History';

const navList = [
  {
    id: 'downloaded',
    name: '已下载',
    path: '/download/downloaded',
  },
  {
    id: 'downloading',
    name: '正在下载',
    path: '/download/downloading',
  },
  {
    id: 'history',
    name: '下载历史漫游',
    path: '/download/history',
  },
];

const Download = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.download}>
      <h1>下载歌曲</h1>
      <div className={styles['download-name']}>
        {navList.map((item) => {
          return (
            <NavLink
              to={item.path}
              key={item.id}
              className={pathname === item.path ? styles['a-active'] : ''}
            >
              {item.name}
              <div
                className={
                  pathname === item.path
                    ? styles['download-bar']
                    : styles['download-bar-hidden']
                }
              />
            </NavLink>
          );
        })}
      </div>
      <Switch>
        <Route path="/download/downloaded" component={Downloaded} />
        <Route path="/download/downloading" component={Downloaded} />
        <Route path="/download/history" component={Downloaded} />
        <Redirect exact path="/download" to="/download/downloaded" />
      </Switch>
    </div>
  );
};

export default Download;
