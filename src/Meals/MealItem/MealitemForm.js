import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm =props =>{
    return <form className={classes.form} >
        <Input label='Amount' input={{
            type :'number',
            id : 'amount',
            min : '1',
            max : '5',
            step : '1',
            defaultValue : '1'
        }}/>
        <button className={classes.button}>Add</button>
    </form>
}

export default MealItemForm