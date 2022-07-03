import Head from "next/head";
import "../style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Head>
      <title>Étienne Robert</title>
      <Component {...pageProps} />
    </Head>
  );
}
