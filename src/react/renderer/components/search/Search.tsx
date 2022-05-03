/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import Songs from './songs/Songs';
import styles from './Search.scss';
import Artists from './artists/Artists';
import Albums from './albums/Albums';
import Playlists from './playlists/Playlists';

interface SearchProps {
  searchData: any;
  searchList: string[];
}
const map = {
  songs: '歌曲',
  artists: '歌手',
  albums: '专辑',
  playlists: '歌单',
};

const Search = (props: SearchProps) => {
  const { searchList, searchData } = props;
  const { pathname } = useLocation();

  return (
    <div className={styles.search}>
      <h1>搜索结果</h1>
      <div className={styles['search-name']}>
        {searchList.map((item) => {
          return (
            <NavLink
              to={`/search/${item}`}
              key={item}
              className={pathname === `/search/${item}` ? styles.active : ''}
            >
              {map[item]}
              <div
                className={
                  pathname === `/search/${item}`
                    ? styles['search-bar']
                    : styles['search-bar-hidden']
                }
              />
            </NavLink>
          );
        })}
      </div>
      <Switch>
        <Route
          path="/search/songs"
          render={() => <Songs searchData={searchData} />}
        />
        <Route
          path="/search/artists"
          render={() => <Artists searchData={searchData} />}
        />
        <Route
          path="/search/albums"
          render={() => <Albums searchData={searchData} />}
        />
        <Route
          path="/search/playlists"
          render={() => <Playlists searchData={searchData} />}
        />
        <Redirect exact path="/search" to="/search/songs" />
      </Switch>
    </div>
  );
};

export default Search;
