import classes from "./Header.module.css";
import HeaderCartButton from "../Cart/HeaderCartButton";
import MealsImage from "../../Assets/MealsImage.png"

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
       <HeaderCartButton onClick={props.openCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img
          src={MealsImage}
          alt="Meals"
        />
      </div>
    </>
  );
};

export default Header;
