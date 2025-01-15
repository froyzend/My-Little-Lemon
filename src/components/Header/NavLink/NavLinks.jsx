import { NavLink } from "react-router-dom";
import css from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <ul className={css.navList}>
      <li className={css.item}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/order">Order</NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/reserve">Reservation</NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
