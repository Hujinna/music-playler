/* eslint-disable promise/always-return */
import { CloseOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import { Lrc, LrcInstance, LyricLine } from 'react-lrc';
import api from '../../../../utils/axios';
import styles from './Lyric.scss';

interface LyricProps {
  curId: string;
  imgUrl: string;
  currentMillisecond: number;
  onClose: () => void;
}

const Lyric = (props: LyricProps) => {
  const { onClose, curId, imgUrl, currentMillisecond } = props;
  const [lyric, setLyric] = useState('');
  const lrcRef = useRef<LrcInstance>();

  useEffect(() => {
    api
      .getLyrics(curId)
      .then((res) => {
        const { lrc } = res.data;
        setLyric(lrc.lyric);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.lyric}>
      <div className={styles['lyric-header']}>
        <button type="button" onClick={onClose}>
          <CloseOutlined />
        </button>
      </div>
      <div className={styles['lyric-content']}>
        <div className={styles['lyric-left']}>
          <img src={imgUrl} alt="11" />
        </div>
        <div className={styles['lyric-right']}>
          <Lrc
            ref={lrcRef}
            lrc={lyric}
            autoScroll
            intervalOfRecoveringAutoScrollAfterUserScroll={5000}
            onLineChange={() => {
              lrcRef.current?.scrollToCurrentLine();
            }}
            style={{ height: '800px' }}
            lineRenderer={(item: {
              index: number;
              active: boolean;
              line: LyricLine;
            }) => {
              return (
                <p
                  key={item.index}
                  className={item.active ? styles['lyric-active'] : ''}
                >
                  {item.line.content}
                </p>
              );
            }}
            currentMillisecond={currentMillisecond * 1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Lyric;
