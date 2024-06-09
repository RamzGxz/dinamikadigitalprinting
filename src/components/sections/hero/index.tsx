import Link from "next/link";
import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-react'
import heroAnimationData from '../../../../public/heroAnimationData.json'


const HeroSection = () => {
  return (
    <div className="flex lg:justify-between justify-center items-center w-full h-screen pt-5 gap-5 flex-row-reverse">
      <div data-aos="fade-left" data-aos-duration="1000" className="w-1/2 lg:flex hidden justify-center items-center">
        {/* <img src={'/undraw_interview_re_e5jn.svg'} width={500} height={500} alt="hero image" className="w-auto h-auto" /> */}
        <Lottie animationData={heroAnimationData} className="w-full" />
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" className="lg:w-1/2 w-full flex items-start flex-col gap-6 lg:text-left text-center">
        <h1 className="text-5xl leading-snug font-black -z-10 ">
          Percetakan Digital Terlengkap di
          <span className="text-secondary"><Typewriter options={{
            strings: ['Banyuwangi', 'Wringinrejo', 'Gambiran'],
            autoStart: true,
            loop: true
          }} /></span></h1>
        <p>Dinamika Digital Printing menggunakan teknologi cetak digital terbaru untuk memastikan hasil cetak yang berkualitas tinggi, tahan lama, dan dengan warna yang cerah. Kami juga menawarkan harga yang kompetitif dan layanan yang ramah dan profesional.</p>
        <div className="flex items-center lg:justify-start justify-center gap-5 w-full">
          <Link href={'/#story'}>
            <button name="ourStory" id="ourStory" className="bg-primary border p-2 rounded-lg px-3 rounded-br-none border-primary text-background hover:bg-background hover:text-textColor transition-all duration-300 font-semibold">
              Our Story
            </button>
          </Link>
          <Link href={'/#best-products'}>
            <button name="bestBtn" id="best" className=" border p-2 rounded-lg px-3 rounded-br-none border-primary text-textColor hover:bg-primary hover:text-background transition-all duration-300 font-semibold">
              Best Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection