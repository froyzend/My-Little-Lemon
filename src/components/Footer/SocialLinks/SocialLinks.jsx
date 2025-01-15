import css from "./SocialLinks.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div>
      <h4 className={css.subtitleColumn}>Social Media</h4>
      <div className={css.socialIcons}>
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noreferrer"
          className={css.socialIcon}
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noreferrer"
          className={css.socialIcon}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/your-profile"
          target="_blank"
          rel="noreferrer"
          className={css.socialIcon}
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
