/* Layout */
import Layout from '../layout';

/* Components  */
import Login from '../components/ui/login';
import styles from '../styles/Home.module.css';

/* Data  */
import Mock from '../data/login';

export default function MyAccount() {
  const { header, imagesBg } = Mock;

  return (
    <Layout header={header}>
      <Login props={imagesBg} />
      <div id="toast"></div>
    </Layout>
  );
}
