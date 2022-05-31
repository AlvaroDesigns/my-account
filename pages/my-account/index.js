/* Layout */
import Layout from '../../layout';

/* Components  */
import Hero from '../../components/ui/hero';

/* Data  */
import Mock from './mock.json';

export default function MyAccount() {
  const { header, hero } = Mock;

  return (
    <Layout header={header}>
      <div className="relative py-16 flex content-center items-center justify-center min-h-screen-40">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        ></div>
      </div>
      <p>Pues ya estas dentro</p>
    </Layout>
  );
}
