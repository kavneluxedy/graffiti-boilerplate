import React from 'react';
import SvgAuthor from '../img/svg/SvgAuthor.js';
import SvgHome from '../img/svg/SvgHome.js';

const Home = () => {
  return (
    <div className="home">
      <a href="app">
        <div className="home">
          <div className="title">
            <SvgHome width="300px" />
          </div>
          <div className="author">
            <SvgAuthor />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Home;
