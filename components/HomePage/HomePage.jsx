// import styles from './HomePage.module.scss';
import Footer from '../shared/Footer/Footer';
import About from './About/About';
import Hero from './Hero/Hero';
import Information from './Information/Information';
import Tiles from './Tiles/Tiles';

export default function HomePage({ tiles }) {
  return (
    <div>
      <Hero />
      <Information />
      <Tiles data={tiles} />
      <About />
      <Footer />
    </div>
  );
}
