import React, {Fragment} from 'react'

import logoCFP from '../../assets/cfp-cover-1.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.scss'

export const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.top}></div>
      <header className={classes.header}>
        <h1>Cheefa's Fried Pies</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <div>
          {/* <img src={logoCFP} alt='logo img' /> */}
        </div>
      </div>
    </Fragment>
  )
}

export default Header;