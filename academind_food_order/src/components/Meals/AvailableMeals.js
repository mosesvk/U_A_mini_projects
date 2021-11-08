import React from 'react'

import Card from '../UI/Card';
import classes from './AvailableMeals.module.scss'

const DUMMY_ITEMS = [
  {
    id: 'm1',
    name: 'Beef Mushroom',
    description: '100% Beef with mushroom and sauce',
    price: 5.99,
  },
  {
    id: 'm2',
    name: 'the Cowboy',
    description: 'Beef & Swiss',
    price: 5.99,
  },
  {
    id: 'm3',
    name: 'Nutella Banana',
    description: 'Nutella with Banana',
    price: 3.99,
  },
  {
    id: 'm4',
    name: 'Pineapple',
    description: 'Fresh Pineapple',
    price: 3.99,
  },
];

const AvailableMeals = () => {
  const itemsList = DUMMY_ITEMS.map(item => <li>{item.name}</li>)

  return (
    <section className={classes.meals}>
      <Card>
        {itemsList}
      </Card>
    </section>
  )
}

export default AvailableMeals
