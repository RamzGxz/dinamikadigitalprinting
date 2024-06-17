import { Funnel } from "@phosphor-icons/react/dist/ssr"

const Sidebar = () => {
  return (
    <div className="w-1/6 flex flex-col gap-10  h-screen border-r py-20 items-center">
      <div className="flex items-center gap-2 w-full">
        <Funnel size={32} color="#1b1b1b" weight="fill" />
        <h1 className="text-3xl font-bold">Filters</h1>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <h1 className="text-lg font-medium text-start w-full">Categories</h1>
        <div className="w-full flex items-center gap-2">
          <input type="checkbox" checked className="text-xl" />
          All
        </div>
        <div className="w-full flex items-center gap-2">
          <input type="checkbox" className="text-xl" />
          ATK
        </div>
        <div className="w-full flex items-center gap-2">
          <input type="checkbox" className="text-xl" />
          Service
        </div>
        <div className="w-full flex items-center gap-2">
          <input type="checkbox" className="text-xl" />
          Drink's
        </div>
        <div className="w-full flex items-center gap-2">
          <input type="checkbox" className="text-xl" />
          Food
        </div>
        <div className="w-full flex items-center gap-2">
          <input type="checkbox" className="text-xl" />
          Other
        </div>
      </div>
    </div>
  )
}

export default Sidebar