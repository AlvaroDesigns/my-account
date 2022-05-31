import React from 'react';

import { Monitor, Globe } from 'react-feather';

import Tabs from './tabs';

const head = (data) => {
  const { icon, deal, image, secondaryImage } = data;

  const TypeIcon = (icon) => {
    if (icon === 'car-routes') {
      return <Monitor />;
    }

    if (icon === 'map-markers') {
      return <Globe />;
    }
    return;
  };

  return <div className={deal ? 'deals' : 'nodeals'}>{TypeIcon(icon)}</div>;
};

const buildTabs = (props) => {
  const {
    secondaryImage,
    image,
    title,
    subtitle,
    productType,
    descriptions,
    moreInfo,
  } = props;
  return [
    {
      label: 'Resumen',
      image: {
        ...image,
      },
      content: {
        title,
        subtitle,
        productType,
        descriptions,
      },
    },
    {
      label: 'Itinerario',
      image: {
        ...secondaryImage,
      },
      content: {
        descriptions: moreInfo,
      },
    },
  ];
};

const Price = (price) => {
  const locale = 'es-ES';

  const numberPrice = Intl.NumberFormat(locale, {
    style: 'currency',
    currency: price.currency,
  }).format(price.value);

  return (
    <div className="flex flex-col font-medium justify-items-end text-[#faaf05] text-2xl">
      <span className="text-xs font-light justify-items-end">{price.from}</span>
      <span>{numberPrice}</span>
    </div>
  );
};

const ProductCard = ({ props }) => {
  return (
    <div className="card flex flex-col h-full max-w-sm shadow overflow-hidden transition duration-500 ease-in-out border rounded cursor-pointer border-gray-lightest hover:shadow-lg">
      <Tabs props={buildTabs(props)} />
      <div className="flex justify-between p-3 border-t border-slate-100">
        <div className="flex align-items items-center">
          {[...Array(3)].map((__, index) => (
            <Globe
              key={index}
              className="rounded-full border-b border-slate-100 text-slate-400"
            />
          ))}
        </div>
        {Price(props.price)}
      </div>
    </div>
  );
};

export default ProductCard;
