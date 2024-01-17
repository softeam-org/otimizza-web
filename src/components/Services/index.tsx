import { Card2 } from "@components/Card2";

function Services(): JSX.Element {
  return (
    <div className="flex flex-col justify-arround bg-white py-11 px-3 xsm:px-16 items-center font-montserrat text-lg xsm:text-2xl gap-14 md:space-x-30 max-w-1440px">
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
        <Card2
          title="PROJETOS DE ENGENHARIA"
          text={"Nesta fase são tomadas as decisões mais importantes sobre custos, velocidade e execução do seu empreendimento."}
        />
        <Card2
          title="REGULARIZAÇÃO DE IMÓVEIS"
          text={"O primeiro passo para ter acesso a um Financiamento Habitacional e reformar, construir ou comercializar o seu imóvel, é torná-lo regular."}
        />
        <Card2
          title="GERENCIAMENTO E EXECUÇÃO DE OBRA"
          text={"Seus recursos são valiosos e devem ser bem gerenciados, além disso, precisamos garantir a qualidade da execução dos serviços!"}
        />
        <Card2
          title="ORÇAMENTO"
          text={"Visualize e faça previsão do investimento necessário para tornar seu projeto real."}
        />
      </div>
    </div>
  );
}


export { Services };


/*
function Services() {
  return (
    <div className="flex flex-col justify-between bg-white p-10 items-center">
      <div className="flex flex-col items-center space-y-12 w-1/2">
        <div className="flex flex-col items-center text-secondary">
          <h1 className="font-bold font-azonix">SERVIÇOS</h1>
          <p>Soluções Completas</p>
        </div>
        <div>
          <p>Usamos as mais modernas soluções de engenharia ao seu favor, afim de garantir qualidade economia e segurança na construção do seu sonho.</p>
        </div>
      </div>
      <div className="flex flex-row w-1/2">
        <div>
          <h3>Projetos de Engenharia</h3>
          <p>Nesta fase são tomadas as decisões mais importantes sobre custos, velocidade e execução do seu empreendimento.</p>
        </div>
        <div>
          <h3>REGULARIZAÇÃO DE IMÓVEIS</h3>
          <p>O primeiro passo para ter acesso a um Financiamento Habitacional e reformar, construir ou comercializar o seu imóvel, é torná-lo regular.</p>
        </div>
        <div>
          <h3>GERENCIAMENTO E EXECUÇÃO DE OBRA</h3>
          <p>Seus recursos são valiosos e devem ser bem gerenciados, além disso, precisamos garantir a qualidade da execução dos serviços!</p>
        </div>
        <div>
          <h3>ORÇAMENTO</h3>
          <p>Visualize e faça previsão do investimento necessário para tornar seu projeto real.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
*/
