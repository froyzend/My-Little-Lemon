import css from "./Header.module.css";

import NavLinks from "./NavLink/NavLinks.jsx";

const Header = () => {
  return (
    <header>
      <div className={css.containerHeader}>
        <p className={css.logo}>
          Little <span className={css.logoSpan}>Lemon</span>
        </p>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
