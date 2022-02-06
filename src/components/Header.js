import React from 'react';
import styles from '../css/Home.module.css'
import logo from '../Images/EMS.svg'
import cartLogo from '../Images/cart.svg'
import heroImg from '../Images/heroImage.png'

function Header() {
  return <div className={styles.header}>

      <nav className={styles.nav}>
          <img src={logo} alt="logo" />
          <div className={styles.navlink}>
              <a href="http://">Intro</a>
              <a href="http://">About</a>
              <a href="http://">Shop</a>
          </div>

          <div className={styles.cart}>
              <img src={cartLogo} alt="cart" className={styles.cartLogo} />
              <h1 className={styles.cartItems}>0</h1>
          </div>
          
      </nav>

      <section className={styles.hero}>
          <div className={styles.top}>
              <h1>THE <br /> E-MILLENIAL  <br /> STORE</h1>
              <img className={styles.heroImg} src={heroImg} alt={heroImg} />
          </div>

          <div className={styles.bottom}>
              <a href="http://">SHOP NOW</a>
          </div>
      </section>

  </div>;
}

export default Header;
