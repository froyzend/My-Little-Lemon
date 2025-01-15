import { NavLink } from "react-router-dom";
import css from "./NavLinksFooter.module.css";

const NavLinksFooter = () => {
  return (
    <div>
      <h4 className={css.subtitleColumn}>Navigation</h4>
      <ul className={css.navListFooter}>
        <li className={css.itemFooter}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={css.itemFooter}>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className={css.itemFooter}>
          <NavLink to="/order">Order</NavLink>
        </li>
        <li className={css.itemFooter}>
          <NavLink to="/reserve">Reservation</NavLink>
        </li>
        <li className={css.itemFooter}>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinksFooter;
