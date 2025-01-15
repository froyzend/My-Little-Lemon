import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Home/Hero/Hero.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import css from "./HomePage.module.css";
import About from "../../components/Home/About/About.jsx";

const HomePage = () => {
  return (
    <div>
      <div className={css.background}>
        <Header />
        <Hero />
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
