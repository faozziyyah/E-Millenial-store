import React from 'react';
import { CartState } from '../context/Context'
import About from './About'
import SingleProduct from './SingleProduct';
import styles from '../css/Home.module.css' 
import Filter from './Filter';
import Header from './Header';

function Home() {

  const { 
      state: { products }, 
      productState: { sort, searchQuery },
  } = CartState();

  const transformProducts = () => {
      let sortedProducts = products;

      if (sort) {
          sortedProducts = sortedProducts.sort((a, b) => 
              sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
          );
      }

    if (searchQuery) {
        sortedProducts = sortedProducts.filter((prod) => 
            prod.name.toLowerCase().includes(searchQuery));
    }

      return sortedProducts;
  }

  return <div>
     <Header />
      <About />
      <main className={styles.gadgets}>
          <h1>our gadgets</h1>
          <Filter />
          <section className={styles.gallery}>
              {
                transformProducts().map((prod) => {
                       return <SingleProduct prod={prod} key={prod.id} />
                  })
              }
        </section>
      </main>
  </div>;
}

export default Home;
