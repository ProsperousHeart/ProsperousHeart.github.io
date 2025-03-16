import React from 'react';
import CertList from './CertificationsList';
import { cert_data } from "./data";
import './CSS/Certs.css';
import './CSS/slick-cert.css';
// import './proj-swiper.css'

function CertSec({ data }) {
    return (
        <section id="Certs" className='s-certs pb-3'>
            <div className='row certs-header'>
                <div className="col-full">
                    <h1 className="h02 pt-2 sec-dark-hdr-top">Certifications</h1>                    
                </div>
                <CertList data={data} />
            </div>
        </section>
    );
}

// const Projects = () => {
export default function Certs() {
    // const proj_data = {
    //     active_link: "",
    //     project_name: "Project Name",
    //     company: "Company Name",
    //     desc: "Some desc here",
    //     code: "https://github.com/ProsperousHeart",
    //     youtube: ""
    // }

    return (
        <section id="Certs">
            <CertSec data={cert_data} />
        </section>
    );
}

// export default Projects;
