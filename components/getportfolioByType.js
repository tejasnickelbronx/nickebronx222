import Image from 'next/image'
import Link from 'next/link';

export default function getPortfolioLayoutByType(portfolioItem){
   

    const portfoliodata = portfolioItem.portfolioItem.data.portfolioBy;
    
    
     if(portfolioItem.portfolioItem.data.portfolioBy.template.templateName=="Portfolio Short Page"){        
       
         return getPortfolioShortPage(portfoliodata)
     }
     if(portfolioItem.portfolioItem.data.portfolioBy.template.templateName=="Portfolio Long Page"){       
        
        return getPortfolioLongPage(portfoliodata);
     }

    

}
export function checkKeyValue(keyvalue){
  if (Object.keys(keyvalue).length > 0) {
    return keyvalue
  }else{
    return null;
  }

}
export function getPortfolioLongPage(singlePortfolio){
    
    const portfoliollongfield   = singlePortfolio.portfoliolongfields;
    const portfolioheader      = portfoliollongfield.portfolioHeaderLong[0];
    const portbrandguid        = portfoliollongfield.brandGuidelines[0];
    const websitedesign        = portfoliollongfield.websiteDesign[0];
    const takeaways             = portfoliollongfield.takeaways[0];
   
    console.log(takeaways);
    // const bigimage = singlePortfolio.bigImag[0];
    // const bigimage2 = singlePortfolio.bigImag[0];
    // const sideimage = singlePortfolio.sideImages1[0];
    // const sideimage2 = singlePortfolio.sideImages2[0];
    const  headertitle      = singlePortfolio.title;
    // console.log(singlePortfolio);
    return (
        <>
    <section className="family-law-banner">
      <div className="image-sec">
        <img src={portfolioheader.headerImage.sourceUrl} height={1000} width={500} alt={headertitle} />
      </div>
      <div className="container2">
        <div className="banner-title-sec">
          <h2>{headertitle}</h2>
        </div>
      </div>
    </section>
    {/* Famlity Law Banner Section End */}
    {/* Dedicated Section Start */}
    <section className="dedicated-main-sec">
      <div className="container2">
        <div className="dedicated-title-sec">
          <h2 dangerouslySetInnerHTML={{ __html: portfolioheader.heading}}></h2>
        </div>
        <div className="dedicated-content-sec">
          <div className="left-part">
            <h3>THE BRIEF</h3>
            <p>{portfolioheader.theBrief}</p>
          </div>
          <div className="right-part">
            <div className="service-menu-sec">
              <h4>SERVICES</h4>
              <ul dangerouslySetInnerHTML={{ __html: portfolioheader.services}}></ul>
            </div>
            <div className="second-menu">
              <h5>YEAR</h5>
              <p>{portfolioheader.year}</p>
              <div className="second-menu">
                <h5>TIMEFRAME</h5>
                <p>Ongoing </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Dedicated Section End */}
    {/* Brand Section Start */} 
    <section className="brand-main-sec">
      <div className="container2">
        <div className="brand-inner-sec">
          <div className="brand-box">    
            <img src={portbrandguid.brandImage1.sourceUrl} height={600} width={400} alt={headertitle}/>
          </div>
          <div className="brand-box">
            <img src={portbrandguid.brandImage2.sourceUrl} height={600} width={400} alt={headertitle} />
          </div>
          <div className="brand-box">
            <img src={portbrandguid.brandImage3.sourceUrl} height={600} width={400} alt={headertitle} />
          </div>
          <div className="brand-box">
            <div className="box-content">
              <h2  dangerouslySetInnerHTML={{ __html: portbrandguid.heading}}></h2>
              <p>{portbrandguid.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Brand Section End */}
    {/* Functionality Section Start */}
    <section className="functionality-main-sec">
      <div className="container2">
        <div className="functionality-title">
          <div className="title">
            <h2 dangerouslySetInnerHTML={{ __html: websitedesign.heading}}></h2>
          </div>
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: websitedesign.description}}></p>
          </div>
        </div>
        <div className="functionality-info-sec">
          <div className="functionality-image">
              <img src={websitedesign.sideImage1.sourceUrl} height={600} width={400} alt={headertitle} />
          </div>
          <div className="functionality-image">
              <img src={websitedesign.sideImage2.sourceUrl} height={600} width={400} alt={headertitle} />
          </div>
          <div className="functionality-image w-full">
              <img src={websitedesign.bigImage.sourceUrl} height={600} width={400} alt={headertitle} />
          </div>
          
        </div>
      </div>
    </section>
    {/* Functionality Section End */}
    {/* Takeaways Section Start */}
    {/* <section className="takeaways-main-sec">
      <div className="container2">
        <div className="takeaways-title">
          <h2>Takeaways</h2>
          <p>{takeaways.description}</p>
        </div>
        <div className="takeaways-content-sec">
          <div className="takeaways-image-wrap w-full">
          {takeaways.bigImage && (
              <Image src={takeaways.bigImage.sourceUrl} height={600} width={400} alt={headertitle} />
          )}
          </div>
          <div className="takeaways-image-wrap"> 
          <Image src={takeaways.sideImage1.sourceUrl} height={600} width={400} alt={headertitle} />
          </div>
          <div className="takeaways-image-wrap">
          <Image src={takeaways.sideImage2.sourceUrl} height={600} width={400} alt={headertitle} />
          </div>
        </div>
      </div>
    </section> */}


    {/* Takeaways Section End */}
    {/* Project Section Start */}
    {/* <section className="project-main-sec">
      
      <div className="project-inner-sec">
        <div className="left-part">
          <h2>
            <a href="#">
              <span>
                <img src="../../arrow-left.png" alt="previous project" />
              </span>
              Previous <br />
              PROJECT
            </a>
          </h2>
          <h3>CAFE LEVANTINE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
        <div className="right-part">
          <h2>
            <a href="#">
              <span>
                <img src="../../arrow-right.png" alt="next project" />
              </span>
              NEXT <br />
              PROJECT
            </a>
          </h2>
          <h3>CAFE LEVANTINE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
      </div>
      
    </section> */}
    {/* Project Section End */}

    </>
    )

}

