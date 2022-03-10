/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styles from './Song.scss';

const songsTypes = [
  ' 说唱 ',
  ' 古风 ',
  ' 流行 ',
  ' 摇滚 ',
  ' 安静 ',
  ' 轻音乐',
  ' 综艺 ',
];

const Songs = () => {
  const handleClick = (type: string) => {
    console.log(type);
  };
  return (
    <div className={styles.songs}>
      <div className={styles['songs-top']}>
        {songsTypes.map((item) => (
          <div
            className={styles['songs-top-type']}
            key={item}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={styles['songs-bottom']}>
        <p>精选歌单</p>
      </div>
    </div>
  );
};

export default Songs;
