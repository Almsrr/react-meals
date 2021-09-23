import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import mealsImage from "../../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container">
          <span className={styles.navbarTitle}>React Meals</span>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </nav>
      <div className={styles.mainImage}>
        <img src={mealsImage} alt="meal" />
      </div>
    </header>
  );
};

export default Header;
