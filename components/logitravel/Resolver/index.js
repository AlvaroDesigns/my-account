import Title from '../Title';
import CardHover from '../Cards/Hover';
import CardFeature from '../Cards/Feature';

/* Renders */
const RENDERS = {
  ['CardHover']: CardHover,
  ['CardFeature']: CardFeature,
};

const renderHeading = (title, description, tag) => {
  return title || description ? (
    <Title props={{ title, description }} tag={tag} />
  ) : (
    ''
  );
};

const Resolver = ({
  name = '',
  type = 'horizontal',
  title = '',
  description = '',
  tag = 'h3',
  col = 4,
  props,
}) => {
  const Component = RENDERS[name];

  return (
    <>
      {renderHeading(title, description, tag)}
      <div className={`grid gap-4 grid-cols-${col + 1} mb-10`}>
        {props.items.map((item, index) => {
          return <Component key={index} props={item} />;
        })}
      </div>
    </>
  );
};

export default Resolver;
