/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable promise/always-return */
import React, { useEffect, useState } from 'react';
import api from '../../../../../utils/axios';
import styles from './Video.scss';

const Video = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    api
      .getFavorVideo()
      .then((res) => {
        const { data } = res.data;
        setList(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const playVideo = (id: string) => {
    api
      .getVideoUrl(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.video}>
      <p>收藏的视频({list.length})</p>
      <div className={styles['video-content']}>
        {list.map((item) => {
          return (
            <div
              key={item.vid}
              className={styles['video-item']}
              onClick={() => {
                playVideo(item.vid);
              }}
            >
              <img src={item.coverUrl} alt="1" />
              <p>{item.title}</p>
              <p className={styles['video-item-author']}>
                {item.creator[0].userName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
