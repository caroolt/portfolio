import Button from "components/atoms/Button";

const HeroCta = () => {
  return (
    <div id="hero-cta" className="absolute top-7 md:top-0 left-0 bottom-[60vh] right-0 z-40 flex flex-col items-center justify-center">
      <div className="w-11/12 md:w-[30vw] flex flex-col gap-5 items-center justify-center">
        <h2 className="text-whitesmoke text-center font-clash-display text-sm md:text-[0.94vw] font-normal leading-normal mix-blend-color-dodge">Desenvolvimento com propósito, design com identidade, entregas com impacto. Eu crio o digital que seu projeto merece</h2>
        <div className="flex gap-4 items-center max-w-fit justify-center">
          <Button
            onClick={() => { }}
            type="primary"
            icon={
              <div className="rounded-full md:rounded-[1.875vw] bg-purple-300 flex w-8 h-8 md:w-[1.875vw] md:h-[1.875vw] justify-center items-center gap-2">
                <img className="w-3 h-3 md:w-[0.8vw] md:h-[0.8vw]" alt="" src="assets/arrow-upwords.svg" />
              </div>
            }
          >
            Vamos criar seu projeto?
          </Button>
         
        </div>
    </div>
  </div>
  );
};

export default HeroCta; 