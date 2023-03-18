import Modal from "../UI/Model";
import classes from "./Cart.module.css";
import React from "react";
import CartContext from "../../Store/cart-context";
// [{ id: "c1", name: "Shisui", amount: 2, price: 12.99 }]

const Cart = (props) => {

  const cartCtx = React.useContext(CartContext)

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.item.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );

  return (
    <Modal closeCart={props.closeCart}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>Colse</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
