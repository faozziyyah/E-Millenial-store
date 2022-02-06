import React from 'react';
import logo from '../Images/EMS.svg'
import styles from '../css/Home.module.css' 

function Footer() {
  return <div className={styles.footer}>
      <img src={logo} alt="logo" />
      <p>Designed and crafted by a Front-end Ninja.</p>
  </div>;
}

export default Footer;
