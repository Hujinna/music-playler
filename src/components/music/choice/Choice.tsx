/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable promise/always-return */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import api from '../../../utils/axios';
import styles from './Choice.scss';

interface ChoiceProps {
  history: { push: (args: string) => void };
}

const Choice = (props: ChoiceProps) => {
  const { history } = props;
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    api
      .getBanner()
      .then((res) => {
        const { banners, code } = res.data;
        if (code === 200) {
          setBanner(banners);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const handleMore = () => {
    history.push('/music/songs');
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
      {/* 推荐歌单 */}
      <div className={styles['suggest-choice']}>
        <div className={styles['suggest-title']}>
          <p>推荐歌单</p>
        </div>
        <div className={styles['suggest-more']} onClick={handleMore}>
          更多 {'>'}
        </div>
      </div>
      <div />
    </div>
  );
};

export default Choice;
