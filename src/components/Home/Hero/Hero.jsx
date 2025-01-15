import css from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.containerText}>
        <h1 className={css.title}>
          Welcome to Little<span>Lemon</span>
        </h1>
        <p className={css.text}>
          At Little Lemon, we believe in the power of food to bring joy, warmth,
          and unforgettable moments to your table. Our culinary adventure is
          inspired by the vibrant and refreshing essence of lemons – a symbol of
          brightness and zest.
        </p>
      </div>
      <div className={css.btnContainer}>
        <button className={css.btn} type="button">
          Book a Table
        </button>
        <button className={css.btn} type="button">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
