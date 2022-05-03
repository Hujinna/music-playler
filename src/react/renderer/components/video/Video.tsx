/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Top from './top/Top';
import Lib from './lib/Lib';
import Suggest from './suggest/Suggest';
import styles from './Video.scss';
import Play from './play/Play';

const navList = [
  {
    id: 'suggest',
    name: '推荐',
    path: '/video/suggest',
  },
  {
    id: 'top',
    name: '排行榜',
    path: '/video/top',
  },
  {
    id: 'lib',
    name: '视频库',
    path: '/video/lib',
  },
];

interface VideoProps {
  location: { pathname: string };
}

const Video = (props: VideoProps) => {
  const { pathname } = props.location;
  const [videoUrl, setVideoUrl] = useState('');
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.video}>
      <h1>视频</h1>
      {/* <div className={styles['video-name']}>
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
                    ? styles['video-bar']
                    : styles['video-bar-hidden']
                }
              />
            </NavLink>
          );
        })}
      </div> */}
      <Play videoUrl={videoUrl} isOpen={isOpen} setOpen={setOpen} />
      <Switch>
        <Route
          path="/video/suggest"
          render={() => <Suggest setVideoUrl={setVideoUrl} setOpen={setOpen} />}
        />
        <Route path="/video/top" component={Top} />
        <Route path="/video/lib" component={Lib} />
        <Redirect exact path="/video" to="/video/suggest" />
      </Switch>
    </div>
  );
};

export default Video;
