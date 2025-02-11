import HomePage from '@/components/HomePage/HomePage';
import Meta from '@/components/shared/Head/Head';
import Layout from '@/components/shared/Layout/Layout';
import { getEntryByField } from '@/lib/contentful-server-utils';
import { CONTENTFUL_PAGE_IDS } from '@/utils/constants';

export default function Index({ entries = [] }) {
  return (
    <>
      <Meta />
      <Layout>
        <HomePage entries={entries} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const page = await getEntryByField({
    contentTypeId: 'page',
    fieldName: 'title',
    fieldValue: CONTENTFUL_PAGE_IDS.HOME,
  });

  const entries = await Promise.all(
    page.content?.map(async ({ fields }) => {
      return fields;
    })
  );

  const tilesData = [
    {
      title: 'Expert Reproductive Genetic Guidance',
      description:
        'Consult with a leading genetic specialist in reproductive and preventive health to identify potential risks for thousands of preventable and treatable conditions through advanced genomic testing.',
    },
    {
      title: 'On-Call Support Throughout Your Journey',
      description:
        'Receive personalized evidence-based guidance regarding any prenatal concerns or questions that arise before and during pregnancy.',
    },
    {
      title: 'Enhancing Reproductive Success',
      description:
        'Targeted assessment of medication safety and environmental risks, with expert strategies to improve reproductive outcomes.',
    },
  ];
  return {
    props: {
      entries: [...entries, tilesData],
    },
  };
}
