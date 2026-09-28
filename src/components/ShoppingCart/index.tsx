import IconCart from '@/assets/images/icon-cart.png'
import { useContext, useState } from 'react'
import MensTreeDasher from '@/assets/images/tree-dasher-2-natural-black-boyal-blue.webp'
import MensTreeRunnerNz from '@/assets/images/tree-runner-nz-weathered-brown.webp'
import MensWoolCruiser from '@/assets/images/wool-cruiser-burgundy.webp'
import MensWoolCruiserSlipOn from '@/assets/images/wool-cruiser-slip-on-dark-grey.webp'
import MensWoolCruiserWaterproof from '@/assets/images/wool-cruiser-waterproof-natural-black.webp'
import formatCurrency from '#/utils/format-currency'
import { CartContext } from '#/contexts/CartContext'

export const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)
  const { cart, addToCart, removeFromCart, incrementInCart, decrementInCart } = useContext(CartContext)

  console.log("Cart items: ", cart)

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
            <p className="text-2xl font-bold">Cart ({cart.length})</p>
            <button className="text-xl" onClick={() => setCartIsOpen(false)}>
              X
            </button>
          </header>

          <ul className="flex flex-col gap-3 p-4 overflow-y-auto scrollbar-hide h-[calc(100%_-_140px)]">
            {cart.map((product) => (
              <li key={product.id} className="flex flex-col gap-1 px-6">
                <button className="self-end text-xs cursor-pointer" onClick={() => removeFromCart(product.id)}>X</button>
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
                      <button className="cursor-pointer" onClick={() => decrementInCart(product)}>-</button>
                      <p className="">{product.quantity}</p>
                      <button className="cursor-pointer" onClick={() => incrementInCart(product)}>+</button>
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
