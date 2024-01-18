import Image from "next/image";
import {getAllSettings} from '../lib/settings.js';

export async function getStaticProps(){
  const getllllllll  = await getAllSettings();

  return {
    props:{
      globalsettings: "hellllll",      
       
    },

}

}

export default function SiteFooter({className, globalsettings}){
  
  console.log(globalsettings)
    return(
      
      
      

        <footer className="footer-main">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-title">
              <h2>TELL US ABOUT YOUR PROJECT</h2>
              <h3>
                LET’S MAKE COOL <br />
                SHIT TOGETHER
              </h3>
            </div>
            <div className="footer-menu-main">
              <div className="footer-menu-inner">
                <div className="menu-item">
                  <a href="">
                   
                    <Image src="/footer-logo.png" width={250} height={35} alt="Nickelbronx"  />
                  </a>
                  <p>
                    Full Service Design <br />
                    and Marketing Agency
                  </p>
                  <div className="social">
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/company/nickelbronx/">
                          <i className="fa-brands fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/nickelbronx/">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/nickelbronx/">
                          <i className="fa-brands fa-x-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/nickelbronx/">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/nickelbronx">
                        <i class="fa-brands fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.tiktok.com/@nickelbronx">
                        <i class="fa-brands fa-tiktok"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-item">
                  <ul className="menu">
                    <h2>INFO</h2>
                    <a href="mailto:hello@nickelbronx.com">
                      hello@nickelbronx.com
                      <span />
                    </a>
                    <a href="tel:(703) 865-2600">(703) 865-2600</a>
                    <h3>1775 Tysons Blvd, 5th Floor Mclean, VA 22102</h3>
                  </ul>
                </div>
                <div className="menu-item">
                  <ul className="menu">
                    <h2>ABOUT</h2>
                    <li>
                      <a href="">Team</a>
                    </li>
                    <li>
                      <a href="">Culture</a>
                    </li>
                    <li>
                      <a href="">Clients</a>
                    </li>
                  </ul>
                </div>
                <div className="menu-item">
                  <ul className="menu">
                    <h2>Services</h2>
                    <li>
                      <a href="">Brand and Visual Identity</a>
                    </li>
                    <li>
                      <a href="">Marketing Stategy</a>
                    </li>
                    <li>
                      <a href="">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="">Website Development &amp; More</a>
                    </li>
                  </ul>
                </div>
                <div className="menu-item">
                  <ul className="menu">
                    <h2>Clients</h2>
                    <li>
                      <a href="">Arkra</a>
                    </li>
                    <li>
                      <a href="">Arthur Brooks</a>
                    </li>
                    <li>
                      <a href="">Bam</a>
                    </li>
                    <li>
                      <a href="">Blackwood &amp; More</a>
                    </li>
                  </ul>
                </div>
                <div className="menu-item">
                  <ul className="menu">
                    <li>
                      <a href="">Lets's work together</a>
                      <a href="" className="menu-btn">
                        Get Started
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a href="#" className="menu-btn">
                        Newsletter
                      </a>
                      <a href="#" id="newsletterlink">sign up for our newsletter</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>NickelBronx, Copyright 2023</p>
          </div>
        </div>
      </footer>
      
    
    );
}