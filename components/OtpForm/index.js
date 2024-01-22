import {
  PinInput,
  PinInputField,
  HStack,
  Text,
  VStack,
  Flex,
  Heading,
  Link,
  Button,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { ResendOtp } from "../AllFunctions";
import { otpVerified } from "../AllFunctions";
import Head from "next/head";
import Script from "next/script";
const OtpForm = ({ data }) => {
  const handleOtpVerification = (value) => {
    const otpParams = {
      otp: value,
      email: data.email,
    };
    otpVerified(otpParams);
    console.log("email verified data", otpParams);
  };

  const handleResendOtp = () => {
    console.log("user credentials from otp form", data);
    ResendOtp(data);
  };

  return (
    <>
      <Head>
        <title>
          OTP verification | Stay connect with Quixgo a best ecommerce logistics
          and shipping solution.
        </title>

        <meta
          name="description"
          content="QUIXGO provides best eCommerce logistics and shipping solution. Hassle-free  shipments and courier deliveries .
                  Easy Courier Tracking, COD and Prepaid feature on more than 25000 Pincodes. try Quixgo free!"
        />
      </Head>
      {/* Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25QGVW43P8"
      />
      <Script
      id="google-analytics-otp" 
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
      <VStack
        my={4}
        rounded="lg"
        boxShadow="lg"
        px={5}
        py={10}
        spacing={12}
        justifyContent="center"
      >
        <Flex
          bg="white"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <>
            <Heading as="h1" color="#002060" size="lg" display={"flex"} >
              <Text m={1}>
                <MdEmail color="#002060" />
              </Text>
              Check Your email
            </Heading>
            <Text fontWeight="400" fontSize="md" mb={4} textAlign="center" pt={4}>
              Enter the verification code sent on your email.
            </Text>
            <HStack w="100%" justifyContent="center">
              <PinInput onComplete={handleOtpVerification}>
                <PinInputField autoFocus={true} />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
            <Text pt={10}>
              Did not receive the email ?
              <Button
                
                color={"blue.300"}
                background={'white'}
                _hover={{background:'white'}}
                onClick={() => handleResendOtp()}
                
              >
                Click here to resend it.
              </Button>
            </Text>
          </>
        </Flex>
      </VStack>
      )
    </>
  );
};

export default OtpForm;
