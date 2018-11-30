import { h } from 'preact';
import Social from '../Social';
import style from './style.css';

const Footer = () => (
  <footer className={style.footer}>
    <a href="mailto:babacanogun@gmail.com" className={style.footer__mail}>
      babacanogun@gmail.com
    </a>
    <Social />
  </footer>
);

export default Footer;
