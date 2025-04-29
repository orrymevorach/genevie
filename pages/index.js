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
      if (!fields) return null;
      const isTiles = fields.tiles;
      const isTestimonials = fields.testimonials;
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
      if (isTestimonials) {
        const testimonials = await Promise.all(
          fields.testimonials.map(async ({ sys }) => {
            const testimonial = await getEntryById({
              entryId: sys.id,
            });
            return testimonial.fields;
          })
        );
        return testimonials;
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
