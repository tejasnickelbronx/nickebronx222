import Head from 'next/head'
import Image from 'next/image'
import  { useState, useEffect } from 'react';
import SiteHeader from '../components/siteheader.js';
import SiteFooter from '../components/sitefooter.js';
import useScript from '../hooks/useScript.js';

export async function getStaticProps(){
  
 
  
  
  return {
      props:{
        merchfield: "",
        
      },

  }
  
}


export default function Merch({merchfields}) {
    

  useEffect( () => { document.querySelector("body").classList.add("transparent-header") } );
  useEffect( () => { document.querySelector(".header").classList.add("whitetext") } );
  useScript('https://code.jquery.com/jquery-3.7.0.min.js');
  useScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
  useScript('https://cdn.jsdelivr.net/npm/locomotive-scroll@beta/bundled/locomotive-scroll.min.js');
  useScript('./custominit.js');
    return (
        <>
        <Head>
            <title>Nickelbronx</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            
            <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" async/>
            <script src="/custominit.js" async></script>
        </Head>
        <SiteHeader className="headercls"/>

        <>
  
  {/* Header Section End */}
  <section className="merch-sec-main">
    <div className="container">
      <div className="merch-header">
        <h2>
          Coming
          <br />
          Soon
        </h2>
        <p>We’re cooking up some sick new merch for our brand rollout</p>
        <div className="merch-btn">
          <a className="home-btn banner-btn" herf="#">
            Notify Me
          </a>
        </div>
      </div>
    </div>
    <Image src="/merch1.png" width={300} height={300} className="mergeimage1" alt="merchtext" />
    <Image src="/merch2.png" width={500} height={300} className="mergeimage2" alt="merchtext" />
    <Image src="/merch3.png" width={500} height={300} className="mergeimage3" alt="merchtext"  />
    <Image src="/merch4.png" width={300} height={300} className="mergeimage4" alt="merchtext" />
  </section>
</>


        <SiteFooter className="footercls"/>
        </>
  )
}

