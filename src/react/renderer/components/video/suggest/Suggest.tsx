/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable promise/always-return */
import React, { useEffect, useState } from 'react';
import api from '../../../../../utils/axios';
import styles from './Suggest.scss';

interface SuggestProps {
  setVideoUrl: (id: string) => void;
  setOpen: (id: boolean) => void;
}

const Suggest = (props: SuggestProps) => {
  const { setVideoUrl, setOpen } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    api
      .getSuggestVideo()
      .then((res) => {
        const { datas } = res.data;
        setList(datas);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const playVideo = (id: string) => {
    setVideoUrl(id);
    setOpen(true);
  };

  return (
    <div className={styles.suggest}>
      <p>推荐视频</p>
      <div className={styles['suggest-content']}>
        {list.map((item) => {
          return (
            <div
              key={item.data.coverUrl}
              className={styles['suggest-item']}
              onClick={() => playVideo(item.data.urlInfo.url)}
            >
              <img src={item.data.coverUrl} alt="11" />
              <p>{item.data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Suggest;
