
import HeroText from "components/atoms/HeroText";
import Cards from "components/molecules/Cards";
import HeroCta from "components/molecules/HeroCta";
import HeroFooter from "components/molecules/HeroFooter";
import Navbar from "components/molecules/Navbar";

const Wrapper = () => {
  return (
    <div className="h-screen w-screen relative"	>
      <div className="fixed inset-0 z-50">
        <Navbar/>
        <HeroCta/>
        <HeroText/>
        <Cards/>
        <HeroFooter/>
      </div>
    </div>
  );
};

export default Wrapper;