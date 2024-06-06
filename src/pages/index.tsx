import ServiceSection from '@/components/sections/service'
import HeroSection from '@/components/sections/hero'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import StorySection from '@/components/sections/story'
import BestProducts from '@/components/sections/bestProducts'
import Maps from '@/components/sections/maps'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dinamika Digital Printing</title>
        <meta name='description' content='Dinamika Digital Printing menggunakan teknologi cetak digital terbaru untuk memastikan hasil cetak yang berkualitas tinggi, tahan lama, dan dengan warna yang cerah. Kami juga menawarkan harga yang kompetitif dan layanan yang ramah dan profesional.' key={'desc'} />
        <meta property='og:description' content='Dinamika Digital Printing menggunakan teknologi cetak digital terbaru untuk memastikan hasil cetak yang berkualitas tinggi, tahan lama, dan dengan warna yang cerah. Kami juga menawarkan harga yang kompetitif dan layanan yang ramah dan profesional.' />
        <meta property='og:description' content='Dinamika Digital Printing' />
      </Head>
      <meta name="google-site-verification" content="muv5NjAwfLB_KAVtx8roEUjxY40Y-0Ut-TbvmUHkCuc" />
      <main className={`${inter.className} xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto w-full gap-16 lg:px-0 px-6`}>
        <HeroSection/>
        <StorySection/>
        <ServiceSection/>
        <BestProducts/>
        <Maps/>
      </main>
    </>
  )
}
