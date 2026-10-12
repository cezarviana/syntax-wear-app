import { createFileRoute } from '@tanstack/react-router'

import { Categories } from '../../components/Categories'
import { Hero } from '../../components/Hero'
import { Gallery } from '../../components/Gallery'

export const Route = createFileRoute('/_app/')({
  component: Home,
    head: () => ({
    meta: [
      { title: 'Home - SyntaxWear' }
    ]
  })
})

function Home() {
  return (
    <main className="py-6">
      <Hero />
      <Categories />
      <Gallery />
    </main>
  )
}
