import Wrapper from "components/organisms/Wrapper";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  useEffect(() => {
    const isMobile = () => window.innerWidth < 768;
    const mobile = isMobile();

    const getResponsiveValue = (mobileValue: number, desktopValue: number) => {
      return mobile ? mobileValue : desktopValue;
    };

    const getViewportBasedValue = (percentage: number) => {
      return window.innerHeight * (percentage / 100);
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=2000",
        scrub: 2,
      }
    });



    if(!mobile) {
    
      const heroTitleY = getViewportBasedValue(getResponsiveValue(20, 0));
      const disappearHeroTitleY = getViewportBasedValue(getResponsiveValue(10, 35));
      tl.fromTo('#hero-title', {opacity: 1, y: -heroTitleY}, {
        y: -disappearHeroTitleY,
        opacity: 0,
        duration: 1,
        ease: "none"
      }, 0);
  
      const heroCtaY = getViewportBasedValue(getResponsiveValue(20, 0));
      const disappearHeroCTAY = getViewportBasedValue(getResponsiveValue(10, 35));
      tl.fromTo('#hero-cta', {opacity: 1, y: -heroCtaY}, {
        y: -disappearHeroCTAY,
        opacity: 0,
        duration: 1,
        ease: "none"
      }, 0);
  
  
      const NavbarLogoY = getViewportBasedValue(getResponsiveValue(20, 0));
      const disappearNavbarLogoY = getViewportBasedValue(getResponsiveValue(10, 35));
      tl.fromTo('#navbar-logo', {opacity: 1, y: -NavbarLogoY}, {
        y: -disappearNavbarLogoY,
        opacity: 0,
        duration: 1,
        ease: "none"
      }, 0);

      const heroFooterY = getViewportBasedValue(getResponsiveValue(0, 0)); 
      const disappearHeroFooterY = getViewportBasedValue(getResponsiveValue(-20, -25));
      tl.fromTo('#hero-footer-desktop', {opacity: 1, y: heroFooterY}, {
        y: disappearHeroFooterY,
        opacity: 0,
        duration: 1,
        ease: "none"
      }, 0);
      
    const NavbarInfoX = getViewportBasedValue(getResponsiveValue(20, 0));
    const NextNavbarInfoX = getViewportBasedValue(getResponsiveValue(10, 173));
    tl.fromTo('#navbar-info', {opacity: 1, x: -NavbarInfoX}, {
      x: -NextNavbarInfoX,
      opacity: 1,
      duration: 1,
      backgroundColor: '',
      ease: "sine.inOut"
    }, 1);

    const workWithMeQuestion = document.getElementById('work-with-me-question');
    const workWithMeAnswer = document.getElementById('work-with-me-answer');
    
    if (workWithMeQuestion && workWithMeAnswer) {
      gsap.set('#work-with-me', {opacity: 0});
      
      const splitQuestion = new SplitText('#work-with-me-question', { type: "chars" });
      const splitAnswer = new SplitText('#work-with-me-answer', { type: "chars" });
      
      gsap.set([splitQuestion.chars, splitAnswer.chars], { color: '#0f081e' });
      
      tl.to('#work-with-me', {
        opacity: 1,
        duration: 0.5,
        ease: "sine.inOut"
      }, 1);
      
      tl.to(splitQuestion.chars, {
        color: 'rgba(201, 201, 201, 0.8)',
        duration: 0.8,
        stagger: 0.02,
        ease: "none"
      }, 1.5);
      
      tl.to(splitAnswer.chars, {
        color: 'rgba(255, 255, 255, 0.8)',
        duration: 1.5,
        stagger: 0.02,
        ease: "none"
      }, 1.8);
    }

    // Anima a imagem de fundo para aparecer junto com WorkWithMe (Desktop)
    tl.to('#background-image', {
      opacity: 0.5,
      duration: 1,
      ease: "sine.inOut"
    }, 1);

    } else {
      const heroTitleY = getViewportBasedValue(getResponsiveValue(10, 0));
      const disappearHeroTitleY = getViewportBasedValue(getResponsiveValue(30, 0));
      tl.fromTo('#hero-title', {opacity: 1, y: -heroTitleY}, {
        y: -disappearHeroTitleY,
        opacity: 0,
        duration: 1,
        ease: "none"
      }, 0);
  
      const heroCtaY = getViewportBasedValue(getResponsiveValue(2, 0));
      const disappearHeroCTAY = getViewportBasedValue(getResponsiveValue(30, 35));
      tl.fromTo('#hero-cta', {opacity: 1, y: -heroCtaY}, {
        y: -disappearHeroCTAY,
        opacity: 0,
        duration: 1,
        ease: "none"
      }, 0);
  
      const NavbarLogoY = getViewportBasedValue(getResponsiveValue(0, 0));
      const disappearNavbarLogoY = getViewportBasedValue(getResponsiveValue(30, 35));
      tl.fromTo('#navbar-logo', {opacity: 1, y: -NavbarLogoY}, {
        y: -disappearNavbarLogoY,
        opacity: 0,
        duration: 1,
        ease: "none"
      }, 0);

      const heroFooterMobileY = getViewportBasedValue(getResponsiveValue(-5, 0)); 
      const disappearHeroFooterMobileY = getViewportBasedValue(getResponsiveValue(-30, -25));
      tl.fromTo('#hero-footer-mobile', {opacity: 1, y: heroFooterMobileY}, {
        y: disappearHeroFooterMobileY,
        opacity: 0,
        duration: 1,
        ease: "none"
      }, 0);

      tl.fromTo('#hero-scroll-mobile', {opacity: 1, y: -32}, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "none"
      }, 0);
   
      const workWithMeQuestion = document.getElementById('work-with-me-question');
      const workWithMeAnswer = document.getElementById('work-with-me-answer');
      
      if (workWithMeQuestion && workWithMeAnswer) {
        gsap.set('#work-with-me', {opacity: 0});
        
        const splitQuestion = new SplitText('#work-with-me-question', { type: "chars" });
        const splitAnswer = new SplitText('#work-with-me-answer', { type: "chars" });
        
        gsap.set([splitQuestion.chars, splitAnswer.chars], { color: '#0f081e' });
        
        tl.to('#work-with-me', {
          opacity: 1,
          duration: 0.5,
          ease: "sine.inOut"
        }, 1);
        
        tl.to(splitQuestion.chars, {
          color: 'rgba(201, 201, 201, 0.8)',
          duration: 1,
          stagger: 0.03,
          ease: "none"
        }, 1.5);
        
        tl.to(splitAnswer.chars, {
          color: 'rgba(255, 255, 255, 0.8)',
          duration: 2,
          stagger: 0.03,
          ease: "none"
        }, 1.8);
      }

      // Anima a imagem de fundo para aparecer junto com WorkWithMe (Mobile)
      tl.to('#background-image', {
        opacity: 0.5,
        duration: 1,
        ease: "sine.inOut"
      }, 1);
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