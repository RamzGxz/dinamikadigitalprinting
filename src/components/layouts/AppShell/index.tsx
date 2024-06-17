import React from "react"
import Navbar from "../Navbar"
import { useRouter } from "next/router"
import Footer from "../footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NextUIProvider} from "@nextui-org/system";

type AppShellProp = {
  children: React.ReactNode
}

const AppShell = ({children}: AppShellProp) =>{

  const {pathname} = useRouter()
 
  const path = ['/auth/login', '/auth/register', '/404', '/profile/:name']

  return(
    <NextUIProvider>
      <ToastContainer position="top-center"/>
      {!path.includes(pathname) && <Navbar/>}
      {children}
      {!path.includes(pathname) && <Footer/>}
    </NextUIProvider>
  )
}

export default AppShell