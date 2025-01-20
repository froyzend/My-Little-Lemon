import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ReservationForm from "../../components/Reservations/Form/Form.jsx";

const ReservationPage = () => {
  return (
    <div>
      <Header />

      <ReservationForm />
      <Footer />
    </div>
  );
};

export default ReservationPage;
