// import styles from './HomePage.module.scss';
import Layout from '../shared/Layout/Layout';
import About from './About/About';
import Hero from './Hero/Hero';
import HeroContent from './HeroContent/HeroContent';
import Information from './Information/Information';
import Tiles from './Tiles/Tiles';

export default function HomePage({ tiles }) {
  return (
    <Layout>
      <Hero imageUrl="./home-hero.png">
        <HeroContent />
      </Hero>
      <Information />
      <Tiles data={tiles} />
      <About />
    </Layout>
  );
}
