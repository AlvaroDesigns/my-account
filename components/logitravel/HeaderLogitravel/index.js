import HeaderTop from './top';
import HeaderMiddle from './middle';
import HeaderBottom from './bottom';

const HeaderLogitravel = ({ props }) => {
  const { nav_help, logo, nav_primary } = props;

  return (
    <>
      <HeaderTop props={nav_help} />
      <HeaderMiddle props={logo} />
      <HeaderBottom props={nav_primary} />
    </>
  );
};

export default HeaderLogitravel;
