
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import SiteHeader from '../components/siteheader.js';
import SiteFooter from '../components/sitefooter.js';
import GetPortfolioImagebyType from '../components/getPortfolioImagebyType.js';

import {getsection1} from '../lib/getHomeSection.js';
import {getAllTestimonial} from '../lib/testimonial.js';
import {getPorftoliositems} from '../lib/getPortfolioSections.js';



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

  
   console.log(ourservicesitems);
  
   
   const recordcount = allportfolioarr.length/5
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" async  />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" async  />
        <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@beta/bundled/locomotive-scroll.min.js" async ></script>
	      <link rel="stylesheet" type="text/css" media="screen" href="assets/css/locomotive-scroll.css" async ></link>
        <script src="/custominit.js" async></script>
        <script src="/locomativeinit.js" async></script>
        
      </Head>
      <SiteHeader className="headercls"/>
     
  {/* Header Section End */}
  {/* Banner Section Start */}
  <section className="banner-main">
    <div className="container">
      <div className="banner-title">
        
        <h1 dangerouslySetInnerHTML={{ __html: headertop.heading}} />
        
          
          
        
        <p>
          {headertop.description}
        </p>
        <div className="banner-button">
          <Link href="/portfolios" className="home-btn banner-btn">
            Our Work
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* Banner Section End */}
  {/* Blank Part Section Start */}
  <section className="blank-part">
    <div className="container">
      <div className="video-part">
        <video id="myVideo" controls="" muted autoPlay>
          <source src="/homevideo.mp4" type="video/mp4" />
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
          <Link href="/portfolios" className="home-btn">
            Our Work
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* Who We Are Section End */}
  {/* Service Section Start */}
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
        <div className="swiper service-slider">
          <div className="swiper-wrapper">
            {
             
              ourservicesitems.map((serviceitem, index)=>(     
                
              
               <div className={`swiper-slide serviceitems${index}`} key={serviceitem.serviceTitle}>
                  <div className="service-box">
                    <div  className={`service-box-inner sboxbg_${index}`}>
                      <div className="image">
                        <img src={serviceitem.serviceIcon.sourceUrl} />
                      </div>
                      <div className="box-title">                        
                        <h5 ><Link dangerouslySetInnerHTML={{ __html: serviceitem.serviceTitle}} href={"/services/"+serviceitem.link.slug+"/"+serviceitem.link.pageId}></Link></h5>
                       
                      </div>
                      <div className='servicedescbx'><p>{serviceitem.description}</p></div>
                     
                    </div>
                  </div>
                </div>
              ))

             }
            
            
            
            
            
          
          </div>
          <div className="swiper-scrollbar" />
        </div>
      </div>
    </div>
  </section>
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
            
            <a href="#" className="home-btn">
              GET IN TOUCH
            </a>
          </div>
        </div>
        <div className="client-intro-sec">
          <div className="client-inner-sec " >
          <div class="portclmn1" data-scroll="" data-scroll-speed=".5">
          {              
              allportfolioarr.slice(0, 5).map((portfolioItem, index)=>(               
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
            ))
          }
          </div>
          <div class="portclmn1" data-scroll="" data-scroll-speed=".10">
          {              
              allportfolioarr.slice(5, 10).map((portfolioItem, index)=>(               
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
            ))
          }
          </div>
          <div class="portclmn1" data-scroll="" data-scroll-speed=".5">
          {              
              allportfolioarr.slice(10,15).map((portfolioItem, index)=>(               
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
            ))
          }
          </div>
           
           
            <div className="homeportfoliobtn">
							<Link href="/portfolios" className="home-btn">All WORK</Link> 
						</div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Client Section End */}
  {/* Testimonial Section Start */}

  
  <section className="testimonial-main">
    <div className="container2">
      <div className="testimonial-inner">
        <div className="swiper testimonial-slider">
          <div className="swiper-wrapper">
          
            
          {

alltestimonial.map((testiItem, index)=>(    
<div className="swiper-slide" key={index}>
  <div className="testi-box">
    <div className="testi-box-inner">
      <div className="testi-img">
        <img src="/sohale-razmjou.png" />
      </div>
      <div className="testi-content">
        <h2>{testiItem.title} • {testiItem.customfield.company}</h2>
        {/*<h3>they absolutely CRUSHED IT</h3>*/}
        <div dangerouslySetInnerHTML={{ __html: testiItem.content}}></div>
      </div>
    </div>
  </div>
</div>
))}
            
            
           
            
          </div>
          <div className="swiper-scrollbar" />
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial Section End */}
  {/* Logo Section Start */}
  <section className="logo-main">
    <div className="logo-inner">
      <div className="logo-box-main">
        <div className="logo-box-inner bg-light-blue">
          <img src="/our-latest-awards.png" />
        </div>
      </div>
      <div className="logo-box-main">
        <div className="logo-box-inner bg-pink">
          <img src="/marcom.png" />
        </div>
      </div>
      <div className="logo-box-main">
        <div className="logo-box-inner bg-yellow">
          <img src="/hermes.png" />
        </div>
      </div>
      <div className="logo-box-main">
        <div className="logo-box-inner">
          <img src="/clutch.png" />
        </div>
      </div>
    </div>
  </section>
  

  <SiteFooter className="footercls"/>

    </>
  )
}
