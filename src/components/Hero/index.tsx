import { Slider } from "@components/Slider";

import presentation from "@/assets/slider_3.jpg";
import { Envelope, Phone } from "@phosphor-icons/react";

function Hero() {
  return (
    <div className="items-center justify-center w-full flex flex-col mx-auto">
      <Slider />
      <div className="flex flex-row gap-16 items-center justify-center p-12 md:p-16">
        <img
          src={presentation}
          className="w-[600px] h-[300px] object-cover hidden md:block"
        />
        <div className="flex flex-col items-center justify-center gap-6 max-w-[500px]">
          <h1 className="text-primary font-azonix text-lg text-center md:text-4xl">
            Estamos ao seu lado do início ao fim da obra
          </h1>
          <p className="text-iron-gray font-montserrat text-md text-center md:text-lg">
            É necessário garantir que as soluções adotadas sejam realizadas, de
            forma segura e econômica também.
          </p>
        </div>
      </div>

      <div className="flex flex-col p-6 bg-golden-brown w-full items-center justify-center text-white">
        <h3 className="font-azonix text-md md:text-2xl">
          Economize, Planeje, Otimizze!
        </h3>
        <div className="flex flex-row gap-1">
          <Envelope width={24} height={24} />
          <p className="font-montserrat md:text-xl">
            contato@otimizzaengenharia.com
          </p>
        </div>
        <div className="flex flex-row gap-1">
          <Phone width={24} height={24} />
          <p className="font-montserrat md:text-xl">
            (74) 9 8145-4940 / 9 9975-5335
          </p>
        </div>
      </div>
    </div>
  );
}

export { Hero };
