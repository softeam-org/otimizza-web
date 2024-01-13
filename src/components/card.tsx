interface CardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, text, icon }: CardProps) => {
  return (
    <div className="flex flex-col w-full md:max-w-[20rem] font-montserrat bg-[#F3F3F3] text-[#273257] p-3 rounded-xl shadow-lg shadow-black text-lg">
      <div className="text-2xl font-azonix flex items-center gap-2">{icon} {title} </div>
      <div> {text} </div>
    </div>
  );
}

export default Card;
