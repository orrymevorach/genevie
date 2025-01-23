// import styles from './HomePage.module.scss';
import Footer from '../shared/Footer/Footer';
import Layout from '../shared/Layout/Layout';
import About from './About/About';
import Hero from './Hero/Hero';
import Information from './Information/Information';
import Tiles from './Tiles/Tiles';

export default function HomePage({ tiles }) {
  return (
    <Layout>
      <Hero />
      <Information />
      <Tiles data={tiles} />
      <About />
    </Layout>
  );
}
