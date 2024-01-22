import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
const Loader = dynamic(() => import("../../components/Loader/Loader"));
const SignUp = dynamic(() => import("../../components/SignUp/SignUp"), {
  ssr: false,
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});
const OtpForm = dynamic(() => import("../../components/OtpForm"));
import Head from "next/head";
import Script from 'next/script';

const SignupContainer = () => {
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [user, setUser] = useState([]);

  const handleuserCreation = (value) => {
    setUser(value);
  };
  return (
    <>
      <Head>
        <title>
          Signup and get best delivery services in Noida, Delhi,
          bangalore,U.P,Haryana or india
        </title>
        <meta
          property="og:description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. We are the best courier aggregator in india and all over the world , Try Quixgo now"
        />

        <meta
          name="keywords"
          content="Delhi to Mumbai Courier,Delhi to Kolkata courier,Noida to Delhi courier,Delhi to Noida courier,signup and get best ecommerce shipping service,
          signup and get best ecommerce shipping service  "
        />

        <meta
          property="og:title"
          content="Signup and get best delivery services in Noida, Delhi,
          bangalore,U.P,Haryana or india"
        />
        
        <meta property="og:url" content="https://quixgo.com/signup" />
        <meta property="og:type" content="website" />

       
      </Head>
       {/* Google Analytics script */}
       <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-25QGVW43P8"
        />

        <Script
        id="google-analytics-signup" 
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
      <Box mt={[32, 32, 32, 40]}>
        {isUserCreated ? (
          <OtpForm data={user} />
        ) : (
          <SignUp handleUser={setIsUserCreated} user={handleuserCreation} />
        )}
      </Box>
    </>
  );
};

export default SignupContainer;
