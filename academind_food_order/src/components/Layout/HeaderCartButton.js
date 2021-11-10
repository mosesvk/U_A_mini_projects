import {useContext} from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'

import classes from './HeaderCartButton.module.scss'

const HeaderCartButton = ( props) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon /> 
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>

  )
}

export default HeaderCartButton
