import { Box } from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("../../components/Loader/Loader"));

const CancelPolicy = dynamic(()=> import("../../components/Footer/RefundCancellationPolicy"), {
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
        <title>Quixgo's refund policy for courier and shipping service.</title>
        <meta
          property="og:description"
          content="Quixgo a best courier aggregator in india and we have refund policy so check it on our website. Try Quixgo now"
        />

        <meta
          name="keywords"
          content="Courier Price Calculator,Shipment Price Calculator,Price Calculator, courier refund policy, refund shipping policy, quixgo refund policy"
        />

        <meta
          property="og:title"
          content="Quixgo's refund policy for courier and shipping service."
        />

        <meta property="og:url" content="https://quixgo.com/refundpolicy" />
        <meta property="og:type" content="website" />
      </Head>
      {/* Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25QGVW43P8"
      />

      <Script
      id="google-analytics-cancel" 
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
        <CancelPolicy />
      </Box>
    </>
  );
};

export default index;
