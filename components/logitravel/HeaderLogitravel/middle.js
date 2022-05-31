import Link from 'next/link';
import Icon from '../../../helpers/icon';

const HeaderMiddle = ({ props }) => {
  const { src, alt, link } = props;

  return (
    <div className="flex flex-row items-center justify-between px-7 min-h-[72px] text-[#3c3c3c]">
      <div>
        <a title={link.title} href={link.href}>
          <img className="h-11 w-auto" src={src} alt={alt}></img>
        </a>
        <h1 className="text-[#a8a8a8] text-xs text-right">Grandes viajes</h1>
      </div>
      <div className="flex flex-row items-center font-medium">
        <p className="border-r-2 border-[#a8a8a8] pr-6 text-sm">Crear cuenta</p>
        <Link href={'/logitravel/login'}>
          <a target="_blank" className="relative">
            <p className="px-6 text-sm">Mi cuenta</p>
          </a>
        </Link>
        <div className="rounded-full py-2 px-3 border color-[#a8a8a8] border-[#a8a8a8]">
          <Icon
            icon={'user'}
            size={'xl'}
            className={'w-6 h-6 color-[#a8a8a8]'}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
