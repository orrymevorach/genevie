import Services from '@/components/ServicesPage/Services/Services';
import Hero from '../HomePage/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import HeroContent from './HeroContent/HeroContent';
import styles from './ServicesPage.module.scss';

export default function ServicesPage({ services }) {
  return (
    <Layout>
      <Hero imageUrl="./services-hero.png" isCenter>
        <HeroContent />
      </Hero>
      <Services services={services} />
    </Layout>
  );
}