export function getPortfolioShortPage(singlePortfolio){
    // console.log(singlePortfolio);
    
    const  headertitle      = singlePortfolio.title;
    const portfolioshort    = singlePortfolio.portfolioshortfields
     const portfolioheader = portfolioshort.portfolioHeader[0];
     const bigimage = portfolioshort.bigImage[0];
     const bigimage2 = portfolioshort.bigImage[0];
     const sideimage = portfolioshort.sideImages1[0];
     const sideimage2 = portfolioshort.sideImages2[0];
    return (
        <div>
        
        
    <section className="family-law-banner">
    <div className="image-sec">
     <Image src={portfolioheader.headerImage.sourceUrl} height={500} width={1400} className='ImageFullwidth' alt={headertitle} />
    </div>
    <div className="container2">
      <div className="banner-title-sec">
         <h2>{headertitle}</h2> 
      </div>
    </div>
  </section>
  {/* Famlity Law Banner Section End */}
  {/* Dedicated Section Start */}
  <section className="dedicated-main-sec">
    <div className="container2">
      <div className="dedicated-title-sec">
        <h2 dangerouslySetInnerHTML={{ __html: portfolioheader.heading}}></h2>
      </div>
      <div className="dedicated-content-sec">
        <div className="left-part">
          <h3>THE BRIEF</h3>
          <p dangerouslySetInnerHTML={{ __html: portfolioheader.theBrief}}></p>
        </div>
        <div className="right-part">
          <div className="service-menu-sec">
            <h4>SERVICES</h4>
            <ul dangerouslySetInnerHTML={{ __html: portfolioheader.services}}></ul>
          </div>
          <div className="second-menu">
            <h5>YEAR</h5>
            <p>{portfolioheader.year}</p>
            <div className="second-menu">
              <h5>TIMEFRAME</h5>
              <p>Ongoing </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Dedicated Section End */}
  {/* Brand Section Start */}
  <section className="brand-main-sec">
    <div className="container2">
      <div className="brand-inner-sec">
        <div className="brand-box">
         <img src={sideimage.image1.sourceUrl} height={200} width={500} className='ImageFullwidth' alt={headertitle} />
         
        </div>
        <div className="brand-box">
            <img src={sideimage.image2.sourceUrl} height={300} width={500} className='ImageFullwidth'alt={headertitle} />
        </div>        
      </div>
      <div className="brand-inner-big">
            <img src={bigimage.image.sourceUrl} height={300} width={500} className='ImageFullwidth' alt={headertitle} />
      </div>
      <div className="brand-inner-sec">
        <div className="brand-box">
         <img src={sideimage2.image1.sourceUrl} height={200} width={500} className='ImageFullwidth' alt={headertitle} />
         
        </div>
        <div className="brand-box">
            <img src={sideimage2.image2.sourceUrl} height={300} width={500} className='ImageFullwidth' alt={headertitle} />
        </div>        
      </div>
    </div>
  </section>
 
  {/* Project Section Start */}
  {/* <section className="project-main-sec">    
    <div className="project-inner-sec">
      <div className="left-part">
        <h2>
          <a href="#">
            <span>
              <img src="../../arrow-left.png" alt="previous project" />
            </span>
            Previous <br />
            PROJECT
          </a>
        </h2>
        <h3>CAFE LEVANTINE</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
      </div>
      <div className="right-part">
        <h2>
          <a href="#">
            <span>
              <img src="../../arrow-right.png" alt="next project" />
            </span>
            NEXT <br />
            PROJECT
          </a>
        </h2>
        <h3>CAFE LEVANTINE</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
      </div>
    </div>   
  </section> */}
  {/* Project Section End */}
  </div>

    )
}
