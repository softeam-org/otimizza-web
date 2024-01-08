import { useState } from "react"

import { useSecao } from "../../contexts/useSecao"

import IconWhatsApp from "../../icons/Icon-WhatsApp.svg"
import IconX from "../../icons/Icon-X.svg"
import IconMenu from "../../icons/Menu-Mobile.svg"
import LogoOtimiza from "../../images/LOGO_OTIMIZA.png"

const sections = [
  {
    name: "Início"
  },
  {
    name: "Sobre"
  },
  {
    name: "Serviços"
  },
  {
    name: "Orçamento"
  },
]



function Header() {
  
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    document.body.classList.toggle('overflow-hidden', !mobileMenu)
  };

 
  return (
    <div
        className={`fixed flex justify-between align-center bg-snow-white px-3 py-3 top-0 w-full ${mobileMenu ? "h-full" : ""}`}
    >
      <a href="">
        <img src={LogoOtimiza} alt="Otimiza Engenharia" />
      </a>
        <button
          type="button"
          onClick={() => {
              handleMobileMenu();
            }
          }
        >
          <img src={IconMenu} alt="Menu" />
        </button>
        {
          mobileMenu && (
            <MobileMenu 
      handleMobileMenu={() => handleMobileMenu()}
            />)
        }
    </div>
  )
}

export default Header;


function MobileMenu({ handleMobileMenu }: { handleMobileMenu: () => void}) {
  
  const { secaoAtiva } : { secaoAtiva: string } = useSecao();
  
  return (
    <div
    className="bg-snow-white z-40 absolute top-0 left-0 w-full h-full pt-6"
    >
     <div
      className="flex justify-end pb-6 px-3 "
     >
        <button
          type="button"
          onClick={handleMobileMenu}
          className="flex content-center font-montserrat gap-1"
        >
          <p>VOLTAR</p>
          <img src={IconX} alt="X" />
        </button>
     </div>

     <div 
     className="py-6"
     >
      {sections.map(section =>
       <div
        key={section.name}
        className={`flex justify-between align-center px-3 py-2 
          ${secaoAtiva === section.name ? ' bg-secondary text-snow-white': ''}`}
       >
        <a href="">
          <p className="font-azonix">
            {section.name}
          </p>
        </a>
       </div>
       )}
     </div>
     <div 
      className="flex flex-col gap-1"
     >
      <a
        className="flex items-center bg-green text-snow-white font-montserrat font-semibold rounded-full py-1.5 pl-0.5 pr-1.5 mx-auto max-w-40"
        href="/"
      >
        <img src={IconWhatsApp} alt="WhatsApp" />
        <p>Fale Conosco</p>
      </a>
      <a 
        className="flex mx-auto max-w-44"
        href="">
        <img src={LogoOtimiza} alt="Otimiza Engenharia" />
      </a>
     </div>
    </div>
  )

}