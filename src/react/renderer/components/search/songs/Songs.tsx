import React from 'react';
import { format } from '../../../../../utils/tools';
import styles from './Songs.scss';

const Song = (props: { searchData: any }) => {
  const { searchData } = props;
  return (
    <div className={styles.songs}>
      <div className={styles['songs-title']}>
        <div>歌曲</div>
        <div>歌手</div>
        <div>专辑</div>
        <div>时长</div>
      </div>
      <div className={styles['songs-content']}>
        {searchData.songs.map((item) => {
          return (
            <div key={item.id} className={styles['songs-list']}>
              <div>{item.name}</div>
              <div>{item.artists[0].name}</div>
              <div>{item.album.name}</div>
              <div>{format(item.duration)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Song;
