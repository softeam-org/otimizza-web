import whatsapp from "../../assets/icons/whatsapp.svg";

function WhatsappButton() {
  return (
    <a href="https://wa.me/5574999755335" className="fixed top-1/2 xlg:right-8 right-2 opacity-30">
      <img className="xlg:w-16 w-8" src={whatsapp} alt="whatsapp" />
    </a>
  );
}

export { WhatsappButton };
