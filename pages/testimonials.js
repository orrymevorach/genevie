import Meta from '@/components/shared/Head/Head';
import Layout from '@/components/shared/Layout/Layout';
import { getEntryByField, getEntryById } from '@/lib/contentful-server-utils';
import { CONTENTFUL_PAGE_IDS } from '@/utils/constants';
import Testimonials from '@/components/TestimonialsPage/TestimonialsPage';

export default function TestimonialsPage({ entries = [] }) {
  return (
    <>
      <Meta />
      <Layout>
        <Testimonials entries={entries} />{' '}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const page = await getEntryByField({
    contentTypeId: 'page',
    fieldName: 'title',
    fieldValue: CONTENTFUL_PAGE_IDS.TESTIMONIALS,
  });

  const entries = await Promise.all(
    page.content?.map(async ({ fields }) => {
      if (!fields) return null;
      const isTestimonials = fields.testimonials;
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
