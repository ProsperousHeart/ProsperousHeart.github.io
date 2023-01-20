import React from 'react';

const TCard = ({ name, img, content, url, title }) => {

    let html_name = <div class="str-testimonial-names">{name}</div>;

    let html_img = <img src={img}
                        alt={`Testimonial Provider - ${name}`}
                        class="testimonials__avatar" />;
    
    
    if (url.length !== 0) {
        html_name=<a class="str-testimonial-names" href={url} target="_blank" rel="noreferrer noopener">{name}</a>;
        html_img = <a href={url} target="_blank" rel="noreferrer noopener">
                        <img 
                            src={img} 
                            alt={`Testimonial Provider - ${name}`}
                            class="testimonials__avatar" />
                    </a>;
    }

    return (
        <div class="testimonials__slide">
            { html_img }
            <p>{content}</p>
            <div class="testimonials__author h06">
                { html_name }
                <span>{ title }</span>
            </div>
        </div>
    );
}

export default TCard;