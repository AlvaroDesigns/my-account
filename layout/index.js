import Head from 'next/head';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

export default function Layout({ children, header }) {
  return (
    <>
      <Head />

      <Header {...header} />
      <main>{children}</main>

      <Footer />
    </>
  );
}
