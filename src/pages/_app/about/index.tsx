import { createFileRoute, Link } from '@tanstack/react-router'
import bannerAbout from '@/assets/images/about.jpg'

export const Route = createFileRoute('/_app/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='flex flex-col md:flex-row items-center md:h-screen'>
      <div className='h-100 md:h-full md:w-1/2'>
        <img src={bannerAbout} alt="Banner featuring a seated man wearing Syntaxwear footwear." className='size-full object-cover'/>
      </div>
      <div className='text-black px-8 py-16 lg:px-20 md:w-1/2 h-full flex flex-col items-center justify-center'>
        <h2 className='text-5xl lg:text-6xl font-medium text-[#333333] mb-8'>About us</h2>
        <p className='text-[#666666] text-lg leading-relaxed mb-5'>We are passionate about footwear that unites style, comfort, and durability. Our mission? To make you feel good with every step, offering an incredible shopping experience and a selection of sneakers, boots, and shoes for all occasions.</p>
        <Link to="/our-stores" className='self-start text-xs font-bold text-[#333333] uppercase border-b-2 tracking-[0.2em] cursor-pointer hover:text-accent transition-colors duration-500'>Learn more about our Stores</Link>
      </div>
    </section>
  )
}
