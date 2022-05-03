import React from 'react';
import styles from './Playlists.scss';

const Playlists = (props: { searchData: any }) => {
  const { searchData } = props;
  return (
    <div className={styles['singer-list']}>
      {searchData.playlists.map((item) => {
        return (
          <div key={item.id} className={styles['singer-item']}>
            <img src={item.coverImgUrl} alt={item.id} />
            <div className={styles['singer-name']}>{item.name}</div>
            <div className={styles['singer-artist']}>
              {`${item.trackCount}首`}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Playlists;
