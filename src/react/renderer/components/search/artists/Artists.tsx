import React from 'react';
import styles from './Artists.scss';

const Artists = (props: { searchData: any }) => {
  const { searchData } = props;
  return (
    <div className={styles['singer-list']}>
      {searchData.artists.map((item) => {
        return (
          <div key={item.id} className={styles['singer-item']}>
            <img src={item.picUrl} alt={item.id} />
            <div className={styles['singer-name']}>{item.name}</div>
            <div className={styles['singer-album']}>专辑：{item.albumSize}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Artists;
