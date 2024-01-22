import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
const Loader = dynamic(() => import("../../components/Loader/Loader"));
const PrivacyPolicy = dynamic(
  () => import("../../components/Footer/PrivatePolicy"),
  {
    loading: () => (
      <Box mt={40}>
        <Loader />
      </Box>
    ),
  }
);
import Script from "next/script";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Quixgo's Private policy for courier and shipping service.</title>
        <meta
          property="og:description"
          content="We have some private policy so you can read it and can solve your queries and also you are at QUIXGO a best eCommerce logistics and shipping solution. The best shipping provider in noida, delhi,bangalore (bengaluru) or pan India , Try Quixgo now"
        />

        <meta
          name="keywords"
          content="Maruti Courier,Delhivery,xpressbees,shadowfax,Ekart,courier app,courier Website, courier private policy, private shipping policy, quixgo private policy for courier and shipping service"
        />

        <meta
          property="og:title"
          content="Quixgo's Private policy for courier and shipping service."
        />

        <meta property="og:url" content="https://quixgo.com/privatepolicy" />
        <meta property="og:type" content="website" />
      </Head>
      {/* Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25QGVW43P8"
      />

      <Script
      id="google-analytics-privacy" 
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
      <Box mt={[62, 20, 20, 20]}>
        <PrivacyPolicy />
      </Box>
    </>
  );
};

export default index;
