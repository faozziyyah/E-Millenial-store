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
            <div className="hover" id="h1">
                <p>price</p>
                <h5>{prod.price}</h5>
            </div>
            <h1>{prod.name}</h1>
            {prod.fastDelivery ? (
                <p>Fast Delivery</p>
            ) : (
                <p>4 days delivery</p>
            )}
            <p>{prod.delivery}</p>

            {
                cart.some(p => p.id === prod.id) ? (
                    <button className={styles.shopLink} onClick={() => {
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
