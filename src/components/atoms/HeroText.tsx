import Background from "./Background";

const HeroText = () => {
  return (
    <div className="h-screen w-screen">
      <h1 id="hero-title" className="z-[70] w-11/12 md:w-[70%] absolute top-[45%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-100 text-center font-clash-display text-3xl md:text-[5vw] font-medium leading-tight md:leading-normal mix-blend-color-dodge">Credibilidade, performance e design em um só lugar</h1>
      <Background/>
    </div>
  );
};

export default HeroText;