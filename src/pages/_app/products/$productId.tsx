import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '#/mocks/products'
import { formatCurrency } from '#/utils/format-currency'
import { useContext } from 'react'
import { CartContext } from '#/contexts/CartContext'
import { ZipCodeForm } from '#/components/ZipCode'

export const Route = createFileRoute('/_app/products/$productId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { addToCart } = useContext(CartContext)

  const { productId } = Route.useParams()

  const filteredProduct = products.find(
    (product) => product.id === Number(productId),
  )

  if (!filteredProduct)
    return (
      <section className="container mb-10 pt-44 md:pt-54 pb-10 px-2 md:px-10 mb-10 text-black text-center flex flex-col align-center justify-center bg-surface min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4">Product not found</h1>
        <p className="mb-6">
          {' '}
          The product you are looking for does not exist or is not available.
        </p>
        <Link to="/products" className="text-accent hover:text-accent-hover underline" >Browser products</Link>
      </section>
    )

  const originalPrice = filteredProduct?.price ?? 0
  const discountPrice = originalPrice * 0.9

  // preço parcelado
  const inInstallmentsPrice = originalPrice / 6

  return (
    <section className="container mb-10 pt-44 md:pt-54 pb-10 px-2 md:px-10 mb-10 text-black bg-surface">
      <nav className="text-black text-sm mb-5">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> /{' '}
        <span className="font-semibold">{filteredProduct?.name}</span>
      </nav>
      <div className="flex justify-center gap-10">
        <img
          src={filteredProduct?.image}
          alt={filteredProduct?.name}
          className="w-[500px] bg-white rounded-2xl"
        />

        <div className="text-black">
          <h1 className="text-3xl font-bold mb-1">{filteredProduct?.name}</h1>
          <p className="">Color: {filteredProduct?.color}</p>
          <p className="line-through text-sm text-[#878787]">
            {formatCurrency(originalPrice)}
          </p>
          <p className="text-2xl font-bold mb-2">
            {formatCurrency(discountPrice)} with PIX
          </p>
          <p className="font-semibold text-sm text-[#878787]">Discount: 10%</p>
          <p className="mb-3 text-black">
            or <span className="text-[#38372A] font-semibold">6x</span> of{' '}
            <span className="text-[#38372A] font-semibold">
              {formatCurrency(inInstallmentsPrice)}
            </span>
            <p className="max-w-[500px] my-5">{filteredProduct?.description}</p>
          </p>
          <div className="mb-3">
            <p>Estimated delivery</p>

            <ZipCodeForm />
          </div>
          <button
            className="bg-black text-white w-full p-5 rounded-md cursor-pointer hover:bg-gray-800"
            onClick={() => addToCart(filteredProduct)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  )
}
