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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="tracking-order" element={<TrackOrderPage />} />
            <Route path="personal" element={<PersonalPage />} />
            <Route path="cart" element={<CartProductPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
