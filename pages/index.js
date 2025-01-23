import HomePage from '@/components/HomePage/HomePage';
import Tiles from '@/components/HomePage/Tiles/Tiles';
import Meta from '@/components/shared/Head/Head';
import Nav from '@/components/shared/Nav/Nav';

export default function Index({ tiles }) {
  return (
    <>
      <Meta />
      <HomePage tiles={tiles} />
    </>
  );
}

export function getStaticProps() {
  const tilesData = [
    {
      title: 'Comprehensive Risk Assessment',
      description:
        'Consult a genetic specialist in reproductive and preventative health to identify potential risks for you and your family.',
    },
    {
      title: 'cutting edge genetic testing',
      description:
        'Advanced genomic testing from leading laboratories to identify risks for thousands of preventable and treatable conditions.',
    },
    {
      title: 'Concierge Support',
      description:
        'Providing evidence-based reproductive guidance to support your journey and address the questions that arise along the way.',
    },
  ];
  return {
    props: {
      tiles: tilesData,
    },
  };
}
