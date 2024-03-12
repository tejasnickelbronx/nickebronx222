'use client'
import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import SiteHeader from '../components/siteheader.js';
import SiteFooter from '../components/sitefooter.js';
import HomePortfolioItems from '../components/getHomePortfolio.js';
import HomePortfolioItemsMobile from '../components/getHomePortfolioMobile.js';


import NewsLetterPop from '../components/newsletterpopup.js';
// import useScript from '../hooks/useScript.js';
import GetPortfolioImagebyType from '../components/getPortfolioImagebyType.js';

import {getsection1} from '../lib/getHomeSection.js';
import {getAllTestimonial} from '../lib/testimonial.js';
import {getPorftoliositems} from '../lib/getPortfolioSections.js';

import { Navigation, Pagination, Scrollbar, A11y,Mousewheel,FreeMode,Autoplay    } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';


import GetHomeServices from '../components/getHomeServices.js';

import SmoothScroll from '../components/getSmoothScroll.js';
import {  useRef } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
import { Children } from 'react';






export async function getStaticProps(){
  const sectionfields     = await getsection1();
  const testimonial       = await getAllTestimonial();
  const portfolioobarr    = await getPorftoliositems();
  
  
  return {
      props:{
         pagefields: sectionfields,
         testisection:testimonial,
         portfolioitems: portfolioobarr
         
      },

  }
}





