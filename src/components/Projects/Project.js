import React from "react";

// function Project({data}) {
//     return (
//         <div className='projects'>
//             {data.map((projItm, idx) => (
//                 <div className='proj-card'>
//                     <div className='proj-content'>
//                         {/* <h2 className='proj-title'>{data.project_name}</h2> */}
//                         <h2 className='proj-title'>{projItm.project_name}</h2>
//                         <p className='proj-desc'>{projItm.desc}</p>
//                         <a href={projItm.code} target="_blank" rel="noopener noreferrer">
//                             <button className='proj-btn'>Learn More</button>
//                         </a>
//                     </div>
//                 </div>
//             ))
//             }
//         </div>
//     )
// }

const ProjCard = ({
  project_name,
  subtitle,
  img,
  img_alt,
  company,
  desc,
  code,
  site,
  youtube,
  skills,
  sliderSettings,
}) => {
  // let html_name = <div className="str-testimonial-names">{name}</div>;

  // let html_img = <img src={img}
  //                     alt={`Testimonial Provider - ${name}`}
  //                     className="testimonials__avatar" />;

  // if (url.length !== 0) {

  //     html_name=<a
  //                 className="str-testimonial-names" href={url}
  //                 target="_blank"
  //                 rel="noreferrer noopener"
  //                 >{name}</a>;

  //     html_img = <a href={url}
  //                     target="_blank"
  //                     rel="noreferrer noopener"
  //                 >
  //                 <img
  //                     src={img}
  //                     alt={`Testimonial Provider - ${name}`}
  //                     className="testimonials__avatar"
  //                 />
  //                 </a>;
  // }

  // return (
  //     <div className="col-full testimonials__slider">
  //         <div className="testimonials__slide">
  //             { html_img }
  //             <p>{content}</p>
  //             <div className="testimonials__author h06">
  //                 { html_name }
  //                 <span>{ title }</span>
  //             </div>
  //         </div>
  //     </div>
  // );
  return (
    <div className="card my-3 mx-auto">
      <img src={img} className="card-img-top" alt={img_alt} />
      {/* <div className='proj-content'> */}
      <div className="card-body d-flex flex-column mb-3 pb-1">
        <div className="card-info d-flex flex-column">
          <h5 className="card-title">{project_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
          <p className="card-text py-2">{desc}</p>
        </div>
        <div className="card-btns d-flex justify-content-between mt-auto">
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mr-2"
          >
            <i className="fa fa-link"></i> Visit Site
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn "
          >
            <i className="fa fa-github"></i> Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjCard;
