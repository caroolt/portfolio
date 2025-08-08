
import { ShieldCheck, Sparkles, TrendingUp, type LucideIcon } from "lucide-react";
import { useMemo } from "react";

interface CardProps { 
  title: string; 
  description: string;
  icon: LucideIcon 
};

const Cards = () => {
  const cards = useMemo(() => [
    {
      id: 1,
      title: "Impacto Comprovado",
      description: "Soluções que aumentam receita e economizam tempo com performance e eficiência.",
      icon: TrendingUp
    }, 
    {
      id: 2,
      title: "Experiências Que Cativam",
      description: "Experiências que engajam, satisfazem e fazem seu produto crescer.",
      icon: Sparkles
    },
    {
      id: 3,
      title: "Confiança e Qualidade Ágil",
      description: "Projetos com excelência, transparência e foco no seu objetivo.",
      icon: ShieldCheck
    }
  ],[])

  return (
    <div id="hero-cards" className="z-50 w-11/12 md:w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-32 md:-translate-y-28">
      {/* Desktop Layout - Grid */}
      <div className="hidden  md:grid grid-cols-3 gap-9">
        {cards.map((card: CardProps, index: number) => (
          <div key={index}
            className="hero-cards-desktop opacity-0 text-gray-600 flex flex-col items-start gap-3 py-6 px-5 rounded-[20px] min-h-[100px] relative"
            style={{
              background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.02) 100%)',
              boxShadow: '-8px -9px 28.7px 0 rgba(255, 255, 255, 0.15) inset, 8px 9px 28.7px 0 rgba(255, 255, 255, 0.15) inset'
            }}
          >
            <div 
              className="flex flex-col justify-center items-center flex-shrink-0 rounded-[44px] w-12 h-12 p-1 absolute -top-4 -right-4"
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, #B093EF 0%, #3E1D86 99.99%)',
                boxShadow: '-1px -1px 1px 0 rgba(255, 255, 255, 0.15) inset, 1px 1px 1px 0 rgba(255, 255, 255, 0.15) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)'
              }}
            >
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-clash-display text-[1.25vw] font-medium text-white">{card.title}</h3>
            <span className="font-poppins text-[0.9375vw] font-normal text-gray-300">{card.description}</span>
          </div>
        ))}
      </div>

      {/* Mobile Layout - Stack com posição fixa */}
      <div className="md:hidden relative">
        {cards.map((card: CardProps, index: number) => (
          <div key={index}
            className="hero-cards-mobile opacity-0 text-gray-600 flex flex-col items-start gap-3 py-6 px-5 rounded-[20px] min-h-[100px] absolute translate-x-1/2 w-[80vw]"
            style={{
              background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.02) 100%)',
              boxShadow: '-8px -9px 28.7px 0 rgba(255, 255, 255, 0.15) inset, 8px 9px 28.7px 0 rgba(255, 255, 255, 0.15) inset',
              transform: 'translateY(30px)' // Começa um pouco abaixo
            }}
          >
            <div 
              className="flex flex-col justify-center items-center flex-shrink-0 rounded-[44px] w-12 h-12 p-1 absolute -top-4 -right-4"
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, #B093EF 0%, #3E1D86 99.99%)',
                boxShadow: '-1px -1px 1px 0 rgba(255, 255, 255, 0.15) inset, 1px 1px 1px 0 rgba(255, 255, 255, 0.15) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)'
              }}
            >
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-clash-display text-lg font-medium text-white">{card.title}</h3>
            <span className="font-poppins text-sm font-normal text-gray-300">{card.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;