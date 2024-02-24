import React, { useState, useEffect, useLayoutEffect  } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import SiteHeader from '../components/siteheader.js';
import SiteFooter from '../components/sitefooter.js';
// import useScript from '../hooks/useScript.js';
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



import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

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

    const [open, setOpen] = React.useState(false);

    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [teammodel, setTeammodel] = React.useState([]);
    const loadmodel = (modeldata) => {       
        setTeammodel(modeldata);
        setOpen(true);
    };

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      maxWidth: 800,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    
    // useScript('https://code.jquery.com/jquery-3.7.0.min.js');
    // useScript('./custominit.js');
    gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin);

    const aboutRef    = useRef(null);
    const teamSlider  = useRef(null);

    useEffect(() => {
    
          let ctx = gsap.context(() => {
            // const lenis = new Lenis({
            //   duration: 1.2,
            //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            // });
          
            function raf(time) {
                //  lenis.raf(time);
                ScrollTrigger.update();
                requestAnimationFrame(raf);
            }
          
            requestAnimationFrame(raf);
            
            const section_2 = document.querySelector(".about-banner");
            let sbxitem = gsap.utils.toArray(".teamslideitem");
            // alert(sbxitem.length);
            // let tempwidth = section_2.offsetWidth + 2000;

            let containerTeamSlider = teamSlider.current.getBoundingClientRect();
            let relativeX = (containerTeamSlider.x + containerTeamSlider.width);
            let relativeY = (containerTeamSlider.y + containerTeamSlider.height / 2) - aboutRef.current.getBoundingClientRect().y;
            let newStartPoint = relativeY - window.innerHeight / 2;
            let newEndPoint = relativeX + window.innerWidth / 2 ;
            let mm = gsap.matchMedia();

            mm.add("(min-width: 1024px) and (max-width: 1280px)",  () => {
              gsap.to(sbxitem, {
                x: -200 * ( sbxitem.length + 2 ),
                ease:"sine.out",  
                duration: 1,
              
                scrollTrigger:{
                  trigger: section_2,
                  pin: true,
                  preventOverlaps: false, // or arbitrary string
                  markers: true,
                  scrub: 3,
                  snap: 1 / (sbxitem.length + 1),
                  start: `${newStartPoint}px`,
                  end: `+=${newEndPoint}px`
                }
              });
            });


            mm.add("(min-width: 1281px)",  () => {
              gsap.to(sbxitem, {
                x: -250 * ( sbxitem.length + 2 ),
                ease:"sine.out",  
                duration: 1,
              
                scrollTrigger:{
                  trigger: section_2,
                  pin: true,
                  preventOverlaps: false, // or arbitrary string
                  markers: true,
                  scrub: 3,
                  snap: 1 / (sbxitem.length + 1),
                  start: `${newStartPoint}px`,
                  end: `+=${newEndPoint}px`
                }
              });
            });

            mm.add("(min-width: 768px) and (max-width: 1023px)",  () => {
              gsap.to(sbxitem, {
                x: -300 * ( sbxitem.length + 2 ),
                ease:"sine.out",  
                duration: 3,
              
                scrollTrigger:{
                  trigger: section_2,
                  pin: true,
                  // pinSpacing: false,
                  preventOverlaps: false, // or arbitrary string
                  scrub: 3,
                  markers: true,
                  snap: 1 / (sbxitem.length - 1),
                  start: `${newStartPoint}px`, // 0x you can't start at 0px because the size of the content  150px
                  end: `+=${newEndPoint}px`
                }
              });
            });

            mm.add("(max-width: 767px)", () => {
              gsap.to(sbxitem, {
                x: -325 * ( sbxitem.length + 2 ),
                ease:"sine.out",  
                duration: 3,
              
                scrollTrigger:{
                  trigger: section_2,
                  pin: true,
                  // pinSpacing: false,
                  preventOverlaps: false, // or arbitrary string
                  scrub: 3,
                  markers: true,
                  snap: 1 / (sbxitem.length - 1),
                  start: `${newStartPoint}px`, // 0x you can't start at 0px because the size of the content  150px
                  end: `+=${newEndPoint}px`
                }
              });
            });


          });
          return () => ctx.revert();
    }, [])
    return (
        <div>
        <Head>
            <title>Nickelbronx</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />            
            <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
            <script src="/custominit.js" async></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" async="true"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" async="true"/>
        </Head>
        <SiteHeader className="headercls"/>
        
        <section ref={aboutRef} className="about-banner">
        <div className="about-container">
          <div className="banner-title teamintromain">
            <div className='teamintroleft'>
              <h2 dangerouslySetInnerHTML={{ __html: meetteamhead.heading1}}></h2>
            </div>
            <div className='teamintroleft'>
            <p>
              {meetteamhead.description}
            </p>
            </div> 
          </div>
          <div ref={teamSlider} className='team-slider'>      
          
          
              {
                
                  teamarray.map((testiItem, index)=>(   
                    <div key={index} className='teamslideitem'>
                    <div className="team-slide">
                      <div className="image-sec">
                        <Image src={testiItem.teamFields.image.sourceUrl} height={200} width={200} alt={testiItem.title} />
                        
                      </div>
                      <div className="team-info">
                        <h3 dangerouslySetInnerHTML={{ __html: testiItem.teamFields.role}}></h3>
                        <h4>{testiItem.title}</h4>
                        <div dangerouslySetInnerHTML={{ __html: testiItem.content.substring(0, 100)}}></div>
                      
                      
                        <a onClick={() => loadmodel(testiItem)} data-pop={"teammember"+index} href="#" className="team-btn color-light-blue">
                          Learn More
                        </a>
                      </div>
                    </div>
                    </div>
                  ))
                  }
            </div> 
  </div>
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">  
    <Box sx={style}>
      <a className='teampopclose' onClick={handleClose}></a>
      {open && (
      <div className="teammemberpop">
          <div className="teampopimage">        
            <Image src={teammodel.teamFields.image.sourceUrl} height={200} width={200} alt={teammodel.title} />
          </div>
          <div className="teampoptext">
            <h4  dangerouslySetInnerHTML={{ __html: teammodel.teamFields.role}}></h4>
            <h3>{teammodel.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: teammodel.content}}></div>
            <div className="teampopsocial">
            {teammodel.teamFields.spotify && (
              <a href={teammodel.teamFields.spotify}><i className="fa-brands fa-spotify" /></a>
            )}
            {teammodel.teamFields.instagram && (
              <a href={teammodel.teamFields.instagram}><i className="fa-brands fa-instagram" /></a>
            )}
            {teammodel.teamFields.linkedin && (
              <a href={teammodel.teamFields.linkedin}> <i className="fa-brands fa-linkedin" /></a>
              )}
              {teammodel.teamFields.twitter && (
              <a href={teammodel.teamFields.twitter}> <i class="fa-brands fa-x-twitter"></i></a>
              )}
            </div>
          </div>
        </div> 
        )}
    </Box>  
  </Modal>    
