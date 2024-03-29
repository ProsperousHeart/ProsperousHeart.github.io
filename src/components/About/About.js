import React from 'react';
import './About.css';

const About = () => {

    return (
        <section id="about" className="s-about target-section">

            <div className="row narrow section-intro has-bottom-sep">
                <div className="col-full text-center">
                    <p className="sec-light-hdr-top">About</p>
                    {/* <h1>More About Me</h1> */}
                    <span className="sec-light-hdr-title">More About Me</span>
                    <p className="lead">I am passionate about empowering others for 
                        greater success by breaking the tech stuff down into 
                        easy-to-understand, byte-sized pieces.</p>
                    <p>I enjoy creating innovative software engineering solutions, 
                        mentoring other developers, and know the importance of digital 
                        marketing - whether to find a job, grow a business, or simply 
                        to get the word out on an event.</p>
                </div>
                <div id="xp-btns" className="about-content about-content--buttons">

                    {/* <!--<div className="col-six tab-full left">--> */}
                    <div className="col-six tab-full">
                        <a href="https://prosperousheart.com/resume" target="_blank" rel="noreferrer noopener" className="btn btn--primary full-width">View My Resume (PDF)</a>
                    </div>
                    {/* <!--<div className="col-six tab-full right" title="Training on programming, digital marketing, Human Design, and more!">--> */}
                    <div className="col-six tab-full" title="Training on programming, digital marketing, Human Design, and more!">
                        <a href="https://prosperousheart.com" target="_blank" rel="noreferrer noopener" className="btn full-width" title="Training on programming, digital marketing, Human Design, and more!">Access My Blog</a>
                    </div>

                </div>
            </div>

            {/* <!--<div className="row about-content">

                <div className="col-six tab-full left">
                    <h3>Howdy!</h3>

                    <p>Lorem ipsum Ut eiusmod ex magna sit dolor esse adipisicing minim ad cupidatat eu veniam nostrud mollit laboris sunt magna velit culpa consectetur nostrud consectetur labore sed do.</p>

                    <p>
                    Lorem ipsum Nisi officia Duis irure voluptate dolor commodo pariatur occaecat aliquip adipisicing voluptate Ut in qui ea sint occaecat in commodo in in in incididunt ut sunt in Ut Duis in ut ex qui anim cupidatat cupidatat ex in non dolore labore ea amet cillum ea qui dolor nisi sed velit mollit exercitation ex fugiat labore in deserunt culpa laborum culpa anim dolore laboris amet irure mollit proident velit fugiat aute ea elit magna consequat qui officia quis elit Duis dolor esse cupidatat tempor proident voluptate aliqua ex cupidatat do eiusmod veniam irure laborum ut magna nostrud dolore ullamco commodo elit sit magna aliqua laborum veniam officia dolor.
                    </p>
                </div>

                <div className="col-six tab-full right">
                    <h3>I've Got Some skills.</h3>

                    <ul className="skill-bars">
                        <li>
                        <div className="progress percent90"><span>90%</span></div>
                        <strong>HTML5</strong>
                        </li>
                        <li>
                        <div className="progress percent85"><span>85%</span></div>
                        <strong>CSS3</strong>
                        </li>
                        <li>
                        <div className="progress percent70"><span>70%</span></div>
                        <strong>JQuery</strong>
                        </li>
                        <li>
                        <div className="progress percent95"><span>95%</span></div>
                        <strong>PHP</strong>
                        </li>
                        <li>
                        <div className="progress percent75"><span>75%</span></div>
                        <strong>Wordpress</strong>
                        </li>
                        <li>
                        <div className="progress percent90"><span>90%</span></div>
                        <strong>Angular JS</strong>
                        </li>
                    </ul>
                </div>

            </div> <!-- end about-content --> */}

        </section>
    );
}

export default About;
