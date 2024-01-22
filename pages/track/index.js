import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("../../components/Loader/Loader"));
const Track = dynamic(() => import("../../components/TrackItem/Track"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});

import Head from "next/head";
import Script from "next/script";

const TrackContainer = () => {
  return (
    <>
      <Head>
        <title>
          Track or check your order status using quixgo a best courier
          aggregator eCommerce logistics and shipping solution provider.
        </title>
        <meta
          property="og:description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. We are the best courier aggregator in india and we are charging minimum price to provide you best service. Check your item status, track your order. Try Quixgo now"
        />

        <meta
          name="keywords"
          content="Order Fulfillment API, Tracking API, Shipping and Delivery Integration, Third-party API Integration, Carrier Integration, Shipping Management System, Dispatch API, Send courier, Courier Service Near Me, send parcel, Check courier Price, Check your items, track your items"
        />

        <meta
          property="og:title"
          content="Track or check your order status using quixgo a best courier
          aggregator eCommerce logistics and shipping solution provider."
        />

        <meta property="og:url" content="https://quixgo.com/track" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25QGVW43P8"
      />

      <Script
       id="google-analytics-track" 
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
      <Box mt={[44, 36, 32, 40]}>
        <Track />
      </Box>
    </>
  );
};

export default TrackContainer;
