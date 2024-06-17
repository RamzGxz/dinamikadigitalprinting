import Lottie from "lottie-react"
import websiteAnimation from '../../../../public/websiteAnimation.json'
import Link from "next/link"
import { ChartLineUp, Clock, Envelope, Gear, Globe, MapPinArea, Megaphone, PiggyBank, RocketLaunch, ShoppingCart } from "@phosphor-icons/react/dist/ssr"
import KeuntunganCard from "@/components/cards/keuntunganCard"
import { cardType } from "@/components/types/keutunganCardType"
import { Planet } from "@phosphor-icons/react"
import { portfolioType } from "@/components/types/portfolioTypes"
import PortfolioCard from "@/components/cards/portfolioCard"

const WebDevelopmentSection = ({ name }: { name: string }) => {

  const data = [
    {
      title: 'Visibilitas dan Kredibilitas yang Lebih Besar',
      content: 'Dapatkan eksposur online yang lebih luas dan bangun kredibilitas instan dengan website profesional yang dirancang khusus untuk bisnis Anda.',
      icon: <Planet size={32} color="#1b1b1b" weight="bold" />
    },
    {
      title: 'Jangkauan Pelanggan yang Lebih Luas',
      content: 'Perluas jangkauan pemasaran Anda dan tarik pelanggan baru dari seluruh dunia melalui website yang dapat diakses 24/7.',
      icon: <MapPinArea size={32} color="#1b1b1b" weight="bold" />
    },
    {
      title: 'Penjualan dan Konversi yang Lebih Tinggi',
      content: 'Dorong penjualan dan konversi dengan website yang dirancang untuk menghasilkan prospek (lead generation), menampilkan produk atau layanan Anda secara menarik, dan memudahkan proses pembelian.',
      icon: <ShoppingCart size={32} color="#1b1b1b" weight="bold" />
    },
    {
      title: 'Merek yang Lebih Kuat',
      content: 'Ciptakan pengalaman pengguna yang positif dan membangun brand image yang kuat dengan website yang mencerminkan nilai dan identitas bisnis Anda.',
      icon: <Megaphone size={32} color="#1b1b1b" weight="bold" />
    },
    {
      title: 'Komunikasi yang Lebih Efektif',
      content: 'Tingkatkan komunikasi dengan pelanggan dan berikan informasi terbaru dengan mudah melalui website Anda.',
      icon: <Envelope size={32} color="#1b1b1b" weight="bold" />
    },
    {
      title: 'Penghematan Biaya',
      content: 'Web development adalah investasi jangka panjang yang hemat biaya. Website dapat berfungsi sebagai etalase online yang selalu buka, mengurangi kebutuhan untuk materi pemasaran cetak yang mahal.',
      icon: <PiggyBank size={32} color="#1b1b1b" weight="bold" />
    },
    {
      title: 'Analitik dan Wawasan yang Berharga',
      content: 'Dapatkan wawasan berharga tentang perilaku pelanggan dan kinerja pemasaran Anda melalui analitik website yang terperinci.',
      icon: <ChartLineUp size={32} color="#1b1b1b" weight="bold" />
    },
    {
      title: 'Keunggulan Kompetitif',
      content: 'Website yang profesional dan fungsional akan membantu Anda menonjol dari pesaing dan menarik lebih banyak pelanggan.',
      icon: <RocketLaunch size={32} color="#1b1b1b" weight="bold" />
    },
    {
      title: 'Kontrol Penuh',
      content: 'Dengan website, Anda memiliki kendali penuh atas pesan yang Anda sampaikan dan citra yang Anda tampilkan kepada dunia.',
      icon: <Gear size={32} color="#1b1b1b" weight="bold" />
    },
    {
      title: 'Aksesibilitas 24/7',
      content: 'Website Anda selalu tersedia untuk dikunjungi pelanggan, kapan saja dan di mana saja, sehingga Anda tidak akan pernah melewatkan peluang bisnis potensial.',
      icon: <Clock size={32} color="#1b1b1b" weight="bold" />
    },

  ]

  const portfolioData = [
    {
      title: 'Raxxx Project',
      desc: 'Situs web modern untuk pasar NTF dibuat dengan teknologi website terbaru',
      image: 'https://res.cloudinary.com/dwehtizb5/image/upload/v1718132619/portfolio/ft063ij8f06vblf3gzsb.png',
      link: 'https://raxxx.vercel.app/'
    },
    {
      title: 'Ramz AI',
      desc: 'Situs web modern untuk chat bot dengan AI dibuat dengan teknologi website terbaru',
      image: 'https://res.cloudinary.com/dwehtizb5/image/upload/v1718131354/portfolio/ff4a06bd-005d-49f1-abc7-45b013c651ea.png',
      link: 'https://ramz-ai.vercel.app/'
    },
    {
      title: 'UIStellar',
      desc: 'Situs web untuk jual beli design dan template website dengan teknologi terbaru',
      image: 'https://res.cloudinary.com/dwehtizb5/image/upload/v1718131334/portfolio/1a19b42f-b8a6-4c37-917e-d67002915154.png',
      link: 'https://uistellar.com'
    },
    {
      title: 'Mudapedia',
      desc: 'Mudapedia adalah perusahaan yang melayani berbagai masalah Teknologi anda',
      image: 'https://res.cloudinary.com/dwehtizb5/image/upload/v1718131232/portfolio/ddd98f9b-3b0c-4df3-bb77-4b0f5197a43d.png',
      link: 'https://mudapedia.my.id'
    },
    {
      title: 'Lereng Ijen Coffee',
      desc: 'Website yang melayani penjualan kopi asli dari lereng gunung ijen',
      image: 'https://res.cloudinary.com/dwehtizb5/image/upload/v1718132703/portfolio/d5174c3b-5024-4c8a-b3d2-77d65cf2ec63.png',
      link: 'https://lereng-ijen-coffee.vercel.app/'
    },
    {
      title: 'Zeldabil UMKM',
      desc: 'Website yang menjadi wadah untuk UMKM Banyuwangi agar bisa bergerak dalam era digital',
      image: 'https://res.cloudinary.com/dwehtizb5/image/upload/v1718132864/portfolio/bd7b90f3-3884-4503-bea0-a831d84bf9a2.png',
      link: 'https://zeldabil-umkm.vercel.app/'
    },
    {
      title: 'SMANSA SOT',
      desc: 'Sistem Informasi Alumni dari SMAN 1 Banyuwangi, website untuk mencari informasi Alumni',
      image: 'https://res.cloudinary.com/dwehtizb5/image/upload/v1718132905/portfolio/ce858ca6-bba7-48ed-9807-f1b724573f4c.png',
      link: 'https://alumnismanta.vercel.app/'
    },
    {
      title: 'Situs PMB STIKOM Banyuwangi',
      desc: 'Situs Pendaftaran Mahasiswa Baru untuk kampus IT yaitu STIKOM Banyuwangi',
      image: 'https://res.cloudinary.com/dwehtizb5/image/upload/v1718133056/portfolio/p7afbzctrcsddbrq3hc1.png',
      link: 'https://pkkmb-landing-page.vercel.app//'
    },
    {
      title: 'Viralizz',
      desc: 'Layanan media sosial untuk membantu penjualan produk dalam era digital',
      image: 'https://res.cloudinary.com/dwehtizb5/image/upload/v1718133129/portfolio/2c822d53-5eed-4f23-9dce-cd464aabc944.png',
      link: 'https://viralizz.vercel.app/'
    },
  ]

  return (
    <div className="flex flex-col items-center w-full py-20">
      <div className=" w-full flex flex-col gap-3 py-8 justify-center items-center rounded-lg bg-primary text-background">
        <h1 className="lg:text-3xl md:text-xl text-lg font-medium italic">Temukan produk baru kami!!!!</h1>
        <h1 className="lg:text-7xl md:text-3xl text-4xl font-extrabold text-center text-gradient">Dinamika POS</h1>
        <p className="italic lg:mt-5 text-center">Klik tautan ini untuk melihat demonya! <button onClick={() => window.open('https://pos.dinamikaprinting.my.id')} className="text-blue-500 underline font-medium ms-2 italic">pos.dinamikaprinitng.my.id</button></p>
      </div>

      <div className="flex flex-col gap-5 w-full pt-28">
        <h1 className="lg:text-8xl text-5xl italic font-extrabold text-center">What is Web Development?</h1>
        <div className="w-full flex justify-between items-start">
          <div className="lg:w-1/2 hidden lg:flex">
            <Lottie animationData={websiteAnimation} className="w-full" />
          </div>

          <div className="lg:w-1/2 w-full flex flex-col items-start justify-between gap-5 py-28">
            <h1 className="text-4xl font-black italic">Web Development</h1>
            <p>Web development adalah proses strategis dalam menciptakan dan mengelola situs web yang fungsional dan menarik. Ini lebih dari sekadar desain cantik; ini melibatkan berbagai aspek teknis dan kreatif untuk memastikan situs web tidak hanya terlihat bagus tetapi juga bekerja dengan efisien dan memberikan pengalaman pengguna yang optimal.</p>
            <p>Ini mencakup berbagai elemen seperti pemrograman, pengembangan backend dan frontend, pengujian, serta optimalisasi untuk mesin pencari (SEO). Dengan pendekatan yang tepat, web development dapat membantu membangun kehadiran online yang kuat dan efektif untuk mencapai tujuan bisnis Anda, menarik audiens target, dan meningkatkan konversi serta loyalitas pelanggan.</p>
            <Link href={`${name}#portfolio`} className="bg-primary text-background hover:bg-background hover:text-textColor transition-all duration-200 p-1 text-sm rounded-lg px-2 border border-primary">Lihat Portfolio</Link>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-28 items-center">
        <h1 className="lg:text-5xl text-3xl font-bold leading-snug italic text-center">Solusi cerdas untuk kebutuhan Anda!</h1>
        <div className="flex justify-between lg:flex-row flex-col items-center w-full gap-5">
          <div className="w-full grid lg:grid-cols-5 grid-cols-2 gap-5">
            {data.map((item: cardType, index) => {
              console.log(item.icon)
              return (
                <KeuntunganCard title={item.title} content={item.content} icon={item.icon} key={index} />
              )
            })}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-28 items-center py-28" id="portfolio">
        <h1 className="lg:text-5xl text-3xl text-center font-bold leading-snug italic">Apa yang sudah kami capai?</h1>
        <div className="w-full grid lg:grid-cols-3 grid-cols-2 lg:gap-16 gap-5">
          {portfolioData.map((item: portfolioType, index) => {
            return (
             <PortfolioCard title={item.title} desc={item.desc} image={item.image} link={item.link} key={index}/> 
            )
          })}
        </div>
      </div>


    </div>
  )
}

export default WebDevelopmentSection
