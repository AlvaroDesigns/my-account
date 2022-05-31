import React from 'react';
import { useState, useEffect } from 'react';

import resizeImage from '../../../utils/image-formater';

const Tabs = ({ props }) => {
  const [activeNav, setActiveNav] = useState(0);
  const [activeContent, setActiveContent] = useState(0);
  const [activeImage, setActiveImage] = useState(false);

  const handleClick = (index) => {
    setActiveNav(index);
  };

  useEffect(() => {
    setActiveContent(activeNav);
    setActiveImage(activeNav);
  }, [activeNav, activeImage]);

  const Images = props.map((item, index) => {
    const { image } = item;

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        key={index}
        src={resizeImage(image, { width: 268, height: 145 })}
        alt={image.alt}
        width={'100%'}
        height={400}
        className={`cover ${index !== activeImage ? 'hidden invisible' : ''}`}
      />
    );
  });

  const Navegation = props.map((item, index) => {
    const showDescription =
      index === activeNav ? 'is-active text-slate-700' : '';

    return (
      <button
        key={index}
        data-tab={index}
        className={`w-6/12 p-4 transition duration-100 ease-linear uppercase first:border-r first:py-2 ${showDescription}`}
        onClick={() => handleClick(index)}
      >
        {item.label}
      </button>
    );
  });

  const Content = props.map((text, index) => {
    const { content } = text;

    return (
      <div
        data-content={index}
        key={index}
        data-tabs={index}
        className={`p-4 flex flex-col ${
          index !== activeContent ? 'hidden invisible' : ''
        }`}
      >
        {content.title ? (
          <h4 className="text-xl order-2 text-[#005591]">{content.title}</h4>
        ) : (
          ''
        )}
        {content.subtitle ? (
          <p className="font-normal order-1 uppercase text-[#2980b9]">
            {content.subtitle}
          </p>
        ) : (
          ''
        )}
        {content.productType ? (
          <p className="font-light order-3 text-slate-600 text-sm">
            {content.productType}
          </p>
        ) : (
          ''
        )}
        {content.descriptions
          ? content.descriptions.map((d, index) => (
              <p
                className="font-light order-3 text-slate-600 text-base"
                key={index}
              >
                {d.content}
              </p>
            ))
          : ''}
      </div>
    );
  });

  return (
    <div className="tabs">
      <div>{Images}</div>
      <div className="flex tabs_navegation mx-2 border-b border-slate-100 text-slate-400 text-sm">
        {Navegation}
      </div>
      <div className="tabs__content flex grow">{Content}</div>
    </div>
  );
};

export default Tabs;
