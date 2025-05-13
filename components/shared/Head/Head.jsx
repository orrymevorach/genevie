import Head from 'next/head';

export default function Meta() {
  const tabTitle = `Genevie`;
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="GENEVIE is a first-of-its kind concierge health service, led by reproductive genetic experts, offering comprehensive evaluations, personalized genetic testing, and tailored scientific support for every stage of your journey."
      />
      <meta name="keywords" content="" />
      <title>{tabTitle}</title>
      <link rel="icon" href="./favicon.png" />
    </Head>
  );
}
