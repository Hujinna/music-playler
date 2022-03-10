/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import {
  MinusOutlined,
  BorderOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { ipcRenderer, remote } from 'electron';
import Select from 'react-select';
import { isWin32 } from '../../../../utils/tools';
import styles from './Header.scss';
import { getLoginInfo, isLogin } from '../../../../utils/login';

const thisWindow = remote.getCurrentWindow();

const options = [
  { value: '水星记', label: '水星记' },
  { value: '至少还有你', label: '至少还有你' },
  { value: '后悔无期', label: '后会无期' },
];

const header = () => {
  const handleLogin = () => {
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
      <Select options={options} />
      <div className={styles['header-right']}>
        <span onClick={handleLogin}>
          {isLogin() ? getLoginInfo().userName : '点击登录'}
        </span>
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
