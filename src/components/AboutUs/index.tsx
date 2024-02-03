import { Card } from "@components/Card";

import logoOtimizza from "@/assets/logoOtimizza2.svg";
import { Buildings, Star, Eye } from "@phosphor-icons/react";

const buildingIcon = <Buildings size={24} weight="fill" />;
const eyeIcon = <Eye size={24} weight="fill" />;
const starIcon = <Star size={24} weight="fill" />;

function AboutUs(): JSX.Element {
  return (
    <div className="secao secao-sobre w-full flex flex-col md:flex-row justify-arround bg-primary py-11 px-3 xsm:px-16 text-white items-center font-montserrat text-lg xsm:text-2xl gap-14 md:space-x-30 max-w-1440px">
      <div className="flex flex-col items-center space-y-14 md:space-y-20 flex-1">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-xl xsm:text-5xl font-azonix">SOBRE NÓS</h1>
          <p>&quot;Seu sonho, nossa responsabilidade&quot;</p>
        </div>
        <div className="space-y-2">
          <p>Mais do que projetar, a Otimizza surge para fazer acontecer.</p>
          <p>
            Usamos as mais modernas soluções de engenharia ao seu favor, afim de
            garantir qualidade economia e segurança na construção do seu sonho.
          </p>
        </div>
        <img
          src={logoOtimizza}
          alt="Logo contendo o nome da empresa Otimizza Engenharia"
          className="max-w-44 md:max-w-52"
        />
      </div>
      <div className="flex flex-col gap-8 flex-1 items-center">
        <Card
          title="Nosso Negocio"
          text={"Projetos de Engenharia e Construção de Obras Civis."}
          icon={buildingIcon}
        />
        <Card
          title="Nossa Visao"
          text={
            "Ser um exemplo de eficiência agilidade e qualidade nos serviços prestados."
          }
          icon={eyeIcon}
        />
        <Card
          title="Nosso Essencia"
          text={
            "Garantir a satisfação e geração de valor sobre o que foi contratado."
          }
          icon={starIcon}
        />
      </div>
    </div>
  );
}

export { AboutUs };
