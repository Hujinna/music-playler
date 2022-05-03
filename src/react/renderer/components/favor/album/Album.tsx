import React from 'react';
import styles from './Album.scss';

const Album = () => {
  return (
    <div className={styles.album}>
      <p>收藏的专辑(0)</p>
      <p className={styles.none}>暂无收藏专辑</p>
    </div>
  );
};

export default Album;
