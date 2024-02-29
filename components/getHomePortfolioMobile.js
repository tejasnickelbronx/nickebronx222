'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import GetPortfolioImagebyType from './getPortfolioImagebyType.js';





export default function getPortfolioItemsMobile({portfolioitems}) {
  
  
  

  const recordcount = portfolioitems.length/5;
  const portcol1 = portfolioitems.slice(0, 5);
  const portcol2 = portfolioitems.slice(6, 10);
  const portcol3 = portfolioitems.slice(11, 15);

 
  return (
   
      
      <div className="client-inner-sec mobileportfolio">
        <div className="portclmn1">
      {
        portfolioitems.map( (portfolioItem, i) => {
          return (
          <div className="intro-box" key={portfolioItem.slug} >
          <div className="intro-box-inner">
            <div className="image">
            <a href={"/portfolios/"+portfolioItem.slug+"/"+portfolioItem.portfolioId}
              className="learn-btn color-yellow" >
              <GetPortfolioImagebyType portfolioItem={portfolioItem} />
              </a> 
            </div>
            <div className="client-entro">
              <h5>{portfolioItem.title} </h5>
              <p>Brand &amp; Website</p>
            </div>
          </div>
        </div>   
         ) })
      }
    </div>
    
        {/* <Column images={[images[9], images[10], images[11]]} y={y4}/> */}
      </div>
     
   
  )
}

