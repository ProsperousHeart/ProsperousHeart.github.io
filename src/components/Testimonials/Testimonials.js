import React, {Component} from 'react';
import './Testimonials.css';
import TCardList from './TCardList';
import { data } from './data';

export default class Testimonials extends Component {
    render() {
        return (
            <section
                id="Testimonials2"
                className="s-testimonials target-section"
            >
                <div>
                    <div className="overlay"></div>
                    <div className="row testimonials-header">
                        <div className="col-full">
                            <h1 className="h02">Testimonials</h1>
                            {/* <span className="sec-dark-hdr-top">Testimonials</span> */}
                        </div>
                    </div>
                    <TCardList data={data} />
                </div>
            </section>
        );
    }
}

// const Testimonials = () => {

//     return (
//         <section id="Testimonials2" className="s-testimonials target-section">
//             <div className="overlay"></div>
//             <div className="row testimonials-header">
//                 <div className="col-full">
//                     <h1 className="h02">Testimonials</h1>
//                 </div>
//             </div>
//             <div className="row testimonials">
//                 <div className="col-full testimonials__slider">
//                    <TCardList data={data} />
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Testimonials;
