import { ArrowDown, ArrowSquareUpRight, Bell, CaretCircleDown, CaretDown, CaretUp, Heart, List, User, UserCircle, X } from "@phosphor-icons/react"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
// import {} from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface userData {
  id: string,
  email: string,
  password: string,
  birthday: string,
  username: string,
  phone: string
}

const Navbar = () => {
  const [menuView, setMenuView] = useState(false)
  const { data: session, status }: any = useSession()
  const [detailView, setDetailView] = useState(false)


  return (
    <>
      <nav className="w-full py-4 border-b fixed top-0 lg:px-0 px-6 bg-background z-40">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto items-center flex justify-between w-full">
          <Link href={'/'} className="flex justify-center items-center gap-2">
            <button onClick={() => {
              setMenuView(!menuView)
            }} className="lg:hidden">
              {menuView ? (
                <X size={32} />
              ) : (
                <List size={32} color="#1b1b1b" />
              )}
            </button>
            <Heart color="#1b1b1b" size={32} weight="fill" />
            <p className="font-bold">Dinamika</p>
          </Link>


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
                    <Link href={'/product'} className="font-medium hover:text-accent transition-all duration-300 flex items-center gap-1">
                      Products
                      <ArrowSquareUpRight size={22} weight="light" color="#1b1b1b" />
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* desktop navbar */}
          <div className="flex items-center gap-5">
            <div className="lg:flex hidden items-center gap-5">
              <Link href={'/'} className="font-medium hover:text-accent transition-all duration-300 ">Home</Link>
              <Link href={'/#story'} className="font-medium hover:text-accent transition-all duration-300">Story</Link>
              <Link href={'/#services'} className="font-medium hover:text-accent transition-all duration-300">Services</Link>
              <Link href={'/product'} className="font-medium hover:text-accent transition-all duration-300 flex items-center gap-1">
                Products
                <ArrowSquareUpRight size={22} weight="light" />
              </Link>
              {session?.user && <button className="relative">
                <div className="rounded-full p-1 text-background absolute top-0 right-0 bg-green-800 flex justify-center items-center text-xs"></div>
                <Bell size={20} color="#1b1b1b" weight="bold" />
              </button>}
            </div>
            <div className="flex items-center gap-5">
              <button className="relative lg:hidden" id="notif" name="notifBtn" >
                <div className="rounded-full p-1 text-background absolute top-0 right-0 bg-green-800 flex justify-center items-center text-xs"></div>
                <Bell size={20} color="#1b1b1b" weight="bold" />
              </button>
              {session?.user ? (
                <div className="flex items-center gap-1 rounded-md border-primary relative z-50 cursor-pointer" onMouseOver={() => setDetailView(true)} onMouseLeave={() => setDetailView(false)} onClick={() => setDetailView(!detailView)}>
                  {/* if wanna add images */}
                  {session?.user.image ? (
                    <img alt="user pic" width={30} height={30} className="rounded-full border" src={session?.user.image} />
                  ) : (
                    <UserCircle size={20} color="#1b1b1" weight="fill" />
                  )}

                  <div className={`${detailView ? '' : 'hidden'} absolute top-[30px] border border-t-0 lg:-left-5 -left-24 px-3 py-3 rounded-md flex flex-col items-start gap-1 bg-background`} onMouseOver={() => setDetailView(true)} onMouseLeave={() => setDetailView(false)}>
                    <p className="font-semibold text-xs capitalize cursor-default">
                      {session && session.user ? session.user.username : ''}
                    </p>
                    <p className="text-xs text-wrap cursor-default font-medium">{session?.user.email}</p>
                    <Link href={'/'} className="text-xs hover:font-bold font-medium">Profile</Link>
                    <button id="btnSignOut" name="btnSignOut" className="text-xs text-red-500 hover:font-bold font-medium" onClick={() => signOut()}>Sign out</button>
                  </div>
                </div>
              ) : (
                <>
                  <Link href={'/auth/login'}>
                    <button id="linkLogin" name="linkLogin" className="px-3 py-1 rounded-md bg-primary text-background font-medium hover:bg-background hover:text-textColor transition-all duration-300 border border-primary">Login</button>
                  </Link>
                  <Link href={'/auth/register'}>
                    <button id="linkReg" name="linkReg" className="px-3 py-1 rounded-md bg-background text-primary font-medium border-primary border hover:bg-primary hover:text-background transition-all duration-300">Sign up</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar