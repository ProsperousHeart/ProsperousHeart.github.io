import React, { useEffect } from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import './ScrollBtn.css';
import $ from 'jquery';
// import ScrollToTop from 'react-scroll-up';

const ScrollBtn = ({showUnder}) => {

    const [visible, setVisible] = useState(false)

    // useEffect(() => {
    //     // const navSec = document.getElementsByClassName("header-nav-wrap")[0];
    //     // const goTopBtn = document.getElementsByClassName("go-top");
    //     const goTopBtn = $(".go-top"); // document.getElementById("GoTop");
    //     const goTopPX = 500;  // height on which the button will show
    //     const fadeInTime = 400;
    //     const fadeOutTime = 400;
    
    //     const scrollCallBack = window.addEventListener("scroll", () => {
    //       if (window.pageYOffset >= goTopPX) {
    //         // goTopBtn.addClass("scrolling");
    //         goTopBtn.fadeIn(fadeInTime);
    //       } else {
    //         // goTopBtn.removeClass("scrolling");
    //         goTopBtn.fadeOut(fadeOutTime);
    //       }
    //     });
    //     return () => {
    //       window.removeEventListener("scroll", scrollCallBack);
    //     };
    // });

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const goTopPX = document.getElementById("about").offsetTop - 100;  // height on which the button will show
        const goTopBtn = $(".go-top");;
        const fadeInTime = 400;
        const fadeOutTime = 400;
        if (scrolled > goTopPX){
            goTopBtn.fadeIn(fadeInTime);
            setVisible(true)
        } 
        else if (scrolled <= goTopPX){
            goTopBtn.fadeOut(fadeOutTime);
            setVisible(false)
        }
    };

    // const scrollToTop = () =>{
    //     window.scrollTo({
    //         top: 0, 
    //         behavior: 'smooth'
    //         /* you can also use 'auto' behaviour
    //             in place of 'smooth' */
    //     });
    // };

    // window.addEventListener('scroll', toggleVisible);
    // // useEffect(() => {
    // //     const scrollBack = window.addEventListener('scroll', toggleVisible);
    // //     return () => {
    // //         window.removeEventListener("scroll", scrollBack);
    // //     }
    // // });
    useEffect( () => {
        window.addEventListener("scroll", toggleVisible);
    }, []);

    return (
        // <div id="GoTop" className="go-top" style={{ display: "none"}}>
        <div id="GoTop" className="go-top" style={{display: visible ? 'block' : 'none'}}>
        {/* <div id="GoTop" className="go-top"> */}
        {/* // <div id="GoTop" className="go-top"> */}
            <a className="smoothscroll"
                title="Back to Top"
                href="#home"
                // onClick={scrollToTop}
            >
                <i className="im im-arrow-up"
                    aria-hidden="true">    
                </i>
            </a>
            {/* <div className="smoothscroll"
                title="Back to Top"
                onClick={scrollToTop}
            >
                <i className="im im-arrow-up"
                    aria-hidden="true">    
                </i>
            </div> */}
            {/* <i className="smoothscroll im im-arrow-up" 
                title="Back to Top" 
                aria-hidden="true">
                onClick={} {/* TO DO:  Need to add the ability to go back to the top *} -->
            </i> */}
        </div>
    );

    // return (
    //     <ScrollToTop 
    //         duration={400}
    //         showUnder={showUnder}
    //     >
    //         {/* // <div id="GoTop" className="go-top" style={{ display: "none"}}> */}
    //         {/* <div id="GoTop" className="go-top" style={{display: visible ? 'block' : 'none'}}> */}
    //         <div id="GoTop" className="go-top">
    //         {/* // <div id="GoTop" className="go-top"> */}
    //             <a className="smoothscroll"
    //                 title="Back to Top"
    //                 href="#home"
    //             >
    //                 <i className="im im-arrow-up"
    //                     aria-hidden="true">    
    //                 </i>
    //             </a>
    //             {/* <i className="smoothscroll im im-arrow-up" 
    //                 title="Back to Top" 
    //                 aria-hidden="true">
    //                 onClick={} {/* TO DO:  Need to add the ability to go back to the top *} -->
    //             </i> */}
    //         </div>
    //     </ScrollToTop>
    // );
}

export default ScrollBtn;
