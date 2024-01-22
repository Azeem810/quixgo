import React from "react";
import Head from "next/head";
import style from "./Whatsapp.module.scss";
import Script from "next/script";

const Whatsapp = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Best service available for shipping couriers in india , We are QUIXGO and provides best eCommerce logistics and shipping solution. We are the best courier aggregator in india and we are charging minimum price to provide you best service.Try Quixgo now"
        />

        <meta
          name="keywords"
          content="Contact us, contacts of quixgo, Real-time Tracking,Inventory Sync, Parcel Management, Warehouse Integration, Order Processing API, Shipping Automation, Carrier Services Integration
          Delivery Notification API, Route Optimization, Shipping Labels API, Shipping Rate Calculation API"
        />
      </Head>

      {/* Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-25QGVW43P8"
      />

      <Script
      id="google-analytics-whatsapp" 
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

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      />
      <a
        href="https://wa.me/7678465154"
        target="_blank"
        rel="noopener noreferrer"
        className={style.whatsapp_float}
      >
        <i className={`fa-brands fa-whatsapp ${style.whatsapp_icon}`}></i>
      </a>
    </>
  );
};

export default Whatsapp;
