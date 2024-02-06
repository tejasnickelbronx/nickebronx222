import React, { useState, useEffect, useLayoutEffect  } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import SiteHeader from '../components/siteheader.js';
import SiteFooter from '../components/sitefooter.js';
import useScript from '../hooks/useScript.js';
import {getAllTestimonial} from '../lib/testimonial.js';
import {getAboutSections, getAboutSections2} from '../lib/getAboutSections.js';

import { Navigation, Pagination, Scrollbar, A11y,Mousewheel,FreeMode,Autoplay    } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';

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
import Lenis from '@studio-freight/lenis';
import { useRef } from "react";

export async function getStaticProps(){
  const teamdata        = await getAboutSections();
  const corevaluedata   = await getAboutSections2();
  const alltestimonial  = await getAllTestimonial(); 
 
  
  
  return {
      props:{
        allteams: teamdata,
        aboutfields:corevaluedata,
        alltestiitems: alltestimonial
      },

  }
  
}


export default function About({allteams,aboutfields, alltestiitems}) {
    const teamarray = allteams.data.allTeam.nodes;
    const aboutdata = aboutfields;
    // /console.log(allteams.data.allTeam.nodes);
   
    const meetteamhead = aboutfields.data.pageBy.culturePage.meetTeamSection[0];
    const coreValueSection = aboutfields.data.pageBy.culturePage.coreValueSection[0];
    const corevaluebox = aboutfields.data.pageBy.culturePage.coreValueBoxes;
    const whowearehead = aboutfields.data.pageBy.culturePage.whoWeAreSection[0];
    const whowearebox = aboutfields.data.pageBy.culturePage.boxes;

    const testimonials  = alltestiitems.data.allTestimonial.nodes;;

    
    useScript('https://code.jquery.com/jquery-3.7.0.min.js');
    useScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
    useScript('https://cdn.jsdelivr.net/npm/locomotive-scroll@beta/bundled/locomotive-scroll.min.js');
    useScript('./custominit.js');
    gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin);

    useLayoutEffect(() => {
    
          let ctx = gsap.context(() => {
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
            const section_2 = document.querySelector(".team-slider");
            let sbxitem = gsap.utils.toArray(".teamslideitem");
            // alert(sbxitem.length);
            let tempwidth = section_2.offsetWidth + 2000;
            gsap.to(sbxitem, {
                x: -150 * (sbxitem.length+1),
                ease:"sine.out",  
                duration: 3,
              
                scrollTrigger:{
                  trigger: section_2,
                  pin: true,
                  scrub: 3,
                  snap:5 / (sbxitem.length + 5),
                  start: "0x",
                  end: "+=" + tempwidth
                }
            });
          });
          return () => ctx.revert();


            
    }, [])
    return (
        <>
        <Head>
            <title>Nickelbronx</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />            
            <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" async="true"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" async="true"/>
            
        </Head>
        <SiteHeader className="headercls"/>
        
        <section className="about-banner">
  <div className="about-container">
    <div className="banner-title">
      <h2 dangerouslySetInnerHTML={{ __html: meetteamhead.heading1}}>
        
      </h2>
      <p>
        {meetteamhead.description}
      </p>
    </div>
    <div className='team-slider'>

      
    
    
        {
           
            teamarray.map((testiItem, index)=>(   
              <div className='teamslideitem'>
              <div className="team-slide">
                <div className="image-sec">
                  <Image src={testiItem.teamFields.image.sourceUrl} height={200} width={200} alt={testiItem.title} />
                  
                </div>
                <div className="team-info">
                  <h3 dangerouslySetInnerHTML={{ __html: testiItem.teamFields.role}}></h3>
                  <h4>{testiItem.title}</h4>
                  <div dangerouslySetInnerHTML={{ __html: testiItem.content.substring(0, 100)}}></div>
                 
                  <a data-pop={"teammember"+index} href="#" className="team-btn color-light-blue">
                    Learn More
                  </a>
                </div>
              </div>
              </div>

            ))
                
            }
          <div className='teamslideitem'></div>
          <div className='teamslideitem'></div>
          <div className='teamslideitem'></div>
          <div className='teamslideitem'></div>
       </div>
	
        
        
       
        
        
       
      
  </div>
  { 
  teamarray.map((testiItem, index)=>( 
  <div className="teampopup" id={"teammember"+index} key={index}>
    <div className="popup__content">
      <div className="close">
        <span />
        <span />
      </div>
      <div className="teammemberpop">
        <div className="teampopimage">        
          <Image src={testiItem.teamFields.image.sourceUrl} height={200} width={200} alt={testiItem.title} />
        </div>
        <div className="teampoptext">
          <h4  dangerouslySetInnerHTML={{ __html: testiItem.teamFields.role}}></h4>
          <h3>{testiItem.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: testiItem.content}}></div>
          <div className="teampopsocial">
          {testiItem.teamFields.spotify && (
            <a href={testiItem.teamFields.spotify}><i className="fa-brands fa-spotify" /></a>
          )}
          {testiItem.teamFields.instagram && (
            <a href={testiItem.teamFields.instagram}><i className="fa-brands fa-instagram" /></a>
          )}
          {testiItem.teamFields.linkedin && (
            <a href={testiItem.teamFields.linkedin}> <i className="fa-brands fa-linkedin" /></a>
            )}
            {testiItem.teamFields.twitter && (
            <a href={testiItem.teamFields.twitter}> <i class="fa-brands fa-x-twitter"></i></a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  ))                          
  }
</section>


<section className="core-values-sec">
  <div className="about-container">
    <div className="core-title">
      <div className="left-part">
        <h2>CORE VALUES</h2>
        <h3 dangerouslySetInnerHTML={{ __html: coreValueSection.heading}}>
          
        </h3>
      </div>
      <div className="right-part">
        <p>
          {coreValueSection.description}
        </p>
        <a href="#" className="btn-cust">
          Our Work
        </a>
      </div>
    </div>
     
          

          
    <div className="value-box-main">
      <div className="value-box-inner">

      {
           
           corevaluebox.map((corebox, index)=>(  
        <div className="box-wrap" key={index}>
          <div className="box-wrap-inner">
            <div className="image-sec">
              <img src={corebox.image.sourceUrl}/>
            </div>
            <div className="content">
              <img src={corebox.titleImage.sourceUrl} />
              <p>
                {corebox.description}
              </p>
            </div>
          </div>
        </div>
        
        ))
                
      }   
   
        
        
        
      </div>
    </div>
  </div>
</section>

<section className="limits-main-sec">
  <div className="about-container">
    <div className="limits-inner-sec">
      <div className="limits-title">
        <h2 >WHO WE ARE</h2>
        <h3 dangerouslySetInnerHTML={{ __html: whowearehead.heading}}>
          
        </h3>
        <p>
          {whowearehead.description}
        </p>
      </div>
      <div className="limits-boxes-main">
        <div className="limits-boxes-inner">
        {
           
           whowearebox.map((whoboxitem, index)=>(  
          <div className="boxes-wrap" key={index}>
            <div className="boxes-wrap-inner">
              <h4 className="pink-blue-text-bg">{whoboxitem.heading1}</h4>
              <h5>{whoboxitem.subHeading}</h5>
              <p>
              {whoboxitem.description}
              </p>
            </div>
          </div>
           ))
                
          }   


        </div>
      </div>
    </div>
  </div>
</section>

<section className="testimonial-main about-testimonial">
  <div className="container2*">
    <div className="testimonial-inner"> 

    <Swiper  
      modules={[Navigation, Pagination, Scrollbar, A11y,Mousewheel, Autoplay ]}
      className="testimonial-slider " 
      navigation
      spaceBetween={25}
      slidesPerView={1} 
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} 
      direction="horizontal"
      autoplay={{
        delay: 3000,        
      }}
      >
          {

         testimonials.map((testiItem, index)=>( 
          <SwiperSlide>
            <div className="testi-box">
              <div className="testi-box-inner container2">
                <div className="testi-img whitebglayer">
                <Image src={testiItem.customfield.clientPhoto.sourceUrl} alt={testiItem.title} height="300" width="300"/>
                </div>
                <div className="testi-content">
                  {/* <h2>SOHALE RAZMJOU • BLACKWOOD</h2> */}
                  {/* <h3>they absolutely CRUSHED IT</h3>  */}
                  <h2>{testiItem.title} • {testiItem.customfield.company}</h2>
                  <div dangerouslySetInnerHTML={{ __html: testiItem.content}}></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )) 
  
      } 
     </Swiper>   
    </div>
  </div>
</section>
        
        <SiteFooter className="footercls"/>
        </>
  )
}

