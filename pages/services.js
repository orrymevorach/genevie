import ServicesPage from '@/components/ServicesPage/ServicesPage';
import Meta from '@/components/shared/Head/Head';
import {
  getEntryByField,
  getEntryById,
  getMedia,
} from '@/lib/contentful-utils';

export default function Services({ services }) {
  return (
    <>
      <Meta />
      <ServicesPage services={services} />
    </>
  );
}

export async function getStaticProps() {
  const page = await getEntryByField({
    contentTypeId: 'page',
    fieldName: 'title',
    fieldValue: 'SERVICES_PAGE',
  });
  const servicesEntryIds = page.content[0].fields.services;

  const services = await Promise.all(
    servicesEntryIds.map(async ({ sys: { id } }) => {
      const entry = await getEntryById({ entryId: id });
      const icon = getMedia(entry.fields.icon);
      entry.fields.icon = icon;
      return entry.fields;
    })
  );

  return {
    props: {
      services,
    },
  };
}
