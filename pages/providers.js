import ProvidersPage from '@/components/ProvidersPage/ProvidersPage';
import Meta from '@/components/shared/Head/Head';
import { getEntryByField } from '@/lib/contentful-utils';
import { CONTENTFUL_PAGE_IDS } from '@/utils/constants';

export default function Providers({ entries = [] }) {
  return (
    <>
      <Meta />
      <ProvidersPage entries={entries} />
    </>
  );
}

export async function getStaticProps() {
  const page = await getEntryByField({
    contentTypeId: 'page',
    fieldName: 'title',
    fieldValue: CONTENTFUL_PAGE_IDS.PROVIDERS,
  });

  const entries = await Promise.all(
    page.content?.map(async ({ fields }) => {
      return fields;
    })
  );

  return {
    props: {
      entries,
    },
  };
}
