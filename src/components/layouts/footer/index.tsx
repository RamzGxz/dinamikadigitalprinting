import { FacebookLogo, Heart, InstagramLogo, Phone, TwitterLogo } from "@phosphor-icons/react"
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
          <p className="text-sm font-light">Dapatkan solusi printing terlengkap dan praktis dengan Digital Printing kami. <br /> Dari desain hingga pengiriman, semua kami urus.</p>
        </div>

        <div className="flex flex-col justify-between gap-3">
          <p className="text-sm">Hubungi kami hari ini untuk mempelajari lebih lanjut tentang <br /> bagaimana Anda dapat membantu.</p>
          <div className="flex gap-2 items-center bg-background p-2 rounded-md justify-between">
            <input type="text" className="bg-transparent text-sm w-full text-textColor focus:outline-none" placeholder="Email anda" />
            <button className="rounded-md bg-primary text-sm p-1 px-2 border border-primary hover:bg-background hover:text-textColor font-medium ">Subscribe</button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3">
          <p className="text-sm">Follow Us</p>
          <div className="flex gap-2 items-center">
            <FacebookLogo weight="bold" color="#f9f7f7" size={24} className="cursor-pointer"/>
            <InstagramLogo weight="bold" color="#f9f7f7" size={24} className="cursor-pointer"/>
            <TwitterLogo weight="bold" color="#f9f7f7" size={24} className="cursor-pointer"/>
          </div>
          <Link href="tel:+6281331473856" className="flex gap-2 items-center hover:underline cursor-pointer">
            <Phone weight="bold" color="#f9f7f7"/>
            <p className="text-sm">+6281331473856</p>
          </Link>
          <Link href="tel:+62895621048269" className="flex gap-2 items-center  hover:underline cursor-pointer">
            <Phone weight="bold" color="#f9f7f7"/>
            <p className="text-sm">+62895621048269</p>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Footer