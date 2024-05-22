import { ServiceCard } from "@components/ServiceCard";

import { useSecao } from "@/contexts/useSecao";

function Services(): JSX.Element {
  const { getRef } = useSecao();
  
  const ref = getRef('servicos');
  return (
    <div ref={ref} className="secao secao-servicos flex flex-col justify-arround bg-white py-11 px-3 scroll-my-16 xsm:scroll-my-20 xsm:px-16 items-center font-montserrat text-lg xsm:text-2xl gap-14 md:space-x-30 max-w-1440px">
      <div className="flex flex-col items-center space-y-10 md:space-y-15 flex-1">
        <div className="flex flex-col items-center text-center text-primary">
          <h1 className="text-xl xsm:text-5xl font-azonix">SERVIÇOS</h1>
          <p>Soluções Completas</p>
        </div>
        <div>
          <p>Usamos as mais modernas soluções de engenharia ao seu favor, afim de garantir qualidade economia e segurança na construção do seu sonho.</p>
        </div>
      </div>
      <div className="flex gap-8 flex-1 flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center">
        <ServiceCard
          title="PROJETOS DE ENGENHARIA"
          text={"Nesta fase são tomadas as decisões mais importantes sobre custos, velocidade e execução do seu empreendimento."}
        />
        <ServiceCard
          title="REGULARIZAÇÃO DE IMÓVEIS"
          text={"O primeiro passo para ter acesso a um Financiamento Habitacional e reformar, construir ou comercializar o seu imóvel, é torná-lo regular."}
        />
        <ServiceCard
          title="GERENCIAMENTO E EXECUÇÃO DE OBRA"
          text={"Seus recursos são valiosos e devem ser bem gerenciados, além disso, precisamos garantir a qualidade da execução dos serviços!"}
        />
        <ServiceCard
          title="ORÇAMENTO"
          text={"Visualize e faça previsão do investimento necessário para tornar seu projeto real."}
        />
      </div>
    </div>
  );
}


export { Services };