import React from 'react';
import { Breakpoint } from 'react-socks';
import ProfileIcon from '../../assets/profile_icon.svg';
import './Profile.css';
import { base } from '../../util/apiRoutes';

const Profile =() => {
  const isLogged = false;

  return (
    <div className='container-profile'>
      <Breakpoint customQuery="(max-width: 768px)">
        <a href="#">
          <img className='social-icon-banner' src={ProfileIcon} alt="profile" />
        </a>
      </Breakpoint>
      <Breakpoint customQuery="(min-width: 768px)">
        {
          isLogged &&
          <a href="#">
            <img className='social-icon-banner' src={ProfileIcon} alt="profile" />
          </a>
        }

        {
          !isLogged &&
          <div className="login">
            <a href={`${base}/users/sign_in`}>
              SIGN IN 
            </a>
            <p>|</p>
            <a href={`${base}/users/sign_up`}>
              SIGNUP
            </a>
          </div>
        }
      </Breakpoint>
    </div>
  );
}

export default Profile;
