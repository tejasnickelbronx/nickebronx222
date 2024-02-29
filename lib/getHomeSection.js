import {graphqlRequest} from "./graphqlRequest.js";

export async function getsection1(){

    const query = {
        query: `query getHomeSection {
            pageBy(pageId: 31) {
              homePage {
                ourClients {
                  ... on Page_Homepage_OurClients_Fields {
                    button
                    clientCount
                    description
                    fieldGroupName
                    heading
                  }
                }
                whoWeAre {
                  ... on Page_Homepage_WhoWeAre_Fields {
                    button
                    description
                    fieldGroupName
                    headings
                  }
                }
                ourServices {
                  ... on Page_Homepage_OurServices_Fields {
                    description
                    fieldGroupName
                    heading
                    
                  }
                }
                
                topBannerSection {
                  ... on Page_Homepage_TopBannerSection_Fields {
                    button
                    description
                    heading
                    video
                  }
                }
                ourServicesItems {
                  ... on Page_Homepage_OurServicesItems_AddService {
                    description
                    fieldGroupName
                    link{
                      ... on Page {
                        id
                        slug
                        pageId
                      }
                    }
                    serviceTitle
                    serviceIcon {
                      sourceUrl
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


export async function getsection2(){

  const query = {
      query: `query getHomeSection {
          pageBy(pageId: 31) {
            homePage {
              ourClients {
                ... on Page_Homepage_OurClients_Fields {
                  button
                  clientCount
                  description
                  fieldGroupName
                  heading
                }
              }
              ourServices {
                ... on Page_Homepage_OurServices_Fields {
                  description
                  fieldGroupName
                  heading
                }
              }
              topBannerSection {
                ... on Page_Homepage_TopBannerSection_Fields {
                  button
                  description
                  heading
                  video
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


