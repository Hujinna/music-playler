/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable promise/always-return */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import {
  MinusOutlined,
  BorderOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { ipcRenderer, IpcRendererEvent, remote } from 'electron';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import { isWin32 } from '../../../../utils/tools';
import styles from './Header.scss';
import { getLoginInfo, isLogin } from '../../../../utils/login';
import api from '../../../../utils/axios';

const thisWindow = remote.getCurrentWindow();

const options = [
  { value: '水星记', label: '水星记' },
  { value: '至少还有你', label: '至少还有你' },
  { value: '后悔无期', label: '后会无期' },
];

interface HeaderProps {
  setSearchData: (arg: string[]) => void;
  setSearchList: (arg: any) => void;
}

const header = (props: HeaderProps) => {
  const { setSearchData, setSearchList } = props;
  const [islogin, setIsLogin] = useState(false);
  const [src, setSrc] = useState('');
  const [nickname, setNickname] = useState('');
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

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

  const handleUid = (event: IpcRendererEvent, id: string) => {
    api
      .getUserDetails(id)
      .then((res) => {
        const { profile } = res.data;
        setIsLogin(true);
        setSrc(profile.avatarUrl);
        setNickname(profile.nickname);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    history.push('/center');
  };

  useEffect(() => {
    ipcRenderer.on('userinfo-uid', handleUid);
    return () => {
      ipcRenderer.removeListener('userinfo-uid', handleUid);
    };
  }, []);

  useEffect(() => {
    if (isLogin()) {
      setIsLogin(true);
      api
        .getUserDetails(getLoginInfo().id)
        .then((res) => {
          const { profile } = res.data;
          setSrc(profile.avatarUrl);
          setNickname(profile.nickname);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleEnter = (e: Event) => {
    if (inputValue && e.code === 'Enter') {
      api
        .search(inputValue)
        .then((res) => {
          const { result } = res.data;
          setSearchData(result);
          setSearchList(result.order);
          console.log(res);
          history.push('/search');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={styles.header}>
      <input
        type="text"
        placeholder="搜索音乐"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => handleEnter(e)}
      />
      <div className={styles['header-right']}>
        {islogin ? (
          <>
            <img alt="avatar" src={src} onClick={handleClick} />
            <p>{nickname}</p>
          </>
        ) : (
          <span onClick={handleLogin}>点击登录</span>
        )}
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
