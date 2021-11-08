import React from 'react'

import logoImg from '../../assets/cfp-cover-1.jpg'
import classes from './MealsSummary.module.scss'

const MealsSummary = () => {
  return (
    <div className={classes.summary}>
      <image src={logoImg} alt='logo img' />
    </div>
  )
}

export default MealsSummary
