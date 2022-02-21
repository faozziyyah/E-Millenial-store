import React from 'react';
import styles from '../css/Home.module.css' 
import {Products} from '../cart.js'

function Gadgets() {
  return <div className={styles.gadgets}>
       <h1>our gadgets</h1>
	   <section className={styles.gallery}>
      {Products.map((product, index) => {
          return (
            <>
                <div class={styles.product} id="p1">
	  	        
                    <div class={styles.image}>
	                    <img src={product.img} alt="product" height="120" />
	  	            </div>
	  	            <div class="hover" id="h1">
					    <p>price</p>
					    <h5>{product.price}</h5>
				    </div>
	  	            <h1>{product.name}</h1>
	  	            <div class={styles.shopLink}>
	  	                <a href="http" class="addToCart">add to cart</a>
	  	            </div>
	  	        
	  	      </div>
          </>
          )
      })}
	  </section>
  </div>;
}

export default Gadgets;
