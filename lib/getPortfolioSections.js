import {graphqlRequest} from "./graphqlRequest.js";

export async function getPorftoliositems(){

    const query = {
        query: `query getportfolio {
            allPortfolio(first: 100, where: {orderby: {field: DATE, order: DESC}}) {
              nodes {
                slug
                portfolioId
                title
                portfoliolongfields {
                  portfolioHeaderLong {
                    ... on Portfolio_Portfoliolongfields_PortfolioHeaderLong_Header {
                      headerImage {
                        sourceUrl
                      }
                    }
                  }
                }
                portfolioshortfields {
                  portfolioHeader {
                    ... on Portfolio_Portfolioshortfields_PortfolioHeader_Header {
                      headerImage {
                        sourceUrl
                      }
                    }
                  }
                }
                template {
                  templateName
                }
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }`

    };

    const resJson       = await graphqlRequest(query);
    const sectionData   = resJson;
    

    return sectionData;
}


export async function getAllPortfolioSlug(){

  const query = {
      query: `query getportfolioslug {
        allPortfolio(first: 100) {
          nodes {
            slug
            portfolioId
          }
        }
      }`

  };

  const resJson       = await graphqlRequest(query);
  const sectionData   = resJson;
  

  return sectionData;
}

export async function getSinglePortfolio(portfolioid){

  const query = {
      query: `query getallservices {
        portfolioBy(portfolioId: ${portfolioid}) {
          template {
            templateName
          }
          portfolioshortfields {
            bigImage {
              ... on Portfolio_Portfolioshortfields_BigImage_Item {
                image {
                  sourceUrl
                }
              }
            }
            bigImage2 {
              ... on Portfolio_Portfolioshortfields_BigImage2_Item {
                image {
                  sourceUrl
                }
              }
            }
            portfolioHeader {
              ... on Portfolio_Portfolioshortfields_PortfolioHeader_Header {
                heading
                headerImage {
                  sourceUrl
                }
                services
                theBrief
                year
              }
            }
            sideImages1 {
              ... on Portfolio_Portfolioshortfields_SideImages1_Item {
                image1 {
                  sourceUrl
                }
                image2 {
                  sourceUrl
                }
              }
            }
            sideImages2 {
              ... on Portfolio_Portfolioshortfields_SideImages2_Item {
                image1 {
                  sourceUrl
                }
                image2 {
                  sourceUrl
                }
              }
            }
          }
          portfoliolongfields {
            brandGuidelines {
              ... on Portfolio_Portfoliolongfields_BrandGuidelines_Detail {
                description
                brandImage1 {
                  sourceUrl
                }
                brandImage2 {
                  sourceUrl
                }
                brandImage3 {
                  sourceUrl
                }
                heading
              }
            }
            portfolioHeaderLong {
              ... on Portfolio_Portfoliolongfields_PortfolioHeaderLong_Header {
                heading
                headerImage {
                  sourceUrl
                }
                services
                theBrief
                year
              }
            }
            takeaways {
              ... on Portfolio_Portfoliolongfields_Takeaways_Item {
                description
                bigImage {
                  sourceUrl
                }
                sideImage1 {
                  sourceUrl
                }
                sideImage2 {
                  sourceUrl
                }
              }
            }
            websiteDesign {
              ... on Portfolio_Portfoliolongfields_WebsiteDesign_Item {
                description
                bigImage {
                  sourceUrl
                }
                heading
                sideImage1 {
                  sourceUrl
                }
                sideImage2 {
                  sourceUrl
                }
              }
            }
          }
          title
        }
      }`

  };

  const resJson       = await graphqlRequest(query);
  const sectionData   = resJson;
  

  return sectionData;

};


export async function getItemsPortfolioPage(portfolioid){

  const query = {
      query: `query MyQuery2 {
        pageBy(pageId: 1005) {
          title
          portfolioPageFields {
            pageHeading
            portfolioItems {
              ... on Page_Portfoliopagefields_PortfolioItems_Row {
                portfolioItemBig {
                  ... on Portfolio {
                    portfoliolongfields {
                      portfolioHeaderLong {
                        ... on Portfolio_Portfoliolongfields_PortfolioHeaderLong_Header {
                          headerImage {
                            sourceUrl
                          }
                        }
                      }
                    }
                    title(format: RENDERED)
                    portfolioId
                    slug
                    portfolioshortfields {
                      portfolioHeader {
                        ... on Portfolio_Portfolioshortfields_PortfolioHeader_Header {
                          headerImage {
                            sourceUrl
                          }
                        }
                      }
                    }
                    template {
                      templateName
                    }
                  }
                }
                portfolioItemSide1 {
                  ... on Portfolio {
                    id
                    portfoliolongfields {
                      portfolioHeaderLong {
                        ... on Portfolio_Portfoliolongfields_PortfolioHeaderLong_Header {
                          headerImage {
                            sourceUrl
                          }
                        }
                      }
                    }
                    portfolioshortfields {
                      portfolioHeader {
                        ... on Portfolio_Portfolioshortfields_PortfolioHeader_Header {
                          fieldGroupName
                          headerImage {
                            sourceUrl
                          }
                        }
                      }
                    }
                    title(format: RENDERED)
                    template {
                      templateName
                    }
                    slug
                    portfolioId
                  }
                }
                portfolioItemSide2 {
                  ... on Portfolio {
                    portfolioId
                    title(format: RENDERED)
                    slug
                    portfoliolongfields {
                      portfolioHeaderLong {
                        ... on Portfolio_Portfoliolongfields_PortfolioHeaderLong_Header {
                          headerImage {
                            sourceUrl
                          }
                        }
                      }
                    }
                    portfolioshortfields {
                      portfolioHeader {
                        ... on Portfolio_Portfolioshortfields_PortfolioHeader_Header {
                          headerImage {
                            sourceUrl
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          
        }
      }`

  };

  const resJson       = await graphqlRequest(query);
  const sectionData   = resJson;
  

  return sectionData;

};




