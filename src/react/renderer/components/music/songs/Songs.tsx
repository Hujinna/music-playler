/* eslint-disable promise/always-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import api from '../../../../../utils/axios';
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

interface ItemProps {
  id: string;
  picUrl: string;
  alg: string;
  name: string;
}

const Songs = () => {
  const [songsList, setSongList] = useState([]);

  const handleClick = (type: string) => {
    console.log(type);
  };

  useEffect(() => {
    api
      .getSongList()
      .then((res) => {
        const { code, result } = res.data;
        if (code === 200) {
          setSongList(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        <div className={styles['songs-bottom-container']}>
          {songsList.map((item: ItemProps) => {
            return (
              <div key={item.id} className={styles['songs-bottom-item']}>
                <img src={item.picUrl} alt={item.alg} />
                <p>{`${item.name.slice(0, 10)}...`}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Songs;
