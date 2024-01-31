import './App.css'
import CardProductL from './Conponent/CarProductL/CardProductL'
import CardProductS from './Conponent/CardProductS/CardProductS'
import LoginForm from './Conponent/Form/FormLogin'
import FormSignup from './Conponent/Form/FormSignup'
import Header from './Conponent/Header/Header'

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
      <FormSignup />
    </>
  )
}

export default App
