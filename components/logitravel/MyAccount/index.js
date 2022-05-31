import SearcherBooking from '../SearcherBooking';

const list = [
  { title: 'Inicio' },
  { title: 'Datos personales' },
  { title: 'monedero' },
  { title: 'Reservas', selected: true },
  { title: 'Presupuestos' },
  { title: 'Bonos de viaje' },
];

const MyAccount = ({ props }) => {
  const container = 'max-w-container px-5 mx-auto max-w-[1060px]';

  return (
    <>
      <div
        className="w-full bg-center bg-no-repeat bg-cover min-h-[163px] overflow-hidden	relative"
        style={{
          backgroundImage: `url(${'https://cdn.logitravel.com/comun/images/lineas/mybookings_1920x500_1.jpg?jpegQuality=80'})`,
        }}
      ></div>
      <div className="mx-auto grid grid-cols-[228px_minmax(900px,_1fr)_100px]">
        <div className="flex flex-col items-end bg-white pb-4 border border-r-1">
          <div className="flex justify-center align-center h-[124px] w-[124px] mr-5 mb-5 mt-[-62px] border border-white border-4 overflow-hidden rounded-full z-10">
            <figure className="w-full h-full">
              <img
                className="w-full h-full"
                src="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x"
              ></img>
            </figure>
          </div>
          <ul className="relative flex flex-col text-black-opacity-2 justify-end items-end">
            {list.map((item, index) => (
              <li
                key={index}
                className={`flex text-sm font-medium mb-3 px-5 py-3 ${
                  item.selected
                    ? 'text-primary-light border-r-2 border-primary-light'
                    : ''
                }`}
              >
                {item.title.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white">
          <h2 className="text-2xl font-normal text-gray-dark">Reservas</h2>
          <SearcherBooking />
        </div>
      </div>
    </>
  );
};

export default MyAccount;
