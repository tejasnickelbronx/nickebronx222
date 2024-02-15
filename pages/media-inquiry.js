import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import  { useState, useEffect } from 'react';
import SiteHeader from '../components/siteheader.js';
import SiteFooter from '../components/sitefooter.js';
import useScript from '../hooks/useScript.js';



export async function getStaticProps(){
  
 
  
  
  return {
      props:{
        merchfield: "",
        
      },

  }
  
}


export default function Merch({merchfields}) {
    
  useScript('https://code.jquery.com/jquery-3.7.0.min.js');
  useScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
  useScript('https://cdn.jsdelivr.net/npm/locomotive-scroll@beta/bundled/locomotive-scroll.min.js');
  useScript('./custominit.js');
  
  const [step, SetStep] = useState(1);

    return (
        <>
        <Head>
            <title>Nickelbronx</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            
            <script src="https://code.jquery.com/jquery-3.7.0.min.js" async></script>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" async />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"  async/>
            <script src="/custominit.js" async></script>
        </Head>
        <SiteHeader className="headercls"/>

        <section className="contact-main-sec">
          <div className="container">

          {step===1 &&(
            <div className='prstep1 formsteps'>
                  <div className='formstepinner'>
                    <p>01/06 </p>
                    <h3>What’s your name?</h3>

                  </div>
                  <div className='formfield'>
                      <input type='text' className='prformtext' name="miname" id='miname' placeholder="Your name"/>
                      <button onClick={() => SetStep(step + 1)} className='btnnextstep'  type="submit" name="nextstep">
                        <img src="./btnnext.png" alt="nextstep" width={50} height={50}/>
                      </button>
                  </div>

            </div>
            )}
            {step===2 &&(
            <div className='prstep1'>
                  <div className='formstepinner'>
                    <p>02/06 </p>
                    <h3>What organization are you with?</h3>
                  </div>
                  <div className='formfield'>
                      <input type='text' className='prformtext' name="miorganization" id='miorganization' placeholder="Your company"></input>
                      <button onClick={() => SetStep(step + 1)} className='btnnextstep'  type="submit" name="nextstep">
                        <img src="./btnnext.png" alt="nextstep" width={50} height={50}/>
                      </button>
                  </div>
          
            </div>
            )}
            {step===3 &&(
            <div className='prstep1'>
                  <div className='formstepinner'>
                    <p>03/06 </p>
                    <h3>How can we help?</h3>
                  </div>
                  <div className='formfield'>
                      <input type='text' className='prformtext' name="howcanhelp" id='howcanhelp' placeholder="Your company"></input>
                      <button onClick={() => SetStep(step + 1)} className='btnnextstep'  type="submit" name="nextstep">
                        <img src="./btnnext.png" alt="nextstep" width={50} height={50}/>
                      </button>
                  </div>
          
            </div>
            )}
             {step===4 &&(
            <div className='prstep1'>
                  <div className='formstepinner'>
                    <p>03/06 </p>
                    <h3>What’s an email we can reach you at?</h3>
                  </div>
                  <div className='formfield'>
                      <input type='text' className='prformtext' name="miemail" id='miemail' placeholder="Your company"></input>
                      <button onClick={() => SetStep(step + 1)} className='btnnextstep'  type="submit" name="nextstep">
                        <img src="./btnnext.png" alt="nextstep" width={50} height={50}/>
                      </button>
                  </div>
          
            </div>
            )}
            
            
             
            {step===5 &&(
            <div className='prstep1'>
                  <div className='formstepinner'>
                    <p>06/06 </p>
                    <h3>Would you like to recieve occasional email updates from NickelBronx?</h3>
                  </div>
                  <div className='formfieldradio'>
                      <div className='formfieldchoice'>
                        <label className='prradiolable'>
                          <input type='radio' name="nbemailnot" id='nbemailnot' value="Yes"></input>
                          <span className="radiocheck"></span>
                          <span className="prradiohead">Yes</span>
                        </label>
                        
                        
                      </div>
                      <div className='formfieldchoice'>                        
                        <label  className='prradiolable'>
                          <input type='radio' name="nbemailnot" id='nbemailnot' value="No"></input>
                          <span className="radiocheck"></span>
                          <span className="prradiohead">No</span>
                        </label>
                        <button onClick={() => SetStep(step + 1)} className='btnnextstep'  type="submit" name="nextstep">
                        <img src="./btnnext.png" alt="nextstep" width={50} height={50}/>
                       </button>
                      </div>
                  </div>
            </div>
            )}
             {step===6 &&(
            <div className='prstep1'>
                  <div className='formthankyou'>
                    <h2>THANK YOU!</h2>
                    <h3>Your form has been submitted! A team member will<br/> get back to you soon via email. </h3>
                    <div className="thankyouhome"><Link class="home-btn" href="/">Home</Link></div>

                  </div>
            </div>
             )}

            
          </div>
        </section>

  
  


        {/* <SiteFooter className="footercls"/> */}
        </>
  )
}

