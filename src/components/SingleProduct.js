import React from 'react';
import { CartState } from '../context/Context';
import styles from '../css/Home.module.css' 

const SingleProduct = ({ prod }) => {

    const { 
        state: { cart },
        dispatch,
    } = CartState();

  return ( 
        <div className={styles.product} id="p1">
	  	        
            <div className={styles.image}>
                <img src={prod.img} alt="product" height="120" />
            </div>
            <h1>{prod.name}</h1>
            <div className={styles.overlay}>
                <p><b>price</b></p>
                <h3 className={styles.prices}>{prod.price}</h3>
            </div>

            {
                cart.some(p => p.id === prod.id) ? (
                    <button className={styles.shopLink2} onClick={() => {
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod
                        });
                    }}>remove from cart</button>
                ) : (
                    <button className={styles.shopLink} onClick={() => {
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: prod
                        });
                    }}>add to cart</button>
                )}
                
              </div>
)};

export default SingleProduct;
