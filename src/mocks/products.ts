import manTreeDasher from '@/assets/images/tree-dasher-2-natural-black-boyal-blue.webp'
import manTreeRunnerNz from '@/assets/images/tree-runner-nz-weathered-brown.webp'
import manWoolCruiser from '@/assets/images/wool-cruiser-burgundy.webp'
import manWoolCruiserSlipOn from '@/assets/images/wool-cruiser-slip-on-dark-grey.webp'
import manWoolCruiserWaterproof from '@/assets/images/wool-cruiser-waterproof-natural-black.webp'
import manWoolRunnerNzWaterproof from '@/assets/images/wool-runner-nz-waterproof-medium-grey.webp'
import manWoolRunnerNzMidWaterproof from '@/assets/images/wool-runner-nz-mid-waterproof-natural-black.webp'
import manStriderExplore from '@/assets/images/strider-explore-rustic-green.webp'
import manCruiserMidExplore from '@/assets/images/cruiser-mid-explore-rustic-green.webp'
import manCruiser from '@/assets/images/cruiser_blizzard_blizzard.webp'

export const products = [
   {
       id: 1,
       name: 'man tree dasher 2',
       image: manTreeDasher,
       price: 135,
       color: 'Natural Black/Royal blue',
       description: 'Performance sneaker made from breathable tree fiber fabric, with excellent cushioning and support. Ideal for workouts and daily wear, offering comfort and modern style.',
       category: {id: 1, name: 'man' }
   },
   {
       id: 2,
       name: 'man tree runner nz',
       image: manTreeRunnerNz,
       price: 110,
       color: 'Weathered Brown',
       description: 'Lightweight and comfortable sneaker made from natural eucalyptus fabric. It features a soft touch, breathability, and a versatile design that complements any casual look.',
       category: {id: 2, name: 'casual' }
   },
   {
       id: 3,
       name: 'man wool cruiser',
       image: manWoolCruiser,
       price: 100,
       color: 'Burgundy',
       description: 'Shoe made with soft merino wool that keeps feet warm and comfortable. Stylish, durable, and perfect for cold days without sacrificing a modern look.',
       category: {id: 4, name: 'futurist' }
   },
   {
       id: 4,
       name: 'man wool cruiser slip on',
       image: manWoolCruiserSlipOn,
       price: 95,
       color: 'Dark Grey',
       description: 'Slip-on model in merino wool, easy to wear and extremely comfortable. Ideal for those seeking practicality, understated style, and natural warmth.',
       category: {id: 2, name: 'woman' }
   },
   {
       id: 5,
       name: 'man wool cruiser waterproof',
       image: manWoolCruiserWaterproof,
       price: 140,
       color: 'Natural Black',
       description: 'Waterproof version of the Wool Cruiser, made with treated merino wool. Keeps feet dry and warm even on rainy days without losing comfort or style.',
       category: {id: 5, name: 'modern' }
   },
   {
       id: 6,
       name: 'man wool runner nz waterproof',
       image: manWoolRunnerNzWaterproof,
       price: 150,
       color: 'Medium Grey',
       description: 'Water-resistant sneaker made from merino wool with a comfortable, breathable fit. Perfect for those seeking protection and style in any weather.',
       category: {id: 2, name: 'man' }
   },
   {
       id: 7,
       name: 'man wool runner nz mid waterproof',
       image: manWoolRunnerNzMidWaterproof,
       price: 160,
       color: 'Natural Black',
       description: 'Mid-cut model in merino wool, waterproof and elegant. Offers added stability, thermal comfort, and ideal protection for cold, damp days.',
       category: {id: 5, name: 'modern' }
   },
   {
       id: 8,
       name: 'man strider explore',
       image: manStriderExplore,
       price: 130,
       color: 'Rustic Green',
       description: 'Robust and modern sneaker designed for urban and outdoor adventures. Combines durability, comfort, and design in one versatile product.',
       category: {id: 1, name: 'futuristic' }
   },
   {
       id: 9,
       name: 'man cruiser mid explore',
       image: manCruiserMidExplore,
       price: 140,
       color: 'Rustic Green',
       description: 'Mid-cut shoe with durable finish and adventurous style. Provides long-lasting comfort and traction across different types of terrain.',
       category: {id: 3, name: 'sport' }
   },
   {
       id: 10,
       name: 'man cruiser',
       image: manCruiser,
       price: 100,
       color: 'Blizzard',
       description: 'Classic and elegant, the Cruiser is made from premium materials that ensure comfort and durability. A versatile choice for any occasion.',
       category: {id: 3, name: 'outlet' }
   },
]