const Logo = ({id}: {id: string}) => {
  return (
    <div id={id} className="mix-blend-color-dodge">
      <img className="w-10 h-10 md:w-12 md:h-12" src="assets/logo.svg" alt="Logo" />
    </div>
  );
};

export default Logo; 