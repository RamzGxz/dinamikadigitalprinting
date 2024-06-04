import Image from "next/image"
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <div className="flex lg:justify-between justify-center items-center w-full h-screen pt-5 gap-5 flex-row-reverse">
      <div className="w-1/2 lg:flex hidden justify-center items-center">
        <Image src={'/undraw_interview_re_e5jn.svg'} width={500} height={500} alt="hero image"/>
      </div>
      <div className="lg:w-1/2 w-full flex items-start flex-col gap-6 lg:text-left text-center">
        <h1 className="text-5xl leading-snug font-black -z-10 ">
          Percetakan Digital Terlengkap di 
          <span className="text-secondary"><Typewriter options={{
            strings: ['Banyuwangi', 'Wringinrejo', 'Gambiran'],
            autoStart: true,
            loop: true
          }}/></span></h1>
        <p className="">Dinamika Digital Printing menggunakan teknologi cetak digital terbaru untuk memastikan hasil cetak yang berkualitas tinggi, tahan lama, dan dengan warna yang cerah. Kami juga menawarkan harga yang kompetitif dan layanan yang ramah dan profesional.</p>
        <div className="flex items-center lg:justify-start justify-center gap-5 w-full">
          <button className="bg-primary border p-2 rounded-lg px-3 rounded-br-none border-primary text-background hover:bg-background hover:text-textColor transition-all duration-300 font-semibold">
            Tentang kami
          </button>
          <button className=" border p-2 rounded-lg px-3 rounded-br-none border-primary text-textColor hover:bg-primary hover:text-background transition-all duration-300 font-semibold">
            Produk kami
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection