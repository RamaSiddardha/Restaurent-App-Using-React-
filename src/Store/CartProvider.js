import CartContext from "./cart-context";
import React from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartItemReducer = (state, action) => {
  if (action.type === "ADD ITEM") {
    const UpdatedAmount =
      state.totalAmount + action.items.price * action.items.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.items.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let UpadtedItems;

    if (existingCartItem) {
      const UpadtedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.items.amount,
      };

      UpadtedItems = [...state.items];
      UpadtedItems[existingCartItemIndex] = UpadtedItem;
      console.log(UpadtedItems);
    } else {
      UpadtedItems = state.items.concat(action.items);
    }
    return {
      items: UpadtedItems,
      totalAmount: UpdatedAmount,
    };
  }

  if (action.type === "REMOVE ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex]

    const UpdatedAmount = state.totalAmount - existingCartItem.price

    let UpadtedItems

    if(existingCartItem.amount === 1 ){
      UpadtedItems = state.items.filter(item => item.id !== action.id) 
    }
    else{
    const UpadtedItem = {...existingCartItem , amount : existingCartItem.amount - 1}
    UpadtedItems = [...state.items]
    UpadtedItems[existingCartItemIndex] = UpadtedItem
    }

    return{
      items: UpadtedItems,
      totalAmount: UpdatedAmount,
    };
  }

  return { items: state.items, totalAmount: state.totalAmount };
};

const Cartprovider = (props) => {
  const [CartState, cartItemDispatch] = React.useReducer(
    cartItemReducer,
    defaultCartState
  );

  const addItemtoCartHandler = (item) => {
    cartItemDispatch({ type: "ADD ITEM", items: item });
  };

  const removeItemFromCarthandler = (id) => {
    cartItemDispatch({ type: "REMOVE ITEM", id: id });
  };

  const CartContent = {
    item: CartState.items,
    totalAmount: CartState.totalAmount,
    addItem: addItemtoCartHandler,
    removeItem: removeItemFromCarthandler,
  };

  return (
    <CartContext.Provider value={CartContent}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Cartprovider;
