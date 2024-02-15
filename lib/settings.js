import {graphqlRequest} from "./graphqlRequest.js";

export async function getAllSettings(){

    const query = {
        query: `query NewQuery {          
          globalHeaderFooterBy(globalHeaderFooterId: 200) {
            title
            generalSiteSettings {
              facebook
              fieldGroupName
              footerAboutDetails
              footerCopyright
              footerTagling2
              footertagline1
              instagram
              linkedin
              pinterest
              tiktok
              twitter
            }
          }
        }`

    };

    const resJson       = await graphqlRequest(query);
    const sectionData   = resJson;
    

    return sectionData;

};