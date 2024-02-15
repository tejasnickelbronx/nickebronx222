import {graphqlRequest} from "./graphqlRequest.js";

export async function getFeaturedPost(){

    const query = {
        query: `query featuredpost {
            posts(where: {categoryId: 82}) {
              nodes {
                id
                title
                slug
                postId
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                excerpt
                content(format: RENDERED)
                categories {
                  nodes {
                    slug
                    categoryId
                    name
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

export async function getallPost(){

    const query = {
        query: `query featuredpost {
            posts(where: {status: PUBLISH, orderby: {field: DATE, order: DESC}}, first: 50){
              nodes {
                id
                title
                slug
                postId
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                excerpt
                content(format: RENDERED)
                categories {
                  nodes {
                    slug
                    categoryId
                    name
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


export async function getSinglePost(postid){

    const query = {
        query: `query singlepost {
            postBy(postId: ${postid}) {
              categories {
                nodes {
                  slug
                  name
                  id
                }
              }
              content
              date
              featuredImage {
                node {
                  sourceUrl
                }
              }
              title
              selectRelatedPostHere {
                relatedPost {
                  ... on Post {
                    postId
                    title(format: RENDERED)
                    slug
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                    content
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
  