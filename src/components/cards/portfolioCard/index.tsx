import { portfolioType } from "@/components/types/portfolioTypes"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

const PortfolioCard = ({ title, desc, image, link }: portfolioType) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <img src={image} alt={title} className="w-full" />
      <div className="flex flex-col gap-1 items-start">
        <h4 className="lg:text-lg text-sm font-bold italic">{title}</h4>
        <p className="text-textColor/70 leading-5 lg:text-md text-xs">{desc}</p>
      </div>
      <button className="flex items-center gap-2 text-blue-500 hover:text-textColor text-sm" onClick={() => {
        window.open(link)
      }}>
        Visit Website
        <ArrowRight weight="bold"/>
      </button>
    </div>
  )
}

export default PortfolioCard