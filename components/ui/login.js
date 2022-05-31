import dynamic from 'next/dynamic';
import Image from 'next/image';
import { render, unmountComponentAtNode } from 'react-dom';
import { LockClosedIcon } from '@heroicons/react/solid';

const Toast = dynamic(() => import('../common/toast'));

const HeaderLogin = () => {
  return (
    <div className="mb-10">
      <Image
        className="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
        width={50}
        height={50}
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or{' '}
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          start your 14-day free trial
        </a>
      </p>
    </div>
  );
};

const BodyLogin = () => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="email-address">Email address</label>
        <input
          id="email-address"
          name="text"
          type="text"
          autoComplete="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
      </div>
    </>
  );
};

const registerUser = async (event) => {
  event.preventDefault();

  const url = 'http://www.alvarodesigns.com/wp-json/jwt-auth/v1/token';

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      username: event.target[1].value,
      password: event.target[2].value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await res.json();

  if (result.data?.status === 403) {
    const list = [
      {
        id: 2,
        type: 'error',
        color: 'red',
      },
    ];

    const template = (
      <Toast toastList={list} autoDelete={false} autoDeleteTime={1500} />
    );

    render(template, document.querySelector('#toast'));

    return;
  }

  setTimeout(() => window.location.assign('/my-account'), 250);
};

const Login = (imagesBg) => {
  const { props } = imagesBg;

  const img = props[Math.floor(Math.random() * (props.length - 1))].src;

  return (
    <div className="min-h-full flex items-center bg-gray-100">
      <div className="container mx-auto ">
        <div className="flex justify-center px-6 my-12 ">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-7/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url(${img})`,
                backgroundPositionX: `${-190}px`,
              }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white p-11 rounded-lg lg:rounded-l-none">
              <form onSubmit={registerUser} className="mt-8 space-y-6">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <HeaderLogin />
                  <BodyLogin />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
