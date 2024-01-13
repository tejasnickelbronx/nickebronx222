import Image from 'next/image'
export default function getImagebyportfoliotype(portfolioItem){

    const portfolio = portfolioItem.portfolioItem;
    
    if(portfolio.template.templateName=="Portfolio Short Page"){
        return <Image src={portfolio.portfolioshortfields.portfolioHeader[0].headerImage.sourceUrl} width={300} height={100}/>;
  
    }
    if(portfolio.template.templateName=="Portfolio Long Page"){
        return <Image src={portfolio.portfoliolongfields.portfolioHeaderLong[0].headerImage.sourceUrl} width={300} height={100}/>;
  
    }
    
    return <div>we are 2</div>;
  }