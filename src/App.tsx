import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import CartProductPage from "./Pages/CartProductPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import NoPage from "./Pages/NoPage";
import PersonalPage from "./Pages/PersonalPage";
import ProductDetail from "./Pages/ProductDetail";
import ShopPage from "./Pages/ShopPage";
import TrackOrderPage from "./Pages/TrackOrderPage";
import WishlistPage from "./Pages/WishlistPage";
import DefaultLayout from "./components/layouts/DefaultLayout";
import BlogDetail from "./Pages/BlogDetail";
import DealOfTheWeek from "./Pages/DealOfTheWeek";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/Form/FormLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="blog/:id" element={<BlogDetail />} />
            <Route path="trackingorder" element={<TrackOrderPage />} />
            <Route path="personal" element={<PersonalPage />} />
            <Route path="cart" element={<CartProductPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="dealoftheweek" element={<DealOfTheWeek />} />
            <Route element={<DealOfTheWeek />}>
              <Route path="dealoftheweek/product/:id" element={<ProductDetail />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
