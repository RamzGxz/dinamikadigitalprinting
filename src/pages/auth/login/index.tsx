import { EnvelopeSimple, Eye, EyeSlash, Key } from "@phosphor-icons/react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Login = () => {
  const [passView, setPassView] = useState(false)
  return (
    <>
      <Head>
        <title>Dinamika auth service</title>
      </Head>
      <main className="w-full bg-background text-textColor flex justify-center items-center h-screen">
        <div className="w-full max-w-screen-lg mx-auto lg:shadow-xl rounded-lg flex justify-between items-start">
          <div className="lg:w-1/2 w-full flex items-center justify-between flex-col gap-10 lg:p-16 p-10 lg:ms-10">
            <div className="flex w-full flex-col gap-2">
              <h1 className="text-5xl w-full text-center font-black leading-snug">Welcome <span className="text-accent">Back Folks</span></h1>
              <p className="text-center">Silahkan login menggunakan account anda</p>
            </div>
            <form className="w-full flex-col flex gap-5 items-center" onSubmit={(e) => e.preventDefault()}>
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
              <button className="w-full p-2 bg-primary text-background rounded-md text-lg font-bold border-2 border-primary hover:bg-background hover:text-primary transition-all duration-200" type="submit">LOGIN</button>
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="flex justify-center" />
                  <p className="text-sm">Remember me</p>
                </div>
                <Link href={'/auth/forgot'} className="text-sm hover:underline">Lupa Password?</Link>
              </div>
            </form>
            <div className="flex w-full"></div>
          </div>

          <div className="w-1/2 lg:flex hidden justify-end">
            <Image src={'/bglogin.webp'} width={410} height={400} alt="login backgorund" fetchPriority="high" className="rounded-r-lg" />
          </div>

        </div>

      </main>
    </>
  )
}

export default Login

