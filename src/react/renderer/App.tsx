/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import Sidebar from './components/sidebar/Sidebar';
import Music from './components/music/Music';
import Video from './components/video/Video';
import Radio from './components/radio/Radio';
import Favor from './components/favor/Favor';
import Recent from './components/recent/Recent';
import Download from './components/download/Download';
import Header from './components/header/Header';
import Center from './components/center/Center';
import Lyric from './components/lyric/Lyric';
import './App.global.css';
import Search from './components/search/Search';

const defaultSrc = `https://music.163.com/song/media/outer/url?id=441491828.mp3`;
const defaultImg = `http://p3.music.126.net/F6u84-ih7vnNBIKpdt85Bg==/109951165003581297.jpg`;

const App = () => {
  const [src, setSrc] = useState(defaultSrc);
  const [visible, setVisible] = useState(false);
  const [currentMillisecond, setCurrentMillisecond] = useState(0);
  const [imgUrl, setImgUrl] = useState(defaultImg);
  const [curId, setCurId] = useState('441491828');
  const [searchList, setSearchList] = useState([]);
  const [searchData, setSearchData] = useState({});

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container">
      {visible ? (
        <Lyric
          onClose={onClose}
          curId={curId}
          imgUrl={imgUrl}
          currentMillisecond={currentMillisecond}
        />
      ) : (
        <Router>
          <Sidebar />
          <div className="main">
            <Header
              setSearchData={setSearchData}
              setSearchList={setSearchList}
            />
            <Switch>
              <Route path="/music" component={Music} />
              <Route path="/video" component={Video} />
              <Route path="/audio" component={Radio} />
              <Route path="/favor" component={Favor} />
              <Route path="/center" component={Center} />
              <Route path="/download" component={Download} />
              <Route
                path="/search"
                render={() => (
                  <Search searchData={searchData} searchList={searchList} />
                )}
              />
              <Route
                path="/recent"
                render={() => (
                  <Recent
                    setSrc={setSrc}
                    setCurId={setCurId}
                    setImgUrl={setImgUrl}
                  />
                )}
              />
              <Redirect to="/music" />
            </Switch>
          </div>
        </Router>
      )}
      <div
        className="audioPlayer"
        style={{
          width: visible ? '100%' : 'calc(100% - 201px)',
          left: visible ? 0 : '200px',
        }}
      >
        <div className="lyric" onClick={showDrawer}>
          歌词
        </div>
        <AudioPlayer
          src={src}
          loop
          onListen={(e) => setCurrentMillisecond(e.srcElement.currentTime)}
        />
      </div>
    </div>
  );
};

export default App;
