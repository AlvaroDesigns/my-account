import classNames from 'classnames';

const CLASS_DISABLED = 'cursor-not-allowed opacity-50';

const CLASS_PRIMARY = 'bg-primary-light hover:bg-primary-lighter text-white';

const CLASS_SECONDARY = 'bg-secondary hover:bg-secondary-lighter text-white';

const CLASS_BASE = 'py-2 px-4 rounded transition duration-200 ease-in-out';

export function Button({
  onClick,
  children,
  color = 'primary',
  disabled = false,
  ...props
}) {
  return (
    <button
      className={classNames({
        [CLASS_BASE]: true,
        [CLASS_PRIMARY]: color === 'primary',
        [CLASS_SECONDARY]: color === 'secondary',
        [CLASS_DISABLED]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
