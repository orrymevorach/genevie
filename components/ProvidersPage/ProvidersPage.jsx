import { getMedia } from '@/lib/contentful-utils';
import Hero from '../shared/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import styles from './ProvidersPage.module.scss';
import ProvidersForm from './ProvidersForm/ProvidersForm';
import Information from './Information/Information';
import Wrapper from '../shared/Wrapper/Wrapper';
import Reveal from '../shared/Reveal/Reveal';

export default function ProvidersPage({ entries }) {
  const [banner] = entries;
  const image = getMedia(banner.image);
  return (
    <Layout>
      <Hero imageUrl={image.src} isCenter isSmall text={banner.text} />
      <Wrapper>
        <Reveal>
          <Information />
        </Reveal>
      </Wrapper>
      <Reveal>
        <ProvidersForm />
      </Reveal>
    </Layout>
  );
}
