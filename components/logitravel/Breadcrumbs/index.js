/* Import */
import PropTypes from 'prop-types';
import FromObject from '../../../utils/ldjson';

/* Component */
const Breadcrumbs = ({ props }) => {
  const { items, actives, ldjson } = props;

  return (
    <div className="breadcrumbs flex">
      <FromObject props={ldjson} />
      <div className="flex w-full my-0 border-b border-[#e9e9e9] mb-10">
        <ol className="breadcrumbs__active flex text-base font-bold py-2">
          {items.map((item, index) => (
            <li
              className="breadcrumbs__active_item text-slate-700 text-sm"
              key={index}
            >
              {item.content}
            </li>
          ))}
        </ol>
        <ol className="breadcrumbs__list flex items-center flex-wrap max-h-11 py-2 py-2 before:content-[''] before:absolute before:mx-4 before:min-h-[13px] before:w-px before:bg-slate-400">
          {actives.map((item, index) => (
            <li
              key={index}
              className="breadcrumbs__list-item first:ml-8 ml-7 font-light text-[#757575] text-sm"
            >
              <a
                href={item.link.href}
                target={item.link?.target}
                title={item.link.title}
              >
                {item.link.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

/* Value Props */
Breadcrumbs.propTypes = {
  items: PropTypes.array,
  actives: PropTypes.array,
  ldjson: PropTypes.object,
};

/* Export */
export default Breadcrumbs;
