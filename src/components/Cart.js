import React from 'react'
import { useState, useEffect } from 'react'
import { CartState } from '../context/Context';
import styles from '../css/Home.module.css' 
import { Link } from 'react-router-dom';
import StripeButton from './StripeButton';
import Nav from './NavigationBar'
import SeerbitCheckout from "seerbit-reactjs"

const Cart = () => {

    const close = (close) => {
      console.log(close);
    };
    const callback = (response) => {
      console.log(response);
    };
  
    const checkProgress = (progress) => {
      console.log(progress);
    };

    const { 
      state: { cart },
      dispatch,
    }=  CartState();

    const [ total, setTotal ]= useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0));
    }, [cart]);
    

    const options = {
        public_key: "SBPUBK_DQ24K6T5TI1WOAOYPWWYMGMHKDRVEGPW",
        //amount: total,
        amount: 100,
        tranref: new Date().getTime(),
        planId: "",
        customization: {
          theme: {
            border_color: "#000000",
            background_color: "#ECECEC",
            button_color: "#0084A0",
          },
          payment_method: ["card", "account", "transfer", "wallet", "ussd"],
          display_fee: true, // true
          display_type: "embed", //inline
          logo: "logo_url | base64",
        },
      };

    //const initialValue = { fullname: "", email: "", phone: "" };
    //const [formValue, setFormValue] = useState(initialValue);
    //const [formErrors, setFormErrors] = useState({});
    //const [isSubmit, setIsSubmit] = useState(false);
    
    /*const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);
    };*/

    /*useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValue);
        }
    });

    const validate = (values) => {
        const errors = {};
        if  (!values.fullname) {
            errors.fullname = "fullname is required";
        }
        if  (!values.email) {
            errors.email = "email is required";
        }
        if  (!values.phone) {
            errors.phone = "phone number is required";
        }

        return errors;
    };*/

  return (
    <div className={styles.cartpage}>
    <Nav />
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

        {/*<form onSubmit={handleSubmit} className={styles.cartform}>
            <input
                placeholder="Your Name"
                name="fullname"
                type="text"
                className={styles.form}
                value = {formValue.fullname}
                onChange={handleChange}
                required
            /> <br /> <br />
            <input
                placeholder="Your Email"
                name="email"
                type="email"
                className={styles.email}
                value = {formValue.email}
                onChange={handleChange}
                required
            /> <br /> <br />
            <input 
                placeholder="Your Phone Number"
                name="phone"
                type="number"
                className={styles.form}
                value = {formValue.phone}
                onChange={handleChange}
                required
            />

                
            
        </form>*/}

        <div className={styles.total}>
            <h1>Total Amount to be Paid</h1>
            <h2>₦ {total} </h2>
        </div>

        <div className={ styles.testwarning}>
          *Please use the following test credit card for payments*
          <br />
          5555555555554444 - Exp: 01/24 - CVV: 123
        </div>

    

        <div className={styles.proceed1}>
            <Link to="/">
                <button className={styles.shopLink1}>Continue Shopping</button>
            </Link>                      

            {/*<button type="submit" className={styles.shopLink}>Checkout</button>
            <StripeButton price={total} /> */}

            <SeerbitCheckout
              style={{backgroundColor: 'red'}}
              className="btn seerbit-btn"
              type="div"
              tranref={options.tranref}
              currency={"NGN"}
              description={"test"}
              country={"NG"}
              clientappcode="app1"
              public_key={options.public_key}
              callback={callback}
              close={close}
              scriptStatus={checkProgress}
              amount={options.amount}
              tag={"button"}
              full_name={"John Doe"}
              email={"a@b.com"}
              mobile_no={"00000000000"}
              tokenize={false}
              customization={options.customization}
              version={"2"}
              title={"Pay with SeerBit"}
              planId={options.planId}
            />

        </div>
    </section>
    </div>
  )
}

export default Cart
