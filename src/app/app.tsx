
import Wrapper from "components/organisms/Wrapper";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {


  useEffect(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, 
                  onUpdate: (self) => {
            const progress = self.progress;
            const opacity = Math.max(0, 1 - progress);

            const backgrounds = document.querySelectorAll('#hero-background');
            
            if (backgrounds) {
              backgrounds.forEach((background) => {
                (background as HTMLElement).style.opacity = opacity.toString();
              })
            }
            
            const heroTitle = document.getElementById('hero-title');
            if (heroTitle) {
              const yOffset = progress * -100;
              const titleOpacity = Math.max(0, 1 - progress * 1.5); 
              heroTitle.style.transform = `translate(-50%, calc(-50% + ${yOffset}px))`;
              heroTitle.style.opacity = titleOpacity.toString();
            }
            
            const cardElements = document.querySelectorAll('#hero-cards > div');
            
            if (cardElements.length > 0) {
              const cardProgress = Math.min(1, Math.max(0, (progress - 0.67) * 3)); 
              const baseYOffset = (1 - progress) * 100; 
              
              cardElements.forEach((card, index) => {
                const delay = index * 0.2; 
                const individualProgress = Math.min(1, Math.max(0, (cardProgress - delay) * 1.5));
                
                const opacity = individualProgress;
                const yOffset = baseYOffset;
                
                (card as HTMLElement).style.opacity = opacity.toString();
                (card as HTMLElement).style.transform = `translateY(${yOffset}px)`;
              });
            }
          }
      });
    

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
  <main className="min-h-[600vh] w-screen relative">
      <Wrapper/>
  </main>
  );
}

export default App;