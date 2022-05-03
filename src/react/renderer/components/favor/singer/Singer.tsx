/* eslint-disable promise/always-return */
import React, { useEffect, useState } from 'react';
import api from '../../../../../utils/axios';
import styles from './Singer.scss';

const Singer = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    api
      .getFavorSinger()
      .then((res) => {
        const { data } = res.data;
        setList(data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.singer}>
      <p>收藏的歌手({list.length})</p>
      <div className={styles['singer-list']}>
        {list.map((item) => {
          return (
            <div key={item.id} className={styles['singer-item']}>
              <img src={item.picUrl} alt={item.id} />
              <div className={styles['singer-name']}>{item.name}</div>
              <div className={styles['singer-album']}>
                专辑：{item.albumSize}
              </div>
              <div>MV：{item.mvSize}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Singer;
