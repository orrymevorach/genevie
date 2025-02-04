import Hero from '../shared/Hero/Hero';
import Layout from '../shared/Layout/Layout';
import styles from './ProvidersPage.module.scss';
import ProvidersForm from './ProvidersForm/ProvidersForm';
import Information from './Information/Information';
import Wrapper from '../shared/Wrapper/Wrapper';
import Reveal from '../shared/Reveal/Reveal';

export default function ProvidersPage({ entries }) {
  const [banner] = entries;
  return (
    <Layout>
      <Hero bannerFields={banner} isCenter isSmall shrinkWrapper />
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
