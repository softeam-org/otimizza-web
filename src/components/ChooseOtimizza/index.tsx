import { ChooseCard } from "@components/ChooseCard"

import Achievement from "../../assets/chooseIcons/achievement.svg"
import Balance from "../../assets/chooseIcons/balance.svg"
import Chart from "../../assets/chooseIcons/chart.svg"
import Creative from "../../assets/chooseIcons/creative.svg"
import Ecology from "../../assets/chooseIcons/ecology.svg"
import NotePad from "../../assets/chooseIcons/notepad.svg"

import './style.css'

interface CardProps {
  image: string;
  text: string;
  alt: string;
  hover: string;
}

const cardsData: CardProps[] = [
  {
    image: NotePad,
    text: "RESPONSABILIDADE",
    alt: "imagem ilustrativa de um bloco de notas",
    hover: "Uma vez fechado o acordo, nossa missão é com a entrega e satisfação."
  },
  {
    image: Ecology,
    text: "RESPEITO ÀS PESSOAS E MEIO AMBIENTE",
    alt: "Imagem ilustrativa do meio ambiente",
    hover: "Afinal, buscamos melhorar a qualidade de vida dos nossos clientes."
  },
  {
    image: Balance,
    text: "ÉTICA",
    alt: "Imagem ilustrativa de uma balança",
    hover: "Honestidade e transparência guiam nossas ações."
  },
  {
    image: Chart,
    text: "EFICIÊNCIA",
    alt: "Imagem ilustrativa de um gráfico",
    hover: "Trabalhamos com base em estratégias produtivas."
  },
  {
    image: Creative,
    text: "INOVAÇÃO",
    alt: "Imagem ilustrativa de papel e lápis para representar o processo criativo",
    hover: "Resolvemos problemas complexos com soluções inovadoras."
  },
  {
    image: Achievement,
    text: "ORGULHO DE SER OTIMIZZA",
    alt: "Imagem ilustrativa de uma medalha",
    hover: "Acreditamos em uma Engenharia Acessível e Universal e na transformação que ela proporciona."
  },
];

function ChooseOtimizza(): JSX.Element {
  return (
    <div className=" secao secao-servicos choose-otimizza flex w-full h-auto px-3 py-10 xlg:px-16 xlg:py-11 justify-center gap-2.5 font-azonix text-secondary">
      <div className="flex flex-col p-4 items-center bg-[#DFEAEF] max-w-[1011px] gap-7">
        <div className="text-xl md:text-2xl text-center lg:text-5xl">
          Por que escolher a Otimizza?
        </div>
        <div className="flex flex-wrap gap-3 self-stretch	justify-center">
          {cardsData.map(({ text, image, alt, hover }) => (
            <ChooseCard
              key={text}
              image={image}
              text={text}
              alt={alt}
              hover={hover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { ChooseOtimizza };
