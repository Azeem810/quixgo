import dynamic from "next/dynamic";
import { Box, Text } from "@chakra-ui/react";
const Loader = dynamic(() => import("../../components/Loader/Loader"));
const Integration = dynamic(
  () => import("../../components/ApiIntegration/ApiIntegration"),
  {
    loading: () => (
      <Box mt={40}>
        <Loader />
      </Box>
    ),
  }
);
import Head from "next/head";
import Script from "next/script";

const ApiIntegrationContainer = () => {
  return (
    <>
      <Head>
        <title>API Integration For eCommerce Shipping</title>

        <meta
          property="og:title"
          content="With API Integration your website can seamlessly shipment in seconds. "
        />
        <meta
          property="og:description"
          content="Quixgo is one of Leading Courier Aggregation Service Provider.It Provides Tech based solution to Book your Courier from mobile.
          Provides API For Integration with your website so that you can be free from manual task of booking and tracking the shipment order."
        />
        <meta
          name="keywords"
          content="API Integration, Channel Integration, Courier API, Shipping API, Logistics Integration, E-commerce Integration, Multi-channel Integration"
        />

        <meta property="og:url" content="https://quixgo.com/integration" />
        <meta property="og:type" content="website" />
      </Head>
      {/* Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25QGVW43P8"
      />

      <Script
      id="google-analytics-api" 
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
      <Box>
        <Integration />
      </Box>
    </>
  );
};

export default ApiIntegrationContainer;
