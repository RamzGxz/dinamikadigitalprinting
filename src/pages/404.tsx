import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const Pages = () => {

  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div className="w-full h-screen justify-center items-center flex">
        <div className="flex flex-col items-center justify-center gap-10">
          <Image src="/undraw_page_not_found_re_e9o6.svg" alt="" width={400} height={400} />
          <div className="flex items-center gap-4 flex-col">
            <h1 className="text-3xl font-bold">Teleportasi Gagal! Halamannya Tidak Ada Di Sini.</h1>
            <p className="text-center">Ups! Sepertinya ada masalah teknis. Coba ulangi pencarian Anda <br /> atau jelajahi situs web kami.</p>
            <Link href={'/'}>
              <button className="px-3 py-1 border border-primary bg-primary hover:bg-background hover:text-textColor transition-all duration-300 text-background rounded-md font-bold">
                Kembali
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


export default Pages