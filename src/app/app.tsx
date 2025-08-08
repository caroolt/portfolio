
import Wrapper from "components/organisms/Wrapper";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const isMobile = () => window.innerWidth < 768;

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "+=2000",
      scrub: 2,
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

        const cardElementsMobile = document.querySelectorAll('.hero-cards-mobile');
        const cardElementsDesktop = document.querySelectorAll('.hero-cards-desktop');
        const cardProgress = Math.min(1, Math.max(0, (progress - 0.67) * 3));
        const mobile = isMobile();
        const elements = mobile ? cardElementsMobile : cardElementsDesktop;

        if (elements.length > 0) {
          if (mobile) {
            const cardDuration = 1 / elements.length;

            elements.forEach((card, index) => {
              const cardStart = index * cardDuration;
              const cardEnd = (index + 1) * cardDuration;
              const isActiveCard = cardProgress >= cardStart && cardProgress < cardEnd;

              let opacity = 0;
              let yOffset = 50;

              if (isActiveCard) {
                const localProgress = (cardProgress - cardStart) / cardDuration;

                if (localProgress < 0.3) {
                  // Appearing phase
                  const appearProgress = localProgress / 0.3;
                  opacity = appearProgress;
                  yOffset = 50 - (appearProgress * 50);
                } else if (localProgress < 0.7) {
                  // Fully visible phase
                  opacity = 1;
                  yOffset = 0;
                } else {
                  // Fading out phase
                  const fadeProgress = (localProgress - 0.7) / 0.3;
                  opacity = 1 - fadeProgress;
                  yOffset = -(fadeProgress * 50);
                }
              } else {
                // Card not active - position based on timing
                yOffset = cardProgress < cardStart ? 50 : -50;
              }

              // Corrigindo o erro de tipagem: converte 'card' para HTMLElement
              const cardElement = card as HTMLElement;
              cardElement.style.opacity = opacity.toString();
              cardElement.style.transform = `translateY(${yOffset}px)`;
            });
          } else {
            const baseYOffset = (1 - progress) * 100;

                         elements.forEach((card, index) => {
               const delay = index * 0.2;
               const individualProgress = Math.min(1, Math.max(0, (cardProgress - delay) * 1.5));

               const cardElement = card as HTMLElement;
               cardElement.style.opacity = individualProgress.toString();
               cardElement.style.transform = `translateY(${baseYOffset}px)`;
             });
          }
        }
      }
    });

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
