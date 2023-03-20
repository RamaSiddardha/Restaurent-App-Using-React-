import classes from "./MealItem.module.css";
import MealItemForm from "./MealitemForm";
import React from "react";
import CartContext from "../../../Store/cart-context";

const Mealitem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = React.useContext(CartContext);

  const addItemhandler = (Amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: Amount,
    });
  };

  return (
    <>
      <div className={classes.meal}>
        <h2>{props.name}</h2>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm amountHandler={addItemhandler} item={props.name} />
      </div>
    </>
  );
};

export default Mealitem;
