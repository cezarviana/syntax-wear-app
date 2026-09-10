import sneakersWhite from "@/assets/images/sneakers-white.jpg";
import sneakersGray from "@/assets/images/sneakers-gray.jpg";
import sneakersColorful from "@/assets/images/sneakers-colorful.jpg";
import sneakersFuturistic from "@/assets/images/sneakers-futuristic.jpg";
import { Button } from "../Button";

const categories = [
  { name: "Casual", image: sneakersWhite },
  { name: "Sport", image: sneakersGray },
  { name: "Modern", image: sneakersColorful },
  { name: "Futuristic", image: sneakersFuturistic },
];

export const Categories = () => {
  return <section className="container flex gap-2.5 lg:grid lg:grid-cols-4 lg:gap-4 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
    {categories.map((category, index) => (
        <div key={index} style={{backgroundImage: `url(${category.image})`}} className="flex justify-center items-center h-125 bg-cover bg-center rounded-3xl relative text-white shrink-0 w-[95%] md:w-1/2 lg:w-full">
            <div className="absolute inset-0 bg-black/30 rounded-3xl snap-center"></div>
            <div className="relative">
                <Button variant="secondary">{category.name}</Button>
            </div>
        </div>
    ))}
  </section>;
};
