/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable promise/always-return */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import api from '../../../../../utils/axios';
import styles from './Choice.scss';

interface ChoiceProps {
  history: { push: (args: string) => void };
}

const Choice = (props: ChoiceProps) => {
  const { history } = props;
  const [banner, setBanner] = useState([]);
  const [recommandSongs, setRecommandSongs] = useState([]);
  const [radius, setRadius] = useState([]);
  const [newest, setNewest] = useState([]);

  useEffect(() => {
    api
      .getBanner()
      .then((res) => {
        const { banners, code } = res.data;
        setBanner(banners);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getRecommondSong()
      .then((res) => {
        const { result, code } = res.data;
        setRecommandSongs(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getRadioList()
      .then((res) => {
        const { result, code } = res.data;
        if (code === 200) {
          setRadius(result.slice(0, 4));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getDujia()
      .then((res) => {
        // console.log(res);
        const { result, code } = res.data;
        if (code === 200) {
          setNewest(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   api
  //     .getDujia()
  //     .then((res) => {
  //       console.log(res);
  //       const { data, code } = res.data;
  //       // if (code === 200) {
  //       //   setNewest(data);
  //       // }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const handleMore = (router: string) => {
    history.push(router);
  };

  return (
    <div className={styles.choice}>
      {/* banner */}
      <Slider {...settings}>
        {banner.map((item: any) => {
          return (
            <div key={item}>
              <img
                src={item.imageUrl}
                className={styles['banner-img']}
                alt="banner"
              />
            </div>
          );
        })}
      </Slider>
      {/* ???????????? */}
      <div className={styles['suggest-choice']}>
        <div className={styles['suggest-title']}>
          <p>????????????</p>
        </div>
        <div
          className={styles['suggest-more']}
          onClick={() => handleMore('/music/songs')}
        >
          ?????? {'>'}
        </div>
      </div>
      <div className={styles['suggest-songs']}>
        {recommandSongs.map((item: any) => {
          return (
            <div key={item.id} className={styles['suggest-songs-item']}>
              <img src={item.picUrl} alt="????????????" />
              <p>{`${item.name.slice(0, 10)}...`}</p>
            </div>
          );
        })}
      </div>
      <div />
      {/* ?????????????????? */}
      {/* <div className={styles['suggest-choice']}>
        <div className={styles['suggest-title']}>
          <p>??????????????????</p>
        </div>
        <div
          className={styles['suggest-more']}
          onClick={() => handleMore('/music/voice')}
        >
          ?????? {'>'}
        </div>
      </div>
      <div className={styles['suggest-songs']}>
        {radius.map((item: any) => {
          return (
            <div key={item.id} className={styles['suggest-songs-item']}>
              <img src={item.picUrl} alt="????????????" />
              <p>{`${item.name.slice(0, 10)}...`}</p>
            </div>
          );
        })}
      </div>
      <div /> */}
      {/* ???????????? */}
      <div className={styles['suggest-choice']}>
        <div className={styles['suggest-title']}>
          <p>????????????</p>
        </div>
        <div
          className={styles['suggest-more']}
          onClick={() => handleMore('/music/new')}
        >
          ?????? {'>'}
        </div>
      </div>
      <div className={styles['suggest-songs']}>
        {newest.map((item: any) => {
          return (
            <div key={item.id} className={styles['newest-songs-item']}>
              <img src={item.sPicUrl} alt="????????????" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div />
    </div>
  );
};

export default Choice;
