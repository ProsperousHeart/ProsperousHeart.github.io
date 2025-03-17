import React, {Component} from 'react';
import CertCard from './Certification';
import Slider from 'react-slick'; // https://react-slick.neostack.com/docs/api/ | https://github.com/kenwheeler/slick

// https://react-slick.neostack.com/docs/get-started/
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

// function Arrow(props) {
//     const { dClass, iClass, onClick } = props;
//     return (
//         <div className={dClass} 
//             onClick={onClick}
//         >
//             <i className={iClass}
//                 aria-hidden='true'>
//             </i>
//         </div>
//     );
// }

// export default class TCardList extends Component = ({data}) => {
export default class CertList extends Component {
    constructor(props) {
        super(props);
        // console.log("constructor props:", props);
        this.state = {
            data: this.props.data,
            // pArrowDClass: "slick-prev",
            // pArrowIClass: "im im-arrow-left",
            // nArrowDClass: "slick-next",
            // nArrowIClass: "im im-arrow-right"
        }
    }
    
    render() {

        // const {data, pArrowDClass, pArrowIClass, nArrowDClass, nArrowIClass} = this.state;
        const {data} = this.state;

        const settings = {
            autoplay: true,
            autoplaySpeed: 3300,
            dots: true,
            infinite: true,
            lazyLoad: true,
            pauseOnHover: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true,
            responsive: [
                // {
                //     breakpoint: 900,
                //     settings: {
                //         autoplay: false,
                //         /* adaptiveHeight: true, /* https://www.freakyjolly.com/react-slick-carousel-with-custom-navigation-and-lazy-loaded-images-in-slider/ */
                //         slidesToShow: 2,
                //         slidesToScroll: 1
                //     }
                // },
                {
                    breakpoint: 800,
                    settings: {
                        autoplay: false,
                        // autoplaySpeed: 4000,
                        /* adaptiveHeight: true, /* https://www.freakyjolly.com/react-slick-carousel-with-custom-navigation-and-lazy-loaded-images-in-slider/ */
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
          };

        // const settings = {
        //     // adaptiveHeight: true,   // issue with multiples etending past parent
        //     arrows: true,
        //     dots: false,
        //     // dots: true,
        //     lazyLoad: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //     swipeToSlide: true,
        //     // prevArrow: <Arrow dClass={pArrowDClass} iClass={pArrowIClass} />,
        //     // nextArrow: <Arrow dClass={nArrowDClass} iClass={nArrowIClass} />,
        //     // pauseOnFocus: false, // default
        //     pauseOnHover: true,
        //     autoplay: true,
        //     autoplaySpeed: 4200,
        //     responsive: [
        //         {
        //             breakpoint: 900,
        //             settings: {
        //                 /* adaptiveHeight: true, /* https://www.freakyjolly.com/react-slick-carousel-with-custom-navigation-and-lazy-loaded-images-in-slider/ */
        //                 slidesToShow: 1,
        //                 slidesToScroll: 1
        //             }
        //         }
        //     ]
        // };

        // console.log("data sent to TCardList", data);
        const slider_html = data.map( (user, idx) => {
            return (
                <CertCard
                    key={idx}
                    cert_name={data[idx].cert_name}
                    subtitle={data[idx].subtitle}
                    sub_url={data[idx].sub_url}
                    img={data[idx].img}
                    img_alt={data[idx].img_alt}
                    company={data[idx].company}
                    desc={data[idx].desc}
                    site={data[idx].site}
                    youtube={data[idx].youtube}
                    // skills={data[idx].skills}
                    // sliderSettings={settings}
                />
            );
            
            // return (
            //     <swiper-slide>
            //         <CertCard
            //             key={idx}
            //             cert_name={data[idx].cert_name}
            //             subtitle={data[idx].subtitle}
            //             img={data[idx].img}
            //             img_alt={data[idx].img_alt}
            //             company={data[idx].company}
            //             desc={data[idx].desc}
            //             code={data[idx].code}
            //             site={data[idx].site}
            //             youtube={data[idx].youtube}
            //             skills={data[idx].skills}
            //             // sliderSettings={settings}
            //         />
            //     </swiper-slide>
            // );
        });

        return (
            // {/* <div className='projects mx-auto mt-4 row'> */}
            <div className="container mx-auto px-0 my-0 py-2 mb-3">
                <div className="row certs mx-auto my-3">
                {/* <div className="row projects mx-auto d-flex align-items-stretch"> */}
                    <Slider {...settings}>
                    {/* <swiper-container
                        // auto-height="true"
                        autoplay-delay="4000"
                        autoplay-disable-on-interaction="true"
                        // centered-slides="true"
                        css-mode="true"
                        // enabled="true"
                        free-mode="true"
                        // loop="true"
                        // mousewheel="true"
                        navigation="true"
                        // pagination="true"
                        // pagination-clickable="true"
                        // rewind="false"
                        // scrollbar="true"
                        // setWrapperSize="true"
                        slides-per-view="3"
                        // space-between="30"
                        speed="3000"
                    > */}
                        { slider_html }
                    {/* </swiper-container> */}
                    </Slider>
                </div>
            </div>
        )
    }
};