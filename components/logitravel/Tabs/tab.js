import React from 'react';

import { Tab, TabList } from 'react-tabs';

const TabNavigator = ({ props }, tabIndex) => {
  const { items } = props;

  return (
    <>
      <TabList className="flex border-b border-2 border-slate-100 py-3">
        {props.map((item, idx) => (
          <Tab
            className={`"px-4" ${
              idx === tabIndex
                ? 'text-[#005591] font-medium after:border-b after:border-[#005591]'
                : 'text-[#757575]'
            }`}
            key={idx}
          >
            <span className="px-4 cursor-pointer" data-tab={idx}>
              {item.title.toUpperCase()}
            </span>
          </Tab>
        ))}
      </TabList>
    </>
  );
};

export default TabNavigator;
