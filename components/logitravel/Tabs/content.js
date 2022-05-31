import React from 'react';

import { TabPanel } from 'react-tabs';

const TabsContent = ({ props }) => {
  /* Data */
  const { items } = props;
  return (
    <>
      <div className="p-5">
        {props.map((item, indx) => {
          const { content = '' } = item;

          <TabPanel
            data-content={indx}
            key={indx}
            className="grid gap-4 grid-cols-5"
          >
            ${content}
          </TabPanel>;
        })}
      </div>
    </>
  );
};

export default TabsContent;
