import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import styles from './App.scss';

export default function App() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
