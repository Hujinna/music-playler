import React from 'react';
import styles from './Albums.scss';

const Albums = (props: { searchData: any }) => {
  const { searchData } = props;
  return (
    <div className={styles['singer-list']}>
      {searchData.albums.map((item) => {
        return (
          <div key={item.id} className={styles['singer-item']}>
            <img src={item.artist.picUrl} alt={item.id} />
            <div className={styles['singer-name']}>{item.name}</div>
            <div className={styles['singer-artist']}>
              歌手：{item.artist.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Albums;
