import css from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={css.contacts}>
      <h4 className={css.subtitleColumn}>Contact Us</h4>
      <address>
        <ul className={css.listContact}>
          <li className={css.item}>
            <a href="mailto:info@devstudio.com">info@devstudio.com</a>
          </li>
          <li className={css.item}>
            <a href="tel:+110001111111">+11 (000) 111-11-11</a>
          </li>
          <li className={css.item}>
            <a
              className={css.addressText}
              href="https://maps.app.goo.gl/vygZaGdLRqk9f43R8"
              target="_blank"
              rel="noopener noreferrer"
            >
              1678 S. Pioneer Road Salt Lake City UT 84104
            </a>
          </li>
        </ul>
      </address>
    </div>
  );
};

export default Contacts;
