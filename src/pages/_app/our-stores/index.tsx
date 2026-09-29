import { createFileRoute } from '@tanstack/react-router'
import OurStoresBanner from '@/assets/images/banner-our-stores.png'
import OurStoreImg1 from '@/assets/images/store-1.png'
import OurStoreImg2 from '@/assets/images/store-2.png'

export const Route = createFileRoute('/_app/our-stores/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="container py-6">
      <img
        src={OurStoresBanner}
        alt="banner showing the store interior with the sneakers on display"
        className="rounded-2xl h-80 md:h-125 object-cover w-full"
      />

      <div>
        <h1 className="text-black text-2xl max-w-7xl m-auto my-20 text-center">
          Our stores are the heart of our brand. Explore the latest collection,
          try on your favorite models, and feel the comfort of SyntaxWear in
          person.
        </h1>
        <section className="text-black w-full space-y-20">
          <div className="flex flex-col md:flex-row items-center gap-2.5">
            <div className="text-center py-6 px-2">
              <h2 className="text-3xl mb-5">Live News</h2>
              <p>
                Discover this season's new arrivals before everyone else and try
                out our latest styles up close.
              </p>
            </div>
            <img
              src={OurStoreImg1}
              alt="image of a white sneakers"
              className="rounded-2xl md:max-w-[42vw] aspect-10/7 object-cover size-full"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2.5">
            <img
              src={OurStoreImg2}
              alt="image of a white sneakers"
              className="rounded-2xl md:max-w-[42vw] aspect-10/7 object-cover size-full"
            />
            <div className="text-center py-6 px-2">
              <h2 className="text-3xl mb-5">Tailored Service</h2>
              <p>
                Count on style tips, exclusive suggestions, and personalized support from those who truly understand fashion.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
