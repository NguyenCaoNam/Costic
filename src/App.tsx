import './App.css'
import CardProductL from './components/CarProductL/CardProductL'
import CardProductS from './components/CardProductS/CardProductS'
import ForgotPassword from './components/Form/ForgotPassword'
import LoginForm from './components/Form/FormLogin'
import FormSignup from './components/Form/FormSignup'
import Resetpassword from './components/Form/Resetpassword'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <CardProductL />
      <CardProductS />
      <div className="Btn_primary">
        Buy Now
      </div>
      <br />
      <div className='Btn_secondary'>
        Buy Now
      </div>
      <br />
      <div className='Tag'>Skin Care Product</div>
      <br />
      <LoginForm />
      <br />
      <div className='text-[24px]'>SIGNUP</div>
      <FormSignup />
      <br />
      <div className='text-[24px]'>FORGOT PASSWORD</div>
      <ForgotPassword />
      <br />
      <div className='text-[24px]'>RESET PASSWORD</div>
      <Resetpassword />
    </>
  )
}

export default App
