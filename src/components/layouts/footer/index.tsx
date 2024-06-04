import { FacebookLogo, Heart, InstagramLogo, TwitterLogo } from "@phosphor-icons/react"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-primary w-full py-8 text-background">
      <div className="w-full max-w-screen-xl mx-auto flex lg:flex-row flex-col justify-between items-start lg:px-0 px-6 lg:gap-0 gap-5">
        
        <div className="flex flex-col gap-1">
          <Link href={'/#'} className="flex items-center gap-2">
            <Heart color="#f9f7f7" size={32} weight="fill" />
            <p className="font-bold text-xl">Dinamika</p>
          </Link>
          <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Numquam, est.</p>
        </div>

        <div className="flex flex-col justify-between gap-3">
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,<br /> consectetur?</p>
          <div className="flex gap-2 items-center bg-background p-2 rounded-md justify-between">
            <input type="text" className="bg-transparent text-sm w-full text-textColor focus:outline-none" placeholder="your email" />
            <button className="rounded-md bg-primary text-sm p-1 px-2 border border-primary hover:bg-background hover:text-textColor font-medium ">Subscribe</button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3">
          <p className="text-sm">Follow Us</p>
          <div className="flex gap-2 items-center">
            <FacebookLogo weight="bold" color="#f9f7f7" size={24}/>
            <InstagramLogo weight="bold" color="#f9f7f7" size={24}/>
            <TwitterLogo weight="bold" color="#f9f7f7" size={24}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer