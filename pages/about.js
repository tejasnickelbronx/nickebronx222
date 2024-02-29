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
      transform: 'translate(-50%, -50%)',
      width: '90%',
      maxWidth: 800,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      overflowY: 'scroll'
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
                  markers: false,
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
                  markers: false,
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
                  markers: false,
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
                  markers: false,
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
    style={{overflowY: 'scroll'}}
    aria-describedby="modal-modal-description">  
    <Box className="team-pop-container" sx={style}>
      <a className='teampopclose' onClick={handleClose}></a>
      {open && (
      <div className="teammemberpop">
          <div className="teampopimage">        
            <Image src={teammodel.teamFields.image.sourceUrl} height={200} width={200} alt={teammodel.title} />
          </div>
          <div className="teampoptext">
            <h4  dangerouslySetInnerHTML={{ __html: teammodel.teamFields.role}}></h4>
            <h3>{teammodel.title}</h3>
            <div style={{marginBottom: '40px'}} dangerouslySetInnerHTML={{ __html: teammodel.content}}></div>
            <div className="teampopsocial">
            {teammodel.teamFields.spotify && (
              <a href={teammodel.teamFields.spotify}><i className="fa-brands fa-spotify" /></a>
            )}
            {teammodel.teamFields.instagram && (
              <a href={teammodel.teamFields.instagram}>
                <svg width="26" height="25" viewBox="0 0 26 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2297 0.00153794C15.1712 -0.00196222 16.1128 0.00720512 17.0541 0.0290371L17.3044 0.0377868C17.5934 0.0477864 17.8785 0.060286 18.223 0.0752855C19.5959 0.137783 20.5326 0.347776 21.3545 0.656516C22.2061 0.974005 22.9234 1.40399 23.6408 2.09897C24.2968 2.72345 24.8044 3.47885 25.1285 4.31264C25.4472 5.10886 25.6639 6.01758 25.7285 7.34754C25.7439 7.68003 25.7568 7.95752 25.7672 8.23751L25.7749 8.48C25.7978 9.39146 25.8077 10.3032 25.8046 11.2149L25.8059 12.1474V13.7848C25.8091 14.697 25.7992 15.6091 25.7762 16.521L25.7685 16.7635C25.7581 17.0435 25.7452 17.3197 25.7297 17.6534C25.6652 18.9834 25.4459 19.8909 25.1285 20.6871C24.8055 21.5218 24.2977 22.2778 23.6408 22.902C22.9956 23.5374 22.2155 24.0292 21.3545 24.3432C20.5326 24.6519 19.5959 24.8619 18.223 24.9244C17.8785 24.9394 17.5934 24.9519 17.3044 24.9619L17.0541 24.9694C16.1128 24.9917 15.1712 25.0012 14.2297 24.9982L13.2672 24.9994H11.5782C10.6367 25.0025 9.69512 24.9929 8.75384 24.9707L8.50353 24.9632C8.19724 24.9524 7.89101 24.9399 7.58487 24.9257C6.21204 24.8632 5.27531 24.6507 4.45213 24.3432C3.59112 24.0299 2.81123 23.538 2.16708 22.902C1.5104 22.2774 1.00227 21.5215 0.678129 20.6871C0.359436 19.8909 0.142673 18.9834 0.0781598 17.6534C0.0637901 17.3568 0.0508874 17.0602 0.0394521 16.7635L0.033001 16.521C0.00921331 15.6091 -0.00153998 14.697 0.000744479 13.7848V11.2149C-0.00285658 10.3032 0.0066063 9.39146 0.0291302 8.48L0.038162 8.23751C0.048484 7.95752 0.0613865 7.68003 0.0768696 7.34754C0.141382 6.01633 0.358145 5.11011 0.676839 4.31264C1.00117 3.47844 1.5103 2.72325 2.16838 2.10022C2.81208 1.46368 3.59148 0.970971 4.45213 0.656516C5.27531 0.347776 6.21075 0.137783 7.58487 0.0752855L8.50353 0.0377868L8.75384 0.0315371C9.69468 0.00850393 10.6358 -0.0019135 11.5769 0.000288075L14.2297 0.00153794ZM12.9033 6.25132C12.0485 6.23961 11.1999 6.3926 10.4066 6.70139C9.61341 7.01019 8.89144 7.46863 8.2827 8.05008C7.67395 8.63153 7.19057 9.32439 6.86063 10.0884C6.5307 10.8524 6.36079 11.6723 6.36079 12.5005C6.36079 13.3287 6.5307 14.1486 6.86063 14.9126C7.19057 15.6766 7.67395 16.3694 8.2827 16.9509C8.89144 17.5323 9.61341 17.9908 10.4066 18.2996C11.1999 18.6084 12.0485 18.7614 12.9033 18.7497C14.6143 18.7497 16.2552 18.0912 17.4651 16.9191C18.6749 15.7471 19.3546 14.1574 19.3546 12.4999C19.3546 10.8423 18.6749 9.25266 17.4651 8.0806C16.2552 6.90853 14.6143 6.25132 12.9033 6.25132ZM12.9033 8.75124C13.4175 8.74206 13.9284 8.83223 14.4062 9.01649C14.884 9.20075 15.3191 9.47539 15.6861 9.82438C16.0531 10.1734 16.3446 10.5897 16.5437 11.0491C16.7427 11.5085 16.8453 12.0016 16.8454 12.4999C16.8455 12.9981 16.7431 13.4913 16.5442 13.9507C16.3453 14.4101 16.0539 14.8266 15.687 15.1757C15.3201 15.5248 14.8851 15.7996 14.4074 15.984C13.9297 16.1684 13.4188 16.2587 12.9046 16.2497C11.878 16.2497 10.8935 15.8547 10.1676 15.1514C9.44164 14.4482 9.03383 13.4944 9.03383 12.4999C9.03383 11.5053 9.44164 10.5515 10.1676 9.8483C10.8935 9.14506 11.878 8.74999 12.9046 8.74999L12.9033 8.75124ZM19.6772 4.37639C19.2609 4.39253 18.8673 4.56407 18.5786 4.85509C18.29 5.1461 18.1288 5.53402 18.1288 5.93759C18.1288 6.34115 18.29 6.72907 18.5786 7.02008C18.8673 7.3111 19.2609 7.48264 19.6772 7.49878C20.1049 7.49878 20.5151 7.33417 20.8176 7.04115C21.1201 6.74814 21.29 6.35072 21.29 5.93634C21.29 5.52195 21.1201 5.12454 20.8176 4.83152C20.5151 4.5385 20.1049 4.37389 19.6772 4.37389V4.37639Z" fill="currentColor"/>
                </svg>
              </a>
            )}
            {teammodel.teamFields.linkedin && (
              <a href={teammodel.teamFields.linkedin}><i className="fa-brands fa-linkedin" /></a>
              )}
              {teammodel.teamFields.twitter && (
              <a href={teammodel.teamFields.twitter}><i className="fa-brands fa-x-twitter"></i></a>
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

