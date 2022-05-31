import { useState, useEffect } from 'react';

import getServices from '../../../services/get';

import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
import Title from '../Title';
import ProductCard from '../ProductCard';
import ViewMore from '../Cards/ViewMore';
import SkeletonCard from './skeletonCard';

const ProductCardItems = (item) => {
  return (
    <>
      {item.items
        ? item.items.map((pro, idx) => <ProductCard key={idx} props={pro} />)
        : ''}
      {item.items && item.viewMore ? <ViewMore props={item.viewMore} /> : ''}
    </>
  );
};

const TabsProduct = ({ props }) => {
  /* Data */
  const { items, title, description } = props;

  /* Stades */
  const [isLoading, setIsLoading] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [data, setData] = useState(items[0]);

  /* Reset id for problem package tabs sycn */
  resetIdCounter();

  useEffect(() => {
    const { items } = props;
    const { params = null } = items[tabIndex];

    if (tabIndex === 0 && params === null) return;

    const url = 'https://www.logitravel.com/holidaytoursalex/Ajax/product/';

    const endpoint = url.concat(
      `?${params.map((item) => `${item.key}=${item.value}`).join('&')}`
    );

    /* Loading Active */
    setIsLoading(true);

    /* Service */
    setTimeout(
      () =>
        getServices(endpoint).subscribe({
          next: (res) => {
            setData(res);
            setIsLoading(false);
          },
        }),
      500
    );
  }, [props, tabIndex]);

  return (
    <>
      <Title props={{ title, description }} tag={'h1'} />
      <div className="flex w-full my-0 mx-auto mb-10 shadow-md">
        <Tabs
          className="tabs flex flex-col bg-white rounded"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="flex border-b border-1 border-slate-100 border-b-[3px]">
            {items.map((item, idx) => (
              <Tab
                className={`"px-4" ${
                  idx === tabIndex
                    ? 'selected relative py-3 text-[#005591] font-medium after:absolute after:border-b after:border-[#005591] after:bottom-0 after:bg-sky-900 after:h-0.5 after:left-0 after:w-full'
                    : 'py-3 text-[#757575]'
                }`}
                key={idx}
              >
                <span className="px-4 cursor-pointer" data-tab={idx}>
                  {item.title.toUpperCase()}
                </span>
              </Tab>
            ))}
          </TabList>
          <div className="p-5">
            {items.map((__, indx) => (
              <TabPanel
                data-content={indx}
                key={indx}
                className="grid gap-4 grid-cols-5"
              >
                {isLoading ? '' : ProductCardItems(data)}
                {isLoading ? <SkeletonCard number={10} /> : ''}
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default TabsProduct;
