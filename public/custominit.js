// var swiper = new Swiper(".team-slider", {
//     slidesPerView: 4,
//     speed: 600,
//     spaceBetween: 23,
//     freeMode: true,
    
//     breakpoints: {
//         3600: {
//         slidesPerView: 4,
//         },
//         1025: {
//             slidesPerView: 4,
//         },
//         767: {
//             slidesPerView: 3,
//         },
//         320: {
//             slidesPerView: 1,
//         }
        
//     },
//     scrollbar: {
//         el: ".swiper-scrollbar",
//     },
//     direction: 'horizontal',
//     mousewheel: true,
//     speed: 600,
//     parallax: true,
//     effect:'slide',
//     mousewheel: {
//         releaseOnEdges: true,
//     },
// });


// var swiper = new Swiper(".testimonial-slider", {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     freeMode: true,
//     // loop: true,
//     // breakpoints: {
//     //     769: {
//     //     slidesPerView: 2,
//     //     slidesPerGroup: 2,
//     //     },
//     // },
//     scrollbar: {
//         el: ".swiper-scrollbar",
//     },
//     direction: 'horizontal',
//     mousewheel: true,
//     mousewheel: {
//         releaseOnEdges: true,
//     },
// });
// var swiper = new Swiper(".service-slider", {
//     slidesPerView: 4,
//     spaceBetween: 23,
//     freeMode: true,
//     // loop: true,
//     breakpoints: {
//         3600: {
//         slidesPerView: 4,
//         },
//         1025: {
//             slidesPerView: 4,
//         },
//         767: {
//             slidesPerView: 3,
//         },
//         320: {
//             slidesPerView: 1,
//         }
        
//     },
//     scrollbar: {
//         el: ".swiper-scrollbar",
//     },
//     mousewheel: true,
//     speed: 600,
//     parallax: true,
//     effect:'slide',
//     mousewheel: {
//         releaseOnEdges: true,
//     },
    
// });
$(".menubar-btn").click(function () {
	
    // $(".menu-sec").slideToggle();
    // $(this).toggleClass("open");
 
  
	
});

/* Menu Js End */


/* Header Sticky Js Start */

$(window).scroll(function(){
  const el = document.querySelector('.header');

	var sticky = $('.header'),
	scroll = $(window).scrollTop();
  
  if(el && sticky) {
    if (scroll >= 100) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  }
});
$(".team-btn").click(function(e) {
    event.preventDefault();
    var popupid = $(this).attr("data-pop");
    
      $("#"+popupid).fadeIn(500);
      
    
});
$(".close").click(function() {
    event.preventDefault();
  $(".teampopup").fadeOut(500);
});
// const accordionItemHeaders = document.querySelectorAll(
//     ".accordion-item-header"
// );

// accordionItemHeaders.forEach((accordionItemHeader) => {
//     accordionItemHeader.addEventListener("click", (event) => {

//         const currentlyActiveAccordionItemHeader = document.querySelector(
//             ".accordion-item-header.active"
//         );
//         if (
//             currentlyActiveAccordionItemHeader &&
//             currentlyActiveAccordionItemHeader !== accordionItemHeader
//         ) {
//             currentlyActiveAccordionItemHeader.classList.toggle("active");
//             currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//         }
//         accordionItemHeader.classList.toggle("active");
//         const accordionItemBody = accordionItemHeader.nextElementSibling;
//         if (accordionItemHeader.classList.contains("active")) {
//             accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
//         } else {
//             accordionItemBody.style.maxHeight = 0;
//         }
//     });
// });


