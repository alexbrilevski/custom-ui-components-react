import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import styles from "./Header.module.css";

function Header() {
  const getNavLinkStyle = (NavData: {isActive: boolean}) => {
    return NavData.isActive ? `${styles.item} ${styles.active}` : styles.item;
  };

  return (
    <div className={styles.navbar}>
      <NavLink to={PATH.BASICS} className={(NavData)=> getNavLinkStyle(NavData)}>
        Basics
      </NavLink>
      <span className={`${styles.item} ${styles.menuButton}`}>Menu</span>
    </div>
  );
}

export default Header;
