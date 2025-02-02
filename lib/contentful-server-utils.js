const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
});

export async function getEntryByField({
  contentTypeId,
  fieldName,
  fieldValue,
}) {
  const entry = await client.getEntries({
    content_type: contentTypeId,
    [`fields.${fieldName}`]: fieldValue,
  });
  return entry.items[0].fields;
}

export async function getEntryById({ entryId }) {
  let entry;
  try {
    entry = await client.getEntry(entryId);
    return entry;
  } catch (error) {
    console.error('Error fetching entries:', error);
    return error;
  }
}
