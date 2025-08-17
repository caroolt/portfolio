import Benefits from "./Benefits";
import ScrollArrow from "./ScrollArrow";
import { CircleDollarSign, CodeXml, Paintbrush } from "lucide-react";

const HeroFooter = () => {
  return (
    <>
      {/* Desktop Layout */}
      <div id="hero-footer-desktop" className="hidden md:flex absolute bottom-[10vh] left-1/2 -translate-x-1/2 w-11/12 max-h-fit z-50 flex-row justify-between items-end">
        <Benefits/>
        <span className="font-clash-display text-[0.83vw] py-5 font-normal leading-normal text-gray-500">+5 anos de experiência</span>
        <ScrollArrow/>
      </div>
      
      {/* Mobile Layout */}
      <div id="hero-footer-mobile" className="md:hidden absolute bottom-[25vh] left-1/2 -translate-x-1/2 w-full z-50">
        <div className="bg-white/10 backdrop-blur-sm p-4 mb-8">
          <div className="flex flex-row justify-center gap-8 text-white">
            <div className="flex flex-row gap-2 items-center">
              <Paintbrush className="w-5 h-5" />
              <span className="font-poppins text-xs font-normal">Design</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CircleDollarSign className="w-5 h-5" />
              <span className="font-poppins text-xs font-normal">Resultado</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CodeXml className="w-5 h-5" />
              <span className="font-poppins text-xs font-normal">Programação</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* ScrollArrow para mobile - abaixo do texto principal */}
      <div id="hero-scroll-mobile" className="md:hidden absolute top-[75%] left-1/2 -translate-x-1/2 z-50">
        <ScrollArrow/>
      </div>
    </>
  );
};

export default HeroFooter; 