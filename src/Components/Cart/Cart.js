import Modal from "../UI/Model";
import classes from "./Cart.module.css";
import React from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = React.useContext(CartContext);

  const TotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addHandler =(item) =>{
    cartCtx.addItem({...item,amount:1})
  }
  const removeHandler =(id) =>{
    cartCtx.removeItem(id)
  }

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeHandler.bind(null,item.id)}
          onAdd={addHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal closeCart={props.closeCart}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{TotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>
          Colse
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
