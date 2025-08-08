const Background = () => {
  return (
    <div className="h-full w-full relative flex flex-row overflow-hidden m-0 p-0 bg-purple-200">
      <div 
        className="h-[120vh] md:h-[140vh] w-1/2 m-0 border-0 p-0 mix-blend-color-dodge"
        style={{
          background: 'conic-gradient(from 90deg at 50% 50%, #1A1A1A 0deg, #D7D7D7 110deg, #f8f8f8 360deg)'
        }}
      ></div>
      <div 
        className="h-[120vh] md:h-[140vh] w-1/2 m-0 p-0 border-0 mix-blend-color-dodge"
        style={{
          background: 'conic-gradient(from 270deg at 50% 50%, #f8f8f8 0deg, #D7D7D7 240deg, #1A1A1A 360deg)'
        }}
      ></div>
      <div 
        className="absolute h-full w-full"
        style={{
          background: 'linear-gradient(180deg, #0c0617 0%, rgba(15, 8, 30, 0.00) 70%, #0c0617 100%)'
        }}
      ></div>
    </div>
  );
};

export default Background;