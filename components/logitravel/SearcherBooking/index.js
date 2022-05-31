/* Import */
import { useState, useRef, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';

import 'flatpickr/dist/flatpickr.css';

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

const SearcherBooking = ({ props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [desData, setdesData] = useState(0);

  const fp = useRef(null);

  useEffect(() => {
    const url = `https://www.logitravel.com/`;

    const endpoint = url.concat(
      `${API_DEFAULT.level1}${'?'}`,
      `line=${desData}`,
      `&tag=${'false'}`
    );

    /* Loading Active */
    // setIsLoading(true);

    /*    getServices(endpoint).subscribe({
      next: (res) => {
        setdesData(
          res.locations.map((item) => {
            return { label: item.label, value: Number(item.value) };
          })
        );
        setIsLoading(false);
      },
    }); */
  }, []);

  useEffect(() => {
    console.log('cambio');
  }, [setdesData]);

  return (
    <div className={`searcher relative z-20 bg-gray-light py-4 rounded`}>
      <div className="searcher__middle flex flex-row justify-start px-4">
        <Select literal={'Destinos'} props={desData} />
        <Select literal={'Zonas'} props={options} />
        <Flatpickr
          ref={fp}
          options={{
            dateFormat: 'd-M-Y',
            defaultDate: '21-04-2022',
            disableMobile: 'true',
            maxDate: 'today',
            mode: 'range',
            showMonths: 2,
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (!fp?.current?.flatpickr) return;
            fp.current.flatpickr.clear();
          }}
        >
          Clear
        </button>
        <Button>{'Reservar'}</Button>
      </div>
    </div>
  );
};

/* Searcher */
export default SearcherBooking;
