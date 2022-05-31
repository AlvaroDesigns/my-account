import dynamic from 'next/dynamic';

import 'odometer/themes/odometer-theme-default.css';

const Odometer = dynamic(import('react-odometerjs'), {
  ssr: false,
  loading: () => 0,
});

const Counter = (props) => {
  return (
    <div className="min-h-[52px] relative w-full px-3 basis-full basis-[calc(47%_-_16px)] flex items-center justify-center text-primary-light font-medium">
      <Odometer
        className="text-primary-light"
        animation={props.animation}
        duration={props.duration}
        format={props.format}
        theme={props.theme}
        value={props.value}
      />
      <span className="font-light text-xs text-gray-dark ml-2">
        {props.text}
      </span>
    </div>
  );
};

export default Counter;
