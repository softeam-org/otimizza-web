interface CardProps {
  image: string;
  text: string;
  alt: string;
  hover: string;
}

function ChooseCard({ image, text, alt, hover }: CardProps): JSX.Element {
  return (
    <div className="relative flex flex-col w-full justify-center p-2.5 bg-snow-white gap-7 text-xl max-w-[300px] max-h-[200px] items-center">

      <img className="max-w-[105px]" src={image} alt={alt} />
      <p className="text-center">{text}</p>

      <div className="absolute inset-0 flex flex-col p-2.5 justify-center bg-secondary text-white opacity-0 hover:opacity-90 transition-opacity">
        <p className="text-sm font-montserrat text-xl">{hover}</p>
      </div>

    </div>

  );
}

export { ChooseCard };