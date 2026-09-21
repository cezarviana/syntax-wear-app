import { createFileRoute } from '@tanstack/react-router'

import { Categories } from '../../components/Categories'
import { Hero } from '../../components/Hero'
import { Gallery } from '../../components/Gallery'

export const Route = createFileRoute('/_app/')({
  component: Home,
})

function Home() {
  return (
    <main className="py-10">
      <Hero />
      <Categories />
      <Gallery />
    </main>
  )
}
