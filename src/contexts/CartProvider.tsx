import { useState } from 'react'
import { CartContext } from './CartContext'
import type { Product } from '#/interfaces/product'

interface CartProviderProps {
  children: React.ReactNode
}

export interface ProductCart extends Product {
  quantity: number
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductCart[]>([])

  function addToCart(product: Product): void {
    const productExistInCart = cart.find(
      (ItemInCart) => ItemInCart.id === product.id,
    )

    let newCart

    if (productExistInCart) {
      newCart = cart.map((itemInCart) =>
        itemInCart.id === product.id
          ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
          : itemInCart,
      )
    } else {
      newCart = [...cart, { ...product, quantity: 1 }]
    }

    const newProduct = { ...product, quantity: 1 }

    setCart(newCart)
  }

  function removeFromCart(productId: number): void {
    setCart(cart.filter((itemInCart) => itemInCart.id !== productId))
  }

  function incrementInCart(product: ProductCart): void {
    updateProductQuantity(product, product.quantity + 1)
  }

  function decrementInCart(product: ProductCart): void {
    updateProductQuantity(product, product.quantity - 1)
  }

  function updateProductQuantity(
    product: ProductCart,
    newQuantity: number,
  ): void {
    if (newQuantity <= 0) return

    const productExistInCart = cart.find(
      (ItemInCart) => ItemInCart.id === product.id,
    )

    if (!productExistInCart) return

    const newCart = cart.map((itemInCart) =>
      itemInCart.id === product.id
        ? { ...itemInCart, quantity: newQuantity }
        : itemInCart,
    )

    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementInCart,
        decrementInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// - remove product to the cart
// - increment product to the cart
// - decrement product to the cart
