import {graphqlRequest} from "./graphqlRequest.js";

export async function getServicesSections(){

    const query = {
        query: `query MyQuery2 {
          pageBy(pageId: 100) {
            servicePageFieldTest {
              serviceItems {
                ... on Page_Servicepagefieldtest_ServiceItems_AddServiceSection {
                  button
                  serviceDescription
                  serviceDetailsList {
                    ... on Page_Servicepagefieldtest_ServiceItems_AddServiceSection_ServiceDetailsList_List {
                      listHeading
                      listItemsDetails
                    }
                  }
                  serviceTitle
                  selectInnerPageOfThisService {
                    ... on Page {              
                      pageId
                    }
                  }
                }
              }
              topHeading
            }
          }
        }`

    };

    const resJson       = await graphqlRequest(query);
    const sectionData   = resJson;
    

    return sectionData;

};

export async function getSingleService(serviceid){

  const query = {
      query: `query getSingleService {
        pageBy(pageId: ${serviceid}) {
          title(format: RENDERED)
          serviceInnerFields {
            header {
              ... on Page_Serviceinnerfields_Header_Field {
                descrption
                heading
                image {
                  sourceUrl
                }
              }
            }
            serviceProcess {
              ... on Page_Serviceinnerfields_ServiceProcess_Step {
                listTitle
                stepDescription
                stepNumberImage {
                  sourceUrl
                }
                title
              }
            }
            serviceFaq {
              ... on Page_Serviceinnerfields_ServiceFaq_Item {
                answer
                fieldGroupName
                quetion
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
