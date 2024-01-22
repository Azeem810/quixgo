import dynamic from "next/dynamic";
const Loader = dynamic(() => import("../../components/Loader/Loader"));
const About = dynamic(() => import("../../components/About"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script";

const AboutUsContainer = () => {
  return (
    <>
      <Head>
        <title>
          Quixgo is a best eCommerce logistics and shipping solution
        </title>

        <meta
          name="keywords"
          content="Send courier,Courier Service Near Me,send parcel,Check courier Price"
        />

        <meta
          property="og:title"
          content="Quixgo is a best eCommerce logistics and shipping solution"
        />
        <meta
          property="og:description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. The courier aggregator India , Try Quixgo now"
        />
        <meta property="og:url" content="https://quixgo.com/about" />
        <meta property="og:type" content="website" />
      </Head>
      {/* Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25QGVW43P8"
      />

      <Script
      id="google-analytics-about" 
        dangerouslySetInnerHTML={{
          __html: `
               window.dataLayer = window.dataLayer || [];
               window.dataLayer.push({
               'js': new Date(),
               'config': 'G-25QGVW43P8',
                });
                `,
        }}
      />

      <Box mt={[44, 44, 32, 32]}>
        <About />
      </Box>
      </>
  );
};

export default AboutUsContainer;
