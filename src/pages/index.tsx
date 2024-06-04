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
      </Head>
      <main className={`${inter.className} max-w-screen-xl mx-auto w-full gap-16 lg:px-0 px-6`}>
        <HeroSection/>
        <StorySection/>
        <ServiceSection/>
        <BestProducts/>
        <Maps/>
      </main>
    </>
  )
}