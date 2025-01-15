import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./page/HomePage/HomePage.jsx"));
const MenuPage = lazy(() => import("./page/MenuPage/MenuPage.jsx"));
const OrderPage = lazy(() => import("./page/OrderPage/OrderPage.jsx"));
const ReservationPage = lazy(() =>
  import("./page/ReservationPage/ReservationPage.jsx")
);
const LoginPage = lazy(() => import("./page/LoginPage/LoginPage.jsx"));
const NotFoundPage = lazy(() => import("./page/NotFoundPage/NotFoundPage.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/reserve" element={<ReservationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
