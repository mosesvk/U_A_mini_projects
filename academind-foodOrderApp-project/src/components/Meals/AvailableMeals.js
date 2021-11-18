import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const AvailableMeals = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchItemsBackEnd = async () => {
      const response = await fetch(
        "https://react-http-b68b7-default-rtdb.firebaseio.com/items.json"
      );
      const responseData = await response.json();

      const loadedItems = [];

      for (const key in responseData) {
        loadedItems.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      } // for in loop responseData

      setProducts(loadedItems)

    }; // fetchItemsBackEnd

    fetchItemsBackEnd();
  }, []); 

  const itemsList = products.map((item) => (
    <MealItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{itemsList}</Card>
    </section>
  );
};

export default AvailableMeals;
