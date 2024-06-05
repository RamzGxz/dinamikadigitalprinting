import React from "react"
import Navbar from "../Navbar"
import { useRouter } from "next/router"
import Footer from "../footer"

type AppShellProp = {
  children: React.ReactNode
}

const AppShell = ({children}: AppShellProp) =>{

  const {pathname} = useRouter()
 
  const path = ['/auth/login', '/auth/register', '/404']

  return(
    <div>
      {!path.includes(pathname) && <Navbar/>}
      {children}
      {!path.includes(pathname) && <Footer/>}
    </div>
  )
}

export default AppShell