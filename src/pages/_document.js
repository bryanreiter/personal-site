import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>Bryan Reiter</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Bryan Reiter Portfolio Website" />
      <meta name="author" content="Bryan Reiter" />
      <meta name="theme-color" content="#6d28d9" />
      <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
