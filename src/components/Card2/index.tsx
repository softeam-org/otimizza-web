interface CardProps {
  title: string;
  text: string;
}

function Card2({ title, text }: CardProps): JSX.Element{
  return (
    <div className="flex flex-col w-full md:max-w-[20rem] space-y-2 font-montserrat bg-snow-white p-3 rounded-xl border-t-4 border-secondary">
      <header className="font-azonix flex items-center gap-2 text-secondary  text-lg xsm:text-xl">
        {title}
      </header>
      <p className="text-iron-gray  text-base xsm:text-lg">{text}</p>
    </div>

  );
}

export { Card2 };