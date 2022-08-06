import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styles from '../css/Home.module.css' 

const StripeButton = ({price}) => {
  const priceForStripe = price;
  const publishableKey = 'pk_test_51LTWRKFOJ4ASGBv6Lidn4VxSwqcPqnDv9UqSIiyU8CNyyhN7ZeTDbGUMUAs89zrlncrBFJZHhBo0CJ8SW86oP1BY00yxenXaEy';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      className={styles.checkoutbutton}
      label='Pay Now'
      name='Gadgets Store.'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      allowRememberMe
      stripeKey={publishableKey}
    />
  );
};
export default StripeButton;