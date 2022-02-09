import React from 'react';
import styles from './Header.scss';

const header = () => {
  return (
    <div className={styles.header}>
      <input type="text" />
      <div>
        <span>点击登录</span>
      </div>
    </div>
  );
};

export default header;
