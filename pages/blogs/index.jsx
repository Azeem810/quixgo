import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Button,
  Heading,
  Text
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { blogsCardContent } from "../../components/JsonData";

const Blogs = () => {
  const router = useRouter()
 const handleRoute = (route) =>{
  router.push(route)
 }
  return (
    <Box  mx={20}
    mt={[44, 36, 32, 44]} mb={10}>
      <Heading
      
      as={'h1'}
      wordBreak={"break-word"}
      color={"#00004a"}
      fontWeight={700}
      fontSize={[28, 30, 30, 40]}
      >
      Welcome to Quixgo blog

      </Heading>
      <Heading
      as={'h2'}
      mt={4}
      mb={16}
      wordBreak={"break-word"}
      color={"#00004a"}
      fontWeight={700}
      fontSize={[20, 20, 20, 26]}
      >Unpack the world of logistics and unfold possibilities beyond imagination!</Heading>
      <SimpleGrid
        spacing={10}
        columns={[1,2,3]}
      >
       {blogsCardContent?.map((blog)=>(
        <Card  _hover={{boxShadow:'2px 2px 20px gray'}} key={blog.path} border={'1px solid #EBE9E4'}>  
        <CardHeader>
          <Heading size="md">{blog.heading}</Heading>
        </CardHeader>
        <CardBody>
          <Text>
          {blog.text}
          </Text>
        </CardBody>
        <CardFooter>
          <Button bg={'#00004a'} color={'white'} _hover={{backgroundColor:'#00004a',boxShadow:'2px 2px 15px black'}} onClick={()=>handleRoute(blog?.path)}>Read More..</Button>
        </CardFooter>
      </Card>
       ))}

        
      </SimpleGrid>
    </Box>
  );
};

export default Blogs;
