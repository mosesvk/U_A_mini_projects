import React, {Fragment} from 'react'

import logoCFP from '../../assets/CFP-cover-2.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.scss'

export const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Cheefa's Fried Pies</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        {/* <img src={logoCFP} alt='logo-img'/> */}
      </div>
    </Fragment>
  )
}

export default Header;