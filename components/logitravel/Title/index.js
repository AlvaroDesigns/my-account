/* Import */
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/* Title */
export function Title({ props, position = 'center', tag = 'h3' }) {
  const { title, description } = props;

  const renderDescription = () =>
    description ? (
      <p className="text-base font-light text-gray-dark">{description}</p>
    ) : (
      ''
    );

  const Tag = tag;

  return (
    <div
      className={classNames('mb-12 w-9/12 mx-auto text-gray-dark', {
        'text-center': position === 'center',
        'text-left': position === 'left',
        'text-right': position === 'right',
      })}
    >
      <Tag className="text-3xl font-medium leading text-gray-darker font-heading">
        <ReactMarkdown>{title}</ReactMarkdown>
      </Tag>
      {renderDescription()}
    </div>
  );
}

/* Value Props */
Title.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

/* Export */
export default Title;
