import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
