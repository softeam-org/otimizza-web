import { Slider } from "@components/Slider";

import presentation from "@/assets/slider_3.jpg";
import { Envelope, Phone } from "@phosphor-icons/react";

function Hero() {
  return (
    <div className="secao secao-inicio items-center justify-center w-full flex flex-col mx-auto">
      <Slider />
      <div className="flex flex-row gap-16 items-center justify-center p-12 md:p-16">
        <img
          src={presentation}
          className="w-[600px] h-[400px] object-cover hidden md:block"
        />
        <div className="flex flex-col items-center justify-center gap-6 max-w-[500px]">
          <h1 className="text-primary font-azonix text-xl text-center md:text-4xl">
            Estamos ao seu lado do início ao fim da obra
          </h1>
          <p className="text-iron-gray font-montserrat text-md text-center md:text-lg">
            Nosso compromisso vai além da execução do projeto, nós nos dedicamos
            a compreender as necessidades específicas de cada cliente,
            trabalhando em estreita colaboração para garantir que todas as
            etapas do processo sejam realizadas com excelência.
          </p>
          <p className="text-iron-gray font-montserrat text-md text-center md:text-lg">
            Desde a concepção inicial até a conclusão da obra, nossa equipe está
            sempre disponível para oferecer suporte, solucionar problemas e
            assegurar a sua satisfação.
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
