import React from 'react';
import ProjectList from './ProjectList';
import { proj_data } from "./data";
import './CSS/Projects.css';
import './CSS/slick-proj.css';
// import './proj-swiper.css'

function ProjectSec({ data }) {
    return (
        <section id="Projects" className='s-projects'>
            <div className='row projects-header'>
                <div className="col-full">
                    <h1 className="h02">Projects</h1>                    
                </div>
                <ProjectList data={data} />
            </div>
        </section>
    );
}

// const Projects = () => {
export default function Projects() {
    // const proj_data = {
    //     active_link: "",
    //     project_name: "Project Name",
    //     company: "Company Name",
    //     desc: "Some desc here",
    //     code: "https://github.com/ProsperousHeart",
    //     youtube: ""
    // }

    return (
        <section id="Projects">
            <ProjectSec data={proj_data} />
        </section>
    );
}

// export default Projects;
