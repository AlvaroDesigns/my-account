const Icon = ({ icon, size = '5xl', className }) => {
  return (
    <>
      <i className={`nico-${icon} text-${size} ${className}`}></i>
    </>
  );
};

export default Icon;
