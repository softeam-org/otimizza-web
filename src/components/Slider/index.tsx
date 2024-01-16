import Slider1 from "@/assets/slider_1.png";
import Slider2 from "@/assets/slider_2.jpeg";
import Slider3 from "@/assets/slider_3.jpg";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

function Slider() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="w-full">
          <div className="bg-iron-gray p-4 h-14 md:h-20 justify-center items-center flex absolute w-full opacity-[0.7]">
            <p className="text-snow-white font-azonix text-center">
              Acompanhamento
            </p>
          </div>

          <img
            src={Slider1}
            className="w-full  md:h-[600px] h-[300px] object-cover"
          />
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide3"
            className="rounded-full border-2 border-snow-white w-10 h-10 flex items-center justify-center text-snow-white text-2xl opacity-[0.9]"
          >
            <ArrowLeft />
          </a>
          <a
            href="#slide2"
            className="rounded-full border-2 border-snow-white w-10 h-10 flex items-center justify-center text-snow-white text-2xl opacity-[0.9]"
          >
            <ArrowRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="w-full">
          <div className="bg-iron-gray p-4 h-14 md:h-20 justify-center items-center flex absolute w-full opacity-[0.7]">
            <p className="text-snow-white font-azonix text-center">Execução</p>
          </div>
          <img
            src={Slider2}
            className="w-full md:h-[600px] h-[300px] object-cover"
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="rounded-full border-2 border-snow-white w-10 h-10 flex items-center justify-center text-snow-white text-2xl opacity-[0.9]"
          >
            <ArrowLeft />
          </a>
          <a
            href="#slide3"
            className="rounded-full border-2 border-snow-white w-10 h-10 flex items-center justify-center text-snow-white text-2xl opacity-[0.9]"
          >
            <ArrowRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="w-full">
          <div className="bg-iron-gray p-4 h-14 md:h-20 justify-center items-center flex absolute w-full opacity-[0.7]">
            <p className="text-snow-white font-azonix text-center">Projeto</p>
          </div>
          <img
            src={Slider3}
            className="w-full  md:h-[600px] h-[300px] object-cover"
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className="rounded-full border-2 border-snow-white w-10 h-10 flex items-center justify-center text-snow-white text-2xl opacity-[0.9]"
          >
            <ArrowLeft />
          </a>
          <a
            href="#slide1"
            className="rounded-full border-2 border-snow-white w-10 h-10 flex items-center justify-center text-snow-white text-2xl opacity-[0.9]"
          >
            <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export { Slider };
