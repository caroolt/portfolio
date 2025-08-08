import Button from "components/atoms/Button";
import FadedBackground from "components/atoms/FadedBackground";

const Works = () => {
  return (
    <div className="relative min-h-screen">
      <h1 
        id="hero-works-title" 
        className="z-[80] w-11/12 text-[4vh] md:w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-32 md:-translate-y-44 text-[#E2E2E2] text-center font-clash-display text-4xl md:text-[5vw] font-medium leading-tight md:leading-normal mix-blend-color-dodge"
      >
        Projetos e experiências que falam por mim
      </h1>
      
      <div 
        id="hero-works-buttons" 
        className="z-[80] w-11/12 md:w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 md:translate-y-20 flex justify-center"
      >
        <div className="flex gap-4 items-center">
          <Button
            className="text-[#0c0617] w-[15vh] md:w-[9vw] bg-gray-800 hover:bg-opacity-95"
            onClick={() => { console.log('Experiências clicked'); }}
            type="secondary"
          >
            Experiências
          </Button>
          <Button
            className="w-[15vh] md:w-[9vw]"
            onClick={() => { console.log('Projetos clicked'); }}
            type="secondary"
          >
            Projetos
          </Button>
        </div>
      </div>
      
      <FadedBackground/>
    </div>
  );
};

export default Works;