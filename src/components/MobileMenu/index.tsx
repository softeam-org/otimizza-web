
import { useState, useEffect } from "react"
import { useSecao } from "../../contexts/useSecao"
import IconWhatsApp from "../../assets/icons/Icon-WhatsApp.svg"
import IconX from "../../assets/icons/Icon-X.svg"
import LogoOtimiza from "../../assets/images/LOGO_OTIMIZA.png"



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
      name: "Contato"
    },
  ]
  
  export function MobileMenu({ handleMobileMenu, isOpen }: { handleMobileMenu: () => void, isOpen: boolean}) {
    const [isVisible, setIsVisible] = useState(isOpen);
    const { secaoAtiva }: { secaoAtiva: string } = useSecao();
  
    // Atualiza a visibilidade do componente com base na propriedade isOpen
    useEffect(() => {
      setIsVisible(isOpen);
    }, [isOpen]);
  
    return (
      <div
        className={`bg-white z-40 lg:hidden absolute top-0 left-0 w-full h-full pt-6 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0 '}`}
      >
        <div className="flex justify-end pb-6 px-3">
          <button
            type="button"
            onClick={handleMobileMenu}
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
                ${secaoAtiva === section.name ? ' bg-secondary text-snow-white' : ''}`}
            >
              <a href="">
                <p className="font-azonix">{section.name}</p>
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1 mt-48">
          <a
            className="flex items-center bg-green text-snow-white font-montserrat font-semibold rounded-full py-1.5 pl-0.5 pr-1.5 mx-auto max-w-40"
            href="/"
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