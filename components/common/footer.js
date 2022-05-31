import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="px-12 bg-black py-7 md:flex md:items-center md:justify-between md:py-14 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <Link href="/">
          <a className="hover:underline">Alvaro designs™</a>
        </Link>
        . All Rights Reserved.
      </span>
      <div className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <div className="flex flex-col">
          <Image
            alt="Cdmon"
            src="/images/logo_cdmon_negative.png"
            width={120}
            height={26}
          ></Image>
          <span>Hosting by Cdmon:</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
