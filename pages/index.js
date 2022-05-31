/* Layout */
import Layout from '../layout/layout-logi';

/* Components  */
import Hero from '../components/ui/hero';
import Cascade from '../components/ui/cascade';
import Masonry from '../components/ui/masonry';
import Feature from '../components/ui/features';

/* Styles  */
import styles from '../styles/Home.module.css';

/* Data  */
import Mock from '../data/hero';

export default function Home() {
  const { hero, header, cascade, masonry, products } = Mock;

  return (
    <Layout header={header}>
      <Hero props={hero} />
      <Cascade props={cascade} />
      <Masonry props={masonry} />
      <Feature props={products} />
    </Layout>
  );
}
