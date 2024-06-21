import ModalListProd from "@/components/modals/modalListProd"



const ListProdCard = ({ _id, name, price, quantity, category, image, handlePushOrder, qty, setQty } : {_id: string, name: string, price: number, quantity: number, category: string, image: string, handlePushOrder: Function, qty: number, setQty: Function}) => {

  const formatRupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)

  return (
    <div className="w-full p-3 lg:h-60 border rounded-md relative flex flex-col gap-1 justify-between">
      <div className={`w-full rounded-md h-28 bg-no-repeat bg-cover bg-center`} style={{
        backgroundImage: `url(${image})`
      }}></div>
      <h1 className="mt-3 font-medium capitalize italic text-sm">{name}</h1>
      <p className="text-textColor/60 text-xs font-medium italic">{formatRupiah}</p>
      <p className="absolute px-3 py-1 bg-accent font-medium text-background rounded-md text-xs top-0 right-0 capitalize">{category}</p>
      {/* <button className="text-background border border-primary bg-primary w-full py-1 rounded-md mt-3 text-center text-xs hover:bg-background hover:text-textColor transition-all duration-300">Add To Cart</button> */}
      <ModalListProd _id={_id} category={category} image={image} name={name} price={price} quantity={quantity} key={_id} handlePushOrder={handlePushOrder} qty={qty} setQty={setQty} />
    </div>
  )
}

export default ListProdCard