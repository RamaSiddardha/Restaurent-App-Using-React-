import classes from "./MealItem.module.css"

const Mealitem = props => {
    const price = `$${props.price.toFixed(2)}`
    return <>
    <div className={classes.meal}>
        <h2>{props.name}</h2>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
    </div>
    <div></div>
    </>
}

export default Mealitem