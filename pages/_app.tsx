import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.GOOGLE_ANALYTICS_ID, "aki");
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
      />

      <Script strategy="lazyOnload" id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}', {
            });
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
