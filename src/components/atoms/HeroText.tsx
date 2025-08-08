import Background from "./Background";

const HeroText = () => {
  return (
    <div>
      <h1 id="hero-title" className="z-[70] w-11/12 text-[4vh] md:w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-32 md:-translate-y-44 text-gray-100 text-center font-clash-display text-4xl md:text-[5vw] font-medium leading-tight md:leading-normal mix-blend-color-dodge">Credibilidade, performance e design em um só lugar</h1>
      <Background/>
    </div>
  );
};

export default HeroText;