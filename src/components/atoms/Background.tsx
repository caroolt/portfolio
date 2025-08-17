
const Background = () => {
  return (
    <div 
      id="hero-background"
      className="fixed inset-0 z-20 h-screen w-screen flex flex-row overflow-hidden m-0 p-0 bg-purple-200"
    >
     <div className="w-full relative h-[1080px] mix-blend-color-dodge" style={{background: 'radial-gradient(farthest-corner at 32% -15%, rgba(243.27, 243.27, 243.27, 0.81) 0%, rgba(229.58, 229.58, 229.58, 0.13) 56%, rgba(168.35, 168.35, 168.35, 0.10) 100%)'}}/>

      <div 
        className="absolute h-full w-full"
        style={{
          background: `linear-gradient(179deg, rgba(0, 0, 0, 0.00) 37.84%, rgba(12, 6, 23, 0.90) 104.03%)`
        }}
      ></div>

      <img 
        id="background-image" 
        src="assets/CT_1x.webp" 
        className="absolute opacity-0 object-contain
          top-4 -left-64 w-[200vw] h-[150vh] 
          sm:-top-24 sm:-left-48 sm:w-[110vw] sm:h-[160vh]
          md:-top-32 md:-left-64 md:w-[105vw] md:h-[170vh]
          lg:-top-44 lg:-left-80 lg:w-screen lg:h-[180vh]
          xl:-left-96 xl:h-[200vh]" 
      />
    </div>
  );
};

export default Background;