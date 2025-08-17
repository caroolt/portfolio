const WorkWithMe = () => {
  return (
    <div id="work-with-me" className="h-screen w-screen absolute top-0 left-0 z-[60] opacity-0">
      <div className="z-[70] w-10/12 px-4 md:px-8 absolute top-[45%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-start font-clash-display leading-tight md:leading-normal">
        <span 
          id="work-with-me-question" 
          className="split-text font-medium text-1xl md:text-[1.8vw] mr-1 md:mr-2" 
          style={{color: '#0f081e'}}
        >
          Por que trabalhar comigo? 
        </span>
        <span 
          id="work-with-me-answer" 
          className="split-text font-normal text-lg md:text-[2.2vw]" 
          style={{color: '#0f081e'}}
        >
          Nos últimos 5 anos, transformei as experiências digitais de mais de 15 empresas — de grandes corporações a startups inovadoras e pequenos negócios em crescimento. Minha abordagem vai além do design: eu entendo que cada marca tem uma essência única, e trabalho para que seu projeto seja a expressão autêntica dessa identidade, conectando verdadeiramente com seus usuários.
        </span>
      </div>
    </div>
  );
};

export default WorkWithMe;