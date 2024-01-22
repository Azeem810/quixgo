import React from "react";
import { Box, SimpleGrid, Heading, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
const APiIntegration = () => {
  const router = useRouter();
  const handleIntegration = () => {
    router.push("/signup");
  };
  return (
    <>
      <Box w="100vw" mt={[28, 35, 18, 18]} overflow={"hidden"}>
        <Box px={10} pt={10}>
          {" "}
          {/* bgGradient="linear(to-tl, #000068, white ) " */}
          <SimpleGrid columns={[1, 1, 1, 2]} columnGap={0} mx={5} mt={10}>
            <Box>
              <Heading
                as="h1"
                mt={[5, 5, 5, 20]}
                textAlign={["center", "center", "start"]}
                fontSize={{ base: "28", md: "40" }}
                mb={6}
                color={"#00004a"}
              >
                API INTEGRATION
              </Heading>
              <Text textAlign={["center", "center", "start"]}>
                Quick and easy process to integrate your website or store !
              </Text>
              <Button
                px={5}
                py={3}
                bg={"#00004a"}
                color={"white"}
                mx={[30, 45, 0, 0]}
                width={["80%", "80%", "30%", "30%"]}
                my={6}
                _hover={{ background: "#00004a" }}
                onClick={handleIntegration}
              >
                {" "}
                Proceed Now
              </Button>
            </Box>

            <Image
              src={"/graphics/channel-images/channel-integrat.webp"}
              alt="quixgo Front Image"
              outline="none"
              width={"1800"}
              height="0"
              style={{ marginleft: "100px" }}
              border={"2px solid red"}
              // objectFit="cover"
              priority="high"
            />
          </SimpleGrid>
        </Box>
        {/* <Box
          mt={-6}
          h={20}
          overflowY={"hidden"}
          width={"full"}
          bg={"white"}
          style={{
            transform: "rotate(2deg)",
          }}
        ></Box> */}
        <Box  mx={[7, 10, 20, 20]} mb={10} mt={[3,3,3,-7]}>
          <Heading
            as="h2"
            mt={[5, 5, 5, 14]}
            textAlign={["center", "center", "start"]}
            fontSize={{ base: "28", md: "35" }}
            mb={6}
            color={"black"}
          >
            API Integration for Ecommerce: Boost Your Online Business
          </Heading>
          <Text>
            API integration has become increasingly important in the ecommerce
            industry, revolutionizing online businesses and boosting their
            operations. With ecommerce APIs, online store owners can seamlessly
            integrate different systems, streamline operations, enhance customer
            experience, and improve overall business efficiency. In this blog,
            we will explore the role of ecommerce APIs, how they work, and the
            advantages of using them in your online business. We will also
            discuss effective usage of ecommerce APIs, common ecommerce platform
            APIs, and how API integration can boost your online business. So,
            let's dive in and discover how API integration can take your
            ecommerce business to new heights of success.
          </Text>
          <Heading
            as="h3"
            mt={[5, 5, 5, 14]}
            textAlign={["center", "center", "start"]}
            fontSize={{ base: "25", md: "30" }}
            mb={6}
            color={"black"}
          >
            Understanding eCommerce APIs
          </Heading>
          <Text>
            Ecommerce APIs, or application programming interfaces, play a
            crucial role in maintaining data consistency, data source
            integration, and data synchronization across different systems.
            These APIs serve as the interface that enables data exchange,
            integration of different software systems, and application
            programming interface integration. By leveraging ecommerce APIs,
            online businesses can access and utilize customer data, inventory
            management, order fulfillment, and product catalog efficiently.
          </Text>
          <Heading
            as="h4"
            mt={[5, 5, 5, 14]}
            textAlign={["center", "center", "start"]}
            fontSize={{ base: "19", md: "22" }}
            mb={6}
            color={"black"}
          >
            Role of eCommerce APIs in Online Business
          </Heading>
          <Text>
            The integration of customer data, order management system, and
            external systems through ecommerce APIs ensures a cohesive online
            business ecosystem. It allows online stores to streamline content
            management, customer relationship management, and order data
            processing. The role of ecommerce APIs encompasses seamless
            integration of specific needs, different software components, and
            system APIs for enhanced business operations. By leveraging
            ecommerce APIs, online stores can ensure a unified customer
            experience through seamless integration of new products, order
            management, customer relationship management, and checkout process.
          </Text>
          <Heading
            as="h5"
            mt={[5, 5, 5, 14]}
            textAlign={["center", "center", "start"]}
            fontSize={{ base: "19", md: "22" }}
            mb={6}
            color={"black"}
          >
            How eCommerce APIs Work
          </Heading>
          <Text>
            Ecommerce APIs function as the interface that enables data exchange,
            application programming interface integration, and integration of
            different software systems. Through ecommerce APIs, online
            businesses can access and utilize customer data, inventory
            management, order fulfillment, and product catalog efficiently.
            These APIs ensure data consistency, data source integration, and
            seamless communication between different systems. They enable data
            synchronization, order management, customer relationship management,
            and payment gateway integration, allowing online stores to optimize
            their business operations and customer experience.
          </Text>
          
          <Button mt={6} bg={'#00004a'} color={'white'} _hover={{backgroundColor:'#00004a'}}><Link href={'/blogs/api-integration'}>Learn More..</Link></Button>
        </Box>
      </Box>
    </>
  );
};

export default APiIntegration;
