import NavLinksFooter from "../Footer/NavLinksFooter/NavLinksFooter.jsx";
import SocialLinks from "./SocialLinks/SocialLinks.jsx";
import Contacts from "./Contacts/Contacts.jsx";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p className={css.logo}>
        Little <span className={css.logoSpan}>Lemon</span>
      </p>
      <NavLinksFooter />
      <SocialLinks />
      <Contacts />
    </footer>
  );
};

export default Footer;
