import { EnvelopeSimple, Eye, EyeSlash, GoogleLogo, Key, User } from "@phosphor-icons/react"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"

const Register = () => {
  const [passView, setPassView] = useState(false)
  const [hoverLogo, setHoverLogo] = useState(false)

  return (
    <>
      <Head>
        <title>Dinamika auth service - register</title>
      </Head>
      <main className="w-full bg-background text-textColor flex justify-center items-center h-screen">
        <div className="w-full max-w-screen-lg mx-auto lg:shadow-xl rounded-lg flex justify-between items-start">
          <div className="w-1/2 lg:flex hidden justify-start bg-[url('/bgregister.jpeg')] bg-primary/25 rounded-lg bg-center bg-cover h-[97vh]"></div>

          <div className="lg:w-1/2 w-full flex items-center justify-center flex-col gap-10 lg:px-10 px-6">
            <div className="flex w-full flex-col gap-2">
              <h1 className="text-4xl w-full text-start leading-snug font-bold">Ready to be part of us? <span className="text-accent">Register for free!</span></h1>
            </div>
            <form className="w-full flex-col flex gap-5 items-center" onSubmit={(e) => e.preventDefault()}>
              <div className="w-full p-2 flex items-center gap-2 border-2 border-primary/60 rounded-md">
                <User size={32} color="#1b1b1b" weight="fill" />
                <input type="text" className="focus:outline-none bg-transparent w-full placeholder:text-accent" placeholder="Username" />
              </div>
              <div className="w-full p-2 flex items-center gap-2 border-2 border-primary/60 rounded-md">
                <EnvelopeSimple size={32} color="#1b1b1b" weight="fill" />
                <input type="email" className="focus:outline-none bg-transparent w-full placeholder:text-accent" placeholder="Email" />
              </div>
              <div className="w-full p-2 flex items-center gap-2 border-2 border-primary/60 rounded-md">
                <Key size={32} color="#1b1b1b" weight="fill" />
                <input type={passView ? "text" : "password"} className="focus:outline-none bg-transparent w-full placeholder:text-accent" placeholder="Password" />
                <button onClick={() => setPassView(!passView)}>
                  {passView ? (
                    <Eye size={24} color="#1b1b1b" />
                  ) : (
                    <EyeSlash size={24} color="#1b1b1b" />
                  )}
                </button>
              </div>
              <div className="w-full p-2 flex items-center gap-2 border-2 border-primary/60 rounded-md">
                <Key size={32} color="#1b1b1b" weight="fill" />
                <input type={passView ? "text" : "password"} className="focus:outline-none bg-transparent w-full placeholder:text-accent" placeholder="Confirm Password" />
                <button onClick={() => setPassView(!passView)}>
                  {passView ? (
                    <Eye size={24} color="#1b1b1b" />
                  ) : (
                    <EyeSlash size={24} color="#1b1b1b" />
                  )}
                </button>
              </div>
              <button className="w-full p-2 bg-primary text-background rounded-md text-lg font-bold border-2 border-primary hover:bg-background hover:text-primary transition-all duration-200" type="submit">SIGN UP</button>
              
            </form>
            <div className="flex flex-col gap-5 items-center w-full">
              <div className="flex w-full justify-between gap-5 items-center">
                <div className="bg-primary w-full h-[1px]"></div>
                <p className="font-semibold p-1">OR</p>
                <div className="bg-primary w-full h-[1px]"></div>
              </div>

              <button className="p-2 w-full border-2 bg-primary text-background hover:bg-background hover:text-textColor border-primary rounded-full flex justify-center items-center gap-5 transition-all duration-300" onMouseOver={() => setHoverLogo(true)} onMouseOut={() => setHoverLogo(false)}>
                <GoogleLogo weight="bold" size={32} color={hoverLogo ? '#1b1b1b' : "#f9f7f7"} />
                <p className="font-semibold text-lg">Register with Google</p>
              </button>
            </div>

            <div className="flex justify-center items-center w-full text-sm">
              Sudah Punya Akun? klik&nbsp;<Link href={'/auth/login'} className="underline hover:font-black">disini</Link>&nbsp;untuk login
            </div>
          </div>

        </div>

      </main>
    </>
  )
}

export default Register