// import AboutPageBackUp from '@/components/AboutPage/AboutPageBackUp';
// import Meta from '@/components/shared/Head/Head';
// import { getEntryByField, getEntryById } from '@/lib/contentful-server-utils';
// import { CONTENTFUL_PAGE_IDS } from '@/utils/constants';

// export default function MeetTheFounder({ entries = [] }) {
//   return (
//     <>
//       <Meta />
//       <AboutPageBackUp entries={entries} />
//     </>
//   );
// }

// export async function getStaticProps() {
//   const page = await getEntryByField({
//     contentTypeId: 'page',
//     fieldName: 'title',
//     fieldValue: CONTENTFUL_PAGE_IDS.MEET_THE_FOUNDER,
//   });

//   const entries = await Promise.all(
//     page.content.map(async ({ fields }) => {
//       if (!fields.content) return fields;
//       const children = await Promise.all(
//         fields.content.map(async ({ sys: { id } }) => {
//           const entry = await getEntryById({ entryId: id });
//           return entry.fields;
//         })
//       );
//       return children;
//     })
//   );

//   return {
//     props: {
//       entries,
//     },
//   };
// }
