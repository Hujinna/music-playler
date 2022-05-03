/* eslint-disable promise/always-return */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import api from '../../../../utils/axios';
import styles from './Radio.scss';

const Radio = () => {
  const [voiceList, setVoiceList] = useState([]);

  useEffect(() => {
    api
      .getCreate()
      .then((res) => {
        const { djRadios } = res.data;
        setVoiceList(djRadios);
        console.log(djRadios);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.radio}>
      <h3>一起享受这美好时光</h3>
      <div className={styles['voice-content']}>
        {voiceList.map((item: any) => {
          return (
            <div className={styles['voice-item']} key={item.id}>
              <img src={item.picUrl} alt="热门推荐" />
              <p>{item.name}</p>
              {/* <p>{item.copywriter}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
