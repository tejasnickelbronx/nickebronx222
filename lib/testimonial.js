import {graphqlRequest} from "./graphqlRequest.js";

export async function getAllTestimonial(){

    const query = {
        query: `query {
            allTestimonial {
              nodes {
                title(format: RENDERED)
                content(format: RENDERED)
                customfield {
                  company
                  clientPhoto {
                    sourceUrl
                  }
                  testimonialTitle
                }
              }
            }
          }`

    };

    const resJson       = await graphqlRequest(query);
    const sectionData   = resJson;
    

    return sectionData;

};