import Hero from '../HomePage/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import HeroContent from './HeroContent/HeroContent';
import styles from './ServicesPage.module.scss';

export default function ServicesPage() {
  return (
    <Layout>
      <Hero imageUrl="./services-hero.png" isCenter>
        <HeroContent />
      </Hero>
    </Layout>
  );
}
