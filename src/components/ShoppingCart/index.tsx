import IconCart from '@/assets/images/icon-cart.png'
import { useState } from 'react'
import MensTreeDasher from '@/assets/images/tree-dasher-2-natural-black-boyal-blue.webp'
import MensTreeRunnerNz from '@/assets/images/tree-runner-nz-weathered-brown.webp'
import MensWoolCruiser from '@/assets/images/wool-cruiser-burgundy.webp'
import MensWoolCruiserSlipOn from '@/assets/images/wool-cruiser-slip-on-dark-grey.webp'
import MensWoolCruiserWaterproof from '@/assets/images/wool-cruiser-waterproof-natural-black.webp'
import formatCurrency from '#/utils/format-currency'

const productsInCart = [
  { id: 1, name: 'Produto 1', image: MensTreeDasher, price: 35, quantity: 5 },
  { id: 2, name: 'Produto 2', image: MensTreeRunnerNz, price: 75, quantity: 2 },
  { id: 3, name: 'Produto 3', image: MensWoolCruiser, price: 85, quantity: 4 },
  {
    id: 4,
    name: 'Produto 4',
    image: MensWoolCruiserSlipOn,
    price: 135,
    quantity: 6,
  },
  {
    id: 5,
    name: 'Produto 5',
    image: MensWoolCruiserWaterproof,
    price: 15,
    quantity: 2,
  },
  { id: 1, name: 'Produto 1', image: MensTreeDasher, price: 35, quantity: 5 },
  { id: 2, name: 'Produto 2', image: MensTreeRunnerNz, price: 75, quantity: 2 },
  { id: 3, name: 'Produto 3', image: MensWoolCruiser, price: 85, quantity: 4 },
  {
    id: 4,
    name: 'Produto 4',
    image: MensWoolCruiserSlipOn,
    price: 135,
    quantity: 6,
  },
  {
    id: 5,
    name: 'Produto 5',
    image: MensWoolCruiserWaterproof,
    price: 15,
    quantity: 2,
  },
]

export const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)

  return (
    <>
      <button>
        <img
          src={IconCart}
          alt="shopping cart icon"
          onClick={() => setCartIsOpen(!cartIsOpen)}
        />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 transition-opacity duration-500 ${
          cartIsOpen
            ? 'visible bg-black/70 opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        {/* Drawer */}
        <div
          className={`absolute top-0 bottom-0 right-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 md:w-106 ${cartIsOpen ? 'translate-x-0' : 'translate-x-full'} `}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between px-5">
            <p className="text-2xl font-bold">Cart ({productsInCart.length})</p>
            <button className="text-xl" onClick={() => setCartIsOpen(false)}>
              X
            </button>
          </header>

          <ul className="flex flex-col gap-3 p-4 overflow-y-auto scrollbar-hide h-[calc(100%_-_140px)]">
            {productsInCart.map((product) => (
              <li key={product.id} className="flex flex-col gap-1 px-6">
                <button className="self-end text-xs cursor-pointer">X</button>
                <div className="flex gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col items-start">
                    <p className="mb-1 text-sm">{product.name}</p>
                    <p className="mb-1 text-sm">Quantity: {product.quantity}</p>
                    <p className="mb-3.5">
                      <span className="font-bold mr-1.5">
                        {formatCurrency(product.price)}
                      </span>
                    </p>

                    <div className="flex gap-3 border py-1 px-3">
                      <button className="cursor-pointer">-</button>
                      <p className="">{product.quantity}</p>
                      <button className="cursor-pointer">+</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <footer className="absolute bottom-0 w-full h-22 p-4">
            <button className="w-full h-full bg-black text-white rounded-2xl hover:bg-gray-800 cursor-pointer">
              Go to Checkout
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}
