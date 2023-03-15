import classes from "./Header.module.css";
import HeaderCartButton from "../Cart/HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
       <HeaderCartButton/>
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="Meals"
        />
      </div>
    </>
  );
};

export default Header;
