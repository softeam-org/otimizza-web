import { useEffect, useRef, useState } from "react";

import Slider1 from "@/assets/slider_1.png";
import Slider2 from "@/assets/slider_2.jpeg";
import Slider3 from "@/assets/slider_3.jpg";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

interface Slide {
  title: string;
  image: string;
}

function Slider() {
  const [slideShow] = useState<Slide[]>([
    {
      title: "Acompanhamento",
      image: Slider1,
    },
    {
      title: "Execução",
      image: Slider2,
    },
    {
      title: "Projeto",
      image: Slider3,
    },
  ]);
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  function handleSlideshow(index: number) {
    return () => setIndex(index);
  }

  useEffect(() => {
    const element = carouselRef.current as unknown as HTMLDivElement;
    const handleScrollEvent = () => {
      const index = element.scrollLeft / element.offsetWidth;
      if (Number.isInteger(index)) setIndex(index);
    };

    element.addEventListener("scroll", handleScrollEvent);
    return () => element.removeEventListener("scroll", handleScrollEvent);
  }, []);

  useEffect(() => {
    const element = carouselRef.current as unknown as HTMLDivElement;
    element.scrollTo(element.offsetWidth * index, 0);
  }, [index]);

  if (!slideShow) return;

  return (
    <div className="relative">
      <div ref={carouselRef} id="carousel" className="carousel w-full">
        {slideShow.map(({ image, title }) => {
          return (
            <div
              key={title}
              className="carousel-item relative snap-none w-full"
            >
              <div className="w-full">
                <div className="bg-iron-gray p-4 h-14 md:h-20 justify-center items-center flex absolute w-full opacity-[0.7]">
                  <p className="text-snow-white font-azonix text-center">
                    {title}
                  </p>
                </div>

                <img
                  src={image}
                  className="w-full  md:h-[600px] h-[300px] object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button
          type="button"
          onClick={handleSlideshow(Math.max(0, index - 1))}
          disabled={index === 0}
          className="cursor-pointer rounded-full border-2  border-snow-white w-10 h-10 flex items-center justify-center text-snow-white text-2xl opacity-[0.9]"
        >
          <ArrowLeft />
        </button>
        <button
          type="button"
          onClick={handleSlideshow(Math.min(index + 1, slideShow.length - 1))}
          disabled={index === slideShow.length - 1}
          className="cursor-pointer rounded-full border-2 border-snow-white w-10 h-10 flex items-center justify-center text-snow-white text-2xl opacity-[0.9]"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export { Slider };
