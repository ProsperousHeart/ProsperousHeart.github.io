import React, {Component} from 'react';
import TCard from './TCard';
import Slider from 'react-slick'; // https://react-slick.neostack.com/docs/api/ | https://github.com/kenwheeler/slick
import './slick.css';

// https://react-slick.neostack.com/docs/get-started/
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

function Arrow(props) {
    const { dClass, iClass, onClick } = props;
    return (
        <div className={dClass} 
            onClick={onClick}
        >
            <i className={iClass}
                aria-hidden='true'>
            </i>
        </div>
    );
}

// export default class TCardList extends Component = ({data}) => {
export default class TCardList extends Component {
    constructor(props) {
        super(props);
        // console.log("constructor props:", props);
        this.state = {
            data: this.props.data,
            pArrowDClass: "slick-prev",
            pArrowIClass: "im im-arrow-left",
            nArrowDClass: "slick-next",
            nArrowIClass: "im im-arrow-right"
        }
    }
    
    render() {
        const {data, pArrowDClass, pArrowIClass, nArrowDClass, nArrowIClass} = this.state;
        // const { data } = this.state;
        const settings = {
            // adaptiveHeight: true,   // issue with multiples etending past parent
            arrows: true,
            dots: false,
            // dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true,
            prevArrow: <Arrow dClass={pArrowDClass} iClass={pArrowIClass} />,
            nextArrow: <Arrow dClass={nArrowDClass} iClass={nArrowIClass} />,
            // pauseOnFocus: false, // default
            pauseOnHover: true,
            autoplay: true,
            autoplaySpeed: 4200,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        /* adaptiveHeight: true, /* https://www.freakyjolly.com/react-slick-carousel-with-custom-navigation-and-lazy-loaded-images-in-slider/ */
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        // console.log("data sent to TCardList", data);
        const slider_html = data.map( (user, idx) => {
            return (
                <TCard
                    key={idx}
                    name={data[idx].name}
                    img={data[idx].img}
                    content={data[idx].content}
                    url={data[idx].url}
                    title={data[idx].title}
                    sliderSettings={settings}
                />
            );
        });

        return(
                <div className="row testimonials">
                        <Slider {...settings}>
                            { slider_html }
                            {/* {
                                data.map( (user, idx) => {
                                    return (
                                            <TCard
                                                key={idx}
                                                name={data[idx].name}
                                                img={data[idx].img}
                                                content={data[idx].content}
                                                url={data[idx].url}
                                                title={data[idx].title}
                                                sliderSettings={settings}
                                            />
                                    );
                                })
                            } */}
                        </Slider>
                </div>
        )
    }
};

// const TCardList = ({data}) => {
//     return(
//         <div>
//             {
//                 data.map( (user, idx) => {
//                     return (
//                         <TCard
//                             key={idx}
//                             name={data[idx].name}
//                             img={data[idx].img}
//                             content={data[idx].content}
//                             url={data[idx].url}
//                             title={data[idx].title}
//                         />
//                     );
//                 })
//             }
//         </div>
//     );
// }

// export default TCardList;
