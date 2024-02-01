import { useState } from "react";

import { MobileMenu } from "@components/MobileMenu";

import IconMenu from "../../assets/icons/Menu-Mobile.svg";
import LogoOtimiza from "../../assets/images/LOGO_OTIMIZA.png";

import { useSecao } from "@/contexts/useSecao";

const sections = [
  {
    name: "inicio",
  },
  {
    name: "sobre",
  },
  {
    name: "servicos",
  },
  {
    name: "contato",
  },
];

export function Header() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const { secaoAtiva }: { secaoAtiva: string } = useSecao();

  const openMobileMenu = () => {
    setMobileMenu(true);
    document.body.classList.toggle("overflow-hidden", true);
  }

  const closeMobileMenu = () => {
    setMobileMenu(false);
    document.body.classList.toggle("overflow-hidden", false);
  }
  return (
    <header
      className={`fixed z-10 flex justify-between align-center bg-white lg:min-h-20 lg:py-0 lg:px-16 px-3 py-3 top-0 max-w-[1440px] w-full ${
        mobileMenu ? "h-full" : ""
      }`}
    >
      <div className="flex items-center">
        <a className="xl:w-64 w-44" href="">
          <img src={LogoOtimiza} alt="Otimiza Engenharia" />
        </a>
      </div>
      <div className="hidden lg:flex pr-16">
        {sections.map((section) => (
          <a
            key={section.name}
            href=""
            className={`flex items-center  font-montserrat h-full text-lg transition hover:bg-secondary hover:text-snow-white ${
              section.name === secaoAtiva ? "bg-secondary text-snow-white" : ""
            }`}
          >
            <p className="font-azonix px-3.5">
              {section.name.toLocaleUpperCase().replace("SOBRE", "SOBRE NOS")}
            </p>
          </a>
        ))}
      </div>
      <button
        className="lg:hidden"
        type="button"
        onClick={() => {
          openMobileMenu();
        }}
      >
        <img src={IconMenu} alt="Menu" />
      </button>

      <MobileMenu
        closeMenu={() => closeMobileMenu()}
        isOpen={mobileMenu}
      />
    </header>
  );
}
