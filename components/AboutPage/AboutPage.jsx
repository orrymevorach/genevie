import Hero from '../HomePage/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import styles from './AboutPage.module.scss';

export default function AboutPage() {
  return (
    <Layout>
      <Hero imageUrl="./about-hero.png"></Hero>
    </Layout>
  );
}
