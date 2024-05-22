import { Card } from "@components/Card";

import logoOtimizza from "@/assets/logoOtimizza2.svg";
import { useSecao } from "@/contexts/useSecao";
import { Target, SketchLogo, Eye } from "@phosphor-icons/react";

const targetIcon = <Target size={24} />;
const eyeIcon = <Eye size={24} weight="fill" />;
const sketchIcon = <SketchLogo size={24} />;

function AboutUs(): JSX.Element {
  const { getRef } = useSecao();
  
  const ref = getRef('sobre');

  return (
    <div ref={ref} className="secao secao-sobre w-full flex flex-col md:flex-row justify-arround bg-primary py-11 px-3 xsm:px-16 scroll-my-16 xsm:scroll-my-24 text-white items-center font-montserrat text-lg xsm:text-2xl gap-14 md:space-x-30 max-w-1440px">
      <div className="flex flex-col items-center space-y-14 md:space-y-20 flex-1">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-xl xsm:text-5xl font-azonix">SOBRE NÓS</h1>
          <p className="text-lg xsm:text-2xl">&quot;Seu sonho, nossa responsabilidade&quot;</p>
        </div>
        <div className="space-y-8">
      <p>Mais do que projetar, a Otimizza surge para fazer acontecer. Somos uma empresa de engenharia dedicada a transformar ideias em realidade, comprometidos em fornecer soluções inovadoras e eficientes. Desde a nossa fundação, buscamos a excelência em cada obra, mantendo o compromisso com a qualidade, a integridade e a sustentabilidade.</p>

      <p>Nossa equipe é composta por profissionais altamente qualificados e apaixonados, unidos pelo desejo de superar expectativas e alcançar resultados excepcionais. Trabalhamos lado a lado com nossos clientes, desde a concepção até a conclusão do projeto, colaborando estreitamente para garantir que cada detalhe seja cuidadosamente planejado e executado.</p>

      <p>Na Otimizza, não apenas construímos estruturas, mas também construímos relacionamentos duradouros baseados na confiança, na transparência e no respeito mútuo. Estamos comprometidos em ser o parceiro de escolha para aqueles que buscam excelência em engenharia, proporcionando soluções sob medida que impulsionam o sucesso de nossos clientes.</p>

      <p>Junte-se a nós para inovar, inspirar e Otimizzar sua obra!</p>
        </div>
      </div>
        <img
          src={logoOtimizza}
          alt="Logo contendo o nome da empresa Otimizza Engenharia"
          className="max-w-44 md:max-w-52"
        />
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 flex-1 items-center">
        <Card
          title="Nossa missao"
          text={"Oferecer soluções em Engenharia Civil, garantindo a agilidade, qualidade e satisfação dos clientes, com responsabilidade socioambiental."}
          icon={targetIcon}
        />
        <Card
          title="Nossa Visao"
          text={
            "Ser reconhecida como exemplo de empresa de engenharia civil, sendo referência em qualidade, agilidade e inovação."
          }
          icon={eyeIcon}
        />
        <Card
          title="Nossos valores"
          text={
            "Agilidade Qualidade Ética Inovação Segurança Credibilidade Responsabilidade socioambiental"
          }
          splitText={true}
          icon={sketchIcon}
        />
      </div>
    </div>
  );
}

export { AboutUs };
