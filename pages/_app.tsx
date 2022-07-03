import Head from "next/head";
import "../style.css";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Étienne Robert</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
