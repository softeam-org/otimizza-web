interface CardProps {
  image: string;
  text: string;
  alt: string;
  hover: string;
}

function ChooseCard({ image, text, alt, hover }: CardProps): JSX.Element {
  return (
    <div className="relative flex flex-col w-full justify-center p-2.5 py-14 my-1 xsm:py-8 xsm:my-0 bg-snow-white gap-7 text-2xl xsm:max-w-[300px] xlg:max-w-[300px] xsm:max-h-[200px] items-center">
      <img
        className="xsm:max-w-[80px] xlg:max-w-[105px]"
        src={image}
        alt={alt}
      />
      <p className="text-center break-words leading-6">{text}</p>

      <div className="absolute inset-0 flex flex-col p-2.5 justify-center bg-secondary text-white opacity-0 hover:opacity-90 transition-opacity">
        <p className="font-montserrat text-xl break-words">{hover}</p>
      </div>
    </div>
  );
}

export { ChooseCard };
