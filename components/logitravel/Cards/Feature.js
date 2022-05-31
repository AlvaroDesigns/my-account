import Icon from '../../../helpers/icon';

const CardFeature = ({ props }) => {
  return (
    <div className="flex flex-wrap flex-col text-center items-center">
      <div>
        <Icon icon={props.icon} className={'text-primary-light'} />
      </div>
      <h3 className="uppercase font-medium mb-0.5">{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};

export default CardFeature;
