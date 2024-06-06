import { ArrowSquareUpRight, Heart, List, X } from "@phosphor-icons/react"
// import {} from "next-auth/react"
import Link from "next/link"
import { useState } from "react"


const Navbar = () => {
  const [menuView, setMenuView] = useState(false)

  return (
    <>
      <nav className="w-full py-4 border-b fixed top-0 lg:px-0 px-6 bg-background z-50">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto items-center flex justify-between w-full">
          <Link href={'/#'} className="flex items-center gap-2">
            <Heart color="#1b1b1b" size={32} weight="fill" />
            <p className="font-bold">Dinamika</p>
          </Link>

          <div className="lg:hidden">
            <button onClick={() => {
              setMenuView(!menuView)
            }}>
              {menuView ? (
                <X size={32} />
              ) : (
                <List size={32} color="#1b1b1b" />
              )}
            </button>

          </div>
          {/* mobile navbar */}
          <div className={`absolute top-14 left-0 px-6 py-6 z-50 w-full transition-all duration-300 ease-in-out ${menuView ? 'h-screen backdrop-blur-md' : 'h-0'}`}>
            <ul className={`${menuView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out flex flex-col gap-3`}>
              {menuView && (
                <>
                  <li>
                    <Link href={"/"} onClick={() => setMenuView(!menuView)} className="font-bold">Home</Link>
                  </li>
                  <li>
                    <Link href={"/#story"} onClick={() => setMenuView(!menuView)} className="font-bold">Story</Link>
                  </li>
                  <li>
                    <Link href={"/#services"} onClick={() => setMenuView(!menuView)} className="font-bold">Services</Link>
                  </li>
                  <li>
                    <Link href={'/'} className="font-medium hover:text-accent transition-all duration-300 flex items-center gap-1">
                      Products
                      <ArrowSquareUpRight size={22} weight="light" color="#1b1b1b" />
                    </Link>
                  </li>
                  <li>
                    <div className="flex gap-3 flex-col w-full">
                      <Link href={'/auth/login'}>
                        <button id="linkLogin" name="linkLogin" className="px-3 py-1 rounded-md bg-primary text-background font-medium hover:bg-transparent hover:text-textColor transition-all duration-300 border border-primary">Login</button>
                      </Link>
                      <Link href={'/auth/signup'}>
                        <button id="linkReg" name="linkReg" className="px-3 py-1 rounded-md  text-primary font-medium border-primary border hover:bg-primary hover:text-background transition-all duration-300">Sign up</button>
                      </Link>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* desktop navbar */}
          <div className="lg:flex hidden items-center gap-5">
            <Link href={'/'} className="font-medium hover:text-accent transition-all duration-300 ">Home</Link>
            <Link href={'/#story'} className="font-medium hover:text-accent transition-all duration-300">Story</Link>
            <Link href={'/#services'} className="font-medium hover:text-accent transition-all duration-300">Services</Link>
            <Link href={'/'} className="font-medium hover:text-accent transition-all duration-300 flex items-center gap-1">
              Products
              <ArrowSquareUpRight size={22} weight="light" />
            </Link>
            <div className="flex items-center gap-3">
              <Link href={'/auth/login'}>
                <button id="linkLogin" name="linkLogin" className="px-3 py-1 rounded-md bg-primary text-background font-medium hover:bg-background hover:text-textColor transition-all duration-300 border border-primary">Login</button>
              </Link>
              <Link href={'/auth/register'}>
                <button id="linkReg" name="linkReg" className="px-3 py-1 rounded-md bg-background text-primary font-medium border-primary border hover:bg-primary hover:text-background transition-all duration-300">Sign up</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar