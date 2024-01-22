import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
const Loader = dynamic(() => import("../../components/Loader/Loader"));
const MainContact = dynamic(
  () => import("../../components/contactUs/contactPage"),
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

const ContactUsContainer = () => {
  return (
    <>
      <Head>
        <title>
          Reach out to us we will provide best shipping service and we are best
          courier aggregator in india
        </title>
        <meta
          name="description"
          content="We are here to help you to deliver your order all over the india so feel free to contact us and we are  best eCommerce logistics and shipping solution. The best free multi-carrier shipping provider for your eCommerce , Try Quixgo now"
        />

        <meta
          name="keywords"
          content="Noida to Delhi courier, Delhi to Noida courier, Noida to Gurgaon courier, Gurgaon to Delhi Courier, bangalore to Delhi Courier, pune to mumbai courier, mumbai to pune Courier, hyderabad to mumbai courier, mumbai to hyderabad courier, Courier Agency"
        />

        <meta
          property="og:title"
          content="Reach out to us we will provide best shipping service and we are best
          courier aggregator in india"
        />
        <meta
          property="og:description"
          content="We are here to help you to deliver your order all over the india so feel free to contact us and we are  best eCommerce logistics and shipping solution. The best free multi-carrier shipping provider for your eCommerce , Try Quixgo now"
        />
        <meta property="og:url" content="https://quixgo.com/contact" />
        <meta property="og:type" content="website" />
      </Head>
      {/* Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25QGVW43P8"
      />

      <Script
      id="google-analytics-contact" 
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

      <Box mt={[48, 32, 32, 32]} mx={5}>
        <MainContact />
      </Box>
    </>
  );
};

export default ContactUsContainer;
