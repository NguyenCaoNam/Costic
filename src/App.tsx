import './App.css'
import CardProductL from './Conponent/CarProductL/CardProductL'
import CardProductS from './Conponent/CardProductS/CardProductS'
import Header from './Conponent/Header/Header'

function App() {
  return (
    <>
      <Header />
      <CardProductL />
      <CardProductS />
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    </>
  )
}

export default App
