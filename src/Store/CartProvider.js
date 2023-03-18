import CartContext from "./cart-context";
import React from "react";

const Cartprovider =props =>{

    const [CartItem,setCartItem] = React.useState([])

const addItemtoCartHandler = (item) => {
    setCartItem(prv =>[...prv,item])

}

const removeItemFromCarthandler = (id) =>{}

const CartContent={
    item : [...CartItem],
    totalAmount : 0,
    addItem : addItemtoCartHandler,
    removeItem : removeItemFromCarthandler
}

    return <CartContext.Provider value={CartContent}>
        {props.children}
    </CartContext.Provider>
}

export default Cartprovider