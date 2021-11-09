import React from 'react'

import classes from './Cart.module.scss'

const Cart = () => {
  const cartItems = (
    <ul className={classes['cart-items']}>
    {[{id: 'm1', name: 'the Cowboy', amount: 2, price: 5.99 }].map(item => (
      <li>{item.name}</li>
    ))}
    </ul>
  )

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.42</span>
      </div>
      <div className={classes.action}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  )
}

export default Cart
