import React from 'react';

const Accomplishment = ({ bulltPts, data }) => {

    // let html_name = <div className="str-testimonial-names">{name}</div>;

    // let html_img = <img src={img}
    //                     alt={`Testimonial Provider - ${name}`}
    //                     className="testimonials__avatar" />;
    
    
    // if (url.length !== 0) {
    //     html_name=<a className="str-testimonial-names" href={url} target="_blank" rel="noreferrer noopener">{name}</a>;
    //     html_img = <a href={url} target="_blank" rel="noreferrer noopener">
    //                     <img 
    //                         src={img} 
    //                         alt={`Testimonial Provider - ${name}`}
    //                         className="testimonials__avatar" />
    //                 </a>;
    // }

    // let bPnt = <li></li>

    const bPts = data.map( (user, idx) => {
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

    return (
        {bPts}
    );
}

export default Accomplishment;