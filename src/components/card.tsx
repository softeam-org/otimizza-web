interface CardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}

function Card({ title, text, icon }: CardProps): JSX.Element{
  return (
    <div className="flex flex-col w-full md:max-w-[20rem] font-montserrat bg-[#F3F3F3] text-[#273257] p-3 rounded-xl shadow-card text-lg xsm:text-xl">
      <header className="text-lg xsm:text-xl font-azonix flex items-center gap-2">
        {icon} {title}
      </header>
      <p>{text}</p>
    </div>

  );
}

export { Card };