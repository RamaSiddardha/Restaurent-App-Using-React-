import React from 'react'

import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../Store/cart-context'

const MealItemForm =props =>{
    
    const cartCtx = React.useContext(CartContext)

    const addItem = (e)=>{
        e.preventDefault()
        cartCtx.addItem(props.item)
    }

    return <form className={classes.form} >
        <Input label='Amount' input={{
            type :'amount_'+props.id,
            id : 'amount',
            min : '1',
            max : '5',
            step : '1',
            defaultValue : '1'
        }}/>
        <button className={classes.button} onClick={addItem} >Add</button>
    </form>
}

export default MealItemForm