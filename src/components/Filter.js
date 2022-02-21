import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from '../css/Home.module.css' 

const Filter = () => {
  return <div className={styles.filter}>

      <span>
          <Form.Check 
              inline
              label="Ascending"
              name="group1"
              type="radio"
              id={`inline-1`}
          />
      </span>
      <span>
          <Form.Check 
              inline
              label="Descending"
              name="group1"
              type="radio"
              id={`inline-2`}
          />
      </span>
      <span>
          <Form.Check 
              inline
              label="Fast delivery only"
              name="group1"
              type="checkbox"
              id={`inline-3`}
          />
      </span>

      <Button variant="light">Clear Filters</Button>

  </div>;
};

export default Filter;
