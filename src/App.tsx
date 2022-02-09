import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Music from './components/music/Music';
import Video from './components/video/Video';
import Radio from './components/radio/Radio';
import Favor from './components/favor/Favor';
import Local from './components/local/Local';
import Recent from './components/recent/Recent';
import Download from './components/download/Download';
import Header from './components/header/Header';
import './App.global.css';

export default function App() {
  return (
    <div className="container">
      <Router>
        <Sidebar />
        <div className="main">
          <Header />
          <Switch>
            <Route exact path="/" component={Music} />
            <Route path="/video" component={Video} />
            <Route path="/audio" component={Radio} />
            <Route path="/favor" component={Favor} />
            <Route path="/local" component={Local} />
            <Route path="/download" component={Download} />
            <Route path="/recent" component={Recent} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
