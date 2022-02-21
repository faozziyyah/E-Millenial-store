import React from 'react';
import { CartState } from '../context/Context'
import Header from './Header';
import About from './About'
import Footer from './Footer'
import SingleProduct from './SingleProduct';
import styles from '../css/Home.module.css' 
import Filter from './Filter';

function Home() {

  const { 
      state: { products }, 
  } = CartState();

  console.log(products);

  return <div>
      <Header />
      <About />
      <main className={styles.gadgets}>
          <h1>our gadgets</h1>
          <Filter />
          <section className={styles.gallery}>
              {
                   products.map((prod) => {
                       return <SingleProduct prod={prod} key={prod.id} />
                  })
              }
        </section>
      </main>
      <Footer />
  </div>;
}

export default Home;
