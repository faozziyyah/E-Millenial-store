import React from 'react';
import styles from '../css/Home.module.css' 
import {Products} from '../cart.js'

function Gadgets() {
  return <div className={styles.gadgets}>
      {Products.map((product, index) => {
          return (
            <>
                <div class="product" id="p1">
	  	        
                    <div class="image">
	                    <img src={product.src} alt="product" height="120" />
	  	            </div>
	  	            <div class="hover" id="h1">
					    <p>price</p>
					    <h5>{product.price}</h5>
				    </div>
	  	            <h5>{product.name}</h5>
	  	            <div class="shopLink">
	  	                <a href="http" class="addToCart">add to cart</a>
	  	            </div>
	  	        
	  	      </div>
          </>
          )
      })}
  </div>;
}

export default Gadgets;
