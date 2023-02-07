import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import $ from 'jquery';
// import ScrollToTop from 'react-scroll-up';
import { CircleArrow } from './CircleArrow';

const ScrollBtn = ({showUnder}) => {    

    return (
        <div>
        {/* // <div style={{display: this.visible ? 'block' : 'none'}}> */}
            <CircleArrow //https://www.skypack.dev/view/react-scroll-up-button
                AnimationDuration={400}
                ShowAtPosition={showUnder}
                StopPosition={0}
                ContainerClassName='to-top'
                TransitionClassName='to-top'
                style={{
                    backgroundColor: 'FF69B4; /* dark pink *'
                }}
            />
        </div>
    );

    // ============== OLD CODE kept for notes ==========================

    // const [visible, setVisible] = useState(false)

    // // useEffect(() => {
    // //     // const navSec = document.getElementsByClassName("header-nav-wrap")[0];
    // //     // const goTopBtn = document.getElementsByClassName("go-top");
    // //     const goTopBtn = $(".go-top"); // document.getElementById("GoTop");
    // //     const goTopPX = 500;  // height on which the button will show
    // //     const fadeInTime = 400;
    // //     const fadeOutTime = 400;
    
    // //     const scrollCallBack = window.addEventListener("scroll", () => {
    // //       if (window.pageYOffset >= goTopPX) {
    // //         // goTopBtn.addClass("scrolling");
    // //         goTopBtn.fadeIn(fadeInTime);
    // //       } else {
    // //         // goTopBtn.removeClass("scrolling");
    // //         goTopBtn.fadeOut(fadeOutTime);
    // //       }
    // //     });
    // //     return () => {
    // //       window.removeEventListener("scroll", scrollCallBack);
    // //     };
    // // });

    // const toggleVisible = () => {
    //     const scrolled = document.documentElement.scrollTop;
    //     const goTopPX = document.getElementById("about").offsetTop - 100;  // height on which the button will show
    //     const goTopBtn = $(".go-top");;
    //     const fadeInTime = 400;
    //     const fadeOutTime = 400;
    //     if (scrolled > goTopPX){
    //         goTopBtn.fadeIn(fadeInTime);
    //         setVisible(true)
    //     } 
    //     else if (scrolled <= goTopPX){
    //         goTopBtn.fadeOut(fadeOutTime);
    //         setVisible(false)
    //     }
    // };

    // useEffect( () => {
    //     window.addEventListener("scroll", toggleVisible);
    // }, []);

    // // return (
    // //     // <div id="GoTop" className="go-top" style={{ display: "none"}}>
    // //     <div id="GoTop" className="go-top" style={{display: visible ? 'block' : 'none'}}>
    // //     {/* <div id="GoTop" className="go-top"> */}
    // //     {/* // <div id="GoTop" className="go-top"> */}
    // //         <a className="smoothscroll"
    // //             title="Back to Top"
    // //             href="#home"
    // //             // onClick={scrollToTop}
    // //         >
    // //             <i className="im im-arrow-up"
    // //                 aria-hidden="true">    
    // //             </i>
    // //         </a>
    // //         {/* <div className="smoothscroll"
    // //             title="Back to Top"
    // //             onClick={scrollToTop}
    // //         >
    // //             <i className="im im-arrow-up"
    // //                 aria-hidden="true">    
    // //             </i>
    // //         </div> */}
    // //         {/* <i className="smoothscroll im im-arrow-up" 
    // //             title="Back to Top" 
    // //             aria-hidden="true">
    // //             onClick={} {/* TO DO:  Need to add the ability to go back to the top *} -->
    // //         </i> */}
    // //     </div>
    // // );
}

export default ScrollBtn;
