import React, {Fragment} from 'react'
import logoCFP from '../../assets/cfp-cover-1.jpg'

import classes from './Header.module.scss'

export const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>Cheefa's Fried Pies</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={logoCFP} alt='logo-img'/>
      </div>
    </Fragment>
  )
}

export default Header;