/* Import */
import { useState } from 'react';
import Icon from '../../../helpers/icon';

import postServices from '../../../services/post';

const list = [
  { title: 'Guardamos tus datos para que puedas comprar más rápidamente' },
  {
    title:
      'Controla fácilmente tus reservas, presupuestos, búsquedas, favoritos,...',
  },
  {
    title: 'Recibe ofertas personalizadas para ti, algunas de ellas exclusivas',
  },
];

const recaptcha =
  '03AGdBq26m62PgcJ4HKy6JaReGNvSkov7pUKAIaZ1y4w5thW8eES25KikTBwxLyJhTOAY5oxAbX29NBt80DLNzjk66B6ib2KW-LSsSbUHVeg5e3BA-USNpFpssjL3CTxGNbAsqh65WxfgB5TLJO6tsNezNUUhXbz-bEIk1bNtSb-I2UWO4flJHmFGTH6snL9HiaMDia8WuHHb_Mi_Y4yz59vxcbhuHvQ_Of3x59n7_9xgOqCYJ4OnRnpNPMHNyfpX2eYEdRz6Navtt6dtLexxWCuQ_iFav-kOqVX8l6opcUfewH1nzeCW3s_Ku7g6VyBRvQnN-RYkwX1dL97AVIA5uKW3Kvef3y-I3D-dgg_cq29yWtc0sRJ_ueZH7L4lOrIWaeY06mBcVMfcJ8OfPUtqrvSzVvZA22MMvivifKzJnJd5XdtTtBf29QjOBYYUezLgKy9ogmUfSNRb2';

const Login = ({ props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const registerUser = async (event) => {
    event.preventDefault();

    const endpoint = 'https://www.logitravel.com/myaccount/Account/Login';

    const data = {
      Email: event.target[0].value,
      Password: event.target[1].value,
      RecaptchaResponse: recaptcha,
    };

    postServices(endpoint, data).subscribe({
      complete: () => {
        console.log('on');
        setTimeout(() => window.location.assign('/logitravel/my-account'), 250);
      },
    });
  };

  return (
    <div
      className={`flex relative z-20 bg-white rounded mt-[40px] hover:shadow-lg shadow-md`}
    >
      <aside
        className="w-full basis-[45%] bg-center bg-no-repeat bg-cover rounded min-h-[300px] overflow-hidden	relative before:content-[''] before:w-full before:h-full before:absolute before:rounded before:opacity-25 before:bg-black"
        style={{
          backgroundImage: `url(${'https://cdn.logitravel.com/comun/images/lineas/login_1200x1600.jpg?jpegQuality=85'})`,
        }}
      >
        <div className="bg-primary-light bg-opacity-75 py-14 px-10">
          <p className="relative text-[40px] font-normal mb-10 pb-10 text-white">
            ¡Únete a la familia Logitravel!
          </p>
          <ul className="relative flex flex-col text-white justify-start">
            {list.map((item, index) => (
              <li
                key={index}
                className="flex text-base font-light mb-3 items-center"
              >
                <Icon icon={'check'} className={'text-[16px] mr-2'} />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="relative overflow-hidden p-12 basis-[55%]">
        <p className="text-center text-2xl font-medium mb-6">
          Bienvenido de nuevo
        </p>
        <form onSubmit={registerUser}>
          <input
            className="appearance-none block font-light w-full text-gray-700 border rounded py-4 px-4 mb-5 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            name="Email"
            type="mail"
            placeholder="Correo electrónico"
          ></input>

          <div
            className="relative appearance-none block font-light w-full text-gray-700 border rounded mb-5 leading-tight focus:outline-none focus:bg-white"
            onClick={() => setIsPassword(!isPassword)}
          >
            <input
              className="w-full h-full py-4 px-4 font-light rounded"
              id="grid-first-name"
              name="Password"
              type={`${isPassword ? 'text' : 'Password'}`}
              placeholder="Contraseña"
            ></input>
            <Icon
              icon={`${isPassword ? 'eye' : 'eye-strike'}`}
              className={
                'absolute text-gray-700 opacity-50 cursor-pointer text-[18px] mr-2 translate-x-[-50%] translate-y-[100%]'
              }
            />
          </div>
          <button
            className="flex justify-center bg-secondary hover:bg-secundary-dark focus:shadow-outline focus:outline-none text-white font-medium uppercase p-4 my-0 mx-auto rounded w-full max-w-[264px]"
            type="submit"
          >
            Iniciar sesión
          </button>
          <div className="relative">
            <hr className="my-10"></hr>
            <span className="absolute top-0 left-1/2 text-sm font-light bg-white px-3 text-color-opacity-1 translate-x-[-50%] translate-y-[-50%]">
              o inicia sesión en un click
            </span>
          </div>
          <div className="flex justify-center">
            <button
              className="flex items-center justify-center basis-[43.3%] bg-[#3b5998] hover:bg-secundary-dark focus:shadow-outline focus:outline-none text-white font-medium uppercase p-4 my-0 mx-auto rounded w-full max-w-[264px]"
              type="button"
            >
              <Icon icon={'facebook'} className={'text-[16px] mr-2'} />
              Facebook
            </button>
            <button
              className="flex items-center border basis-[43.3%] border-gray-light text-gray justify-center bg-white hover:bg-secundary-dark focus:shadow-outline focus:outline-none text-white font-medium uppercase p-4 my-0 mx-auto rounded w-full max-w-[264px]"
              type="button"
            >
              <Icon icon={'google'} className={'text-[16px] mr-2'} />
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* Export */
export default Login;
