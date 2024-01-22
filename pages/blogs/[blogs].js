import React from "react";
import { useRouter } from "next/router";
import { Box} from "@chakra-ui/react";
import Link from "next/link";
import style from '../../styles/navbar.module.css';
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("../../components/Loader/Loader"));

const ApiIntegrationPage = dynamic(()=> import("../../components/BlogsPage/ApiIntegrationPage"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});
const CourierServicesPage = dynamic(()=> import("../../components/BlogsPage/CourierServicesPage"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});
const Top10CourierPage = dynamic(()=> import("../../components/BlogsPage/Top10CourierPage"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});
const EcommerceRetailPage = dynamic(()=> import("../../components/BlogsPage/EcommerceRetailPage"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});
const CourierAggPage = dynamic(()=> import("../../components/BlogsPage/CourierAggPage"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});
const B2CPage = dynamic(()=> import("../../components/BlogsPage/B2CPage"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});
const B2BPage = dynamic(()=> import("../../components/BlogsPage/B2BPage"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});
const ServiceProvidersPage = dynamic(()=> import("../../components/BlogsPage/ServiceProvidersPage"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});
const StartEcomerceBusiness = dynamic(()=> import("../../components/BlogsPage/StartEcomerceBusiness"), {
  loading: () => (
    <Box mt={40}>
      <Loader />
    </Box>
  ),
});


const BlogsPages = () => {
  const router = useRouter();
  const { blogs } = router.query;

  return (
    
      <Box mt={[44, 36, 32, 40]} mb={10} mx={[7, 10, 20, 20]}>
        <Box >
          <Link href={"/"} className={style.breadcrumb}>Home</Link> / &nbsp;
          <Link href={"/blogs"} className={style.breadcrumb}>Blogs / &nbsp;</Link>
          <Link href={`/blogs/${blogs}`} className={style.breadcrumb}>{blogs && blogs.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Link>
        </Box>

        {blogs === "api-integration" && <ApiIntegrationPage/>}
        {blogs === "courier-services" && <CourierServicesPage/>}
        {blogs === "top-10" && <Top10CourierPage/>}
        {blogs === "ecommerce-retail" && <EcommerceRetailPage/>}
        {blogs === "courier-aggregator" && <CourierAggPage/>}
        {blogs === "B2B" && <B2BPage/>}
        {blogs === "B2C" && <B2CPage/>}
        {blogs === "service-providers" && <ServiceProvidersPage/>}
        {blogs === "start-ecommerce-business" && < StartEcomerceBusiness/>}
        
        
      </Box>
    
  );
};

export default BlogsPages;
