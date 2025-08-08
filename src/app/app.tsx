import Wrapper from "components/organisms/Wrapper";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const isMobile = () => window.innerWidth < 768;
    const mobile = isMobile();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=2000",
        scrub: 2,
      }
    });

    tl.to('#hero-background', {
      opacity: 0,
      duration: 1,
      ease: "none"
    }, 0);

    tl.to('#hero-title', {
      y: -400,
      opacity: 0,
      duration: 1,
      ease: "none"
    }, 0);

    const cardElementsMobile = document.querySelectorAll('.hero-cards-mobile');
    const cardElementsDesktop = document.querySelectorAll('.hero-cards-desktop');
    const elements = mobile ? cardElementsMobile : cardElementsDesktop;

    if (elements.length > 0) {
      if (mobile) {
        const cardDuration = 1 / elements.length;
        
        elements.forEach((card, index) => {
          const startTime = 0.67 + (index * cardDuration);
          const endTime = startTime + cardDuration;
          
          const duration = cardDuration * 0.3;
          tl.fromTo(card, 
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              duration: duration, 
              ease: "power2.out",
            },
            startTime
          );
          
          const fadeStart = endTime - duration;
          tl.to(card, 
            { 
              opacity: 0, 
              y: -50, 
              duration: duration, 
              ease: "power2.in",
            },
            fadeStart
          );
        });
      } else {
        elements.forEach((card, index) => {
          const delay = index * 0.2;
          tl.fromTo(card,
            { opacity: 0, y: 100 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.5, 
              ease: "power2.out",
            },
            0.67 + delay
          );
        });
      }
    }

    const heroCta = document.getElementById('hero-cta');
    const heroWorksTitle = document.getElementById('hero-works-title');
    const heroWorksButtons = document.getElementById('hero-works-buttons');
    if (heroCta && heroWorksTitle && heroWorksButtons && elements.length > 0) {
      if (mobile) {
        const lastCardEndTime = 0.67 + (1 / elements.length) * elements.length;
        
        tl.to([...elements, heroCta], {
          opacity: 0,
          y: -50,
          duration: 0.3,
          ease: "power2.in",
        }, lastCardEndTime - 0.3);

        tl.fromTo(heroWorksTitle, { opacity: 0, y: -100 }, {
          opacity: 1,
          y: -150,
          duration: 0.3,
          ease: "power2.in",
        }, lastCardEndTime - 0.2);

        tl.fromTo(heroWorksButtons, { opacity: 0, y: 200 }, {
          opacity: 1,
          y: 10,
          duration: 0.3,
          ease: "power2.in",
        }, lastCardEndTime - 0.2);
        
       
      } else {
        const lastCardDelay = (elements.length - 1) * 0.2;
        const disappearTime = 0.67 + lastCardDelay + 0.5;
        
        tl.to([...elements, heroCta], {
          opacity: 0,
          y: -50,
          duration: 0.3,
          ease: "power2.in",
        }, disappearTime);

        tl.fromTo(heroWorksTitle, { opacity: 0, y: -100 }, {
          opacity: 1,
          y: -200,
          duration: 0.3,
          ease: "power2.in",
        }, disappearTime + 0.2);

        tl.fromTo(heroWorksButtons, { opacity: 0, y: 200 }, {
          opacity: 1,
          y: 70,
          duration: 0.3,
          ease: "power2.in",
        }, disappearTime + 0.2);
      }
    } else {
      console.error('❌ Elementos faltando:', {
        heroCta: !!heroCta,
        cards: elements.length
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-[600vh] w-screen relative">
      <Wrapper />
    </main>
  );
}

export default App;