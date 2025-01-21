import Head from 'next/head';

export default function Meta() {
  const tabTitle = `TBC - Admin`;
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="description" content="TBC Admin" />
      <title>{tabTitle}</title>
      <link rel="icon" href="/logo-bracket.png" />
    </Head>
  );
}
