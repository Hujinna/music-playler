/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Choice from './choice/Choice';
import styles from './Music.scss';
import New from './new/New';
import Singer from './singer/Singer';
import Songs from './songs/Songs';
import Top from './top/Top';
import Voice from './voice/Voice';

const navList = [
  {
    id: 'choice',
    name: '精选',
    path: '/music/choice',
  },
  {
    id: 'songs',
    name: '歌单',
    path: '/music/songs',
  },
  {
    id: 'voice',
    name: '有声电台',
    path: '/music/voice',
  },
  {
    id: 'top',
    name: '排行',
    path: '/music/top',
  },
  {
    id: 'singer',
    name: '歌手',
    path: '/music/singer',
  },
  // {
  //   id: 'new',
  //   name: '最新音乐',
  //   path: '/music/new',
  // },
];

interface MusicProps {
  location: { pathname: string };
}

const Music = (props: MusicProps) => {
  const { pathname } = props.location;
  return (
    <div className={styles.music}>
      <h1>音乐馆</h1>
      <div className={styles['music-name']}>
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
                    ? styles['music-bar']
                    : styles['music-bar-hidden']
                }
              />
            </NavLink>
          );
        })}
      </div>
      <Switch>
        <Route path="/music/choice" component={Choice} />
        <Route path="/music/songs" component={Songs} />
        <Route path="/music/voice" component={Voice} />
        <Route path="/music/top" component={Top} />
        <Route path="/music/singer" component={Singer} />
        <Route path="/music/new" component={New} />
        <Redirect exact path="/music" to="/music/choice" />
      </Switch>
    </div>
  );
};

export default Music;
