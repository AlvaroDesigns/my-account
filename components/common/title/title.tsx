import classNames from 'classnames';

type TitlePosition = 'left' | 'center' | 'right';

export interface TitleProps {
  heading: string;
  description?: string;
  position?: TitlePosition;
}

export function Title({
  heading,
  description,
  position = 'center',
}: TitleProps) {
  const renderDescription = () =>
    description ? (
      <p className="text-base font-light text-gray-dark">{description}</p>
    ) : (
      ''
    );

  return (
    <div
      className={classNames('mb-6', {
        'text-center': position === 'center',
        'text-left': position === 'left',
        'text-right': position === 'right',
      })}
    >
      <h2 className="text-3xl font-medium leading text-gray-darker font-heading">
        {heading}
      </h2>
      {renderDescription()}
    </div>
  );
}

export default Title;
