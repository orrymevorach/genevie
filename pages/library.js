import LibraryPage from '@/components/LibraryPage/LibraryPage';
import Meta from '@/components/shared/Head/Head';
import { getEntryByField } from '@/lib/contentful-utils';

export default function Library({ entries }) {
  return (
    <>
      <Meta />
      <LibraryPage entries={entries} />
    </>
  );
}

export async function getStaticProps() {
  const page = await getEntryByField({
    contentTypeId: 'page',
    fieldName: 'title',
    fieldValue: 'LIBRARY_PAGE',
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
