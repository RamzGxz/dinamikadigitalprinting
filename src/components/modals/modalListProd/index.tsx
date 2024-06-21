import { productTypes } from "@/types/productTypes";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Infinity, Minus, Plus } from "@phosphor-icons/react/dist/ssr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";


const ModalListProd = ({ _id, name, price, quantity, category, image, handlePushOrder, qty, setQty } : {_id: string, name: string, price: number, quantity: number, category: string, image: string, handlePushOrder: Function, qty:number, setQty: Function}) => {
  const { data: session } = useSession()
  const { push } = useRouter()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  const formatRupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)

  const handleMin = () => {
    if (qty <= 1) {
      setQty(1)
    } else {
      setQty(qty -= 1)
    }

  }

  const handlePlus = () => {
    setQty(qty += 1)
  }

  
  return (
    <>
      <button onClick={() => {
        if (session) {
          onOpen()
        } else {
          push('/auth/login')
        }
      }} className="text-background border border-primary bg-primary w-full py-1 rounded-md mt-3 text-center text-xs hover:bg-background hover:text-textColor transition-all duration-300">Add To Cart</button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm" radius="sm" placement="center">
        <ModalContent className="light:bg-background text-textColor">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Product Details</ModalHeader>
              <ModalBody className="flex flex-col w-full gap-3 relative">
                <div className={`w-full rounded-md h-56 bg-no-repeat bg-cover bg-center`} style={{
                  backgroundImage: `url(${image})`
                }}></div>
                <div className="flex flex-col gap-1">
                  <h1 className="italic font-bold text-xl capitalize">{name}</h1>
                  <p className="italic">{formatRupiah}</p>
                  <p className="italic capitalize">{category}</p>
                </div>
                <p className="absolute p-1 px-2 text-sm bg-accent top-0 right-5 rounded-md">
                  {quantity > 500 ? (
                    <Infinity size={24} color="#f9f7f7" weight="bold" />
                  ) : <span className="text-background font-bold">{quantity}</span>}
                </p>
                <div className="flex items-center gap-3">
                  <button className="bg-primary p-1 rounded-md" onClick={handleMin}><Minus weight="bold" color="#f9f7f7" size={16} /> </button>
                  <div className="bg-transparent p-1 rounded-md">{qty}</div>
                  <button className="bg-primary p-1 rounded-md" onClick={handlePlus}><Plus weight="bold" color="#f9f7f7" size={16} /> </button>
                </div>
              </ModalBody>
              <ModalFooter>
                <button onClick={() => {
                  setQty(1)
                  onClose()
                }} className="px-3 py-1 bg-red-500 border border-red-500 hover:bg-transparent hover:text-red-500 text-background rounded-md transition-all duration-300 text-sm">
                  Cancel
                </button>
                <button onClick={() => {
                  setQty(1)
                  onClose()
                  handlePushOrder(_id, name, price, category, image)
                }} className="px-3 py-1 bg-primary border border-primary hover:bg-transparent hover:text-textColor transition-all duration-300 text-background rounded-md text-sm">
                  Order
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalListProd;