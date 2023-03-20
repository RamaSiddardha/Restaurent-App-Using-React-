import classes from "./AvailableMeals.module.css";
import React from "react";
import Card from "../UI/Card";
import Mealitem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Biryani",
    description: "Finest Chicken and Special Spices",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Mutton Biryani",
    description: "Finest Mutton and Special Spices",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Kaju Biryani",
    description: "Finest Kaju and Special Spices",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Panner Biryani",
    description: "Fresh Panner and Special Spices",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const Meals = DUMMY_MEALS.map((meals) => (
    <Mealitem
      name={meals.name}
      description={meals.description}
      price={meals.price}
      key={meals.id}
      id ={meals.id}
    />
  ));

  return (
    <Card>
      <section className={classes.meals}>
        <ul>{Meals}</ul>
      </section>
    </Card>
  );
};

export default AvailableMeals;
