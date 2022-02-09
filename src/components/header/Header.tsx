import React from 'react';
import {
  MinusOutlined,
  BorderOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { remote } from 'electron';
import { isWin32 } from '../../utils/tools';
import styles from './Header.scss';

const thisWindow = remote.getCurrentWindow();

const header = () => {
  const handleMinimize = () => {
    if (thisWindow && !thisWindow.isDestroyed()) thisWindow.minimize();
  };

  const handleMaximize = () => {
    if (thisWindow && !thisWindow.isDestroyed()) {
      if (thisWindow.isMaximized()) thisWindow.unmaximize();
      else {
        thisWindow.maximize();
      }
    }
  };

  const handleClose = () => {
    console.log('close');
    if (thisWindow && !thisWindow.isDestroyed()) {
      console.log(123);
      thisWindow.close();
    }
  };

  return (
    <div className={styles.header}>
      <input type="text" placeholder="搜索音乐" />
      <div className={styles['header-right']}>
        <span>点击登录</span>
        {isWin32 ? (
          <div>
            <button
              type="button"
              className={styles['header-btn']}
              onClick={handleMinimize}
            >
              <MinusOutlined />
            </button>
            <button
              type="button"
              className={styles['header-btn']}
              onClick={handleMaximize}
            >
              <BorderOutlined />
            </button>
            <button
              type="button"
              className={styles['header-btn']}
              onClick={() => console.log('123')}
            >
              <CloseOutlined />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default header;
