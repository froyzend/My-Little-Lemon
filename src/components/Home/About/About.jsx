import css from "./About.module.css";
import About1 from "../../../assets/about1.png";
import About2 from "../../../assets/about2.png";

const About = () => {
  return (
    <section>
      <div className={css.container}>
        <h2>Our team</h2>
        <p className={css.historyTeam}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam
          molestiae quia soluta distinctio minus ab quidem ad totam saepe at eos
          dolorum facere, laboriosam vitae veniam nihil id alias.
        </p>
        <img src={About1} alt="Team1" />
        <img src={About2} alt="Team" />
      </div>
    </section>
  );
};

export default About;
