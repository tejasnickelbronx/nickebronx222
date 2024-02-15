import React, { createContext, useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head'

import Image from 'next/image'
import SiteHeader from '../../components/siteheader.js';
import SiteFooter from '../../components/sitefooter.js';
import useScript from '../../hooks/useScript.js';
import {getServicesSections} from '../../lib/getServicesSection.js';
import {getAllTestimonial} from '../../lib/testimonial.js';

import { Navigation, Pagination, Scrollbar, A11y,Mousewheel,FreeMode,Autoplay    } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export async function getStaticProps(){
  const getservicesdata  = await getServicesSections();
  const testimonial  = await getAllTestimonial();
  
  
  return {
      props:{
         servicesData: getservicesdata,  
         testisection:testimonial      
         
      },

  }
}


export default function About({servicesData,testisection}) {
  console.log(servicesData);
  const alltestimonial = testisection.data.allTestimonial.nodes;

    useScript('https://code.jquery.com/jquery-3.7.0.min.js');
    useScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
    useScript('https://cdn.jsdelivr.net/npm/locomotive-scroll@beta/bundled/locomotive-scroll.min.js');
    useScript('./custominit.js');
    return(
        <>
        <Head>
            <title>Nickelbronx</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            
            <script src="https://code.jquery.com/jquery-3.7.0.min.js" async></script>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"  async/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" async/>
            <script src="/custominit.js" async></script>
        </Head>
        <SiteHeader className="headercls"/>
       
      
  <section className="subservice-banner">
    <div className="container2">
      <div className="subservice-header">
        <h2>LEAD AND DEMAND GENERATION</h2>
      </div>
    </div>
  </section>
  <section className="subservice-content">
    <div className="container2">
      <div className="subservice-text">
        <div className="subservice-text-inner">
          <h2>Master The Marketing Funnel</h2>
          <p>
          These days, buyers are more in charge of their sales journey than ever before — 
          which means it’s our job to create experiences that meet them where they are. 
          Enter our demand and lead gen strategy. Powered by a balanced approach, our strategists 
          are here to help capture your audience’s attention and convert prospective clients into loyal customers. Wondering how we pull it off? So glad you asked.
          </p>
          <h2>Part 1 | Building Demand</h2>
          <p>
          The first step in our proven game plan is building buzz around everything you have to offer. 
          Here, we’re laser-focused on enhancing brand awareness, educating audiences, and generating trust. 
          The best way to accomplish all of that? Creating resources — think blogs — brimming with valuable content that helps solve your audience's problems.

          </p>
          <h2>Part 2 | Catching Leads</h2>
          <p>
          Picture this: Someone lands on your blog a second time, discovers that the content is relevant (once again), 
          and sees consistency in the value you provide. We need an outlet for this positive momentum, otherwise known as a CTA form, 
          where curious visitors can drop their information. 
          From there, we’ll nurture the lead through a targeted email campaign that convinces them to take action. 
          </p>
        </div>
      </div>
      <div className="subservice-boxes">
        <div className="subservice-itembx servcebx1">
          <h4>Content<br /> Marketing</h4>
          <p>
          Engage prospects with compelling content that drives interest and converts leads and elevate your content marketing game.
          </p>
        </div>
        <div className="subservice-itembx servcebx2">
          <h4>SEO <br /> Boost</h4>
          <p>
          Amplify demand with enhanced online visibility. Our proven SEO solutions drive more qualified traffic to you.
          </p>
        </div>
        <div className="subservice-itembx servcebx3">
          <h4>Social <br /> Engagement</h4>
          <p>
          Convert social interactions into solid leads. Our strategic approach maximizes impact on platforms and increases online visibility.
          </p>
        </div>
        <div className="subservice-itembx servcebx2">
          <h4>Email <br /> Campaigns</h4>
          <p>
          Cultivate relationships, ignite demand. Expertly crafted email campaigns for sustainable lead growth.
          </p>
        </div>
        <div className="subservice-itembx servcebx3">
          <h4>Precision <br /> Ads</h4>
          <p>
          Pinpoint audience targets, boost demand & leads through precise ad campaigns. Expert digital marketing strategies at your service.
          </p>
        </div>
        <div className="subservice-itembx servcebx1">
          <h4>Landing Pages and Forms</h4>
          <p>
          Maximize conversions with our expert landing page optimization. Captivate visitors, drive action, and transform clicks into valuable leads.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Identity Info Section End */}
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
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} 
      direction="horizontal"
      autoplay={{
        delay: 8000,        
      }}
      >

        {alltestimonial.map((testiItem, index)=>(    
        <SwiperSlide>
          <div className="testi-box container2">
            <div className="testi-box-inner">
              <div className="testi-img">
                <Image src={testiItem.customfield.clientPhoto.sourceUrl} alt={testiItem.title} height="300" width="300"/>
              </div>
              <div className="testi-content">
                <h2>{testiItem.title} • {testiItem.customfield.company}</h2>
                {/*<h3>they absolutely CRUSHED IT</h3>*/}
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


 {/* FAQ Section Start */}
  <section className="faq-main-sec">
    <div className="container2">
      <div className="faq-title">
        <h2>FAQs</h2>
      </div>

      
      <div className="accordion">
      
             
      <Accordion>
          <AccordionSummary id={`panel1-header`}  expandIcon={<ExpandMoreIcon />}>
            <h3>What is demand generation?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>Demand generation is a comprehensive marketing approach aimed at stimulating interest and awareness in your products or services. It involves creating a strategic mix of activities and campaigns to generate demand for what you offer. This encompasses tactics like content creation, targeted advertising, events, and branding efforts. By creating a buzz around your offerings, demand generation aims to capture the attention of potential customers and establish a foundation for future lead generation and sales conversion.

            </p>
          </AccordionDetails>
      </Accordion>
      <Accordion>
          <AccordionSummary id={`panel1-header`}  expandIcon={<ExpandMoreIcon />}>
            <h3>How does lead generation work?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>Lead generation is the process of identifying, attracting, and cultivating potential customers or "leads" who have expressed interest in your products or services. This is achieved through various marketing strategies. The goal is to capture the contact information of these potential leads, usually through forms or landing pages, allowing you to nurture them further down the sales funnel. Lead generation bridges the gap between demand generation and sales by providing your sales team with a pool of interested and engaged individuals to convert into paying customers.
</p>
          </AccordionDetails>
      </Accordion>
      <Accordion>
          <AccordionSummary id={`panel1-header`}  expandIcon={<ExpandMoreIcon />}>
            <h3>Why is content vital in lead generation?
</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>Content plays a crucial role in lead generation because it serves as a means to engage, educate, and build trust with potential leads. High-quality content, such as blog posts, newsletters, videos, and social media posts, showcases your expertise and addresses the pain points of your target audience. By providing valuable and relevant information, you position your brand as a reliable source, encouraging visitors to follow you. This contact then enables you to continue nurturing these leads through tailored communication, ultimately guiding them toward making a purchase decision.
</p>
          </AccordionDetails>
      </Accordion>
      <Accordion>
          <AccordionSummary id={`panel1-header`}  expandIcon={<ExpandMoreIcon />}>
            <h3>How does social media contribute to lead generation?

</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>Social media is a powerful tool due to its widespread reach and interactive nature. It allows you to connect with your audience, share valuable content, and engage in real-time conversations. By crafting and sharing compelling content on various social platforms, you can attract potential leads. Social media ads also enable precise targeting, and as users engage with your content, you have the opportunity to drive them to dedicated landing pages where they can provide their information in exchange for more valuable resources or insights, thereby converting them into leads for your sales funnel.
</p>
          </AccordionDetails>
      </Accordion>
    
      </div>
    </div>
  </section> 
  
  
  
  
  


        <SiteFooter className="footercls"/>
        </>

    )
}