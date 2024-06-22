import React, { useContext } from 'react';
import { GlobalContext } from './utils/global.context';

const Footer = () => {
  const { state } = useContext(GlobalContext);
  const iconColor = state.theme === 'dark' ? 'white' : 'black';

  return (
    <footer className="footer">
      <div className="footer-left">
        <img 
          src={`${process.env.PUBLIC_URL}/images/DH.png`} 
          alt="DH Logo" 
          className="footer-logo" 
          style={{ filter: state.theme === 'dark' ? 'invert(1)' : 'invert(0)' }}
        />
      </div>
      <div className="footer-right">
        <a href="https://www.facebook.com">
          <img src={`${process.env.PUBLIC_URL}/images/ico-facebook.png`} alt="Facebook" className="footer-icon" style={{ filter: iconColor === 'black' ? 'invert(1)' : 'invert(0)' }} />
        </a>
        <a href="https://www.instagram.com">
          <img src={`${process.env.PUBLIC_URL}/images/ico-instagram.png`} alt="Instagram" className="footer-icon" style={{ filter: iconColor === 'black' ? 'invert(1)' : 'invert(0)' }} />
        </a>
        <a href="https://www.tiktok.com">
          <img src={`${process.env.PUBLIC_URL}/images/ico-tiktok.png`} alt="TikTok" className="footer-icon" style={{ filter: iconColor === 'black' ? 'invert(1)' : 'invert(0)' }} />
        </a>
        <a href="https://www.whatsapp.com">
          <img src={`${process.env.PUBLIC_URL}/images/ico-whatsapp.png`} alt="WhatsApp" className="footer-icon" style={{ filter: iconColor === 'black' ? 'invert(1)' : 'invert(0)' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
