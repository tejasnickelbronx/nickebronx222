import Image from "next/image";


export async function getStaticProps(){
  const getllllllll  = await getAllSettings();

  return {
    props:{
      globalsettings: "hellllll",      
       
    },

}

}

export default function newsletterpopup(){
  
  
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
          <div className="newspop_form">
            <input
              type="text"
              name="npemail"
              id="npemail"
              placeholder="drop your email"
            />
            <div className="newsletterbtn">
            <a href="#" className="btn-cust">
              SUBSCRIBE
            </a>
            </div>
          </div>
        </div>
      </div>
    
    
      
    
    );
}