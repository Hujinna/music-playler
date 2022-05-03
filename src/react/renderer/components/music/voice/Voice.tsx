/* eslint-disable promise/always-return */
import React, { useEffect, useState } from 'react';
import api from '../../../../../utils/axios';
import styles from './Voice.scss';

const Voice = () => {
  const [voiceList, setVoiceList] = useState([]);

  useEffect(() => {
    api
      .getDjHot()
      .then((res) => {
        const { djRadios } = res.data;
        setVoiceList(djRadios);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.voice}>
      {voiceList.map((voice) => {
        return (
          <div className={styles['voice-item']} key={voice.id}>
            <img src={voice.picUrl} alt="voice" />
            <div className={styles['voice-item-right']}>
              <p className={styles['voice-item-name']}>{voice.name}</p>
              <p>{voice.copywriter}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Voice;
