import React from 'react';
import { Tabs, resetIdCounter } from 'react-tabs';

import TabNavigator from './tab';
import TabContent from './content';

import { useState } from 'react';

const ITabs = ({ props }) => {
  const { items } = props;

  const [tabIndex, setTabIndex] = useState(0);

  resetIdCounter();

  return (
    <Tabs
      className="flex flex-col bg-white rounded"
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <TabNavigator props={items} index={tabIndex} />
      <TabContent props={items} />
    </Tabs>
  );
};

export default ITabs;
