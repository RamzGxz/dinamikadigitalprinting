import Loading from "@/components/loader/loading"
import { EnvelopeSimple, Eye, EyeSlash, GoogleLogo, Key } from "@phosphor-icons/react"
import { signIn } from "next-auth/react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { FormEvent, useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"


const Login = () => {
  const [passView, setPassView] = useState(false)
  const [hoverLogo, setHoverLogo] = useState(false)
  const [isRemember, setIsRemember] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const emailRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)
  const { push } = useRouter()
  const [isLoading, setIsloading] = useState(false)

  const [user, setUser] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user')
      return storedUser ? JSON.parse(storedUser) : null
    }
    return null
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }
  }, [])

  useEffect(() => {
    if (user && emailRef.current && passRef.current) {
      emailRef.current.value = user.email
      passRef.current.value = user.password
      setEmail(user.email)
      setPassword(user.password)
    }
  }, [user])

  const handleChangeEmail = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const handleChangePassword = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const handleIsRemember = () => {
    setIsRemember(!isRemember)
  }

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    setIsloading(true)
    const userData = { email, password }
    try {
      if (isRemember && email && password) {
        localStorage.setItem('user', JSON.stringify(userData))
      }
      try {
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        })

        if (result?.error) {
          toast.error('Login Failed!, Please check your crendentials!', { autoClose: 1500 })
          setIsloading(false)
          console.log(result)
        } else {
          setIsloading(false)
          toast.success('Login Succesfull, you will be redirected to Home', { autoClose: 1500 })
          setTimeout(() => {
            push('/')
          }, 1800)
        }
      } catch (err) {
        console.log(err)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleLoginGoogle = async (e: any) => {
    e.preventDefault()
    try {
      const result = await signIn('google', {
        redirect: false,
        callbackUrl: '/'
      })

      if (result?.error) {
        toast.error('Login Failed!, Please check your crendentials!', { autoClose: 1500 })
      }
      // else {
      //   toast.success('Login Succesfull, you will be redirected to Home', { autoClose: 1500 })
      // }
    } catch (err) {
      console.error('Login error:', err)
    }
  }


  return (
    <>
      <Head>
        <title>Dinamika auth service - login</title>
        <meta name='description' content='Dinamika Digital Printing Authentication page -Login' key={'desc'} />
        <meta property='og:description' content='Dinamika Digital Printing Authentication page -Login' />
        <meta property='og:description' content='Dinamika Digital Printing' />
      </Head>
      <main className="w-full bg-background text-textColor flex justify-center items-center h-screen">
        <div className="w-full max-w-screen-lg mx-auto lg:shadow-xl rounded-lg flex justify-between items-start">
          <div className="lg:w-1/2 w-full flex items-center justify-between flex-col gap-10 lg:p-10 p-10 lg:ms-10">
            <div className="flex w-full flex-col gap-2">
              <h1 className="text-5xl w-full text-center leading-snug">Hello, <span className="text-accent font-black">Welcome</span></h1>
              <p className="text-center">Silahkan login menggunakan account anda</p>
            </div>
            <form className="w-full flex-col flex gap-5 items-center" onSubmit={handleLogin}>
              <div className="w-full p-2 flex items-center gap-2 border-2 border-primary/60 rounded-md">
                <EnvelopeSimple size={32} color="#1b1b1b" weight="fill" />
                <input type="email" id="email" className="focus:outline-none bg-transparent w-full placeholder:text-accent" placeholder="Email" onChange={handleChangeEmail} ref={emailRef} />
              </div>
              <div className="w-full p-2 flex items-center gap-2 border-2 border-primary/60 rounded-md">
                <Key size={32} color="#1b1b1b" weight="fill" />
                <input type={passView ? "text" : "password"} id="password" className="focus:outline-none bg-transparent w-full placeholder:text-accent" placeholder="Password" onChange={handleChangePassword} ref={passRef} />
                <button type="button" onClick={() => setPassView(!passView)} id="viewPassword" name="view password">
                  {passView ? (
                    <Eye size={24} color="#1b1b1b" />
                  ) : (
                    <EyeSlash size={24} color="#1b1b1b" />
                  )}
                </button>
              </div>
              <button disabled={isLoading} className="w-full p-2 bg-primary text-background rounded-md text-lg font-bold border-2 border-primary disabled:bg-primary/50 disabled:border-primary/0 hover:bg-background hover:text-primary transition-all duration-200" type="submit">{isLoading ? (
                <div className="flex gap-2 items-center w-full justify-center">
                  <Loading />
                  Loading...
                </div>
              ) : 'LOGIN'}</button>
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="flex justify-center" onChange={handleIsRemember} />
                  <p className="text-sm">Remember me</p>
                </div>
                <Link href={'/auth/forgot'} className="text-sm hover:underline">Lupa Password?</Link>
              </div>
            </form>
            <div className="flex flex-col gap-5 items-center w-full">
              <div className="flex w-full justify-between gap-5 items-center">
                <div className="bg-primary w-full h-[1px]"></div>
                <p className="font-semibold p-1">OR</p>
                <div className="bg-primary w-full h-[1px]"></div>
              </div>

              <button className="p-2 w-full border-2 bg-primary text-background hover:bg-background hover:text-textColor border-primary rounded-full flex justify-center items-center gap-5 transition-all duration-300" onMouseOver={() => setHoverLogo(true)} onMouseOut={() => setHoverLogo(false)} id="googleBtn" name="loginBtnGoogle" onClick={handleLoginGoogle}>
                <GoogleLogo weight="bold" size={32} color={hoverLogo ? '#1b1b1b' : "#f9f7f7"} />
                <p className="font-semibold text-lg">Continue with Google</p>
              </button>
            </div>

            <div className="flex flex-col w-full gap-3 items-center justify-center">
              <div className="flex justify-center items-center w-full lg:text-sm text-xs">
                Belum Punya Akun? klik&nbsp;<Link href={'/auth/register'} className="underline hover:font-black">disini</Link>&nbsp;puntuk melakukan registrasi
              </div>
              <Link href={'/'} className="py-1 rounded-md  px-5 border border-primary bg-primary text-background hover:bg-background hover:text-textColor transition-all duration-300">Back</Link>
            </div>

          </div>

          <div className="w-1/2 lg:flex hidden justify-end bg-[url('/bglogin.webp')] h-[90vh] rounded-r-lg bg-cover bg-center"></div>

        </div>

      </main>
    </>
  )
}

export default Login

