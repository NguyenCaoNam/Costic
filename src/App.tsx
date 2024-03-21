import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdsLeft from './components/Ads/adsLeft'
import AdsRight from './components/Ads/adsRight'
import Blog from './components/Blog/Blog'
import CardProductL from './components/CarProductL/CardProductL'
import CardProductS from './components/CardProductS/CardProductS'
import Feedback from './components/Feedback/feedback'
import Footer from './components/Footer/Footer'
import ForgotPassword from './components/Form/ForgotPassword'
import LoginForm from './components/Form/FormLogin'
import FormSignup from './components/Form/FormSignup'
import Resetpassword from './components/Form/Resetpassword'
import Header from './components/Header/Header'
import DefaultLayout from './components/layouts/DefaultLayout';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import ShopPage from './Pages/ShopPage';
import TrackOrderPage from './Pages/TrackOrderPage';
import NoPage from './Pages/NoPage';
import PersonalPage from './Pages/PersonalPage';
import CartProductPage from './Pages/CartProductPage';
import WishlistPage from './Pages/WishlistPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout/>}>
            <Route index element={<HomePage />} />
            <Route path="aboutpage" element={<AboutPage />} />
            <Route path="blogpage" element={<BlogPage />} />
            <Route path='contactpage' element={<ContactPage/>} />
            <Route path='shoppage' element={<ShopPage/>} />
            <Route path='trackorderpage' element={<TrackOrderPage/>} />
            <Route path='personalpage' element={<PersonalPage/>} />
            <Route path='cartproduct' element={<CartProductPage/>} />
            <Route path='wishlist' element={<WishlistPage/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
