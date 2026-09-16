import IconInstagram from "@/assets/images/icon-instagram.png";
import IconWhatsapp from "@/assets/images/icon-whatsapp.png";
import IconTiktok from "@/assets/images/icon-tiktok.png";
import IconFacebook from "@/assets/images/icon-facebook.png";

const socialLinks = [
  { href: "#", icon: IconInstagram, label: "Instagram" },
  { href: "#", icon: IconWhatsapp, label: "Whatsapp" },
  { href: "#", icon: IconTiktok, label: "Tiktok" },
  { href: "#", icon: IconFacebook, label: "Facebook" },
];

export const SocialLinks = () => {
  return (
    <div className="flex flex-col">
      <p className="mb-4 text-x1 font-medium text-surface-alt tracking-wider">
        Redes Sociais
      </p>
      <ul className="flex gap-2">
        {socialLinks.map(({ href, icon, label }) => (
          <li key={label}>
            <a href={href} aria-label={label}>
              <img
                src={icon}
                alt={label}
                className=" rounded-full border-2 border-white"
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
