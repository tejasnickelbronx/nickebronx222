import Link from 'next/link';
import Image from "next/image";

export default function SiteHeader({className}){

    return(
      
      
        <section className={`${className} header`}>
        <div className="container">
            <div className="header-inner">
            <div className="logo-sec">
            <Link href="/" target="_self" >
                <Image src="/logo.png" width={95} height={55} alt="Nickelbronx"  />
                </Link>
            </div>
            <div className="toggle-button">
                <div className="menubar-btn-area">
                <a href="#" className="menubar-btn">
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


