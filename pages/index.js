import HomePage from '@/components/HomePage/HomePage';
import Meta from '@/components/shared/Head/Head';
import { getEntryByField } from '@/lib/contentful-utils';
import { CONTENTFUL_PAGE_IDS } from '@/utils/constants';

export default function Index({ entries = [] }) {
  return (
    <>
      <Meta />
      <HomePage entries={entries} />
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
      entries: [...entries, tilesData],
    },
  };
}
