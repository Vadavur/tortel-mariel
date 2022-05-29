import React from 'react';
import logoImage from '../../../public/logo.png';
import { menu } from './menu';
import styles from './Header.module.scss';

const Header = () => {
  console.log(logoImage);
  return (
    <div className={styles['header']}>
      <div className={styles['header-logo']}>
        <img src={logoImage} alt="logo" />
      </div>
      <div className={styles['wrapper']}>
        <ul className={styles['header-menu']}>
          {menu.map((item, index) => (
            <li key={`menu item ${index}`}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className={styles['buttons']}>
          <button className={styles['menu-button']}></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
