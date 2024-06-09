import AdnroidDevelopmentSection from "@/components/services/androidDevelopment"
import DesignServicesSection from "@/components/services/designServices"
import DinamikaMartSection from "@/components/services/dinamikaMart"
import PhotocopySection from "@/components/services/photocopy"
import PrintingServicesSection from "@/components/services/printingServieces"
import WebDevelopmentSection from "@/components/services/webDevelopment"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

const ServicesPage = () => {
  const { query, push } = useRouter()

  useEffect(() => {
    // Periksa apakah query tidak sesuai dengan opsi yang diharapkan
    const validQueries = [
      "photocopy",
      "printing-services",
      "dinamika-mart",
      "web-development",
      "android-app-development",
      "design-services",
    ];
    if (!validQueries.includes(query.name as string)) {
      
      push("/404");
    }
  }, [query.name, push]);

  return (
    <>
      <Head>
        <title>Dinamika - {query.name?.toString().replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</title>
      </Head>
      <div className="w-full xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto lg:px-0 px-6">
        {query.name === "photocopy" ? (
          <PhotocopySection name={query.name} />
        ) : query.name === 'printing-services' ? (
          <PrintingServicesSection name={query.name} />
        ) : query.name === 'dinamika-mart' ? (
          <DinamikaMartSection name={query.name}  />
        ) : query.name === 'web-delopment' ? (
          <WebDevelopmentSection name={query.name}  />
        ) : query.name === 'android-app-delopment' ? (
          <AdnroidDevelopmentSection name={query.name} />
        ) : query.name === 'design-services' ? (
          <DesignServicesSection name={query.name}  />
        ) : ''}
      </div>
    </>
  )
}

export default ServicesPage