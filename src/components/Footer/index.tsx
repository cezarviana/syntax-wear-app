import { Copyright } from "../Copyright";
import { FooterMenu } from "../FooterMenu";
import { Newsletter } from "../Newsletter";
import { SocialLinks } from "../SocialLinks";





export const Footer = () => {
  return (
    <footer className="bg-footer-bg text-white w-full min-h-84 flex">
      <div className="container flex flex-col">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-2 px-2 py-10">
          <div className="flex flex-col gap-8">
            <Newsletter />

            <SocialLinks />

          </div>

            <FooterMenu />

        </div>
        <Copyright />
      </div>
    </footer>
  );
};
