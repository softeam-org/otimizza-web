import Card from "./card";

import logoOtimizza from "@/assets/logoOtimizza2.svg"
import { Buildings, Star, Eye } from "@phosphor-icons/react";

function AboutUs() {
  return (
    <div className="flex justify-arround bg-[#273257] p-10 text-white items-center font-montserrat text-2xl space-x-30">
      <div className="flex flex-col items-center space-y-20 flex-1">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-azonix">SOBRE NÓS</h1>
          <p>Seu sonho, nossa responsabilidade</p>
        </div>
        <div className="space-y-2">
          <p>Mais do que projetar, a Otimizza surge para fazer acontecer.</p>
          <p>Usamos as mais modernas soluções de engenharia ao seu favor, afim de garantir qualidade economia e segurança na construção do seu sonho.</p>
        </div>
        <img src={logoOtimizza} alt="Logo contendo o nome da empresa Otimizza Engenharia" className="max-w-[15rem]" />
      </div>
      <div className="flex flex-col space-y-14 flex-1 items-center">
        <Card title={"Nosso Negocio"} text={"Projetos de Engenharia e Construção de Obras Civis."} icon={<Buildings size={24} weight="fill"/>}/>
        <Card title={"Nossa Visao"} text={"Ser um exemplo de eficiência agilidade e qualidade nos serviços prestados."} icon={<Eye size={24} weight="fill"/>} />
        <Card title={"Nosso Essencia"} text={"Garantir a satisfação e geração de valor sobre o que foi contratado."} icon={<Star size={24} weight="fill"/>}/>
      </div>
    </div>
  );
}

export default AboutUs;
