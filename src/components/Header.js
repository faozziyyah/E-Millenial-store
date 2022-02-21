import React from 'react';
import styles from '../css/Home.module.css'
import logo from '../Images/EMS.svg'
import cartLogo from '../Images/cart.svg'
import heroImg from '../Images/heroImage.png'
import { Badge, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { CartState } from '../context/Context';

function Header() {

    const { 
        state: { cart },
    }=  CartState();

  return <div className={styles.header}>

      <Navbar className={styles.nav}>
              <Navbar.Brand>
                  <img src={logo} alt="logo" />
              </Navbar.Brand>
              <navbar className={styles.navlink}>
                  <a href="http://">Intro</a>
                  <a href="http://">About</a>
                  <a href="http://">Shop</a>
              </navbar>
              <Nav>
                  <Dropdown alignRight className={styles.dropdown}>
                      <Dropdown.Toggle className={styles.cart}>
                          <img src={cartLogo} alt="cart" className={styles.cartLogo} />
                          <Badge>{cart.length}</Badge>
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{ minWidth: 370 }}>
                          <span style={{ padding: 10 }}>Cart is empty</span>
                      </Dropdown.Menu>
                  </Dropdown>
              </Nav>
      </Navbar>

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
