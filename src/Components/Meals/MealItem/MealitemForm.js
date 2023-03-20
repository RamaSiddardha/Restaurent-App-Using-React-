import React from 'react'

import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'


const MealItemForm =props =>{
    
    const refamount = React.useRef()

    const addItem = (e)=>{
        e.preventDefault()
        props.amountHandler(+refamount.current.value)
    }

    return <form  onSubmit={addItem} className={classes.form} >
        <Input ref={refamount} label='Amount' input={{
            type :'amount_'+props.id,
            id : 'amount',
            min : '1',
            max : '5',
            step : '1',
            defaultValue : '1'
        }}/>
        <button type='submit' className={classes.button} >Add</button>
    </form>
}

export default MealItemForm