import Link from 'next/link';
import Head from 'next/head'

import Image from 'next/image'
import SiteHeader from '../../components/siteheader.js';
import SiteFooter from '../../components/sitefooter.js';
import useScript from '../../hooks/useScript.js';
import {getServicesSections} from '../../lib/getServicesSection.js';



export async function getStaticProps(){
  const getservicesdata  = await getServicesSections();
  
  
  
  return {
      props:{
         servicesData: getservicesdata,        
         
      },

  }
}


export default function About({servicesData}) {
  console.log(servicesData);
  const topheading = servicesData.data.pageBy.servicePageFieldTest.topHeading;
  const servicesections = servicesData.data.pageBy.servicePageFieldTest.serviceItems;

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
       
  {/* Services Banner Section Start */}
  <section className="service-banner-main servicebg">
    <div className="container2">
      <div className="service-title alignleft">
        <h2 dangerouslySetInnerHTML={{ __html: topheading}}></h2>
      </div>
      <div className='pricingbannerpdf'>
          <h3>Questions about our pricing? Download our PDF.</h3>
          <p>At NickelBronx, we believe in transparency and clarity when it comes to pricing. Our straightforward pricing packages are tailored to suit your needs, ensuring you receive top-notch design services without hidden costs or surprises. Explore our pricing options below and find the perfect fit for your project.</p>
          <a href="#" class="home-btn">Download PDF</a>
      </div>
    </div>
  </section>
  {/* Services Banner Section End */}
  {/* Identity Section Start */}

  {
           
  servicesections.map((servicesection, index)=>( 
  <section className={`identity-main-sec  servicesecng_${index}`} key={index}>
    <div className="container2">
      <div className="title-sec">
        <div className="title-part">
          <h3 dangerouslySetInnerHTML={{ __html: servicesection.serviceTitle}}>
            
          </h3>
        </div>
        <div className="content-part">
          <p>
            {servicesection.serviceDescription}
          </p>
          {/* <Link href={{
                      pathname: "/services/[[serviceSlug]]",
                      query: {"serviceSlug": [servicesection.button, '413']} 
                    }}
                  className="learn-btn color-yellow" >Learn More</Link> */}


                  <Link href={{
                      pathname: "/services/"+servicesection.button+"/"+servicesection.selectInnerPageOfThisService.pageId,
                       
                    }}
                  className="learn-btn color-yellow" >Learn More</Link>
          {/* <Link href={"services/"+servicesection.button} className="learn-btn color-yellow">Learn More</Link> */}
            
          
        </div>
      </div>
      
      <div className="service-list">

      
       
        {
           
           servicesection.serviceDetailsList.map((servicelistitem, index)=>( 
            <div className="list-box" key={index}>
              <h2 dangerouslySetInnerHTML={{ __html: servicelistitem.listHeading}}></h2>
              <ul dangerouslySetInnerHTML={{ __html: servicelistitem.listItemsDetails}}></ul>
            </div>

        ))}
        
        
      </div>
    </div>
  </section>
  ))}


  
  
  
  
  
  


        <SiteFooter className="footercls"/>
        </>

    )
}