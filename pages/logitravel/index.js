/* Layout */
import Layout from '../../layout/layout-logi';

/* Components  */
import HeaderLogitravel from '../../components/logitravel/HeaderLogitravel';
import HeaderBanner from '../../components/logitravel/HeaderBanner';
import Searcher from '../../components/logitravel/searcher';
import Breadcrumbs from '../../components/logitravel/Breadcrumbs';
import TabsProduct from '../../components/logitravel/TabsProduct';

import Resolver from '../../components/logitravel/Resolver';

/* Data  */
import * as INITIAL_DATA from './mock';

export default function Logitravel() {
  const container = 'max-w-container px-5 mx-auto';

  return (
    <Layout>
      <HeaderLogitravel props={INITIAL_DATA.header} />
      <HeaderBanner props={INITIAL_DATA.headerBanner} />
      <section className={container}>
        <Searcher props={INITIAL_DATA.searcher} />
      </section>
      <section className={container}>
        <Breadcrumbs props={INITIAL_DATA.breadcrumbs} />
      </section>
      <section className={container}>
        <TabsProduct props={INITIAL_DATA.tabsCarousel} />
      </section>
      <section className={container}>
        <Resolver
          name="CardHover"
          title={INITIAL_DATA.flipCards.title}
          props={INITIAL_DATA.flipCards}
        />
      </section>
      <section className={container}>
        <Resolver
          name="CardFeature"
          title={INITIAL_DATA.features.title}
          props={INITIAL_DATA.features}
        />
      </section>
    </Layout>
  );
}
