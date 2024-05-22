import logoOtimizzaSvg from "@/assets/logo_otimizza_footer.svg";
import { MapPin, Phone, Envelope } from "@phosphor-icons/react";

function Footer(): JSX.Element {
  return (
    <footer className="secao secao-contato w-full h-58 flex flex-col text-white font-montserrat text-sm xsm:text-xl">
      <div className="px-16 pt-11 pb-8 max-md:px-8 max-lg:px-10 max-sm:gap-10 bg-primary flex flex-col-reverse sm:flex-row  justify-between items-center">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1">
            <MapPin weight="fill" width={24} height={24} />
            <p>Rua tal, n° tal, Bairro Tal, Conj Tal, Cidade - UF</p>
          </div>
          <div className="flex items-center gap-1">
            <Phone weight="fill" width={24} height={24} />
            <p>(74) 9 8145-4940 / 9 9975-5335</p>
          </div>
          <div className="flex items-center gap-1">
            <Envelope width={24} height={24} />
            <p>contato@otimizzaengenharia.com</p>
          </div>
        </div>
        <div>
          <img
            src={logoOtimizzaSvg}
            alt="Logo Otimizza"
            width={430}
            height={123}
          />
        </div>
      </div>
      <div className="py-1 h-9 max-md:py-5 xsm:py-8 md:py-1 max-md:justify-center max-md:flex-col px-3 bg-midnight-blue flex items-center justify-between w-full">
        <p>Otimizza Engenharia - CNPJ 37.122.815/0001-53</p>
        <p>
          Desenvolvido por <a href="https://softeam.com.br/" target="_blank" rel="noopener noreferrer"><strong>Softeam</strong></a>
        </p>
      </div>
    </footer>
  );
}

export { Footer };
