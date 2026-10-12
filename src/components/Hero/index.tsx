import Banner from "@/assets/images/banner.jpg";
import { Button } from "../Button";
import { Overlay } from "../Overlay";
import { useRouter } from "@tanstack/react-router";

export const Hero = () => {

  const router = useRouter();

  return (
    <div className="container">
      <section className="flex h-125 rounded-3xl mb-10 relative">
        <img
          src={Banner}
          alt="Banner featuring a seated man wearing Syntaxwear footwear."
          className="w-full h-full object-cover rounded-3xl"
        />

        <Overlay title="Krypton One" subtitle="Turn every step into Presence" className="flex bottom-0 justify-end px-6 md:px-24 pb-32">
          <Button variant="secondary" size="sm" onClick={() => router.navigate({ to: "/products" })}>
            View Models
          </Button>
          <Button variant="primary">Buy</Button>
        </Overlay>
      </section>
    </div>
  );
};
