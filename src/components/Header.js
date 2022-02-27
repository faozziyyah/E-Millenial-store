import React from 'react';
import styles from '../css/Home.module.css'
import logo from '../Images/EMS.svg'
import cartLogo from '../Images/cart.svg'
import heroImg from '../Images/heroImage.png'
import { Badge, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { CartState } from '../context/Context';
import { Link } from 'react-router-dom';

function Header() {

    const { 
        state: { cart },
    }=  CartState();

  return <div className={styles.header}>

      <Navbar className={styles.nav}>
              <Navbar.Brand>
                  <img src={logo} alt="logo" className={styles.logo}/>
              </Navbar.Brand>
              <Nav>
                  <Dropdown alignRight>
                      <Dropdown.Toggle className={styles.cart}>
                          <img src={cartLogo} alt="cart" className={styles.cartLogo} />
                          <Badge>{cart.length}</Badge>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>

                        {cart.length > 0 ? (
                            <section className={styles.dropdown}>
                                <span className={styles.droptop}>
                                    <h3>Items</h3>
                                    <h3>Price (₦)</h3>
                                </span>
                                {cart.map((prod) => (
                                    <span className={styles.cartitem} key={prod.id}>
                                        <h3 className={styles.itemname}>{prod.name}</h3>
                                        <h3 className={styles.itemprice}>{prod.price}</h3>
                                        <button className={styles.shopLink1}>remove</button>
                                    </span>
                                    ))
                                }
                                <br />
                                <div className={styles.proceed}>
                                    {/*<button className={styles.shopLink1}>Continue Shopping</button>
                                    <button className={styles.shopLink}>Checkout</button> */}
                                    <Link to="/cart">
                                        <button className={styles.shopLink}>go to cart</button>
                                    </Link>
                                </div>

                            </section>
                        ) : (
                            <span style={{ padding: 10 }}>Cart is empty</span>
                        )}
                          
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
