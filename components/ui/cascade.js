import Image from 'next/image';
import MyImage from '../common/image';

const Cascade = ({ props }) => {
  return (
    <section className="relative py-52 flex content-center items-center justify-center min-h-screen-75">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url('/images/bg_us-Alvarodesigns.jpeg')`,
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
            <div className=" pr-12">
              <h2 className="text-white">{props.title}</h2>
              <p className="mt-4 mb-14 text-white text-lg text-blueGray-200">
                {props.text}
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-regular py-4 px-4 w-52 rounded-full"
                href="/test/"
                onClick={() => console.log('click')}
              >
                {props.button.title}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="flex">
              {props.images.map((item, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={item.src}
                      className={`object-cover w-full image-cascade-${index}`}
                      alt="Landscape picture"
                      width={500}
                      height={400}
                    />
                  </div>
                );
              })}
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
          fill="#ffffff"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-200 fill-white"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
  );
};

/* Export  */
export default Cascade;
