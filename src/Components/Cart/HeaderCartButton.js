import React from "react"

import CartIcon from "./CartIcon"
import classes from './HeaderCartButton.module.css'
import CartContext from "../../Store/cart-context"

// 


const HeaderCartButton = props => {

  const cartCtx =  React.useContext(CartContext)

  const noOfCartItems = cartCtx.item.reduce((acc,curr)=>acc+curr.amount , 0)

    return<button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span >Your Cart</span>
        <span className={classes.badge}>{noOfCartItems}</span>
    </button>
}

export default HeaderCartButton