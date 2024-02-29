import {graphqlRequest} from "./graphqlRequest.js";

export async function getAboutSections(){

    const query = {
        query: `query NewQuery {
            allTeam (where: {orderby: {field: DATE, order: ASC}}){
              nodes {
                title(format: RENDERED)
                teamFields {
                  instagram
                  linkedin
                  role
                  spotify
                  twitter
                  image {
                    sourceUrl
                  }
                }
                content(format: RENDERED)
              }
            }
          }`

    };

    const resJson       = await graphqlRequest(query);
    const sectionData   = resJson;
    

    return sectionData;

};

export async function getAboutSections2(){

    const query = {
        query: `query MyQuery2 {
          pageBy(pageId: 79) {
            culturePage {
              coreValueSection {
                ... on Page_Culturepage_CoreValueSection_Heading {
                  button
                  description
                  fieldGroupName
                  heading
                }
              }
              coreValueBoxes {
                ... on Page_Culturepage_CoreValueBoxes_Box {
                  description
                  fieldGroupName
                  image {
                    sourceUrl
                  }
                  titleImage {
                    sourceUrl
                  }
                }
              }
              meetTeamSection {
                ... on Page_Culturepage_MeetTeamSection_Fields {
                  description
                  heading1
                }
              }
              whoWeAreSection {
                ... on Page_Culturepage_WhoWeAreSection_Fields {
                  description
                  fieldGroupName
                  heading
                }
              }
              boxes {
                ... on Page_Culturepage_Boxes_Box {
                  description
                  fieldGroupName
                  heading1
                  subHeading
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