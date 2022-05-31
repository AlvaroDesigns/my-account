/* Layout */
import Layout from '../../../layout/layout-logi';

/* Components  */
import HeaderLogitravel from '../../../components/logitravel/HeaderLogitravel';
import MyAccount from '../../../components/logitravel/MyAccount';

/* Data  */
import * as INITIAL_DATA from './mock';

export default function Myaccount() {
  return (
    <Layout>
      <HeaderLogitravel props={INITIAL_DATA.header} />
      <MyAccount />
    </Layout>
  );
}
