import * as Icon from 'react-feather';
import PropTypes from 'prop-types';

const Hero = ({ props }) => {
  /* Data */
  const { image, title, subtitle, button } = props;

  return (
    <div className="relative py-52 flex content-center items-center justify-center min-h-screen-75">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-40 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-left">
            <div className="pr-12">
              <p className="mt-4 mb-5 text-white text-lg text-blueGray-200">
                {subtitle}
              </p>
              <h1 className="text-white mb-10 font-semibold text-5xl">
                {title}
              </h1>
              {button ? (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-regular py-4 px-4 rounded-full"
                  href="/test/"
                  onClick={() => console.log('click')}
                >
                  {button.title}
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <Icon.Play
                className="text-white	border border-white m-5 h-6 w-6"
                aria-hidden="true"
                onClick={() => console.log('click')}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
        style={{ transform: 'translateZ(0)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  button: PropTypes.object,
  video: PropTypes.string,
  icon: PropTypes.string,
};

export default Hero;
