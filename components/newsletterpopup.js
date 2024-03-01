// import Image from "next/image";
import React, {useEffect, useState} from "react";

// export async function getStaticProps(){
//   const getllllllll  = await getAllSettings();

//   return {
//     props:{
//       globalsettings: "hellllll",      
       
//     },

// }

// }

export default function newsletterpopup(){
  
  const [errors, setErrors] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleChange = e => {
    if (document.querySelector("iframe") && document.querySelector("iframe").contentWindow && 
    document.querySelector("iframe").contentWindow.document.querySelector('.hs_email input')) {
      document.querySelector("iframe").contentWindow.document.querySelector('.hs_email input').value = e.target.value;
    }
  };
  const submitForm = e => {
    if (document.querySelector("iframe") && document.querySelector("iframe").contentWindow && 
    document.querySelector("iframe").contentWindow.document.querySelector('.hs_email input')) {
      document.querySelector("iframe").contentWindow.document.querySelector('.hs_email input').focus();
      setTimeout(() => {
        if (document.querySelector("iframe") && document.querySelector("iframe").contentWindow && 
        document.querySelector("iframe").contentWindow.document.querySelector('input.hs-button')) {
          document.querySelector("iframe").contentWindow.document.querySelector('input.hs-button').click();
        }
        setTimeout(() => {
          
          setErrors([]);
          if (document.querySelector("iframe") && document.querySelector("iframe").contentWindow && 
          document.querySelector("iframe").contentWindow.document.querySelector('.hs-error-msgs')) {
            let errorMessages = [];
            document.querySelector("iframe").contentWindow.document.querySelectorAll('.hs-error-msgs li label').forEach((errorElem) => {
              let errorMessage = errorElem.innerText;
              errorMessages.push(errorMessage);
            })
            setErrors(errorMessages);
          }
          if (document.querySelector("iframe") && document.querySelector("iframe").contentWindow && 
          document.querySelector("iframe").contentWindow.document.querySelector('.submitted-message')) {
            console.log('submitted');
            let message = document.querySelector("iframe").contentWindow.document.querySelector('.submitted-message').innerText;
            setIsFormSubmitted(true);
          }
        }, 1000);
      }, 500);
    }
    
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
                  formId: "b1d1af52-94ce-4760-943c-bfd03ebf5028",
                  css: 'testingCss',
                  target: "#newsLatterForm"
                })
            }
        });
      }, []);
    return(
      
      
      <div className="newspop_content">
        
        <div className="newspop_box">
          <div className="newspop_head">
            <h2>
              SIGN UP FOR OUR
              <br /> EMAIL NEWSLETTER
            </h2>
            <h3>
              It’s always funny or
              <br /> informative. Sometimes both.{" "}
            </h3>
          </div>
          {
            isFormSubmitted  ? <span>Thank you submitting the form</span> : 
          <div className="newspop_form">
            <input
              type="text"
              name="npemail"
              onChange={handleChange}
              id="npemail"
              placeholder="drop your email"
            />
            {errors.map(error => <span key={error}>{error}</span>)}
            <div className="newsletterbtn">
            <a href="#" className="btn-cust" onClick={submitForm}>
              SUBSCRIBE
            </a>
            </div>
          </div>
          }
          <div id="newsLatterForm" style={{visibility: 'hidden'}}></div>
        </div>
      </div>
    
    
      
    
    );
}