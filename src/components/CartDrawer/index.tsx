import { useContext, useState } from 'react'
import formatCurrency from '#/utils/format-currency'
import { CartContext } from '#/contexts/CartContext'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, removeFromCart, incrementInCart, decrementInCart } =
    useContext(CartContext)

  return (
    <>
      {/* Overlay */}
      <div
        className={`${isOpen ? ' bg-black/70 visible inset-0 z-50' : 'bg-transparent inset-0 z-50 invisible'} fixed  text-black transition-all duration-600 ease-in-out`}
        onClick={onClose}
      >
        {/* Drawer 
            translate-x-0: Drawer is open on screen;
            translate-x-full: Drawer is "closed" outside of the screen on the right side;
        */}
        <div
          className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} absolute top-0 bottom-0 right-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 md:w-106`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between px-5">
            <p className="text-2xl font-bold">Cart ({cart.length})</p>
            <button className="text-xl cursor-pointer" onClick={onClose}>
              X
            </button>
          </header>

          <ul className="flex flex-col gap-3 p-4 overflow-y-auto scrollbar-hide h-[calc(100%_-_140px)]">
            {cart.map((product) => (
              <li key={product.id} className="flex flex-col gap-1 px-6">
                <button
                  className="self-end text-xs cursor-pointer"
                  onClick={() => removeFromCart(product.id)}
                >
                  X
                </button>
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
                      <button
                        className="cursor-pointer"
                        onClick={() => decrementInCart(product)}
                      >
                        -
                      </button>
                      <p className="">{product.quantity}</p>
                      <button
                        className="cursor-pointer"
                        onClick={() => incrementInCart(product)}
                      >
                        +
                      </button>
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
