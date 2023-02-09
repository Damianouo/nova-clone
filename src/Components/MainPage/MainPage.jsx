import React from 'react';
import { StyledMainPage } from './MainPage.style';
import background from '../../assets/Photos/background.jpg';
import InstLink from './InstLink/InstLink';
import SocialMedia from './SocialMedia/SocialMedia';
import Navbar from '../Navbar/Navbar';

import { Outlet } from 'react-router-dom';
const MainPage = () => {
  return (
    <>
      <Navbar />
      <StyledMainPage>
        <img className="background" src={background} alt="background" />
        <h1 id="title">
          <a href="#title">ElkenSad</a>
        </h1>
        <p id="state">
          <a href="#state">I'm currently offline.</a>
        </p>
        <SocialMedia />
        <InstLink />
      </StyledMainPage>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default MainPage;
