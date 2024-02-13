import React, { useState, useEffect, useLayoutEffect  } from 'react';
import Image from "next/image";
import Link from 'next/link';
import {getAllSettings} from '../lib/settings.js';
import NewsLetterPop from '../components/newsletterpopup.js';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export async function getStaticProps(){
  const getllllllll  = await getAllSettings();

  return {
    props:{
      globalsettings: "hellllll",      
       
    },

}

}

export default function SiteFooter({className, globalsettings}){

  const [open, setOpen] = React.useState(false);

    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [teammodel, setTeammodel] = React.useState([]);
    const loadmodel = (modeldata) => {       
        setTeammodel(modeldata);
        setOpen(true);
    };

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 1000,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
   
  console.log(globalsettings)
    return(
      
      <>
      

      <footer className={`footer-main ${className}`}>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-title">
              <h2>TELL US ABOUT YOUR PROJECT</h2>
              <h3>
                <Link href="/contact">LET’S MAKE COOL <br />
                SHIT TOGETHER</Link>
              </h3>
              <div className="homeportfoliobtn fotoercontatbtn">
              <Link href="/contact" className="home-btn">Contact Us</Link>
              
              </div>
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
                        <i className="fa-brands fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.tiktok.com/@nickelbronx">
                        <i className="fa-brands fa-tiktok"></i>
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
                      <Link href="/about">Team</Link>
                    </li>                   
                    <li>
                      <Link href="/about#aboutcorevaluesa">Culture</Link>
                    </li>
                    <li>
                      <Link href="/portfolios">Clients</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-item">
                  <ul className="menu">
                    <h2>Services</h2>
                    <li>
                      <Link href="/services/brand-visual-identity/413">Brand and Visual Identity</Link>
                    </li>
                    <li>
                      <Link href="/services/marketing-strategy/415">Marketing Stategy</Link>
                    </li>
                    <li>
                      <Link href="/services/ux-ui-design/416">UI/UX Design</Link>
                    </li>
                    <li>
                      <Link href="/services/website-development/417">Website Development &amp; More</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-item">
                  <ul className="menu">
                    <h2>Clients</h2>
                    <li>
                      <Link href="/portfolios/z-family-law/661">Z Family</Link>
                    </li>
                    <li>
                      <Link href="/portfolios/milkify/660">Milkyfy</Link>
                    </li>
                    <li>
                      <Link href="/portfolios/brand-builders/640">Brand Builders</Link>
                    </li>
                    <li>
                      <Link href="/portfolios/blackwood/596">Blackwood &amp; More</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-item">
                  <ul className="menu">
                    <li>
                      <Link href="/contact">Lets's work together</Link>
                      <Link href="/contact" className="menu-btn">
                        Get Started
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <a href="#" className="menu-btn">
                        Newsletter
                      </a>
                      <a onClick={handleOpen} href="#" id="newsletterlink">sign up for our newsletter</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>NickelBronx, Copyright 2024</p>
          </div>
        </div>
      </footer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">  
        <Box sx={style}>
          <a className='teampopclose' onClick={handleClose}></a>
          {open && (
            <NewsLetterPop />
            )}
        </Box>  
      </Modal>    
      </>
      
    );
}