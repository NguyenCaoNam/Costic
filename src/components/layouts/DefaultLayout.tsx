import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <div className="flex flex-col gap-[64px] w-full">
      <Header />
      <main className="container mx-auto flex flex-col gap-[64px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default DefaultLayout