/* Import */
import { useState, useEffect } from 'react';
import store from '../../../store';
import { Provider } from 'react-redux';

import getServices from '../../../services/get';

import Select from './select';
import { Button } from '../Button';
import Counter from './counter';
import { API_DEFAULT } from './bussines';

/* Setup store */
const options = [
  {
    name: 'Todos los destinos',
    label: 'Todos los destinos',
    value: 0,
  },
  { name: 'África', label: 'África', value: 97 },
  {
    name: 'Asia y Pacífico',
    label: 'Asia y Pacífico',
    value: 95,
  },
  {
    name: 'Centroamérica',
    label: 'Centroamérica',
    value: 91,
  },
  { name: 'España', label: 'España', value: 98 },
  { name: 'Europa', label: 'Europa', value: 93 },
  {
    name: 'Norteamérica',
    label: 'Norteamérica',
    value: 90,
  },
  {
    name: 'Oriente Medio',
    label: 'Oriente Medio',
    value: 94,
  },
  {
    name: 'Sudamérica',
    label: 'Sudamérica',
    value: 92,
  },
];

const Searcher = ({ props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [desData, setdesData] = useState(0);

  useEffect(() => {
    const url = `https://www.logitravel.com/`;

    const endpoint = url.concat(
      `${API_DEFAULT.level1}${'?'}`,
      `line=${desData}`,
      `&tag=${'false'}`
    );

    const test = 'https://mocki.io/v1/62fa4541-5530-4fff-b07b-d5b580963b1b';

    /* Loading Active */
    // setIsLoading(true);

    getServices(test).subscribe({
      next: (res) => {
        setdesData(
          res.locations.map((item) => {
            return { label: item.label, value: Number(item.value) };
          })
        );
        setIsLoading(false);
      },
    });
  }, []);

  useEffect(() => {
    console.log('cambio');
  }, [setdesData]);

  return (
    <Provider store={store}>
      <div
        className={`searcher relative z-20 bg-secondary py-4 rounded mt-[-56px]`}
        store={store}
      >
        <div className="searcher__middle flex flex-row justify-start px-4">
          <Select literal={'Destinos'} props={desData} />
          <Select literal={'Zonas'} props={options} />
          <Counter
            format="dd"
            duration={200}
            value={1000}
            animation="count"
            text="resultados"
          />
          <Button>{'Reservar'}</Button>
        </div>
      </div>
    </Provider>
  );
};

/* Searcher */
export default Searcher;
