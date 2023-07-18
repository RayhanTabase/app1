import React from 'react';
import Social from './Socials';
import LinkedInIcon from '../../assets/linkedin.svg'
import FacebookIcon from '../../assets/facebook.svg'
import TwitterInIcon from '../../assets/twitter.svg'
import InstagramIcon from '../../assets/instagram.svg'

import './SocialMedia.css';

const SocialMedia =() => {
  const SOCIAL_MEDIA = [
    {name: 'facebook', icon: FacebookIcon, url: ''},
    {name: 'twitter', icon: TwitterInIcon, url: ''},
    {name: 'instagram', icon: InstagramIcon, url: ''},
    {name: 'linkedIn', icon: LinkedInIcon, url: ''},
  ]

  return (
    <>
      {
        SOCIAL_MEDIA.map((medium) => (
          <Social key={medium.name} name={medium.name} icon={medium.icon} url={medium.url} />
        ))
      }
    </>
  );
}

export default SocialMedia;
