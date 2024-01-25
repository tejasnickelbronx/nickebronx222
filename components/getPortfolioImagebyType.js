import Image from 'next/image'
export default function getImagebyportfoliotype(portfolioItem){

    const portfolio = portfolioItem.portfolioItem;
    
    if(portfolio.template.templateName=="Portfolio Short Page"){
        return <Image src={portfolio.portfolioshortfields.portfolioHeader[0].headerImage.sourceUrl} width={400} height={450} alt="Portfolio Item"/>;
  
    }
    if(portfolio.template.templateName=="Portfolio Long Page"){
        return <Image src={portfolio.portfoliolongfields.portfolioHeaderLong[0].headerImage.sourceUrl} width={400} height={450} alt="Portfolio Item"/>;
  
    }
    
    return <div>we are 2</div>;
  }