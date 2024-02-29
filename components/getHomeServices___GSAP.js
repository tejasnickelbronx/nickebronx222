import React, { useState, useEffect, useLayoutEffect  } from 'react';
import Image from "next/image";
import Link from 'next/link';

import Lenis from '@studio-freight/lenis'
import { motion, useTransform, useScroll,useMotionValue,animate ,useInView  } from "framer-motion";
import { useRef } from "react";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin);
export default function GetHomeServices( {allservices, servicesec} ){

  const ourService = servicesec;
  const ourservicesitems = allservices;
  
  // const targetSection = useRef(null);
  // const serviceItems = useRef([]);

  // useLayoutEffect(() => {
  //   const parentsection = document.getElementById("servicemainsec");
  //   const testtest  = gsap.utils.toArray(".serviceitem");
  //   let ctx = gsap.context(() => {
      
      
      
  //     gsap.to(testtest, {
  //       xPercent: -50 * (serviceItems.length - 1),
  //       ease: "sine.out",
  //       scrollTrigger: {
  //         trigger: targetSection,
  //         pin: true,
  //         scrub: 3,
  //         snap: 1 / (testtest.length - 1),
  //         end: "+=" + targetSection.offsetWidth
  //       }
  //     });

  //   }, targetSection);

  //   return () => ctx.revert();
// }, [])
  const targetSection = useRef(null);
  const serviceItems = useRef([]);

  useLayoutEffect(() => {
    const parentsection = document.getElementById("servicemainsec");
    let  testtest  = gsap.utils.toArray(".horizontal__item");
    let ctx = gsap.context(() => {
      
      
      
      gsap.to(testtest, {
        xPercent: -50 * (testtest.length - 1),
        ease: "sine.out",
        scrollTrigger: {
          trigger: targetSection,
          pin: true,
          scrub: 3,
          snap: 1 / (testtest.length - 1),
          end: "+=" + targetSection.offsetWidth
        }
      });

    }, targetSection);

    return () => ctx.revert();
}, [])

    


  
    return(
      
      
      <>
     
     <section className="service-main-sec" id='servicemainsec' >
      <div className="container2">
        <div className="service-inner-sec">
          <div className="service-title">
            <h2>OUR SERVICES</h2>
            <h3 dangerouslySetInnerHTML={{ __html: ourService.heading}}></h3>
            
            <p>
              {ourService.description}
            </p>
          </div> 

      <div   className="service-slider ssssss"   id='serviceslider' >

      
     
       {
         ourservicesitems.map((serviceitem, index)=>(     
          
        
          <div  className="serviceitem" virtualIndex={index} >
            <div className='serviceitems'>

            
            <div className="service-box">
              <div  className={`service-box-inner sboxbg_${index}`}>
                <div className="image">
                  <img src={serviceitem.serviceIcon.sourceUrl} alt={serviceitem.serviceTitle} />
                </div>
                <div className="box-title">                        
                  <h5 ><Link dangerouslySetInnerHTML={{ __html: serviceitem.serviceTitle}} href={"/services/"+serviceitem.link.slug+"/"+serviceitem.link.pageId}></Link></h5>
                 
                </div>
                <div className='servicedescbx'><p>{serviceitem.description}</p></div>
               
              </div>
            </div>
            </div>
          </div>
          ))}
           <div  className="serviceitem"></div>
           <div  className="serviceitem"></div>
           <div  className="serviceitem"></div>
           <div  className="serviceitem"></div>
        </div>
        </div>
    </div>
  </section>
      
  <section id="horizontal" ref={targetSection}>
  <div className="horizontal__content">
    <div className="horizontal__item">
      <div className="horizontal__num">1</div>
    </div>
    <div className="horizontal__item">
      <div className="horizontal__num">2</div>
    </div>
    <div className="horizontal__item">
      <div className="horizontal__num">3</div>
    </div>
    <div className="horizontal__item">
      <div className="horizontal__num">4</div>
    </div>
    <div className="horizontal__item">
      <div className="horizontal__num">5</div>
    </div>
    <div className="horizontal__item">
      <div className="horizontal__num">6</div>
    </div>
    <div className="horizontal__item">
      <div className="horizontal__num">7</div>
    </div>
  </div>
</section>

      
    
        </> )
}