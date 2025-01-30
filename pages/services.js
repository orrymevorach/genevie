import ServicesPage from '@/components/ServicesPage/ServicesPage';
import Meta from '@/components/shared/Head/Head';
import {
  getEntryByField,
  getEntryById,
  getMedia,
} from '@/lib/contentful-utils';

export default function Services({ entries = [] }) {
  return;
  return (
    <>
      <Meta />
      <ServicesPage entries={entries} />
    </>
  );
}

// export async function getStaticProps() {
//   const page = await getEntryByField({
//     contentTypeId: 'page',
//     fieldName: 'title',
//     fieldValue: 'SERVICES_PAGE',
//   });

//   const entries = await Promise.all(
//     page.content.map(async ({ fields }) => {
//       if (!fields.services) return fields;

//       const services = [];
//       for (let service of fields.services) {
//         const entry = await getEntryById({ entryId: service.sys.id });
//         const icon = getMedia(entry.fields.icon);
//         entry.fields.icon = icon;
//         services.push(entry.fields);
//       }
//       return services;
//     })
//   );

//   return {
//     props: {
//       entries,
//     },
//   };
// }
