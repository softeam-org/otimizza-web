interface CardProps {
  title: string;
  text: string;
  icon: React.ReactNode;
  splitText?: boolean; // nova prop opcional
}

function Card({ title, text, icon, splitText = false }: CardProps): JSX.Element {
  const renderTextWithLineBreaks = (text: string) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="block">
        {word}
      </span>
    ));
  };

  return (
    <div className="flex flex-col w-full md:max-w-[28rem] min-h-72 px-3 pt-3 font-montserrat bg-snow-white text-primary rounded-xl shadow-card text-base xsm:text-lg text-center">
      <header className="text-lg xsm:text-xl font-azonix flex items-center justify-center gap-2">
        {icon} {title}
      </header>
      <div className="pt-3">
      <p>{splitText ? renderTextWithLineBreaks(text) : text}</p>
      </div>
    </div>
  );
}

export { Card };
