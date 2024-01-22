import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import dynamic from "next/dynamic";

const Whatsapp = dynamic(()=> import("../components/WhatsappApi/Whatsapp"));
const Main = dynamic(()=> import("../components/Navbar/Main"));

import ContextProvider from "../components/ContextApi/ContextProvider";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          QUIXGO-eCommerce Logistics and shipping Solution: Courier Aggregator
          India,
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={"graphics/favicon.ico" ?? ""} />

        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. Hassle-free shipments and courier deliveries.
                  Easy Courier Tracking, COD and Prepaid feature on more than 25000 Pincodes. try Quixgo free!"
        />


        <meta
          name="keywords"
          content="10 best shipping service in india, professional courier tracking, 10 best shipping service in delhi, 10 best shipping service in noida,
        10 best shipping service in bangalore, Best shipping service in india, Best Courier Aggregator in india, cheapest courier aggregator and shipping provider in delhi, noida or india,
        cheapest courier aggregator and shipping service solution in delhi, noida or india, Track your order or check your order, Api integration for ecommerce shipping,Api integration for ecommerce shipping in india,
        Courier Aggregator India, eCommerce Logistics and shipping Solution
        "
        />

        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />

        <meta
          property="og:title"
          content="QUIXGO-eCommerce Logistics Solution: Courier Aggregator India"
        ></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          name="google-site-verification"
          content="zpjKSaYfi7oXmYuzGKM_kKkjy8lZCCSDXAQ0c1KBeUQ"
        />
        <meta property="og:url" content="https://quixgo.com/" />
      </Head>
      {/* Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25QGVW43P8"
      />
      <Script
      id="google-analytics-app" 
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
      <ChakraProvider>

        <ToastContainer />
        <Whatsapp />
        <Box mb={30}>
          {" "}
          <Main />
        </Box>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ChakraProvider>
    </>
  );
}
