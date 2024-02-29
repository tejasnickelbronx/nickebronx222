import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function testpage() {
  return (
    <>
     <>
  <section className="header">
    <div className="container">
      <div className="header-inner">
        <div className="logo-sec">
          <a href="index.html" target="_blank">
            <img src="assets/images/logo.svg" />
          </a>
        </div>
        <div className="toggle-button">
          <div className="menubar-btn-area">
            <a href="javascript:;" className="menubar-btn">
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
              <a href="javascript:;">WORK</a>
            </li>
            <li>
              <a href="javascript:;">ABOUT</a>
            </li>
            <li>
              <a href="javascript:;">SERVICES</a>
            </li>
            <li>
              <a href="javascript:;">BLOG</a>
            </li>
            <li>
              <a href="javascript:;">MERCH</a>
            </li>
            <li className="button">
              <a href="javascript:;">LET’S TALK</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* Header Section End */}
  {/* Banner Section Start */}
  <section className="banner-main">
    <div className="container">
      <div className="banner-title">
        <h1>
          Where Brands Get <span>Their Edge</span>
        </h1>
        <p>
          We don't just make you look good. We help you build all the elements
          of a brand that attracts the right clients.
        </p>
        <div className="banner-button">
          <a href="javascript:;" className="btn-cust">
            Our Work
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Banner Section End */}
  {/* Blank Part Section Start */}
  <section className="blank-part">
    <div className="container">
      <div className="video-part">
        <video id="myVideo" controls="">
          <source src="assets/video/dummy-video.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
        </video>
      </div>
    </div>
  </section>
  {/* Blank Part Section End */}
  {/* Who We Are Section Start */}
  <section className="we-are-sec">
    <div className="container2">
      <div className="we-are-inner">
        <div className="title-part">
          <h2>WHO WE ARE</h2>
          <h3>
            BEAUTY MAY BE <br />
            SKIN DEEP — BUT <br />
            YOUR BRAND GOES <br />
            <span>CLEAN TO THE BONE.</span>
          </h3>
        </div>
        <div className="discription-part">
          <p>
            We don't just make you look good. We help you build all the elements
            of a brand that attracts the right clients, on your terms. Ads,
            analytics and SEO will only get you so far. Our secret? Not only do
            we bring the people to you — we give them a reason to stay.
          </p>
          <a href="javascript:;" className="btn-cust">
            Our Work
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Who We Are Section End */}
  {/* Service Section Start */}
  <section className="service-main-sec">
    <div className="container2">
      <div className="service-inner-sec">
        <div className="service-title">
          <h2>OUR SERVICES</h2>
          <h3>
            Designed to <span>push new limits</span>
          </h3>
          <p>
            Much more than a design agency in Virginia, NickelBronx is a
            full-service agency made out of numerous talents, ready to work
            towards realizing your project and your goals.
          </p>
        </div>
        <div className="swiper service-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="service-box">
                <div className="service-box-inner bg-pink">
                  <div className="image">
                    <img src="assets/images/identity.png" />
                  </div>
                  <div className="box-title">
                    <h4>01.</h4>
                    <h5>
                      BRAND and <br />
                      visual IDENTITY
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-box">
                <div className="service-box-inner bg-light-blue">
                  <div className="image">
                    <img src="assets/images/marketing.png" />
                  </div>
                  <div className="box-title">
                    <h4>02.</h4>
                    <h5>
                      MARKETING <br />
                      STRATEGY
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-box">
                <div className="service-box-inner bg-yellow">
                  <div className="image">
                    <img src="assets/images/ui-ux-design.png" />
                  </div>
                  <div className="box-title">
                    <h4>03.</h4>
                    <h5>
                      UI/UX <br />
                      DESIGN
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-box">
                <div className="service-box-inner bg-pink">
                  <div className="image">
                    <img src="assets/images/identity.png" />
                  </div>
                  <div className="box-title">
                    <h4>04.</h4>
                    <h5>
                      Website <br />
                      DEVELOPMENT
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-box">
                <div className="service-box-inner bg-light-blue">
                  <div className="image">
                    <img src="assets/images/marketing.png" />
                  </div>
                  <div className="box-title">
                    <h4>05.</h4>
                    <h5>
                      MARKETING <br />
                      STRATEGY
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-box">
                <div className="service-box-inner bg-yellow">
                  <div className="image">
                    <img src="assets/images/ui-ux-design.png" />
                  </div>
                  <div className="box-title">
                    <h4>06.</h4>
                    <h5>
                      UI/UX <br />
                      DESIGN
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="service-box">
                <div className="service-box-inner bg-pink">
                  <div className="image">
                    <img src="assets/images/identity.png" />
                  </div>
                  <div className="box-title">
                    <h4>07.</h4>
                    <h5>
                      Website <br />
                      DEVELOPMENT
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-scrollbar" />
        </div>
      </div>
    </div>
  </section>
  {/* Service Section End */}
  {/* Client Section Start */}
  <section className="client-main-sec">
    <div className="container2">
      <div className="client-main-inner">
        <div className="client-title">
          <div className="client-count">
            <h2>OUR CLIENTS</h2>
            <h3>150+</h3>
            <h4>
              brands trust <br />
              our agency.
            </h4>
          </div>
          <div className="client-description">
            <p>
              our proprietary storytelling process delivers meaningful results
              for partners who are dedicated to improving our world. Our
              outcomes speak for themselves so reach out now to learn more. Our
              outcomes speak for themselves so reach out now.
            </p>
            <a href="javascript:;" className="btn-cust">
              GET IN TOUCH
            </a>
          </div>
        </div>
        <div className="client-intro-sec">
          <div className="client-inner-sec">
            <div className="intro-box">
              <div className="intro-box-inner">
                <div className="image">
                  <img src="assets/images/client-1.png" />
                </div>
                <div className="client-entro">
                  <h5>PHIN SECURITY</h5>
                  <p>Brand &amp; Website</p>
                </div>
              </div>
            </div>
            <div className="intro-box">
              <div className="intro-box-inner">
                <div className="image">
                  <img src="assets/images/client-2.png" />
                </div>
                <div className="client-entro">
                  <h5>ARTHUR BROOKS</h5>
                  <p>Brand &amp; Website</p>
                </div>
              </div>
            </div>
            <div className="intro-box">
              <div className="intro-box-inner">
                <div className="image">
                  <img src="assets/images/client-3.png" />
                </div>
                <div className="client-entro">
                  <h5>ROSSEN LANDSCAPE</h5>
                  <p>Brand</p>
                </div>
              </div>
            </div>
            <div className="intro-box">
              <div className="intro-box-inner">
                <div className="image">
                  <img src="assets/images/client-4.png" />
                </div>
                <div className="client-entro">
                  <h5>CAFE LEVANTINE</h5>
                  <p>Brand</p>
                </div>
              </div>
            </div>
            <div className="intro-box">
              <div className="intro-box-inner">
                <div className="image">
                  <img src="assets/images/client-5.png" />
                </div>
                <div className="client-entro">
                  <h5>JOE MECHLINSKI</h5>
                  <p>Brand &amp; Website</p>
                </div>
              </div>
            </div>
            <div className="intro-box">
              <div className="intro-box-inner">
                <div className="image">
                  <img src="assets/images/client-6.png" />
                </div>
                <div className="client-entro">
                  <h5>3P SECURED</h5>
                  {/* <p>Brand & Website</p> */}
                </div>
              </div>
            </div>
            <div className="intro-box">
              <div className="intro-box-inner">
                <div className="image">
                  <img src="assets/images/client-7.png" />
                </div>
                <div className="client-entro">
                  <h5>CADRE</h5>
                  <p>Brand &amp; Website</p>
                </div>
              </div>
            </div>
            <div className="intro-box">
              <div className="intro-box-inner">
                <div className="image">
                  <img src="assets/images/client-8.png" />
                </div>
                <div className="client-entro">
                  <h5>MAIN EVENT CATERERS</h5>
                  <p>Brand &amp; Website</p>
                </div>
              </div>
            </div>
            <div className="intro-box">
              <div className="intro-box-inner">
                <div className="image">
                  <img src="assets/images/client-9.png" />
                </div>
                <div className="client-entro">
                  <h5>MILKIFY</h5>
                  <p>Brand &amp; Website</p>
                </div>
              </div>
            </div>
            <a href="javascript:;" className="btn-cust">
              All WORK
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Client Section End */}
  {/* Testimonial Section Start */}
  <section className="testimonial-main">
    <div className="container2">
      <div className="testimonial-inner">
        <div className="swiper testimonial-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testi-box">
                <div className="testi-box-inner">
                  <div className="testi-img">
                    <img src="assets/images/sohale-razmjou.png" />
                  </div>
                  <div className="testi-content">
                    <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                    <h3>they absolutely CRUSHED IT</h3>
                    <p>
                      From creating and designing our entire look, logo, etc.
                      building our website, recreating all our internal
                      documents they absolutely CRUSHED IT. We are a 40+ year
                      old family owned business with a rich history but
                      certainly evolving, and our culture is the most critical
                      element to our team. The most impressive piece of working
                      with NickelBronx was they were able to blend the roots of
                      our organization with the identity of the current team to
                      build a lasting brand that we intend to stand behind for
                      another 40+ years. Lastly - this process can be GRUELING,
                      but working with Borzou and the team was legitimately fun
                      and took the pain out of going through the arduous
                      exercise. 10/10.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testi-box">
                <div className="testi-box-inner">
                  <div className="testi-img">
                    <img src="assets/images/sohale-razmjou.png" />
                  </div>
                  <div className="testi-content">
                    <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                    <h3>they absolutely CRUSHED IT</h3>
                    <p>
                      From creating and designing our entire look, logo, etc.
                      building our website, recreating all our internal
                      documents they absolutely CRUSHED IT. We are a 40+ year
                      old family owned business with a rich history but
                      certainly evolving, and our culture is the most critical
                      element to our team. The most impressive piece of working
                      with NickelBronx was they were able to blend the roots of
                      our organization with the identity of the current team to
                      build a lasting brand that we intend to stand behind for
                      another 40+ years. Lastly - this process can be GRUELING,
                      but working with Borzou and the team was legitimately fun
                      and took the pain out of going through the arduous
                      exercise. 10/10.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testi-box">
                <div className="testi-box-inner">
                  <div className="testi-img">
                    <img src="assets/images/sohale-razmjou.png" />
                  </div>
                  <div className="testi-content">
                    <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                    <h3>they absolutely CRUSHED IT</h3>
                    <p>
                      From creating and designing our entire look, logo, etc.
                      building our website, recreating all our internal
                      documents they absolutely CRUSHED IT. We are a 40+ year
                      old family owned business with a rich history but
                      certainly evolving, and our culture is the most critical
                      element to our team. The most impressive piece of working
                      with NickelBronx was they were able to blend the roots of
                      our organization with the identity of the current team to
                      build a lasting brand that we intend to stand behind for
                      another 40+ years. Lastly - this process can be GRUELING,
                      but working with Borzou and the team was legitimately fun
                      and took the pain out of going through the arduous
                      exercise. 10/10.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testi-box">
                <div className="testi-box-inner">
                  <div className="testi-img">
                    <img src="assets/images/sohale-razmjou.png" />
                  </div>
                  <div className="testi-content">
                    <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                    <h3>they absolutely CRUSHED IT</h3>
                    <p>
                      From creating and designing our entire look, logo, etc.
                      building our website, recreating all our internal
                      documents they absolutely CRUSHED IT. We are a 40+ year
                      old family owned business with a rich history but
                      certainly evolving, and our culture is the most critical
                      element to our team. The most impressive piece of working
                      with NickelBronx was they were able to blend the roots of
                      our organization with the identity of the current team to
                      build a lasting brand that we intend to stand behind for
                      another 40+ years. Lastly - this process can be GRUELING,
                      but working with Borzou and the team was legitimately fun
                      and took the pain out of going through the arduous
                      exercise. 10/10.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testi-box">
                <div className="testi-box-inner">
                  <div className="testi-img">
                    <img src="assets/images/sohale-razmjou.png" />
                  </div>
                  <div className="testi-content">
                    <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                    <h3>they absolutely CRUSHED IT</h3>
                    <p>
                      From creating and designing our entire look, logo, etc.
                      building our website, recreating all our internal
                      documents they absolutely CRUSHED IT. We are a 40+ year
                      old family owned business with a rich history but
                      certainly evolving, and our culture is the most critical
                      element to our team. The most impressive piece of working
                      with NickelBronx was they were able to blend the roots of
                      our organization with the identity of the current team to
                      build a lasting brand that we intend to stand behind for
                      another 40+ years. Lastly - this process can be GRUELING,
                      but working with Borzou and the team was legitimately fun
                      and took the pain out of going through the arduous
                      exercise. 10/10.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testi-box">
                <div className="testi-box-inner">
                  <div className="testi-img">
                    <img src="assets/images/sohale-razmjou.png" />
                  </div>
                  <div className="testi-content">
                    <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                    <h3>they absolutely CRUSHED IT</h3>
                    <p>
                      From creating and designing our entire look, logo, etc.
                      building our website, recreating all our internal
                      documents they absolutely CRUSHED IT. We are a 40+ year
                      old family owned business with a rich history but
                      certainly evolving, and our culture is the most critical
                      element to our team. The most impressive piece of working
                      with NickelBronx was they were able to blend the roots of
                      our organization with the identity of the current team to
                      build a lasting brand that we intend to stand behind for
                      another 40+ years. Lastly - this process can be GRUELING,
                      but working with Borzou and the team was legitimately fun
                      and took the pain out of going through the arduous
                      exercise. 10/10.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testi-box">
                <div className="testi-box-inner">
                  <div className="testi-img">
                    <img src="assets/images/sohale-razmjou.png" />
                  </div>
                  <div className="testi-content">
                    <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                    <h3>they absolutely CRUSHED IT</h3>
                    <p>
                      From creating and designing our entire look, logo, etc.
                      building our website, recreating all our internal
                      documents they absolutely CRUSHED IT. We are a 40+ year
                      old family owned business with a rich history but
                      certainly evolving, and our culture is the most critical
                      element to our team. The most impressive piece of working
                      with NickelBronx was they were able to blend the roots of
                      our organization with the identity of the current team to
                      build a lasting brand that we intend to stand behind for
                      another 40+ years. Lastly - this process can be GRUELING,
                      but working with Borzou and the team was legitimately fun
                      and took the pain out of going through the arduous
                      exercise. 10/10.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testi-box">
                <div className="testi-box-inner">
                  <div className="testi-img">
                    <img src="assets/images/sohale-razmjou.png" />
                  </div>
                  <div className="testi-content">
                    <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                    <h3>they absolutely CRUSHED IT</h3>
                    <p>
                      From creating and designing our entire look, logo, etc.
                      building our website, recreating all our internal
                      documents they absolutely CRUSHED IT. We are a 40+ year
                      old family owned business with a rich history but
                      certainly evolving, and our culture is the most critical
                      element to our team. The most impressive piece of working
                      with NickelBronx was they were able to blend the roots of
                      our organization with the identity of the current team to
                      build a lasting brand that we intend to stand behind for
                      another 40+ years. Lastly - this process can be GRUELING,
                      but working with Borzou and the team was legitimately fun
                      and took the pain out of going through the arduous
                      exercise. 10/10.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-scrollbar" />
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial Section End */}
  {/* Logo Section Start */}
  <section className="logo-main">
    <div className="logo-inner">
      <div className="logo-box-main">
        <div className="logo-box-inner bg-light-blue">
          <img src="assets/images/our-latest-awards.png" />
        </div>
      </div>
      <div className="logo-box-main">
        <div className="logo-box-inner bg-pink">
          <img src="assets/images/marcom.png" />
        </div>
      </div>
      <div className="logo-box-main">
        <div className="logo-box-inner bg-yellow">
          <img src="assets/images/hermes.png" />
        </div>
      </div>
      <div className="logo-box-main">
        <div className="logo-box-inner">
          <img src="assets/images/clutch.png" />
        </div>
      </div>
    </div>
  </section>
  {/* Logo Section End */}
  {/* Footer Section Start */}
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
              <a href="javascript:;">
                <img src="assets/images/footer-logo.png" />
              </a>
              <p>
                Full Service Design <br />
                and Marketing Agency
              </p>
              <div className="social">
                <ul>
                  <li>
                    <a href="javascript:;">
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i className="fa-brands fa-facebook-f" />
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
                  <a href="javacript:;">Team</a>
                </li>
                <li>
                  <a href="javacript:;">Culture</a>
                </li>
                <li>
                  <a href="javacript:;">Clients</a>
                </li>
              </ul>
            </div>
            <div className="menu-item">
              <ul className="menu">
                <h2>Services</h2>
                <li>
                  <a href="javacript:;">Brand and Visual Identity</a>
                </li>
                <li>
                  <a href="javacript:;">Marketing Stategy</a>
                </li>
                <li>
                  <a href="javacript:;">UI/UX Design</a>
                </li>
                <li>
                  <a href="javacript:;">Website Development &amp; More</a>
                </li>
              </ul>
            </div>
            <div className="menu-item">
              <ul className="menu">
                <h2>Clients</h2>
                <li>
                  <a href="javacript:;">Arkra</a>
                </li>
                <li>
                  <a href="javacript:;">Arthur Brooks</a>
                </li>
                <li>
                  <a href="javacript:;">Bam</a>
                </li>
                <li>
                  <a href="javacript:;">Blackwood &amp; More</a>
                </li>
              </ul>
            </div>
            <div className="menu-item">
              <ul className="menu">
                <li>
                  <a href="javacript:;">Lets's work together</a>
                  <a href="javascript:;" className="menu-btn">
                    Get Started
                  </a>
                </li>
                <hr />
                <li>
                  <a href="javacript:;" className="menu-btn">
                    Newsletter
                  </a>
                  <a href="javascript:;">sign up for our newsletter</a>
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
  Output as React Class Component Output JSX
  <div>
    <section classname="header">
      <div classname="container">
        <div classname="header-inner">
          <div classname="logo-sec">
            <a href="index.html" target="_blank">
              <img src="assets/images/logo.svg" />
            </a>
          </div>
          <div classname="toggle-button">
            <div classname="menubar-btn-area">
              <a href="javascript:;" classname="menubar-btn">
                <span>
                  <span>
                    <span>
                      <span></span>
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div classname="menu-sec">
            <ul>
              <li>
                <a href="javascript:;">WORK</a>
              </li>
              <li>
                <a href="javascript:;">ABOUT</a>
              </li>
              <li>
                <a href="javascript:;">SERVICES</a>
              </li>
              <li>
                <a href="javascript:;">BLOG</a>
              </li>
              <li>
                <a href="javascript:;">MERCH</a>
              </li>
              <li classname="button">
                <a href="javascript:;">LET’S TALK</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {"{"}/* Header Section End */{"}"}
    {"{"}/* Banner Section Start */{"}"}
    <section classname="banner-main">
      <div classname="container">
        <div classname="banner-title">
          <h1>
            Where Brands Get <span>Their Edge</span>
          </h1>
          <p>
            We don't just make you look good. We help you build all the elements
            of a brand that attracts the right clients.
          </p>
          <div classname="banner-button">
            <a href="javascript:;" classname="btn-cust">
              Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
    {"{"}/* Banner Section End */{"}"}
    {"{"}/* Blank Part Section Start */{"}"}
    <section classname="blank-part">
      <div classname="container">
        <div classname="video-part">
          <video id="myVideo" controls="">
            <source src="assets/video/dummy-video.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
        </div>
      </div>
    </section>
    {"{"}/* Blank Part Section End */{"}"}
    {"{"}/* Who We Are Section Start */{"}"}
    <section classname="we-are-sec">
      <div classname="container2">
        <div classname="we-are-inner">
          <div classname="title-part">
            <h2>WHO WE ARE</h2>
            <h3>
              BEAUTY MAY BE <br />
              SKIN DEEP — BUT <br />
              YOUR BRAND GOES <br />
              <span>CLEAN TO THE BONE.</span>
            </h3>
          </div>
          <div classname="discription-part">
            <p>
              We don't just make you look good. We help you build all the
              elements of a brand that attracts the right clients, on your
              terms. Ads, analytics and SEO will only get you so far. Our
              secret? Not only do we bring the people to you — we give them a
              reason to stay.
            </p>
            <a href="javascript:;" classname="btn-cust">
              Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
    {"{"}/* Who We Are Section End */{"}"}
    {"{"}/* Service Section Start */{"}"}
    <section classname="service-main-sec">
      <div classname="container2">
        <div classname="service-inner-sec">
          <div classname="service-title">
            <h2>OUR SERVICES</h2>
            <h3>
              Designed to <span>push new limits</span>
            </h3>
            <p>
              Much more than a design agency in Virginia, NickelBronx is a
              full-service agency made out of numerous talents, ready to work
              towards realizing your project and your goals.
            </p>
          </div>
          <div classname="swiper service-slider">
            <div classname="swiper-wrapper">
              <div classname="swiper-slide">
                <div classname="service-box">
                  <div classname="service-box-inner bg-pink">
                    <div classname="image">
                      <img src="assets/images/identity.png" />
                    </div>
                    <div classname="box-title">
                      <h4>01.</h4>
                      <h5>
                        BRAND and <br />
                        visual IDENTITY
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="service-box">
                  <div classname="service-box-inner bg-light-blue">
                    <div classname="image">
                      <img src="assets/images/marketing.png" />
                    </div>
                    <div classname="box-title">
                      <h4>02.</h4>
                      <h5>
                        MARKETING <br />
                        STRATEGY
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="service-box">
                  <div classname="service-box-inner bg-yellow">
                    <div classname="image">
                      <img src="assets/images/ui-ux-design.png" />
                    </div>
                    <div classname="box-title">
                      <h4>03.</h4>
                      <h5>
                        UI/UX <br />
                        DESIGN
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="service-box">
                  <div classname="service-box-inner bg-pink">
                    <div classname="image">
                      <img src="assets/images/identity.png" />
                    </div>
                    <div classname="box-title">
                      <h4>04.</h4>
                      <h5>
                        Website <br />
                        DEVELOPMENT
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="service-box">
                  <div classname="service-box-inner bg-light-blue">
                    <div classname="image">
                      <img src="assets/images/marketing.png" />
                    </div>
                    <div classname="box-title">
                      <h4>05.</h4>
                      <h5>
                        MARKETING <br />
                        STRATEGY
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="service-box">
                  <div classname="service-box-inner bg-yellow">
                    <div classname="image">
                      <img src="assets/images/ui-ux-design.png" />
                    </div>
                    <div classname="box-title">
                      <h4>06.</h4>
                      <h5>
                        UI/UX <br />
                        DESIGN
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="service-box">
                  <div classname="service-box-inner bg-pink">
                    <div classname="image">
                      <img src="assets/images/identity.png" />
                    </div>
                    <div classname="box-title">
                      <h4>07.</h4>
                      <h5>
                        Website <br />
                        DEVELOPMENT
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div classname="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </section>
    {"{"}/* Service Section End */{"}"}
    {"{"}/* Client Section Start */{"}"}
    <section classname="client-main-sec">
      <div classname="container2">
        <div classname="client-main-inner">
          <div classname="client-title">
            <div classname="client-count">
              <h2>OUR CLIENTS</h2>
              <h3>150+</h3>
              <h4>
                brands trust <br />
                our agency.
              </h4>
            </div>
            <div classname="client-description">
              <p>
                our proprietary storytelling process delivers meaningful results
                for partners who are dedicated to improving our world. Our
                outcomes speak for themselves so reach out now to learn more.
                Our outcomes speak for themselves so reach out now.
              </p>
              <a href="javascript:;" classname="btn-cust">
                GET IN TOUCH
              </a>
            </div>
          </div>
          <div classname="client-intro-sec">
            <div classname="client-inner-sec">
              <div classname="intro-box">
                <div classname="intro-box-inner">
                  <div classname="image">
                    <img src="assets/images/client-1.png" />
                  </div>
                  <div classname="client-entro">
                    <h5>PHIN SECURITY</h5>
                    <p>Brand &amp; Website</p>
                  </div>
                </div>
              </div>
              <div classname="intro-box">
                <div classname="intro-box-inner">
                  <div classname="image">
                    <img src="assets/images/client-2.png" />
                  </div>
                  <div classname="client-entro">
                    <h5>ARTHUR BROOKS</h5>
                    <p>Brand &amp; Website</p>
                  </div>
                </div>
              </div>
              <div classname="intro-box">
                <div classname="intro-box-inner">
                  <div classname="image">
                    <img src="assets/images/client-3.png" />
                  </div>
                  <div classname="client-entro">
                    <h5>ROSSEN LANDSCAPE</h5>
                    <p>Brand</p>
                  </div>
                </div>
              </div>
              <div classname="intro-box">
                <div classname="intro-box-inner">
                  <div classname="image">
                    <img src="assets/images/client-4.png" />
                  </div>
                  <div classname="client-entro">
                    <h5>CAFE LEVANTINE</h5>
                    <p>Brand</p>
                  </div>
                </div>
              </div>
              <div classname="intro-box">
                <div classname="intro-box-inner">
                  <div classname="image">
                    <img src="assets/images/client-5.png" />
                  </div>
                  <div classname="client-entro">
                    <h5>JOE MECHLINSKI</h5>
                    <p>Brand &amp; Website</p>
                  </div>
                </div>
              </div>
              <div classname="intro-box">
                <div classname="intro-box-inner">
                  <div classname="image">
                    <img src="assets/images/client-6.png" />
                  </div>
                  <div classname="client-entro">
                    <h5>3P SECURED</h5>
                    {"{"}/* <p>Brand &amp; Website</p> */{"}"}
                  </div>
                </div>
              </div>
              <div classname="intro-box">
                <div classname="intro-box-inner">
                  <div classname="image">
                    <img src="assets/images/client-7.png" />
                  </div>
                  <div classname="client-entro">
                    <h5>CADRE</h5>
                    <p>Brand &amp; Website</p>
                  </div>
                </div>
              </div>
              <div classname="intro-box">
                <div classname="intro-box-inner">
                  <div classname="image">
                    <img src="assets/images/client-8.png" />
                  </div>
                  <div classname="client-entro">
                    <h5>MAIN EVENT CATERERS</h5>
                    <p>Brand &amp; Website</p>
                  </div>
                </div>
              </div>
              <div classname="intro-box">
                <div classname="intro-box-inner">
                  <div classname="image">
                    <img src="assets/images/client-9.png" />
                  </div>
                  <div classname="client-entro">
                    <h5>MILKIFY</h5>
                    <p>Brand &amp; Website</p>
                  </div>
                </div>
              </div>
              <a href="javascript:;" classname="btn-cust">
                All WORK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {"{"}/* Client Section End */{"}"}
    {"{"}/* Testimonial Section Start */{"}"}
    <section classname="testimonial-main">
      <div classname="container2">
        <div classname="testimonial-inner">
          <div classname="swiper testimonial-slider">
            <div classname="swiper-wrapper">
              <div classname="swiper-slide">
                <div classname="testi-box">
                  <div classname="testi-box-inner">
                    <div classname="testi-img">
                      <img src="assets/images/sohale-razmjou.png" />
                    </div>
                    <div classname="testi-content">
                      <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                      <h3>they absolutely CRUSHED IT</h3>
                      <p>
                        From creating and designing our entire look, logo, etc.
                        building our website, recreating all our internal
                        documents they absolutely CRUSHED IT. We are a 40+ year
                        old family owned business with a rich history but
                        certainly evolving, and our culture is the most critical
                        element to our team. The most impressive piece of
                        working with NickelBronx was they were able to blend the
                        roots of our organization with the identity of the
                        current team to build a lasting brand that we intend to
                        stand behind for another 40+ years. Lastly - this
                        process can be GRUELING, but working with Borzou and the
                        team was legitimately fun and took the pain out of going
                        through the arduous exercise. 10/10.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="testi-box">
                  <div classname="testi-box-inner">
                    <div classname="testi-img">
                      <img src="assets/images/sohale-razmjou.png" />
                    </div>
                    <div classname="testi-content">
                      <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                      <h3>they absolutely CRUSHED IT</h3>
                      <p>
                        From creating and designing our entire look, logo, etc.
                        building our website, recreating all our internal
                        documents they absolutely CRUSHED IT. We are a 40+ year
                        old family owned business with a rich history but
                        certainly evolving, and our culture is the most critical
                        element to our team. The most impressive piece of
                        working with NickelBronx was they were able to blend the
                        roots of our organization with the identity of the
                        current team to build a lasting brand that we intend to
                        stand behind for another 40+ years. Lastly - this
                        process can be GRUELING, but working with Borzou and the
                        team was legitimately fun and took the pain out of going
                        through the arduous exercise. 10/10.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="testi-box">
                  <div classname="testi-box-inner">
                    <div classname="testi-img">
                      <img src="assets/images/sohale-razmjou.png" />
                    </div>
                    <div classname="testi-content">
                      <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                      <h3>they absolutely CRUSHED IT</h3>
                      <p>
                        From creating and designing our entire look, logo, etc.
                        building our website, recreating all our internal
                        documents they absolutely CRUSHED IT. We are a 40+ year
                        old family owned business with a rich history but
                        certainly evolving, and our culture is the most critical
                        element to our team. The most impressive piece of
                        working with NickelBronx was they were able to blend the
                        roots of our organization with the identity of the
                        current team to build a lasting brand that we intend to
                        stand behind for another 40+ years. Lastly - this
                        process can be GRUELING, but working with Borzou and the
                        team was legitimately fun and took the pain out of going
                        through the arduous exercise. 10/10.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="testi-box">
                  <div classname="testi-box-inner">
                    <div classname="testi-img">
                      <img src="assets/images/sohale-razmjou.png" />
                    </div>
                    <div classname="testi-content">
                      <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                      <h3>they absolutely CRUSHED IT</h3>
                      <p>
                        From creating and designing our entire look, logo, etc.
                        building our website, recreating all our internal
                        documents they absolutely CRUSHED IT. We are a 40+ year
                        old family owned business with a rich history but
                        certainly evolving, and our culture is the most critical
                        element to our team. The most impressive piece of
                        working with NickelBronx was they were able to blend the
                        roots of our organization with the identity of the
                        current team to build a lasting brand that we intend to
                        stand behind for another 40+ years. Lastly - this
                        process can be GRUELING, but working with Borzou and the
                        team was legitimately fun and took the pain out of going
                        through the arduous exercise. 10/10.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="testi-box">
                  <div classname="testi-box-inner">
                    <div classname="testi-img">
                      <img src="assets/images/sohale-razmjou.png" />
                    </div>
                    <div classname="testi-content">
                      <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                      <h3>they absolutely CRUSHED IT</h3>
                      <p>
                        From creating and designing our entire look, logo, etc.
                        building our website, recreating all our internal
                        documents they absolutely CRUSHED IT. We are a 40+ year
                        old family owned business with a rich history but
                        certainly evolving, and our culture is the most critical
                        element to our team. The most impressive piece of
                        working with NickelBronx was they were able to blend the
                        roots of our organization with the identity of the
                        current team to build a lasting brand that we intend to
                        stand behind for another 40+ years. Lastly - this
                        process can be GRUELING, but working with Borzou and the
                        team was legitimately fun and took the pain out of going
                        through the arduous exercise. 10/10.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="testi-box">
                  <div classname="testi-box-inner">
                    <div classname="testi-img">
                      <img src="assets/images/sohale-razmjou.png" />
                    </div>
                    <div classname="testi-content">
                      <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                      <h3>they absolutely CRUSHED IT</h3>
                      <p>
                        From creating and designing our entire look, logo, etc.
                        building our website, recreating all our internal
                        documents they absolutely CRUSHED IT. We are a 40+ year
                        old family owned business with a rich history but
                        certainly evolving, and our culture is the most critical
                        element to our team. The most impressive piece of
                        working with NickelBronx was they were able to blend the
                        roots of our organization with the identity of the
                        current team to build a lasting brand that we intend to
                        stand behind for another 40+ years. Lastly - this
                        process can be GRUELING, but working with Borzou and the
                        team was legitimately fun and took the pain out of going
                        through the arduous exercise. 10/10.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="testi-box">
                  <div classname="testi-box-inner">
                    <div classname="testi-img">
                      <img src="assets/images/sohale-razmjou.png" />
                    </div>
                    <div classname="testi-content">
                      <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                      <h3>they absolutely CRUSHED IT</h3>
                      <p>
                        From creating and designing our entire look, logo, etc.
                        building our website, recreating all our internal
                        documents they absolutely CRUSHED IT. We are a 40+ year
                        old family owned business with a rich history but
                        certainly evolving, and our culture is the most critical
                        element to our team. The most impressive piece of
                        working with NickelBronx was they were able to blend the
                        roots of our organization with the identity of the
                        current team to build a lasting brand that we intend to
                        stand behind for another 40+ years. Lastly - this
                        process can be GRUELING, but working with Borzou and the
                        team was legitimately fun and took the pain out of going
                        through the arduous exercise. 10/10.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="swiper-slide">
                <div classname="testi-box">
                  <div classname="testi-box-inner">
                    <div classname="testi-img">
                      <img src="assets/images/sohale-razmjou.png" />
                    </div>
                    <div classname="testi-content">
                      <h2>SOHALE RAZMJOU • BLACKWOOD</h2>
                      <h3>they absolutely CRUSHED IT</h3>
                      <p>
                        From creating and designing our entire look, logo, etc.
                        building our website, recreating all our internal
                        documents they absolutely CRUSHED IT. We are a 40+ year
                        old family owned business with a rich history but
                        certainly evolving, and our culture is the most critical
                        element to our team. The most impressive piece of
                        working with NickelBronx was they were able to blend the
                        roots of our organization with the identity of the
                        current team to build a lasting brand that we intend to
                        stand behind for another 40+ years. Lastly - this
                        process can be GRUELING, but working with Borzou and the
                        team was legitimately fun and took the pain out of going
                        through the arduous exercise. 10/10.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div classname="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </section>
    {"{"}/* Testimonial Section End */{"}"}
    {"{"}/* Logo Section Start */{"}"}
    <section classname="logo-main">
      <div classname="logo-inner">
        <div classname="logo-box-main">
          <div classname="logo-box-inner bg-light-blue">
            <img src="assets/images/our-latest-awards.png" />
          </div>
        </div>
        <div classname="logo-box-main">
          <div classname="logo-box-inner bg-pink">
            <img src="assets/images/marcom.png" />
          </div>
        </div>
        <div classname="logo-box-main">
          <div classname="logo-box-inner bg-yellow">
            <img src="assets/images/hermes.png" />
          </div>
        </div>
        <div classname="logo-box-main">
          <div classname="logo-box-inner">
            <img src="assets/images/clutch.png" />
          </div>
        </div>
      </div>
    </section>
    {"{"}/* Logo Section End */{"}"}
    {"{"}/* Footer Section Start */{"}"}
    <footer classname="footer-main">
      <div classname="container">
        <div classname="footer-inner">
          <div classname="footer-title">
            <h2>TELL US ABOUT YOUR PROJECT</h2>
            <h3>
              LET’S MAKE COOL <br />
              SHIT TOGETHER
            </h3>
          </div>
          <div classname="footer-menu-main">
            <div classname="footer-menu-inner">
              <div classname="menu-item">
                <a href="javascript:;">
                  <img src="assets/images/footer-logo.png" />
                </a>
                <p>
                  Full Service Design <br />
                  and Marketing Agency
                </p>
                <div classname="social">
                  <ul>
                    <li>
                      <a href="javascript:;">
                        <i classname="fa-brands fa-linkedin" />
                      </a>
                    </li>
                    <i classname="fa-brands fa-linkedin">
                      <li>
                        <a href="javascript:;">
                          <i classname="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <i classname="fa-brands fa-instagram">
                        <li>
                          <a href="javascript:;">
                            <i classname="fa-brands fa-x-twitter" />
                          </a>
                        </li>
                        <i classname="fa-brands fa-x-twitter">
                          <li>
                            <a href="javascript:;">
                              <i classname="fa-brands fa-facebook-f" />
                            </a>
                          </li>
                          <i classname="fa-brands fa-facebook-f"></i>
                        </i>
                      </i>
                    </i>
                  </ul>
                  <i classname="fa-brands fa-linkedin">
                    <i classname="fa-brands fa-instagram">
                      <i classname="fa-brands fa-x-twitter">
                        <i classname="fa-brands fa-facebook-f"></i>
                      </i>
                    </i>
                  </i>
                </div>
                <i classname="fa-brands fa-linkedin">
                  <i classname="fa-brands fa-instagram">
                    <i classname="fa-brands fa-x-twitter">
                      <i classname="fa-brands fa-facebook-f"></i>
                    </i>
                  </i>
                </i>
              </div>
              <i classname="fa-brands fa-linkedin">
                <i classname="fa-brands fa-instagram">
                  <i classname="fa-brands fa-x-twitter">
                    <i classname="fa-brands fa-facebook-f">
                      <div classname="menu-item">
                        <ul classname="menu">
                          <h2>INFO</h2>
                          <a href="mailto:hello@nickelbronx.com">
                            hello@nickelbronx.com
                            <span />
                          </a>
                          <a href="tel:(703) 865-2600">(703) 865-2600</a>
                          <h3>1775 Tysons Blvd, 5th Floor Mclean, VA 22102</h3>
                        </ul>
                      </div>
                      <div classname="menu-item">
                        <ul classname="menu">
                          <h2>ABOUT</h2>
                          <li>
                            <a href="javacript:;">Team</a>
                          </li>
                          <li>
                            <a href="javacript:;">Culture</a>
                          </li>
                          <li>
                            <a href="javacript:;">Clients</a>
                          </li>
                        </ul>
                      </div>
                      <div classname="menu-item">
                        <ul classname="menu">
                          <h2>Services</h2>
                          <li>
                            <a href="javacript:;">Brand and Visual Identity</a>
                          </li>
                          <li>
                            <a href="javacript:;">Marketing Stategy</a>
                          </li>
                          <li>
                            <a href="javacript:;">UI/UX Design</a>
                          </li>
                          <li>
                            <a href="javacript:;">
                              Website Development &amp; More
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div classname="menu-item">
                        <ul classname="menu">
                          <h2>Clients</h2>
                          <li>
                            <a href="javacript:;">Arkra</a>
                          </li>
                          <li>
                            <a href="javacript:;">Arthur Brooks</a>
                          </li>
                          <li>
                            <a href="javacript:;">Bam</a>
                          </li>
                          <li>
                            <a href="javacript:;">Blackwood &amp; More</a>
                          </li>
                        </ul>
                      </div>
                      <div classname="menu-item">
                        <ul classname="menu">
                          <li>
                            <a href="javacript:;">Lets's work together</a>
                            <a href="javascript:;" classname="menu-btn">
                              Get Started
                            </a>
                          </li>
                          <hr />
                          <li>
                            <a href="javacript:;" classname="menu-btn">
                              Newsletter
                            </a>
                            <a href="javascript:;">
                              sign up for our newsletter
                            </a>
                          </li>
                        </ul>
                      </div>
                    </i>
                  </i>
                </i>
              </i>
            </div>
            <i classname="fa-brands fa-linkedin">
              <i classname="fa-brands fa-instagram">
                <i classname="fa-brands fa-x-twitter">
                  <i classname="fa-brands fa-facebook-f"></i>
                </i>
              </i>
            </i>
          </div>
          <i classname="fa-brands fa-linkedin">
            <i classname="fa-brands fa-instagram">
              <i classname="fa-brands fa-x-twitter">
                <i classname="fa-brands fa-facebook-f"></i>
              </i>
            </i>
          </i>
        </div>
        <i classname="fa-brands fa-linkedin">
          <i classname="fa-brands fa-instagram">
            <i classname="fa-brands fa-x-twitter">
              <i classname="fa-brands fa-facebook-f">
                <div classname="footer-bottom">
                  <p>NickelBronx, Copyright 2023</p>
                </div>
              </i>
            </i>
          </i>
        </i>
      </div>
      <i classname="fa-brands fa-linkedin">
        <i classname="fa-brands fa-instagram">
          <i classname="fa-brands fa-x-twitter">
            <i classname="fa-brands fa-facebook-f"></i>
          </i>
        </i>
      </i>
    </footer>
    <i classname="fa-brands fa-linkedin">
      <i classname="fa-brands fa-instagram">
        <i classname="fa-brands fa-x-twitter">
          <i classname="fa-brands fa-facebook-f"></i>
        </i>
      </i>
    </i>
  </div>
  <i classname="fa-brands fa-linkedin">
    <i classname="fa-brands fa-instagram">
      <i classname="fa-brands fa-x-twitter">
        <i classname="fa-brands fa-facebook-f"></i>
      </i>
    </i>
  </i>
</>


</>

    
  )
}
