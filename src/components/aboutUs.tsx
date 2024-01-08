import logoOtimizza from "@/assets/logoOtimizza2.svg"

function AboutUs() {
  return (
    <div className="flex justify-between bg-[#273257] p-10 text-white items-center">
      <div className="flex flex-col items-center space-y-12 w-1/2">
        <div className="flex flex-col items-center">
        <h1>SOBRE NÓS</h1>
        {/* <p>"Seu sonho, nossa responsabilidade"</p> */}
        </div>
        <div>
        <p>Mais do que projetar, a Otimizza surge para fazer acontecer.</p>
        <p>Usamos as mais modernas soluções de engenharia ao seu favor, afim de garantir qualidade economia e segurança na construção do seu sonho.</p>
        </div>
        <img src={logoOtimizza} alt="Logo contendo o nome da empresa Otimizza Engenharia" className="max-w-[15rem]"/>
      </div>
      <div className="flex flex-col w-1/2">
        <div> card1 </div>
        <div> card2 </div>
        <div> card3 </div>
      </div>
    </div>
  );
}

export default AboutUs;
