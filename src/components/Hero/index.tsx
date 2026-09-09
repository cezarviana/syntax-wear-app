import Banner from "@/assets/images/banner.jpg";

export const Hero = () => {
  return (
    <div className="container">
      <section className="flex h-125 rounded-3xl mb-10 relative">
        <img
          src={Banner}
          alt="Banner featuring a seated man wearing Syntaxwear footwear."
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute text-white w-full bottom-0 flex justify-end items-center px-6 md:px-24 pb-32">
          <div className="flex flex-col items-center text-center w-[388px]">
            <h2 className="text-xl font-medium leading-normal tracking-wider">Krypton One</h2>
            <h1 className="text-2xl leading-9 tracking-widest mb-10">Turn every step in Presence</h1>
            <div className="flex gap-3.5">
              <button>View Models</button>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
