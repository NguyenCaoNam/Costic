import React from 'react'
import Feature from "../Feature/Feature"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return (
    <div className="flex flex-col gap-[64px] w-full">
      <div id='main'>
        <Header />
        <main className="mx-auto flex flex-col my-10 gap-[64px]">
          <Outlet />
        </main>
        <Feature />
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout