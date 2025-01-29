import AboutPage from '@/components/AboutPage/AboutPage';
import Meta from '@/components/shared/Head/Head';
import { getEntryByField, getEntryById } from '@/lib/contentful-utils';

export default function About({ entries }) {
  return (
    <>
      <Meta />
      <AboutPage entries={entries} />
    </>
  );
}

export async function getStaticProps() {
  const page = await getEntryByField({
    contentTypeId: 'page',
    fieldName: 'title',
    fieldValue: 'ABOUT_PAGE',
  });

  const entries = await Promise.all(
    page.content.map(async ({ fields }) => {
      if (!fields.content) return fields;
      const children = await Promise.all(
        fields.content.map(async ({ sys: { id } }) => {
          const entry = await getEntryById({ entryId: id });
          return entry.fields;
        })
      );
      return children;
    })
  );

  return {
    props: {
      entries,
    },
  };
}
