import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
const Loader = dynamic(() => import("../../components/Loader/Loader"));
const Cards = dynamic(() => import("../../components/cards/cards"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});

import Head from "next/head";
import Script from "next/script";

const ServicesContainer = () => {
  return (
    <>
      <Head>
        <title>
          We are providing best eCommerce logistics and shipping solution
          service and Quixgo is a best courier aggregator in india
        </title>
        <meta
          property="og:description"
          content="Best service available for shipping couriers in india , We are QUIXGO and provides best eCommerce logistics and shipping solution. We are the best courier aggregator in india and we are charging minimum price to provide you best service.Try Quixgo now"
        />

        <meta
          name="keywords"
          content="Real-time Tracking,Inventory Sync, Parcel Management, Warehouse Integration, Order Processing API, Shipping Automation, Carrier Services Integration
          Delivery Notification API, Route Optimization, Shipping Labels API, Shipping Rate Calculation API"
        />
        <meta
          property="og:title"
          content="We are providing best eCommerce logistics and shipping solution
          service and Quixgo is a best courier aggregator in india"
        />

        <meta property="og:url" content="https://quixgo.com/service" />
        <meta property="og:type" content="website" />
      </Head>
      {/* Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25QGVW43P8"
      />

      <Script
      id="google-analytics-service" 
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
      <Box mt={[52]}>
        <Cards />
      </Box>
    </>
  );
};

export default ServicesContainer;
