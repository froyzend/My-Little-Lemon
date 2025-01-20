import css from "./About.module.css";
import About1 from "../../../assets/about1.png";
import About2 from "../../../assets/about2.png";

const About = () => {
  return (
    <section className={css.about}>
      <div className={css.container}>
        <div className={css.history}>
          <h2 className={css.historyTitle}>Our team</h2>
          <p className={css.historyTeam}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            ullam molestiae quia soluta distinctio minus ab quidem ad totam
            saepe at eos dolorum facere, laboriosam vitae veniam nihil id alias.
          </p>
          <h5 className={css.historyHow}>How we created Little Lemon:</h5>
          <ul className={css.list}>
            <li className={css.historyTeam}>
              Our history: the story of Little Lemon{" "}
            </li>
            <li className={css.historyTeam}>
              Our team: the people behind Little Lemon{" "}
            </li>
            <li className={css.historyTeam}>
              Our menu: the food we serve , and how we serve it{" "}
            </li>
            <li className={css.historyTeam}>
              {" "}
              Our progress: how we have changed over time{" "}
            </li>
          </ul>
        </div>
        <div className={css.imgContainer}>
          <img className={css.img1} src={About1} alt="Team1" width={360} />
          <img className={css.img2} src={About2} alt="Team" width={360} />
        </div>
      </div>
    </section>
  );
};

export default About;
