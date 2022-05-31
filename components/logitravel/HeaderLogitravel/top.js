const HeaderTop = ({ props }) => {
  const { contact, faq } = props;

  return (
    <div className="top flex flex-row items-center justify-between bg-[#3c3c3c] text-xs text-white px-7 font-extralight min-h-[32px]">
      <div className="">
        <a
          className="pr-5 border-r-2 border-slate-100"
          href={contact.href}
          title={contact.title}
        >
          <span>{contact.content.toUpperCase()}</span>
        </a>
        <a className="px-5" href={faq.href} title={faq.title}>
          <span>{faq.content.toUpperCase()}</span>
        </a>
      </div>
      <div className="flex">
        <p className="origen font-thin border-r-2 border-slate-100 pr-6">
          Origen{' '}
          <span className="font-extralight">
            {'Sevilla (SVQ)'.toUpperCase()}
          </span>
        </p>
        <div className="flex items-center border-r-2 border-slate-100 px-6">
          <img
            className="rounded-full w-5 h-5 border border-[#a8a8a8] mr-2"
            src="//cdn.logitravel.com/comun/images2012/flags/squared/es.svg?jpegQuality=80"
            alt="Spanish (Spain) "
          ></img>
          <span>ES</span>
        </div>
        <div className="pl-6">
          <p>
            <strong className="mr-2 text-sm">€</strong>EUR
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
