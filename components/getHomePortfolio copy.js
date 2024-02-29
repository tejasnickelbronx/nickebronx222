'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import GetPortfolioImagebyType from './getPortfolioImagebyType.js';



export default function HomePortfolioItems({portfolioitems}) {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.5])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 4])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height *0.5])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  const recordcount = portfolioitems.length/5;
  const portcol1 = portfolioitems.slice(0, 5);
  const portcol2 = portfolioitems.slice(6, 10);
  const portcol3 = portfolioitems.slice(11, 15);

  console.log(portcol1)
  return (
   
      
      <div ref={gallery} className="client-inner-sec">
        <Column portcolarr={portcol1} y={y}/>
        <Column portcolarr={portcol2} y={y2}/>
        <Column portcolarr={portcol3} y={y3}/>
        {/* <Column images={[images[9], images[10], images[11]]} y={y4}/> */}
      </div>
     
   
  )
}

const Column = ({portcolarr, y}) => {
  return (
    <motion.div 
      className="portclmn1"
      style={{y}}
      >
      {
        portcolarr.map( (portfolioItem, i) => {
          return (
          <div className="intro-box" key={portfolioItem.slug} >
          <div className="intro-box-inner">
            <div className="image">
            <Link href={{pathname: "/portfolios/"+portfolioItem.slug+"/"+portfolioItem.portfolioId,}}
              className="learn-btn color-yellow" >
              <GetPortfolioImagebyType portfolioItem={portfolioItem} />
              </Link> 
            </div>
            <div className="client-entro">
              <h5>{portfolioItem.title} </h5>
              <p>Brand &amp; Website</p>
            </div>
          </div>
        </div>   
         ) })
      }
    </motion.div>
  )
}