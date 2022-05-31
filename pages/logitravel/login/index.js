/* Layout */
import Layout from '../../../layout/layout-logi';

/* Components  */
import HeaderLogitravel from '../../../components/logitravel/HeaderLogitravel';
import Login from '../../../components/logitravel/Login';

/* Data  */
import * as INITIAL_DATA from './mock';

export default function Logins() {
  const container = 'max-w-container px-5 mx-auto max-w-[1060px]';

  return (
    <Layout>
      <HeaderLogitravel props={INITIAL_DATA.header} />
      <section className={container}>
        <Login />
      </section>
    </Layout>
  );
}
