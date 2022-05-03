/* eslint-disable promise/always-return */
import React, { useEffect, useState } from 'react';
import api from '../../../../../utils/axios';
import styles from './Top.scss';

const Top = () => {
  const [topList, setTopList] = useState([]);

  useEffect(() => {
    api
      .getTopList()
      .then((res) => {
        const { list } = res.data;
        setTopList(list);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.top}>
      {topList.map((top) => {
        return (
          <div className={styles['top-item']} key={top.id}>
            <img alt="top" src={top.coverImgUrl} />
            <div className={styles['top-item-right']}>
              <p>{top.name}</p>
              {top.tracks.map((track, index) => {
                return (
                  <p key={track.first}>
                    <span>{`${index + 1} ${track.first}`}</span>
                    <span>{track.second}</span>
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Top;
