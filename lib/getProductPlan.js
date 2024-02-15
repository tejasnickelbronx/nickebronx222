import {graphqlRequest} from "./graphqlRequest.js";

export async function getproductdata(){

    const query = {
        query: `query getHomeSection {
          pageBy(pageId: 1020) {
            productLandingPageFields {
              bundleBoxes {
                ... on Page_Productlandingpagefields_BundleBoxes_Box {
                  description
                  fieldGroupName
                  boxIcon {
                    sourceUrl
                  }
                  heading
                }
              }
              header {
                ... on Page_Productlandingpagefields_Header_Item {
                  description
                  headerImage {
                    sourceUrl
                  }
                  heading
                }
              }
              planHeading
              plansSection {
                ... on Page_Productlandingpagefields_PlansSection_Plan {
                  description
                  features
                  planName
                  planPrice
                }
              }
              whyChooseBundle {
                ... on Page_Productlandingpagefields_WhyChooseBundle_Item {
                  description
                  heading
                  subHeading
                }
              }
              whyGetBundle {
                ... on Page_Productlandingpagefields_WhyGetBundle_Item {
                  description
                  fieldGroupName
                  heading
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