</section>


<section className="core-values-sec" id='aboutcorevaluesa'>
  <div className="about-container">
    <div className="core-title">
      <div className="left-part">        
        <h2>CORE VALUES</h2>
        <h3 dangerouslySetInnerHTML={{ __html: coreValueSection.heading}}></h3>
      </div>
      <div className="right-part corevalueabout">
        <p>
          {coreValueSection.description}
        </p>
        
        <a className="home-btn" href="/portfolios">Our Work</a>
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
        <div dangerouslySetInnerHTML={{ __html: whowearehead.description}}></div>
        {/* <p>
          {whowearehead.description}
        </p> */}
      </div>
      <div className="limits-boxes-main">
        <div className="limits-boxes-inner">
        {
           
           whowearebox.map((whoboxitem, index)=>(  
          <div className="boxes-wrap" key={index}>
            <div className="boxes-wrap-inner">
              <h4 className={`pink-blue-text-bg lineartext_${index}`}>{whoboxitem.heading1}</h4>
              <h5>{whoboxitem.subHeading}</h5>
              <div></div>
              {/* <p>
              {whoboxitem.description}
              </p> */}
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
          <SwiperSlide key={index}>
            <div className="testi-box">
              <div className="testi-box-inner container2">
                <div className="testi-img whitebglayer">
                <Image src={testiItem.customfield.clientPhoto.sourceUrl} alt={testiItem.title} height="300" width="300"/>
                </div>
                <div className="testi-content">
                  {/* <h2>SOHALE RAZMJOU • BLACKWOOD</h2> */}
                  {/* <h3>they absolutely CRUSHED IT</h3>  */}
                  <h2>{testiItem.title} • {testiItem.customfield.company}</h2>
                  <h3>{testiItem.customfield.testimonialTitle}</h3>
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
    </div>
  )
}

