/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable promise/always-return */
import React, { useEffect, useState } from 'react';
import api from '../../../../utils/axios';
import { getLoginInfo } from '../../../../utils/login';
import styles from './Recent.scss';

const Recent = (props: {
  setSrc: (arg: string) => void;
  setCurId: (arg: string) => void;
  setImgUrl: (arg: string) => void;
}) => {
  const { setSrc, setCurId, setImgUrl } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .getRecent(getLoginInfo().id)
      .then((res) => {
        const { allData } = res.data;
        setData(allData);
        console.log(allData);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id: string, picUrl: string) => {
    const url = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
    setImgUrl(picUrl);
    setCurId(id);
    setSrc(url);
  };

  return (
    <div className={styles.recent}>
      <h1>最近播放</h1>
      <p>共{data.length}首</p>
      <div className={styles['recent-title']}>
        <div>歌曲</div>
        <div>歌手</div>
        <div>专辑</div>
        <div>评分</div>
      </div>
      <div className={styles['recent-content']}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={styles['recent-list']}
              onClick={() => handleClick(item.song.id, item.song.al.picUrl)}
            >
              <div>{item.song.name}</div>
              <div>{item.song.ar[0].name}</div>
              <div>{item.song.al.name}</div>
              <div>{item.score}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recent;
