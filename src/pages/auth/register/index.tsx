import Loading from "@/components/loader/loading"
import { Calendar, CalendarBlank, CaretDown, Database, EnvelopeSimple, Eye, EyeSlash, Key, Phone, User } from "@phosphor-icons/react"
import { GetServerSideProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { FormEvent, SyntheticEvent, useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"

const Register = () => {
  const [passView, setPassView] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [brithday, setBirthday] = useState('')
  const [phone, setPhone] = useState('+62')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isPassConfrimed, setIsPassConfirmed] = useState(false)
  const [isLoading, setIsloading] = useState(false)
  const [phoneId, setPhoneId] = useState('ID')
  const [phoneCode, setPhoneCode] = useState('')
  const [phoneIDView, setPhoneIDView] = useState(false)
  const { push } = useRouter()
  const [searchValPhone, setSearhvalPhone] = useState([])
  const [valSearch, setValSearch] = useState("")

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    setIsloading(true)
    if (!username || !phone || !brithday || !password || !email || !confirmPassword) {
      toast.error('Please fill out all field!!!!', { autoClose: 1500 })
      setIsloading(false)
    } else {
      const data = {
        username, email, password, brithday,
        phone: `${phoneCode} ${phone}`,
        image: null,
        type: 'credentials'
      }
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      if (res.status === 200) {
        setIsloading(false)
        toast.success('Register Success! redirected to login page', { autoClose: 1500 })
        setTimeout(() => {
          push('/auth/login')
        }, 1800)
      } else if (res.status === 400) {
        toast.error('Sorry your email has been registered, please change an email address', { autoClose: 3000 })
        setIsloading(false)
      } else {
        toast.error('Method not Allowed!', { autoClose: 1500 })
        setIsloading(false)
      }
    }
  }

  useEffect(() => {
    if (password === confirmPassword) {
      setIsPassConfirmed(true)
    } else {
      setIsPassConfirmed(false)
    }
  }, [password, confirmPassword])

  const [phoneData, setPhoneData] = useState([])

  const getPhoneData = async () => {
    try {
      const res = await fetch('/api/phone/get')
      const result = await res.json()
      setPhoneData(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPhoneData()
  }, [])

  const handleClickPhoneID = (id: string, dial_code: string) => {
    setPhoneId(id)
    setPhoneIDView(!phoneIDView)
    setPhoneCode(dial_code)
    setValSearch('')
  }

  const handleSearchPhone = () => {
    if (valSearch === '') {
      setSearhvalPhone(phoneData);
    } else {
      const filteredData = phoneData.filter((item: any) =>
        item.code.toLowerCase().includes(valSearch.toLowerCase())
      );
      setSearhvalPhone(filteredData);
    }
  };

  useEffect(() => {
    handleSearchPhone()
  }, [valSearch, phoneData])

  return (
    <>
      <Head>
        <title>Dinamika auth service - register</title>
        <meta name='description' content='Dinamika Digital Printing Authentication page - Register' key={'desc'} />
        <meta property='og:description' content='Dinamika Digital Printing Authentication page - Register' />
        <meta property='og:description' content='Dinamika Digital Printing' />
      </Head>
      <main className="w-full bg-background text-textColor flex justify-center items-center h-screen">
        <div className="w-full max-w-screen-lg mx-auto lg:shadow-xl rounded-lg flex justify-between items-start">
          <div className="w-1/2 lg:flex hidden justify-start bg-[url('/bgregister.jpeg')] bg-primary/25 rounded-l-lg bg-center bg-cover h-[85vh]"></div>

          <div className="lg:w-1/2 w-full flex items-center justify-center flex-col gap-5 lg:px-10 px-6">
            <div className="flex w-full flex-col gap-2">
              <h1 className="text-3xl w-full lg:text-start text-center leading-normal font-bold">Ready to be part of us? <span className="text-accent">Register for free!</span></h1>
            </div>
            <form className="w-full flex-col flex gap-5 items-center" onSubmit={handleSubmit}>
              <div className="w-full p-2 flex items-center gap-2 border-2 border-primary/60 rounded-md">
                <User size={32} color="#1b1b1b" weight="fill" />
                <input onChange={(e) => setUsername(e.target.value)} type="text" className="focus:outline-none bg-transparent w-full placeholder:text-accent" placeholder="Full Name" />
              </div>
              <div className="w-full p-2 flex items-center gap-2 border-2 border-primary/60 rounded-md">
                <EnvelopeSimple size={32} color="#1b1b1b" weight="fill" />
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="focus:outline-none bg-transparent w-full placeholder:text-accent" placeholder="Email" />
              </div>
              <div className="w-full p-2 flex items-center gap-2 border-2 border-primary/60 rounded-md">
                <Phone size={32} color="#1b1b1b" weight="fill" />
                <div className="border border-primary/50 rounded-md px-2 py-1 flex gap-1 items-center relative">
                  <button type="button" onClick={() => setPhoneIDView(!phoneIDView)} className="flex items-center gap-1">
                    <p className="text-sm">{phoneId}</p>
                    <CaretDown size={14} weight="bold" color="#1b1b1b" />
                  </button>
                  <div className={` ${phoneIDView ? '' : 'hidden'} flex flex-col gap-1 overflow-x-hidden w-full max-h-48 absolute left-0 top-7 rounded-md bg-background border px-1 py-1`}>
                    <input type="text" className="w-full placeholder:text-xs text-[10px] border focus:outline-none" placeholder="search" onChange={(e) => setValSearch(e.target.value)} value={valSearch} />
                    {searchValPhone && searchValPhone.map((item: { code: string, image: string, name: string, dial_code: string }, index: number) => {
                      return (
                        <button onClick={() => handleClickPhoneID(item.code, item.dial_code)} type="button" className="text-xs flex items-center gap-1" key={index}>
                          <img src={item.image} alt={item.name} width={10} />
                          {item.code}
                        </button>
                      )
                    })}
                  </div>
                </div>
                <p>{phoneCode ? phoneCode : '+62'}</p>
                <input onChange={(e) => setPhone(e.target.value)} type="text" className="focus:outline-none bg-transparent w-full placeholder:text-accent" placeholder="eg: 12345xxxx" />
              </div>
              <div className="w-full p-2 flex items-center gap-2 border-2 border-primary/60 rounded-md">
                <CalendarBlank size={32} color="#1b1b1b" weight="fill" />
                <input onChange={(e) => setBirthday(e.target.value)} type="date" className="focus:outline-none bg-transparent w-full placeholder:text-accent" placeholder="Birthday" />
              </div>
              <div className={`w-full p-2 flex items-center gap-2 border-2 ${isPassConfrimed ? 'border-primary/60' : 'border-red-500'} rounded-md`}>
                <Key size={32} color="#1b1b1b" weight="fill" />
                <input type={passView ? "text" : "password"} className="focus:outline-none bg-transparent w-full placeholder:text-accent" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => setPassView(!passView)} name="viewPassword" id="viewPassword">
                  {passView ? (
                    <Eye size={24} color="#1b1b1b" />
                  ) : (
                    <EyeSlash size={24} color="#1b1b1b" />
                  )}
                </button>
              </div>
              <div className={`w-full p-2 flex items-center gap-2 border-2 ${isPassConfrimed ? 'border-primary/60' : 'border-red-500'} rounded-md`}>
                <Key size={32} color="#1b1b1b" weight="fill" />
                <input type={passView ? "text" : "password"} className="focus:outline-none bg-transparent w-full placeholder:text-accent" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                <button onClick={() => setPassView(!passView)} name="viewConfPassword" id="viewConfPassword">
                  {passView ? (
                    <Eye size={24} color="#1b1b1b" />
                  ) : (
                    <EyeSlash size={24} color="#1b1b1b" />
                  )}
                </button>
              </div>
              <button disabled={isLoading} className="w-full p-2 bg-primary text-background rounded-md text-lg font-bold border-2 border-primary disabled:bg-primary/50 disabled:border-primary/0 hover:bg-background hover:text-primary transition-all duration-300" type="submit">{isLoading ? (
                <div className="flex gap-2 items-center w-full justify-center">
                  <Loading />
                  Loading...
                </div>
              ) : 'REGISTER'}</button>
            </form>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await fetch('/api/phone/get', {
      headers: {
        'Authorization': 'Bearer your-secret-token', // Pastikan menggunakan token yang benar
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    const result = await res.json();
    return {
      props: {
        data: result.data,
      },
    };
  } catch (error: any) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};
