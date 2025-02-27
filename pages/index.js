import HomePage from '@/components/HomePage/HomePage';
import Meta from '@/components/shared/Head/Head';
import Layout from '@/components/shared/Layout/Layout';
import { getEntryByField, getEntryById } from '@/lib/contentful-server-utils';
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
      const isTiles = fields.tiles;
      if (isTiles) {
        const tiles = await Promise.all(
          fields.tiles.map(async ({ sys }) => {
            const tile = await getEntryById({
              entryId: sys.id,
            });
            return tile.fields;
          })
        );
        return tiles;
      }

      return fields;
    })
  );

  return {
    props: {
      entries,
    },
  };
}
