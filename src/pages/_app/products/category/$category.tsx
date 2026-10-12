import { ProductList } from '#/components/ProductList'
import { products } from '#/mocks/products'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/category/$category')({
  component: RouteComponent,
    head: () => ({
    meta: [
      { title: 'Products - SyntaxWear' }
    ]
  })
})


function RouteComponent() {

    const { category } = Route.useParams()
    
    const filteredProducts = products.filter(
      (product) =>
        (product.category?.name ?? '').toLocaleLowerCase() ===
        category.toLowerCase(),
    )
    
  return (
    <section className="container pt-44 md:pt-54 pb-10 px-2 md:px-10 mb-10 text-black min-h-[60vh] flex flex-col" >
      <h1 className="text-3xl text-center mb-3">Products List</h1>
      <h2 className="text-center mb-10 p-4">
        Exceptional comfort for your everyday adventures
      </h2>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found in this category.
          <Link to="/products" className="text-accent hover:text-accent-hover underline" >Browser products</Link>
        </p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </section>
  )
}
