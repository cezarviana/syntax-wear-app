import galleryMan from "@/assets/images/gallery-man.jpg";
import galleryModel from "@/assets/images/gallery-model.jpg";
import galleryColorful from "@/assets/images/gallery-sneakers-colorful.jpg";
import galleryGray from "@/assets/images/gallery-sneakers-gray.jpg";
import galleryPurple from "@/assets/images/gallery-sneakers-purple.jpg";
import galleryWhiteAndBlack from "@/assets/images/gallery-sneakers-white-and-black.jpg";

export const Gallery = () => {
  return (
    <section
      className="
        container
        grid
        grid-cols-2
        grid-rows-[repeat(5,auto)]
        gap-2.5
        [grid-template-areas:'highlight_highlight'_'sneaker-white_sneaker-white'_'model_sneaker-color'_'model_sneaker-silver'_'sneaker-purple_sneaker-purple']
        lg:grid-cols-4
        lg:grid-rows-[repeat(3,300px)]
        lg:gap-[30px]
        lg:[grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple'_'highlight_highlight_model_sneaker-color'_'sneaker-white_sneaker-white_model_sneaker-silver']
      "
    >
      <img
        src={galleryMan}
        alt="Modelo masculino usando tênis"
        className="[grid-area:highlight] h-full w-full rounded-3xl object-cover"
      />

      <img
        src={galleryPurple}
        alt="Tênis roxo"
        className="[grid-area:sneaker-purple] h-full w-full rounded-3xl object-cover"
      />

      <img
        src={galleryModel}
        alt="Modelo feminina usando tênis"
        className="[grid-area:model] h-full w-full rounded-3xl object-cover"
      />

      <img
        src={galleryColorful}
        alt="Tênis colorido"
        className="[grid-area:sneaker-color] h-full w-full rounded-3xl object-cover"
      />

      <img
        src={galleryWhiteAndBlack}
        alt="Tênis preto e branco"
        className="[grid-area:sneaker-white] h-full w-full rounded-3xl object-cover"
      />

      <img
        src={galleryGray}
        alt="Tênis cinza"
        className="[grid-area:sneaker-silver] h-full w-full rounded-3xl object-cover"
      />
    </section>
  );
};