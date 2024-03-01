import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import  { useState, useEffect } from 'react';
import SiteHeader from '../components/siteheader.js';
import SiteFooter from '../components/sitefooter.js';
import useScript from '../hooks/useScript.js';

// export async function getStaticProps(){
  
 
  
  
//   return {
//       props:{
//         merchfield: "",
        
//       },

//   }
  
// }


export default function Merch({merchfields}) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleChange = e => {
    let inputName = e.target.getAttribute('name');
    let fieldMap = {
      cnformname: "firstname",
      cnformcompany: "company",
      cnformemail: "email",
      cnformphone: "phone",
      lookingfor: "what_are_you_looking_for_",
      cnformbrief: "project_brief"
    }
    let targetInput = fieldMap[inputName];
    if (document.querySelector("iframe") && 
    document.querySelector("iframe").contentWindow && 
    document.querySelector("iframe").contentWindow.document.querySelector(`input[name="${targetInput}"],select[name="${targetInput}"],textarea[name="${targetInput}"]`)) {
      document.querySelector("iframe").contentWindow.document.querySelector(`input[name="${targetInput}"],select[name="${targetInput}"],textarea[name="${targetInput}"]`).value = e.target.value;
    }
  };
  const submitForm = e => {
    let targetInputToDetectChange = ['hs_email', 'hs_phone'];
    for (let i = 0; i < targetInputToDetectChange.length; i++) {
      if (document.querySelector("iframe") && document.querySelector("iframe").contentWindow && 
      document.querySelector("iframe").contentWindow.document.querySelector(`.${targetInputToDetectChange[i]} input`)) {
        document.querySelector("iframe").contentWindow.document.querySelector(`.${targetInputToDetectChange[i]} input`).focus();
      }
    }
   

    setTimeout(() => {
      if (document.querySelector("iframe") && document.querySelector("iframe").contentWindow && 
      document.querySelector("iframe").contentWindow.document.querySelector('input.hs-button')) {
        document.querySelector("iframe").contentWindow.document.querySelector('input.hs-button').click();
      }
      setTimeout(() => {
        let fieldMap = {
          firstname: "cnformname",
          company: "cnformcompany",
          email: "cnformemail",
          phone: "cnformphone",
          what_are_you_looking_for_: "lookingfor",
          project_brief: "cnformbrief"
        }
        if (document.querySelector("iframe") && document.querySelector("iframe").contentWindow && 
        document.querySelector("iframe").contentWindow.document.querySelector('.hs-error-msgs')) {
          let errorMessages = [];
          document.querySelectorAll(".errorMessages").forEach((errorElem) => {
            errorElem.remove();
          });
          document.querySelector("iframe").contentWindow.document.querySelectorAll('.hs-error-msgs li label').forEach((errorElem) => {
            if (errorElem.closest('ul').previousSibling && errorElem.closest('ul').previousSibling.firstChild && errorElem.closest('ul').previousSibling.firstChild.getAttribute('name')) {
              let targetInput = errorElem.closest('ul').previousSibling.firstChild.getAttribute('name');
              console.log(targetInput);
              let errorMessage = errorElem.innerText;
              let errorElement = document.createElement('span');
              errorElement.innerText = errorMessage;
              errorElement.classList.add('errorMessages');
              console.log(`[name="${fieldMap[targetInput]}"]`);
              document.querySelector(`[name="${fieldMap[targetInput]}"]`).parentNode.insertBefore(errorElement, null);
            }
          })
        }
        if (document.querySelector("iframe") && document.querySelector("iframe").contentWindow && 
        document.querySelector("iframe").contentWindow.document.querySelector('.submitted-message')) {
          let message = document.querySelector("iframe").contentWindow.document.querySelector('.submitted-message').innerText;
          setIsFormSubmitted(true);
        }
      }, 1000);
    }, 500);
    
  };
  useEffect(() => {
    const script = document.createElement('script');
    const script2 = document.createElement('script');
    script.src='https://js.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);
  
    script.addEventListener('load', () => {
        // @ts-ignore
        console.log(window.hbspt);
        if (window.hbspt) {
            // @ts-ignore
            window.hbspt.forms.create({
              region: "na1",
              portalId: "8151700",
              formId: "3ef6f071-9895-41e1-bfda-dca1afc6191e",
              css: 'testingCss',
              target: "#hubspotForm"
            })
        }
    });
  }, []);
  const handleSubmit = async (event) => {
    submitForm(event);
    event.preventDefault();

    const data = {
        cnformname        : event.target.cnformname.value,
        cnformcompany     : event.target.cnformcompany.value,
        cnformemail       : event.target.cnformemail.value,
        cnformphone       : event.target.cnformphone.value,
        lookingfor        : event.target.lookingfor.value,
        cnformbrief        : event.target.cnformbrief.value,
    }

    const jsonData = JSON.stringify(data);

    const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData,
    });

    const result = await response.json();
    // console.log(result.data);


    setSumbitStatus(true);
    setResponseMessage(result.data);

    if(!response.ok) {
        setAlertColor('bg-red-500');
    }
    else {
        setAlertColor('bg-green-500');
    }


}

  // useScript('https://code.jquery.com/jquery-3.7.0.min.js');  
  // useScript('./custominit.js');
  
  
    return (
        <div>
        <Head>
            <title>Nickelbronx</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            
            <script src="https://code.jquery.com/jquery-3.7.0.min.js" async></script>
            {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" async/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" async/> */}
            <script src="/custominit.js" async></script>
        </Head>
        <SiteHeader className="headercls"/>

        <section className="contact-main-sec">
        <div className="container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className='contatpgmain'>
              <div className='contactpgleft'>
                    <div className='contactpghead'>
                      <h3>We’re Here to <br/><span>Help You.</span></h3>
                      <p>Tell us what you want what you really really want</p>
                    </div>
                    <div className='contactpglinks'>
                        <p><a>hello@nickelbronx.com</a></p>
                        <p><a>(703) 865-2600</a></p>

                    </div>
              </div>
              <div className='contactpgright'>
              {
            isFormSubmitted  ? 
            <span>Thank you submitting the form</span>
            : 
                  <div className='contactformwhite'>
                      <div className='cnform_wtrow'>
                          <div className='cnformfield_wt'>
                            <label>Name</label>
                            <input type='text' className='cnformwht_text' onChange={handleChange} name='cnformname' id='cnformname' />
                          </div>
                          <div className='cnformfield_wt'>
                            <label>Company Name</label>
                            <input type='text' className='cnformwht_text' onChange={handleChange} name='cnformcompany' id='cnformcompany'  />
                          </div>

                      </div>
                      <div className='cnform_wtrow mt_60'>
                          <div className='cnformfield_wt'>
                            <label>Email</label>
                            <input type='text' className='cnformwht_text' onChange={handleChange} name='cnformemail' id='cnformemail' />
                          </div>
                          <div className='cnformfield_wt'>
                            <label>Phone</label>
                            <input type='text' className='cnformwht_text' onChange={handleChange} name='cnformphone' id='cnformphone'  />
                          </div>
                      </div>
                      <div className='cnform_wtrow mt_60 fullwidth'>
                          <div className='cnformfield_wt'>
                            <label>Type of Request</label>
                            <select className='selectfield' onChange={handleChange} name='lookingfor' id='lookingfor'>
                              <option value="New Project Request">New Project Request</option>
                              <option value="Media Inquiry">Media Inquiry</option>
                              <option value="Collabs/Brand Deals">Collabs/Brand Deals</option>
                              <option value="Something Else">Something Else</option>
                            </select>
                          </div>                          
                      </div>
                      <div className='cnform_wtrow mt_60 fullwidth'>
                          <div className='cnformfield_wt'>
                            <label>Tell us what you’re looking for.</label>
                            <input type='text' className='cnformwht_text' onChange={handleChange} name='cnformbrief' id='cnformbrief' />
                          </div>                          
                      </div>
                      <div className='cnform_wtrow mt_60 fullwidth'>
                          <div className='cnformbtn_wt'>
                              
                              <button className='submitbtn' name='submitform' id='submitform' type="submit">Submit</button>
                          </div>                          
                      </div>
                  </div>
            }
              </div>
          </div>
          </form>
          <div id="hubspotForm" style={{visibility: "hidden"}}></div>
        </div>        
      </section>

  
  


        <SiteFooter className="footercls contactpage"/>
        </div>
  )
}

