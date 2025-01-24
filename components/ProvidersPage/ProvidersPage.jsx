import Hero from '../HomePage/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import HeroContent from './HeroContent/HeroContent';
import styles from './ProvidersPage.module.scss';

export default function ProvidersPage() {
  return (
    <Layout>
      <Hero imageUrl="./providers-hero.png" isCenter>
        <HeroContent />
      </Hero>
    </Layout>
  );
}
