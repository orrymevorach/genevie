export async function getEntries({ contentTypeId }) {
  const { entries } = await fetch(`/api/contentful/get-entries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contentTypeId }),
  }).then(res => res.json());
  return entries;
}

export async function getEntryById({ entryId }) {
  const { entry } = await fetch(`/api/contentful/get-entry-by-id`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ entryId }),
  }).then(res => res.json());
  return entry;
}

export async function getEntryByField({
  contentTypeId,
  fieldName,
  fieldValue,
}) {
  const { entry } = await fetch(`/api/contentful/get-entry-by-field`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ contentTypeId, fieldName, fieldValue }),
  }).then(res => res.json());
  return entry;
}

export function getMedia(media) {
  const size = media.fields?.file?.details?.image;
  const src = `https:${media.fields.file.url}`;
  const alt = media.fields.title;
  return {
    src,
    alt,
    width: size?.width || null,
    height: size?.height || null,
  };
}
