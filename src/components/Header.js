import React from 'react'
import styles from '../css/Home.module.css'
import heroImg from '../Images/heroImage.png'
import Nav from './NavigationBar'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
        <Nav />
        <section className={styles.hero}>
          <div className={styles.top}>
              <h1>THE <br /> E-MILLENIAL  <br /> STORE</h1>
              <img className={styles.heroImg} src={heroImg} alt={heroImg} />
          </div>

          <div className={styles.bottom}>
              
              <Link to="/">
                <a href="http://">SHOP NOW</a>
              </Link>
          </div>
      </section>
    </div>
  )
}

export default Header