import { CartContext } from '#/contexts/CartContext'
import IconCart from '@/assets/images/icon-cart.png'
import { useContext } from 'react'

interface CartButtonProps {
    onClick?: () => void;
}

export const CartButton = ({ onClick }: CartButtonProps) => {

      const { cart } =
        useContext(CartContext)

  return (
    <button
      className="relative cursor-pointer flex items-center justify-center"
      onClick={onClick}
    >
      <img src={IconCart} alt="shopping cart icon" />
      {cart.length > 0 && (
        <span className="absolute -bottom-2 -right-2 bg-error text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cart.length}
        </span>
      )}
    </button>
  )
}
