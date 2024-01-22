import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
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
import Lenis from '@studio-freight/lenis'






export default function GetHomeServices( {allservices, servicesec} ){

  const ourService = servicesec;
  const ourservicesitems = allservices;
  gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin);
  useEffect(() => {
    

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });
  
  function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  requestAnimationFrame(raf);
    const section_2 = document.querySelector(".service-main-sec");
    let sbxitem = gsap.utils.toArray(".serviceitem");

    gsap.to(sbxitem, {
        XPercent: 200 * (sbxitem.length - 1),
        ease:"sine.out",
        scrollTrigger:{
          trigger: section_2,
          pin: true,
          scrub: 3,
          snap: 1 / (sbxitem.length - 1),
          end: "+=" + section_2.offsetWidth
        }

    });


  }, [])
    return(
      
      
      <>
     
     <section className="service-main-sec">
      <div className="container2">
        <div className="service-inner-sec">
          <div className="service-title">
            <h2>OUR SERVICES</h2>
            <h3 dangerouslySetInnerHTML={{ __html: ourService.heading}}></h3>
            
            <p>
              {ourService.description}
            </p>
          </div>

      <div className="service-slider">

      
       {
         ourservicesitems.map((serviceitem, index)=>(     
          
        
          <div className="serviceitem" virtualIndex={index}>
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
        </div>
        </div>
    </div>
  </section>
      
        
      
    
        </> )
}