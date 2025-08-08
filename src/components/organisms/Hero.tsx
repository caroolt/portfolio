import Background from "components/atoms/Background";
import HeroCta from "components/molecules/HeroCta";
import HeroFooter from "components/molecules/HeroFooter";
import Navbar from "components/molecules/Navbar";

const Hero = () => {
  return (
    <div className="h-screen w-screen relative"	>
      <Navbar/>
      <HeroCta/>
      <h1 className="w-11/12 text-[4vh] md:w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-32 md:-translate-y-44 z-50 text-gray-100 text-center font-clash-display text-4xl md:text-[5vw] font-medium leading-tight md:leading-normal  mix-blend-color-dodge">Credibilidade, performance e design em um só lugar</h1>
      <HeroFooter/>
      <Background />
    </div>
  );
};

export default Hero