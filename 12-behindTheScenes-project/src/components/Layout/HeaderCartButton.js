import {useContext, useEffect, useState} from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'

import classes from './HeaderCartButton.module.scss'

const HeaderCartButton = ( props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(true)
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump: ''}`

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      //cleanup function automatically if put inside a useEffect
      //if we add items one after another (faster than 3 sec.) 
      //this will CLEAR / CLEANUP the function
      clearTimeout(timer)
    }

  }, [cartCtx.items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon /> 
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>

  )
}

export default HeaderCartButton
