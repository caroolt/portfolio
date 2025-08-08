import Background from "components/atoms/Background";
import FadedBackground from "components/atoms/FadedBackground";
import Logo from "components/atoms/Logo";

const Navbar = () => {
  return (
    <div>
      <div className="mix-blend-color-dodge absolute top-6 md:top-12 left-1/2 -translate-x-1/2 z-50 w-11/12 h-12 md:h-16 flex items-center justify-between">
        <Logo />
        <h3 className="font-clash-display text-xs md:text-[0.83vw] font-normal leading-normal text-gray-500">Dev Fullstack Frontend focused</h3>
      </div>
      <Background/>
      <FadedBackground/>
    </div>
  );
};

export default Navbar;    