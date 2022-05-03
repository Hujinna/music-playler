import React from 'react';
import styles from './Colume.scss';

const Colume = () => {
  return (
    <div className={styles.colume}>
      <p>收藏的专栏(0)</p>
      <p className={styles.none}>暂无收藏专栏</p>
    </div>
  );
};

export default Colume;
