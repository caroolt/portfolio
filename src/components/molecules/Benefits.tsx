import { CircleDollarSign, CodeXml, Paintbrush } from "lucide-react";
import { useMemo } from "react";

const Benefits = () => {
  const benefits = useMemo(() =>  [
    {
      icon: Paintbrush,
      title: "Design",
    },
    {
      icon: CircleDollarSign,
      title: "Resultado"
    },
    {
      icon: CodeXml,
      title: "Programação"
    }
    
  ], []);
  return (
    <div className="flex flex-col md:flex-col gap-3">
      {benefits.map((benefit) => (
        <div key={benefit.title} className="flex flex-row gap-2 text-gray-400">
          <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="font-poppins text-sm md:text-[0.83vw] font-normal leading-normal">{benefit.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Benefits; 