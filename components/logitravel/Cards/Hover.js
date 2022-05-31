import Link from 'next/link';

const CardHover = ({ props }) => {
  const { link } = props;

  return (
    <Link href={link.href}>
      <a target={link.target} title={props.title} className="relative w-full">
        <article
          className="w-full bg-center bg-no-repeat bg-cover rounded min-h-[300px] overflow-hidden	relative before:content-[''] before:w-full before:h-full before:absolute before:rounded before:opacity-25 before:bg-black"
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        >
          <div className="absolute inset-0 top-full py-5 px-4 transition ease-linear duration-[3000ms] before:content-[''] before:h-full before:absolute before:w-full before:bg-primay before:opacity-25">
            <h3 className="bottom-full text-white text-[28px] font-light left-4 mb-4 right-4 absolute">
              {props.title}
            </h3>
            <p>{props.description}</p>
            <span>Ver todo</span>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default CardHover;
