/* Import */
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

/* Type Icons */
const IconsTypes = ({ type }) => {
  if (type === 'info') {
    return (
      <Icon.Info className="h-5 w-5" fill="currentColor" aria-hidden="true" />
    );
  }
  if (type === 'error') {
    return (
      <Icon.X className="h-5 w-5" fill="currentColor" aria-hidden="true" />
    );
  }
  if (type === 'success') {
    return (
      <Icon.Check className="h-5 w-5" fill="currentColor" aria-hidden="true" />
    );
  }

  return;
};

IconsTypes.propTypes = {
  type: PropTypes.string.isRequired,
};

/* Export */
export default IconsTypes;
