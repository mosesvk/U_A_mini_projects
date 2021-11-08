import React from 'react'

import classes from './MealsSummary.module.scss'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Fried Pies</h2>
      <p>Choose from our wide variety of Fried Pies</p>
      <p>Each is cooked and baked with high-quality ingredients</p>
    </section>
  )
}

export default MealsSummary
