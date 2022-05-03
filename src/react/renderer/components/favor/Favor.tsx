/* eslint-disable promise/always-return */
import React, { useEffect } from 'react';
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import api from '../../../../utils/axios';
import Album from './album/Album';
import Colume from './colume/Colume';
import styles from './Favor.scss';
import Singer from './singer/Singer';
import Video from './video/Video';

const navList = [
  {
    id: 'singer',
    name: '歌手',
    path: '/favor/singer',
  },
  {
    id: 'album',
    name: '专辑',
    path: '/favor/album',
  },
  {
    id: 'video',
    name: '视频',
    path: '/favor/video',
  },
  {
    id: 'colume',
    name: '专栏',
    path: '/favor/colume',
  },
];

const Favor = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    api
      .getSubcount()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.favor}>
      <h1>我喜欢</h1>
      <div className={styles['favor-name']}>
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
                    ? styles['favor-bar']
                    : styles['favor-bar-hidden']
                }
              />
            </NavLink>
          );
        })}
      </div>
      <Switch>
        <Route path="/favor/singer" component={Singer} />
        <Route path="/favor/album" component={Album} />
        <Route path="/favor/video" component={Video} />
        <Route path="/favor/colume" component={Colume} />
        <Redirect exact path="/favor" to="/favor/singer" />
      </Switch>
    </div>
  );
};

export default Favor;
