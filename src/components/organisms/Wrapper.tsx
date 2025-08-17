
import HeroText from "components/atoms/HeroText";
import HeroCta from "components/molecules/HeroCta";
import HeroFooter from "components/molecules/HeroFooter";
import Navbar from "components/molecules/Navbar";
import WorkWithMe from "components/molecules/WorkWithMe";

const Wrapper = () => {
  return (
    <div className="h-screen w-screen relative overflow-x-hidden">
      <div className="fixed inset-0 z-50 pointer-events-auto">
        <Navbar/>
        <HeroCta/>
        <HeroText/>
        <HeroFooter/>
        <WorkWithMe/>
      </div>
    </div>
  );
};

export default Wrapper;