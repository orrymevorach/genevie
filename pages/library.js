import LibraryPage from '@/components/LibraryPage/LibraryPage';
import Meta from '@/components/shared/Head/Head';
import { getEntryByField, getEntryById } from '@/lib/contentful-utils';

export default function Library({ entries = [] }) {
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
      const isLibraryItems = fields.articles || fields.podcasts || fields.books;
      if (!isLibraryItems) return fields;
      let libraryItems = {};
      if (isLibraryItems) {
        const articles = await Promise.all(
          fields.articles.map(async ({ sys }) => {
            const article = await getEntryById({
              entryId: sys.id,
            });
            return article.fields;
          })
        );
        const podcasts = await Promise.all(
          fields.podcasts.map(async ({ sys }) => {
            const podcast = await getEntryById({
              entryId: sys.id,
            });
            return podcast.fields;
          })
        );
        const books = await Promise.all(
          fields.books.map(async ({ sys }) => {
            const book = await getEntryById({
              entryId: sys.id,
            });
            return book.fields;
          })
        );
        libraryItems = {
          articles,
          podcasts,
          books,
        };
        return libraryItems;
      }
    })
  );

  return {
    props: {
      entries,
    },
  };
}
