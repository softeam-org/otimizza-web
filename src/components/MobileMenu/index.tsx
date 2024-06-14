import { useState, useEffect } from "react";

import IconWhatsApp from "../../assets/icons/Icon-WhatsApp.svg";
import IconX from "../../assets/icons/Icon-X.svg";
import LogoOtimiza from "../../assets/images/LOGO_OTIMIZA.png";
import { useSecao } from "../../contexts/useSecao";

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
  /*
  {
    name: "contato",
  },
  */
];

export function MobileMenu({
  closeMenu,
  isOpen,
}: {
  closeMenu: () => void;
  isOpen: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const { secaoAtiva, scrollTo } = useSecao();

  //Checa o tamanho da tela para fechar menu
  useEffect(() => {
    const handleResize = () => {
      const larguraTela = window.innerWidth;
      const larguraMinima = 1024;
      if (larguraTela > larguraMinima) {
        closeMenu();
        setIsVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMenu]);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`bg-white z-40 lg:hidden top-0 left-0 w-full h-full pt-6 transition-opacity ${
        isVisible ? "opacity-100 absolute" : "opacity-0 hidden"
      }`}
    >
      <div className="flex justify-end pb-6 px-3">
        <button
          type="button"
          onClick={() => closeMenu()}
          className="flex content-center font-montserrat gap-1"
        >
          <p>VOLTAR</p>
          <img src={IconX} alt="X" />
        </button>
      </div>

      <div className="py-8">
        {sections.map((section) => (
          <div
            key={section.name}
            className={`flex justify-between align-center px-3 py-2 
                ${
                  secaoAtiva === section.name
                    ? " bg-secondary text-snow-white"
                    : ""
                }`}
          >
            <button
              type="button"
              key={section.name}
              onClick={() => {
                closeMenu();
                scrollTo(section.name);
              }}
            >
              <p className="font-azonix">{section.name.toLocaleUpperCase()}</p>
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 mt-48">
        <a
          className="flex items-center bg-green text-snow-white font-montserrat font-semibold rounded-full py-1.5 pl-0.5 pr-1.5 mx-auto max-w-40"
          href="https://wa.me/5574999755335"
        >
          <img src={IconWhatsApp} alt="WhatsApp" />
          <p>Fale Conosco</p>
        </a>
        <a className="flex mx-auto max-w-44" href="">
          <img src={LogoOtimiza} alt="Otimiza Engenharia" />
        </a>
      </div>
    </div>
  );
}
