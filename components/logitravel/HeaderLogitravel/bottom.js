import { ChevronDown, Plus } from 'react-feather';

const HeaderBottom = ({ props }) => {
  const { items, more_products } = props;

  return (
    <div className="flex items-center justify-between bg-[#005591] text-base text-white font-extralight min-h-[42px]">
      <ul className="flex flex-row w-full h-full text-sm px-7 min-h-[42px]">
        {items.map((item, index) => (
          <li
            className={`flex glow w-full items-center whitespace-nowrap px-3 ${
              index === 2 ? 'border-r-1 border-[#287cb2]' : ''
            } ${index > 2 ? 'bg-[#014983]' : ''}`}
            key={index}
          >
            <a
              className="flex flex-row items-center"
              href={item.href}
              title={item.title}
            >
              {item.content.toUpperCase()}
              <ChevronDown className="w-4 h-4" />
            </a>
          </li>
        ))}
        <li className="flex glow w-full flex-row items-center bg-[#00376c] whitespace-nowrap px-4">
          {more_products.content.toUpperCase()}
          <Plus className="w-4 h-4" />
        </li>
      </ul>
    </div>
  );
};

export default HeaderBottom;
