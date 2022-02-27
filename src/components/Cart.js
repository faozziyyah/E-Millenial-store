import React from 'react'
import { useState, useEffect } from 'react'
import { CartState } from '../context/Context';
import styles from '../css/Home.module.css' 
import { Link } from 'react-router-dom';

const Cart = () => {

  const { 
    state: { cart },
    dispatch,
}=  CartState();

    const [ total, setTotal ]= useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0));
    }, [cart]);
    

  return (
    <section className={styles.dropdown1}>
        <span className={styles.droptop1}>
            <h3 className={styles.imgtitle}>Image</h3>
            <h3 className={styles.itemstitle}>Items</h3>
            <h3 className={styles.pricetitle}>Price (₦)</h3>
            <h3 className={styles.qtytitle}>Quantity</h3>
        </span>
        {cart.map((prod) => (
        <>
            <span className={styles.cartitem} key={prod.id}>
                <img src={prod.img} alt="prodimg" style={{ width: '20%', height: '100px' }} className={styles.imgs}/>
                <h3 className={styles.itemname}>{prod.name}</h3>
                <h3 className={styles.itemprice}>{prod.price}</h3>
                <select 
                    className={styles.select} 
                    value={prod.qty}
                    onChange={(e) => 
                        dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                                id: prod.id,
                                qty: e.target.value,
                            },
                        })
                    }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button 
                    className={styles.shopLink1}
                    onClick={() =>
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                        })
                    }
                >remove
                </button>
            </span> 
            <br /> 
        </>
         ))
        }

        <div className={styles.cartform}>
            <input
                placeholder="Your Name"
                name="group1"
                type="text"
                className={styles.form}
            /> <br /> <br />
            <input
                placeholder="Your Email"
                name="group1"
                type="email"
                className={styles.form}
            /> <br /> <br />
            <input 
                placeholder="Your Phone Number"
                name="group1"
                type="number"
                className={styles.form}
            />
        </div>

        <div className={styles.total}>
            <h1>Total Amount to be Paid</h1>
            <h2>₦ {total} </h2>
        </div>

        <div className={styles.proceed1}>
            <Link to="/">
                <button className={styles.shopLink1}>Continue Shopping</button>
            </Link>                      
                                   
            <Link to="/">
                <button className={styles.shopLink}>Checkout</button>
            </Link>
        </div>
    </section>
  )
}

export default Cart
