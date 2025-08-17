import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollArrow = () => {
  const circleRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (circleRef.current) {
      gsap.set(circleRef.current, { rotation: 0 });
      gsap.to(circleRef.current, {
        rotation: "+=360",
        duration: 15,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center"
      });
    }
  }, []);

  return (
    <div className="relative inline-block overflow-hidden">
      <img 
        ref={circleRef}
        className="relative w-32 h-32" 
        src="assets/circular-arrow.svg" 
        alt="circle telling you to scroll down"
      />
      <img 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10" 
        src="assets/arrow-down.svg" 
        alt="arrow pointing down" 
      />
    </div>
  );
};

export default ScrollArrow; 