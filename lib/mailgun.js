export const mailGunExample = async ({}) => {
  const res = await fetch('/api/email/example', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  }).then(res => res.json());
  return res;
};
