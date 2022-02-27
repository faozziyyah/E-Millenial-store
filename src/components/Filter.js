import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { CartState } from '../context/Context';
import styles from '../css/Home.module.css' 

const Filter = () => {

    const { 
        productState: {  sort },
        productDispatch,
    }=  CartState();

    console.log(sort);
    
  return <div className={styles.filter}>
  <section className={styles.filterbar}>

      <span>
          <Form.Check 
              inline
              label="Ascending"
              name="group1"
              type="radio"
              id={`inline-1`}
              onChange={() => 
                productDispatch({
                    type:  "SORT_BY_PRICE",
                    payload: "lowToHigh",
                })
            }
            checked={ sort === "lowToHigh" ? true : false }
          />
      </span>
      <span>
          <Form.Check 
              inline
              label="Descending"
              name="group1"
              type="radio"
              id={`inline-2`}
              onChange={() => 
                productDispatch({
                    type:  "SORT_BY_PRICE",
                    payload: "HighToLow",
                })
            }
            checked={ sort === "highToLow" ? true : false }
          />
      </span>

      <Button 
          variant="light"
          onClick={() => 
                productDispatch({
                    type:  "CLEAR_FILTER",
                })
            }
    >Clear Filters</Button>
    </section>

    <input 
        className={styles.input} 
        type="text" 
        placeholder="search a product" 
        onChange={(e) => {
            productDispatch({
                type:  "FILTER_BY_SEARCH",
                payload: e.target.value,
                })
        }}
    />

  </div>;
};

export default Filter;
