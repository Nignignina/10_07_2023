import styles from "./Navbar.module.scss";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.Navbar_logo}> LOGO </div>
        <div className={styles.Navbar__menu}>
          <ul className={styles.Navbar__menu__items}>
            <Link to="/locations">
              <li>locations</li>
            </Link>
            <Link to="/about">
              <li> about</li>
            </Link>
            <Link to="/contacts">
              <li> contacts</li>
            </Link>
          </ul>
        </div>
        <div className={styles.Navbar_icons}>
          <Link to="/">
            <p>Home</p>
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
