/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  MinusOutlined,
  BorderOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { ipcRenderer, remote } from 'electron';
import { isWin32 } from '../../../../utils/tools';
import styles from './Header.scss';

const thisWindow = remote.getCurrentWindow();

const header = () => {
  const handleLogin = () => {
    // console.log('弹出子窗口');
    ipcRenderer.send('login-window-show');
  };
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
    if (thisWindow && !thisWindow.isDestroyed()) {
      thisWindow.close();
    }
  };

  return (
    <div className={styles.header}>
      <input type="text" placeholder="搜索音乐" />
      <div className={styles['header-right']}>
        <span onClick={handleLogin}>点击登录</span>
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
              onClick={handleClose}
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
