/* eslint-disable promise/always-return */
import React, { useEffect, useState } from 'react';
import api from '../../../../../utils/axios';
import styles from './Singer.scss';

const Singer = () => {
  const [singers, setSingers] = useState([]);

  useEffect(() => {
    api
      .getSinger()
      .then((res) => {
        const { list } = res.data;
        setSingers(list.artists);
        console.log(list.artists);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.singer}>
      <div className={styles['singer-classify']}>
        <div className={styles['singer-total']}>全部</div>
        <div className={styles['singer-single']}>华语</div>
        <div className={styles['singer-single']}>欧美</div>
        <div className={styles['singer-single']}>日本</div>
        <div className={styles['singer-single']}>韩国</div>
        <div className={styles['singer-single']}>其他</div>
      </div>
      <div className={styles['singer-classify']}>
        <div className={styles['singer-total']}>全部</div>
        <div className={styles['singer-single']}>男</div>
        <div className={styles['singer-single']}>女</div>
        <div className={styles['singer-single']}>组合</div>
      </div>
      <div className={styles['singer-list']}>
        {singers.map((singer) => {
          return (
            <div key={singer.id} className={styles['singer-item']}>
              <img alt={singer.name} src={singer.picUrl} />
              <p>{singer.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Singer;
