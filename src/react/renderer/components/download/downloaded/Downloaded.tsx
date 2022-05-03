/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { remote, shell } from 'electron';
import React from 'react';
import styles from './Downloaded.scss';

const Downloaded = () => {
  const handleClick = () => {
    const downloadPath = remote.app.getPath('downloads');
    shell.openPath(downloadPath);
  };

  return (
    <div className={styles.downloaded}>
      <div className={styles.none}>
        <p>还没有下载音乐</p>
        <p className={styles.open} onClick={handleClick}>
          打开下载目录
        </p>
      </div>
    </div>
  );
};

export default Downloaded;
