import Head from 'next/head';

export default function Meta() {
  const tabTitle = `Genevie`;
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="description" content="Genevie" />
      <title>{tabTitle}</title>
      <link rel="icon" href="./logo-icon.png" />
    </Head>
  );
}
