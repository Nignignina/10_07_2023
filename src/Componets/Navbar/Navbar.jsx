import styles from "./Navbar.module.scss";
import { Link, Outlet } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <div className={`${styles.Navbar_logo} column-1`}> LOGO </div>

        <ul className={`${styles.menu__items} column-4`}>
          <li>
            {" "}
            <Link to="/locations">locations</Link>
          </li>

          <li>
            <Link to="/about">about</Link>
          </li>

          <li>
            {" "}
            <Link to="/contacts"> contacts</Link>
          </li>
          <li>
            {" "}
            <Link to="/login"> Login</Link>
          </li>
        </ul>

        <div className={styles.Navbar_icons}>
          <p>
            {" "}
            <Link to="/">
              <AiTwotoneHome />
            </Link>
          </p>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
