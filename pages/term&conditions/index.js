import { Box } from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("../../components/Loader/Loader"));

const TermsConditions = dynamic(()=> import("../../components/Footer/TermsConditions"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});

import Head from "next/head";
import Script from "next/script";

const index = () => {
  return (
    <>
      <Head>
        <title>
          Quixgo's Terms and conditions for courier and shipping service.
        </title>
        <meta
          property="og:description"
          content="We have some terms and conditions so you can read it and can solve your queries and also you are at QUIXGO a best eCommerce logistics and shipping solution. The best shipping provider in noida, delhi,bangalore (bengaluru) or pan India , Try Quixgo now"
        />

        <meta
          name="keywords"
          content="courier terms and conditions ,  shipping terms and conditions, quixgo terms and conditions for courier and shipping service"
        />

        <meta
          property="og:title"
          content=" Quixgo's Terms and conditions for courier and shipping service."
        />

        <meta property="og:url" content="https://quixgo.com/term&conditions" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25QGVW43P8"
      />

      <Script
      id="google-analytics-terms" 
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
      <Box mt={[82, 20, 20, 20]}>
        <TermsConditions />
      </Box>
    </>
  );
};

export default index;
