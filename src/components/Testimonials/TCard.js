import React from 'react';

const TCard = ({ name, img, content, url, title, sliderSettings }) => {

    let html_name = <div className="str-testimonial-names">{name}</div>;

    let html_img = <img src={img}
                        alt={`Testimonial Provider - ${name}`}
                        className="testimonials__avatar" />;
    
    
    if (url.length !== 0) {
        html_name=<a className="str-testimonial-names" href={url} target="_blank" rel="noreferrer noopener">{name}</a>;
        html_img = <a href={url} target="_blank" rel="noreferrer noopener">
                        <img 
                            src={img} 
                            alt={`Testimonial Provider - ${name}`}
                            className="testimonials__avatar" />
                    </a>;
    }

    return (
        <div className="col-full testimonials__slider">
            <div className="testimonials__slide">
                { html_img }
                <p>{content}</p>
                <div className="testimonials__author h06">
                    { html_name }
                    <span>{ title }</span>
                </div>
            </div>
        </div>
    );
}

export default TCard;