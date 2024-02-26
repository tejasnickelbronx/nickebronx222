import React, { useEffect, useRef  } from 'react';
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from '@studio-freight/lenis';

export default function GetHomeServices( {children, allservices, servicesec} ){

  const ourService = servicesec;
  const ourservicesitems = allservices;
  const targetRef = useRef(null);
  const serviceSlider = useRef(null);

  gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

  useEffect(() => {
    
                      let ctx = gsap.context(() => {
                         const lenis = new Lenis({
                            duration: 1.2,
                            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                         });
                      
                        function raf(time) {
                            lenis.raf(time);
                            ScrollTrigger.update();
                            requestAnimationFrame(raf);
                        }
                      
                        requestAnimationFrame(raf);
                        
                        const section_2 = document.querySelector(".service-main-sec"); // .service-inner-sec
                        // const service_slider = document.querySelector(".service-slider"); // .service-inner-sec
                        let sbxitem = gsap.utils.toArray(".serviceitem");
                        // alert(sbxitem.length);
                        
                        // console.log( (section_2.offsetWidth / window.innerWidth) * 100 ); 0.9895833333333334 which is need to turn into percentages
                        // let start_point = (containerServiceSlider.y + containerServiceSlider.height / 2) - targetRef.current.getBoundingClientRect().y - window.innerHeight;
                        // let tempwidth = service_slider.scrollWidth + targetRef.current.getBoundingClientRect().height;

                        let tempwidth = (section_2.offsetWidth / window.innerWidth) * 100 ;
                        let containerServiceSlider = serviceSlider.current.getBoundingClientRect();
                        let relativeX = (containerServiceSlider.x + containerServiceSlider.width);
                        let relativeY = (containerServiceSlider.y + containerServiceSlider.height / 2) - targetRef.current.getBoundingClientRect().y;
                        let newStartPoint = relativeY - window.innerHeight / 2;
                        let newEndPoint = relativeX ;

                        let mm = gsap.matchMedia();
                        mm.add("(min-width: 1024px)",  () => {
                            gsap.to(sbxitem, {
                              x: -200 * ( sbxitem.length + 2 ),
                              ease:"sine.out",  
                              duration: 3,
                            
                              scrollTrigger:{
                                trigger: section_2,
                                pin: true,
                                // pinSpacing: false,
                                preventOverlaps: false, // or arbitrary string
                                scrub: 3,
                                markers: false,
                                snap: 1 / (sbxitem.length - 1),
                                start: `${newStartPoint}px`, // 0x you can't start at 0px because the size of the content  150px
                                end: `+=${newEndPoint}px`
                              }
                          });
                      });

                      mm.add("(min-width: 768px) and (max-width: 1023px)",  () => {
                        gsap.to(sbxitem, {
                          x: -250 * ( sbxitem.length + 2 ),
                          ease:"sine.out",  
                          duration: 3,
                        
                          scrollTrigger:{
                            trigger: section_2,
                            pin: true,
                            // pinSpacing: false,
                            preventOverlaps: false, // or arbitrary string
                            scrub: 3,
                            markers: false,
                            snap: 1 / (sbxitem.length - 1),
                            start: `${newStartPoint}px`, // 0x you can't start at 0px because the size of the content  150px
                            end: `+=${newEndPoint}px`
                          }
                        });
                      });
                  
                      mm.add("(max-width: 767px)", () => {
                        gsap.to(sbxitem, {
                          x: -250 * ( sbxitem.length + 1 ),
                          ease:"sine.out",  
                          duration: 3,
                        
                          scrollTrigger:{
                            trigger: section_2,
                            pin: true,
                            // pinSpacing: false,
                            preventOverlaps: false, // or arbitrary string
                            scrub: 3,
                            markers: false,
                            snap: 1 / (sbxitem.length - 1),
                            start: `${newStartPoint}px`, // 0x you can't start at 0px because the size of the content  150px
                            end: `+=${newEndPoint}px`
                          }
                        });
                      });
                      
                    });
                      
                    return () => ctx.revert();
  }, [])



                          

    return(     
     <section className="service-main-sec" ref={targetRef}>
      {children}
      <div className="container2">
        <div className="service-inner-sec">
          <div className="service-title serviceintromain">
            <div className='serviceintroleft'>
              <h2>OUR SERVICES</h2>
              <h3 dangerouslySetInnerHTML={{ __html: ourService.heading}}></h3>
            </div>
            <div className='serviceintroright'> 
              <p>
                {ourService.description}
              </p>
            </div>
          </div>

      <div   className="service-slider" ref={serviceSlider}   id='serviceslider'>

      
     
       {
         ourservicesitems.map((serviceitem, index)=>(     
          
        
          <div key={index}  className={`serviceitem hmsbx${index}`}>
            <div className='serviceitems'>

            
            <div className="service-box">
              <div  className={`service-box-inner sboxbg_${index}`}>
                <div className="image">
                  <img src={serviceitem.serviceIcon.sourceUrl} alt={serviceitem.serviceTitle} />
                </div>
                <div className="box-title">                        
                  <h5 ><a dangerouslySetInnerHTML={{ __html: serviceitem.serviceTitle}} href={"/services/"+serviceitem.link.slug+"/"+serviceitem.link.pageId}></a></h5>
                 
                </div>
                <div className='servicedescbx'><p>{serviceitem.description.substring(0, 100)}</p></div>
               
              </div>
            </div>
            </div>
          </div>
          ))}
        </div>
        </div>
    </div>
  </section>  
    
  )
}