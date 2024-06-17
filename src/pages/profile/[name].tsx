import Loading from "@/components/loader/loading";
import { Eye, EyeSlash, Key, Pen } from "@phosphor-icons/react/dist/ssr";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";


const ProfilePage = () => {

  const { data: session }: any = useSession()
  const { query }: any = useRouter()
  const [activeTabs, setActiveTabs] = useState('profile')
  const [usersData, setUsersData]: any = useState(null)
  const [passView, setPassView] = useState(false)
  const [dateClicked, setDateClicked] = useState(false)
  const [loading, setLoading] = useState(false)

  const usernameRef = useRef<HTMLInputElement>(null)
  const EmailRef = useRef<HTMLInputElement>(null)
  const birthdayRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [birthday, setBirthday] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState('')
  const [isPassConfrimed, setIsPassConfirmed] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [oldPassword, setOldPassword] = useState("")

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await session?.user
      setUsersData(data)
    }
    fetchUserData()
  }, [session, loading])

  useEffect(() => {
    if (password === confirmPassword) {
      setIsPassConfirmed(true)
    } else {
      setIsPassConfirmed(false)
    }
  }, [password, confirmPassword])

  useEffect(() => {
    if (usernameRef.current) {
      setUsername(usersData?.name)
    }
    if (EmailRef.current) {
      setEmail(usersData?.email)
    }
    if (birthdayRef.current) {
      setBirthday(usersData?.birthday)
    }
    if (phoneRef.current) {
      setPhone(usersData?.phone)
    }
  }, [usersData, activeTabs, loading])


  const handleSubmitProfile = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const data = { username, email, phone, birthday }
    try {
      const resp = await fetch(`/api/user/update?id=${usersData?.id}`, {
        method: 'POST',
        body: JSON.stringify(data)
      })
      if (resp.status === 200) {
        toast.success('Data has been updated successfully', { autoClose: 1500 })
        setLoading(false)
        setTimeout(() => {
          signOut({
            redirect: true,
            callbackUrl: '/auth/login'
          })
        }, 1800)
      }
    } catch (error) {
      setLoading(false)
      toast.error('Error! please see console!')
      console.log(error)
    }
  }

  const handleSubmitPassword = async (e: FormEvent) => {
    e.preventDefault();
    // setLoading(true)
  
    let data = {};
    if (usersData?.type === 'google') {
      data = { newPassword: password, type: usersData?.type };
    } else {
      data = { oldPassword, newPassword: password, type: usersData?.type };
    }
  
    console.log(data);
    try {
      const resp = await fetch(`/api/user/updatePassword?id=${usersData?.id}`, {
        method: 'POST',
        body: JSON.stringify(data)
      });
  
      if (resp.ok) {
        toast.success('Data has been updated successfully', { autoClose: 1500 });
        // setLoading(false);
        setTimeout(() => {
          signOut({
            redirect: true,
            callbackUrl: '/auth/login'
          });
        }, 1800);
      } else if (resp.status === 400) {
        toast.error('Error! Bad request');
        console.log(resp.type)
      } else {
        toast.error('Error! Server error');
      }
      console.log(resp);
    } catch (error) {
      setLoading(false);
      toast.error('Error! please see console!');
      console.log(error);
    }
  };
  

  return (
    <>
      <Head>
        <title>Dinamika - Profile | {query.name && query.name.replace(/-/g, ' ')}</title>
      </Head>
      <div className="h-screen lg:max-w-screen-lg flex flex-col gap-10 xl:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm mx-auto py-20 lg:px-0 px-6">
        <div className="flex items-center flex-col gap-5 w-full max-w-screen-sm mx-auto">
          <div
            className={`lg:w-1/4 lg:h-40 w-1/4 h-28 rounded-full relative bg-center bg-cover border-2 border-primary bg-no-repeat`}
            style={{ backgroundImage: `url(${usersData?.image})` }}
          >
            <button className="text-xs p-2 rounded-full bg-green-500 absolute bottom-0 right-0 border-4 border-background">
              <Pen size={24} weight="bold" color="#f9f7f7" />
            </button>
          </div>


          <div className="flex items-center justify-between w-2/4 h-8 bg-secondary z-50 rounded-full py-3 relative">
            <button className={`w-1/2 font-medium text-sm flex justify-center items-center z-50 ${activeTabs === 'profile' ? 'text-background' : ''}`} onClick={() => setActiveTabs('profile')}>Profile</button>
            <button className={`w-1/2 font-medium text-sm flex justify-center items-center ${activeTabs === 'password' ? 'text-background' : ''}`} onClick={() => setActiveTabs('password')}>Password</button>
            <div className={`w-1/2 absolute h-8 flex justify-center items-center rounded-full -z-10 top-0 transition-transform duration-200 ${activeTabs === 'profile' ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="w-full bg-primary p-4 rounded-full"></div>
            </div>
          </div>

          <div className="w-full bg-secondary p-4 rounded-lg">
            {activeTabs === 'profile' ? (
              <form action="" className="w-full flex flex-col gap-5" onSubmit={handleSubmitProfile}>
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="fullname" className="font-medium">Fullname :</label>
                  <input type="text" className="bg-transparent focus:outline-none border-2 p-1 text-sm border-primary/30 rounded-md text-primary/70 font-medium capitalize" ref={usernameRef} onChange={(e) => setUsername(e.target.value)} value={username} />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="email" className="font-medium">Email :</label>
                  <input type="email" className="bg-transparent focus:outline-none border-2 p-1 text-sm border-primary/30 rounded-md text-primary/70 font-medium" ref={EmailRef} onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="birthday" className="font-medium">Birthday :</label>
                  <input type={dateClicked ? 'date' : 'text'} className="bg-transparent focus:outline-none border-2 p-1 text-sm border-primary/30 rounded-md text-primary/70 font-medium placeholder:text-primary/70 placeholder:underline" ref={birthdayRef} placeholder={usersData?.birthday || 'Please add a birthday'} onClick={() => setDateClicked(true)} onChange={(e) => setBirthday(e.target.value)} value={birthday} />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="phone" className="font-medium">Phone :</label>
                  <input type="text" className="bg-transparent focus:outline-none border-2 p-1 text-sm border-primary/30 rounded-md text-primary/70 font-medium placeholder:text-primary/70 placeholder:underline" ref={phoneRef} placeholder={usersData?.phone || 'Please add a phone'} onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <button disabled={loading} type="submit" className="w-full rounded-md bg-primary py-2 text-background font-bold border border-primary hover:bg-secondary disabled:bg-primary/60 hover:text-textColor duration-300 transition-all">{loading ? (
                  <div className="flex w-full justify-center items-center py-2">
                    <Loading />
                  </div>
                ) : "Submit"}</button>
              </form>
            ) : (
              <form action="" className="w-full flex flex-col gap-5" onSubmit={handleSubmitPassword}>
                {usersData?.type === 'google' ? (
                  ''
                ) : <div className={`w-full flex flex-col gap-1 rounded-md`}>
                  <label htmlFor="fullname" className="font-medium">Old Password :</label>
                  <div className="flex items-center gap-2 bg-transparent focus:outline-none border-2 p-1 text-sm border-primary/30 rounded-md text-primary/70 font-medium capitalize">
                    <input type={passView ? "text" : "password"} className="focus:outline-none bg-transparent w-full placeholder:text-accent" onChange={(e) => setOldPassword(e.target.value)} />
                    <button type="button" onClick={() => setPassView(!passView)} name="viewPassword" id="viewPassword">
                      {passView ? (
                        <Eye size={24} color="#1b1b1b" />
                      ) : (
                        <EyeSlash size={24} color="#1b1b1b" />
                      )}
                    </button>
                  </div>
                </div>}
                <div className={`w-full flex flex-col gap-1`}>
                  <label htmlFor="fullname" className="font-medium">New Password :</label>
                  <div className={`flex items-center gap-2 ${isPassConfrimed ? '' : 'border-red-500'} bg-transparent focus:outline-none border-2 p-1 text-sm border-primary/30 rounded-md text-primary/70 font-medium capitalize`}>
                    <input type={passView ? "text" : "password"} className="focus:outline-none bg-transparent w-full placeholder:text-accent" onChange={(e) => setPassword(e.target.value)} />
                    <button type="button" onClick={() => setPassView(!passView)} name="viewPassword" id="viewPassword">
                      {passView ? (
                        <Eye size={24} color="#1b1b1b" />
                      ) : (
                        <EyeSlash size={24} color="#1b1b1b" />
                      )}
                    </button>
                  </div>
                </div>
                <div className={`w-full flex flex-col gap-1`}>
                  <label htmlFor="fullname" className="font-medium">Re-type New Password :</label>
                  <div className={`flex items-center gap-2 ${isPassConfrimed ? '' : 'border-red-500'} bg-transparent focus:outline-none border-2 p-1 text-sm border-primary/30 rounded-md text-primary/70 font-medium capitalize`}>
                    <input type={passView ? "text" : "password"} className="focus:outline-none bg-transparent w-full placeholder:text-accent" onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button type="button" onClick={() => setPassView(!passView)} name="viewPassword" id="viewPassword">
                      {passView ? (
                        <Eye size={24} color="#1b1b1b" />
                      ) : (
                        <EyeSlash size={24} color="#1b1b1b" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex w-full justify-end items-end">
                  <Link href={'/'} className="text-blue-500 underline text-sm hover:text-blue-700">Forgot Old Password?</Link>
                </div>

                <button disabled={loading} type="submit" className="w-full rounded-md bg-primary py-2 text-background font-bold border border-primary hover:bg-secondary disabled:bg-primary/60 hover:text-textColor duration-300 transition-all">{loading ? (
                  <div className="flex w-full justify-center items-center py-2">
                    <Loading />
                  </div>
                ) : "Submit"}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;