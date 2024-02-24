import Link from 'next/link';
import Head from 'next/head'

import Image from 'next/image'
import SiteHeader from '../../components/siteheader.js';
import SiteFooter from '../../components/sitefooter.js';
import useScript from '../../hooks/useScript.js';
import {getFeaturedPost, getallPost} from '../../lib/getBlogsSection.js';



export async function getStaticProps(){
  const allblogpost  = await getallPost();
  const getfeatblog  = await getFeaturedPost();
  
  
  
  return {
      props:{
         allblogs: allblogpost,        
         featuredblog: getfeatblog,        
         
      },

  }
}


export default function About({allblogs,featuredblog}) {
 
  const allpostitems = allblogs.data.posts.nodes;
  const featuredpost = featuredblog.data.posts.nodes[0];
//   console.log(featuredpost);

    // useScript('https://code.jquery.com/jquery-3.7.0.min.js');
    // useScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
    // useScript('https://cdn.jsdelivr.net/npm/locomotive-scroll@beta/bundled/locomotive-scroll.min.js');
    // useScript('./custominit.js');
    return(
        <div>
        <Head>
            <title>Nickelbronx</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            
            <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
            {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" async />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"  async/> */}
            <script src="/custominit.js" async></script>
        </Head>
        <SiteHeader className="headercls"/>
       
  


  
        <section className="talk-about-main-sec">
            <div className="container2">
                <div className="talk-about-title">
                <h2>
                    WHAT WE LIKE <br />
                    TO <span>TALK ABOUT</span>
                </h2>
                </div>
                <div className="filter-inner-sec">
                {/* <div className="buttons">
                    <button className="button  active" data-attr="all">
                    <a href="#">
                        All 
                    </a>
                    </button>
                    <button className="button " data-attr="branding">
                    <a href="#">
                        Branding 
                    </a>
                    </button>
                    <button className="button " data-attr="visual-design">
                    <a href="#">
                        Visual Design 
                    </a>
                    </button>
                    <button className="button " data-attr="ui-ux">
                    <a href="#">
                        UI/UX 
                    </a>
                    </button>
                    <button className="button " data-attr="social-media">
                    <a href="#">
                        Social Media 
                    </a>
                    </button>
                </div> */}
                <div className="item-list">
                    <div className="item all">
                    <div className="featured-inner">
                        <div className="image-sec">
                        <Link href={"/blogs/"+featuredpost.slug+"/"+featuredpost.postId}>
                            <Image src={featuredpost.featuredImage.node.sourceUrl} width={1200} height={300} className="blogimage" alt={featuredpost.slug}/>
                        </Link>
                        </div>
                        <div className="content-sec">
                        <h2>FEATURED</h2>
                        <h3>{featuredpost.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: featuredpost.content.substring(0, 100)}}></div>
                        <Link className="home-btn banner-btn" href={"/blogs/"+featuredpost.slug+"/"+featuredpost.postId}>READ MORE</Link> 
                        </div>
                    </div>
                    </div>
                    <div className="item-wrap">
                    {
           
                            allpostitems.map((postitem, index)=>(     
                            <div className="item branding" key={index}>
                                <div className="image-sec"> {postitem.featuredImage &&                                       
                                    <Link href={"/blogs/"+postitem.slug+"/"+postitem.postId}>
                                        <Image src={postitem.featuredImage.node.sourceUrl} width={500} height={300} className="blogimage" alt={postitem.slug}/>
                                    </Link> 
                                    }
                                </div>
                                <div className="content-sec">
                                <h3>{postitem.title}</h3>
                                <div className='itemblogcontent' dangerouslySetInnerHTML={{ __html: postitem.content.substring(0, 100)}}></div>
                                <Link href={"/blogs/"+postitem.slug+"/"+postitem.postId}>READ MORE</Link> 
                                </div>
                            </div>
                        ))}
                    
                    
                    
                    
                    </div>
                    <div className="button-sec">
                    {/* <a href="#" className="home-btn">
                        VIEW MORE
                    </a> */}
                    </div>
                </div>
                </div>
            </div>
            </section>

  
  
  
  


        <SiteFooter className="footercls"/>
        </div>

    )
}