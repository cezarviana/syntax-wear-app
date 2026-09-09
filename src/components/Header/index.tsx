import Logo from "@/assets/images/logo.png";
import IconUser from "@/assets/images/icon-user.png";
import IconAbout from "@/assets/images/icon-about.png";
import IconCart from "@/assets/images/icon-cart.png";

export const Header = () => {
  return (
    <div className="relative">
      <header className="fixed top-10 left-0 right-0 z-10 mx-10">
        <div className="bg-white max-w-[1320px] mx-auto flex justify-between items-center py-2 px-7 rounded-2xl mt-5">
          <img src={Logo} alt="Syntax Wear Logo" className="w-32 md:w-36" />
          <nav className="hidden md:block">
            <ul className="flex gap-10">
              <li>
                <a href="#">Man</a>
              </li>
              <li>
                <a href="#">Woman</a>
              </li>
              <li>
                <a href="#">Outlet</a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className="flex gap-4 md:gap-10">
                <li><a href="#" className="hidden md:block">Stores</a></li>
                <li><a href="#" className="hidden md:block">About</a></li>
                <li><a href="#"><img src={IconUser} alt="User icon" /></a></li>
                <li><a href="#"><img src={IconAbout} alt="About icon" /></a></li>
                <li><a href="#"><img src={IconCart} alt="Cart icon" /></a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
