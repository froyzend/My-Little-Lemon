import css from "./Services.module.css";
import freshFood from "../../../assets/freshFood.png";
import bookTable from "../../../assets/bookTable.png";
import onlineOrder from "../../../assets/onlineOrder.png";

const Services = () => {
  return (
    <section className={css.services}>
      <div className={css.container}>
        <h2 className={css.title}>Our Services</h2>
        <div className={css.cards}>
          <div className={css.card}>
            <img src={onlineOrder} alt="Italian Trulli" className={css.img} />
            <div>
              <h3 className={css.cardTitle}>Online Order and Free Delivery</h3>
              <p className={css.cardText}>
                We believe in delivering not just food but an experience. Little
                Lemon Express ensures that your favorite dishes are delivered
                promptly, so you can enjoy the freshness and flavors just like
                you would in our restaurant.
              </p>
            </div>
          </div>
          <div className={css.card}>
            <img src={bookTable} alt="Italian Trulli" className={css.img} />
            <div>
              <h3 className={css.cardTitle}>Online Order and Free Delivery</h3>
              <p className={css.cardText}>
                We believe in delivering not just food but an experience. Little
                Lemon Express ensures that your favorite dishes are delivered
                promptly, so you can enjoy the freshness and flavors just like
                you would in our restaurant.
              </p>
            </div>
          </div>
          <div className={css.card}>
            <img src={freshFood} alt="Italian Trulli" className={css.img} />
            <div>
              <h3 className={css.cardTitle}>Online Order and Free Delivery</h3>
              <p className={css.cardText}>
                We believe in delivering not just food but an experience. Little
                Lemon Express ensures that your favorite dishes are delivered
                promptly, so you can enjoy the freshness and flavors just like
                you would in our restaurant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
