import Link from 'next/link';
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default function SiteHeader({className}){
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(true);
        $(".menu-sec").slideToggle();
         $(this).toggleClass("open");
    }
    
    useEffect(() => {
        if(showMe){
            document.querySelector(".menu-sec").classList.add("showmenu") 
        }else{


        }
        
        
      }, [])
    return(
      
      
        <section className={`${className} header`}>
        <div className="container">
            <div className="header-inner">
            <div className="logo-sec">
            <Link href="/" target="_self" >
                <Image src="/logo.png" width={95} height={55} alt="Nickelbronx"  />
                </Link>
            </div>
            <div className="toggle-button" >
                <div className="menubar-btn-area">
                <a onClick={toggle} href="#" className="menubar-btn">
                    <span />
                    <span />
                    <span />
                    <span />
                </a>
                </div>
            </div>
            <div className="menu-sec">
                <ul>
                <li>
                    
                    <Link href="/portfolios">WORK</Link>
                </li>
                <li>
                    
                    <Link href="/about" >ABOUT</Link>
                </li>
                <li>
                    
                    <Link href="/services"  >SERVICES</Link>
                </li>
                <li>
                    
                    <Link href="/blogs">BLOG</Link>
                </li>
                <li>
                    
                    <Link href="/merch">MERCH</Link>
                </li>
                <li className="button">
                    
                    <Link href="/contact">LETS TALK</Link>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </section>
    
    );
}