export default function Home({pagefields, testisection,portfolioitems}) {
  const headertop   = pagefields.data.pageBy.homePage.topBannerSection[0];
  const whoweare    = pagefields.data.pageBy.homePage.whoWeAre[0];
  const ourService  = pagefields.data.pageBy.homePage.ourServices[0];
  const ourclients  = pagefields.data.pageBy.homePage.ourClients[0]
  
  const ourservicesitems = pagefields.data.pageBy.homePage.ourServicesItems;
  
  
  const alltestimonial = testisection.data.allTestimonial.nodes;

  
   const allportfolioarr = portfolioitems.data.allPortfolio.nodes;

  // console.log(alltestimonial);
   
  //  useScript('https://code.jquery.com/jquery-3.7.0.min.js');   
  //  useScript('./custominit.js');
  
   
  
   const recordcount = allportfolioarr.length/5;

   
   
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
      bgcolor: '#00C2FF',
      border: '0',
      boxShadow: 0,
      p: 4,
    };
   
   

   useEffect(() => {
    setOpen(true);
    
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
          {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" async  />         */}
          {/* <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@beta/bundled/locomotive-scroll.min.js" async ></script> */}	          
      </Head>
      
      <SiteHeader className="headercls"/>
      
      {/* Banner Section Start */}
      <section className="banner-main">
        <div className="container">
          <div className="banner-title">
            
            <h1 dangerouslySetInnerHTML={{ __html: headertop.heading}} />
            
            <p>
              {headertop.description}
            </p>
            <div className="banner-button">
              <a href="/contact" className="home-btn banner-btn">
              work with us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Blank Part Section Start */}
      <section className="video blank-part">
        <div className="container">
          <div className="video-part">
            <video id="myVideo" controls="" muted autoPlay loop playsInline> 
              <source src="https://nickelbronx1.wpenginepowered.com/video/homevideo.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
            </video>
          </div>
        </div>
      </section>
      {/* Blank Part Section End */}
      {/* Who We Are Section Start */}
      <section className="we-are-sec">
        <div className="container2">
          <div className="we-are-inner">
            <div className="title-part">
              <h2>WHO WE ARE</h2>
              <h3 dangerouslySetInnerHTML={{ __html: whoweare.headings}}></h3>
              
            </div>
            <div className="discription-part">
              <p>
                {whoweare.description}
              </p>
              <a href="/portfolios" className="home-btn">
                Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are Section End */}
      {/* Service Section Start */}
      <GetHomeServices allservices={ourservicesitems} servicesec={ourService}>
      </GetHomeServices>
      {/* Service Section End */}
      {/* Client Section Start */}
  
      <section className="client-main-sec">
        <div className="container2">
          <div className="client-main-inner">
            <div className="client-title">
              <div className="client-count">
                <h2>OUR CLIENTS</h2>
                <h3>{ourclients.clientCount}</h3>
                <h4 dangerouslySetInnerHTML={{ __html: ourclients.heading}}></h4>            
              </div>
              <div className="client-description">
                <p dangerouslySetInnerHTML={{ __html: ourclients.description}}></p>
                
                <a href="/contact" className="home-btn">
                  GET IN TOUCH
                </a>
              </div>
            </div>     
          </div>
        </div>
        <div className="client-intro-sec" data-scroll-container >   
            <HomePortfolioItems portfolioitems={allportfolioarr} />
           
            <HomePortfolioItemsMobile portfolioitems={allportfolioarr} />  
            <div className="homeportfoliobtn">
							<a href="/portfolios" className="home-btn">All WORK</a> 
						</div>
        </div>
  </section>
  {/* Client Section End */}
  {/* Testimonial Section Start */}
  <section className="testimonial-main">
    <div className="container2*">
      <div className="testimonial-inner">
        
            
      <Swiper  
      modules={[Navigation, Pagination, Scrollbar, A11y,Mousewheel, Autoplay ]}
      className="testimonial-slider"  
      navigation
      spaceBetween={25}
      slidesPerView={1} 
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)} 
      direction="horizontal"
      autoplay={{
        delay: 8000,        
      }}
      >

        {alltestimonial.map((testiItem, index)=>(    
        <SwiperSlide key={index}>
          <div className="testi-box container2">
            <div className="testi-box-inner">
              <div className="testi-img">
                <Image src={testiItem.customfield.clientPhoto.sourceUrl} alt={testiItem.title} height="300" width="300"/>
              </div>
              <div className="testi-content">
                <h2>{testiItem.title} • {testiItem.customfield.company}</h2>
                <h3>{testiItem.customfield.testimonialTitle}</h3>
                <div dangerouslySetInnerHTML={{ __html: testiItem.content}}></div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>    
           
            
          
      </div>
    </div>
  </section>
      {/* Testimonial Section End */}
      {/* Logo Section Start */}
      <section className="logo-main">
        <div className="logo-inner">
          <div className="logo-box-main">
            <div className="logo-box-inner bg-light-blue">
              <h2 className='awardshead'>our LATEST<br/> AWARDS</h2>
            </div>        
          </div>
          <div className="logo-box-main">
            <div className="logo-box-inner bg-pink" >
              <img src="/marcom.png" alt="logoclient" />
            </div>
            <div className="overlaylogo bg-light-blue">
                <div className="awardoverlay_inner bg-pink">
                    <div className='awardlist_overlay'>
                      <div><h3>'23</h3></div>
                      <div><h3>INFINIGODS</h3></div>
                      <div><h3>Gold</h3></div>
                    </div>
                    <div className='awardlist_overlay'>
                      <div><h3>'23</h3></div>
                      <div><h3>JOE MECHLINSKI</h3></div>
                      <div><h3>Gold</h3></div>
                    </div>
                    
                    <div className='awardlist_overlay'>
                      <div><h3>'23</h3></div>
                      <div><h3>DOYEN CONSULTING</h3></div>
                      <div><h3>Platinum</h3></div>
                    </div>
                    <div className='awardlist_overlay'>
                      <div><h3>'23</h3></div>
                      <div><h3>NICKELBRONX</h3></div>
                      <div><h3>Platinum</h3></div>                  
                    </div>
                    <div className='awardlist_overlay'>
                      <div><h3>'23</h3></div>
                      <div><h3>PHIN</h3></div>
                      <div><h3>Platinum</h3></div>                  
                    </div>
                  
                
                </div>        
            </div>
          </div>
          <div className="logo-box-main">
            <div className="logo-box-inner bg-yellow" >
              <img src="/hermes.png" alt="logoclient" />
            </div>
            <div className="overlaylogo bg-light-blue">
                <div className="awardoverlay_inner bg-yellow">
                    <div className='awardlist_overlay textblack'>
                      <div><h3>'23</h3></div>
                      <div><h3>NICKELBRONX</h3></div>
                      <div><h3>Platinum</h3></div>
                    </div>
                    <div className='awardlist_overlay textblack'>
                      <div><h3>'23</h3></div>
                      <div><h3>'PHIN</h3></div>
                      <div><h3>'Gold</h3></div>
                    </div>           
                </div>
            </div>
          </div>
          <div className="logo-box-main">
            <div className="logo-box-inner bgsoftwhite">
              <img src="/clutch.png" alt="logoclient" />
            </div>
            <div className="overlaylogo ">
                <div className="awardoverlay_inner bgsoftwhite">
                    <div className='awardlist_overlay textblack'>
                      <div><h3>'23</h3></div>
                      <div><h3>TOP FULL SERVICE DIGITAL CO.</h3></div>
                      
                    </div>
                    <div className='awardlist_overlay textblack'>
                      <div><h3>'23</h3></div>
                      <div><h3>'TOP CORPORATE BRANDING CO.</h3></div>
                      
                    </div> 
                    <div className='awardlist_overlay textblack'>
                      <div><h3>'23</h3></div>
                      <div><h3>TOP BRANDING COMPANY</h3></div>
                      
                    </div> 
                    <div className='awardlist_overlay textblack'>
                      <div><h3>'23</h3></div>
                      <div><h3>TOP SOCIAL MEDIA MARKETING CO.</h3></div>
                      
                    </div> 
                    <div className='awardlist_overlay textblack'>
                      <div><h3>'23</h3></div>
                      <div><h3>TOP SOCIAL MEDIA MARKETING CO.</h3></div>
                      
                    </div>           
                </div>
            </div>
          </div>
        </div>
      </section>
  
  
      <SiteFooter className="footercls"/>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">  
        <Box sx={style}>
          <a className='teampopclose' onClick={handleClose}></a>
         {open && (
            <NewsLetterPop />
            )}
        </Box> 
      </Modal>
    </div>
  )
}
