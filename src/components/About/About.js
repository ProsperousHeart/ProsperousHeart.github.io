import React from 'react';
import './About.css';

const About = () => {

    return (
        <section id="about" class="s-about target-section">

            <div class="row narrow section-intro has-bottom-sep">
                <div class="col-full text-center">
                    <h3>About</h3>
                    <h1>More About Me</h1>
                    <p class="lead">I am passionate about empowering others for greater success by breaking the tech stuff
                        down into easy-to-understand, byte-sized pieces.</p>
                    <p>I enjoy creating innovative software engineering solutions, mentoring other developers, and know the
                        importance of digital marketing - whether to find a job, grow a business, or simply to get the
                        word out on an event.</p>
                </div>
                <div id="xp-btns" class="about-content about-content--buttons">

                    {/* <!--<div class="col-six tab-full left">--> */}
                    <div class="col-six tab-full">
                        <a href="https://prosperousheart.com/resume" target="_blank" rel="noreferrer noopener" class="btn btn--primary full-width">View My Resume (PDF)</a>
                    </div>
                    {/* <!--<div class="col-six tab-full right" title="Training on programming, digital marketing, Human Design, and more!">--> */}
                    <div class="col-six tab-full" title="Training on programming, digital marketing, Human Design, and more!">
                        <a href="https://prosperousheart.com" target="_blank" rel="noreferrer noopener" class="btn full-width" title="Training on programming, digital marketing, Human Design, and more!">Access My Blog</a>
                    </div>

                </div> {/*<!-- end about-content buttons -->*/}
            </div>

            {/* <!--<div class="row about-content">

                <div class="col-six tab-full left">
                    <h3>Howdy!</h3>

                    <p>Lorem ipsum Ut eiusmod ex magna sit dolor esse adipisicing minim ad cupidatat eu veniam nostrud mollit laboris sunt magna velit culpa consectetur nostrud consectetur labore sed do.</p>

                    <p>
                    Lorem ipsum Nisi officia Duis irure voluptate dolor commodo pariatur occaecat aliquip adipisicing voluptate Ut in qui ea sint occaecat in commodo in in in incididunt ut sunt in Ut Duis in ut ex qui anim cupidatat cupidatat ex in non dolore labore ea amet cillum ea qui dolor nisi sed velit mollit exercitation ex fugiat labore in deserunt culpa laborum culpa anim dolore laboris amet irure mollit proident velit fugiat aute ea elit magna consequat qui officia quis elit Duis dolor esse cupidatat tempor proident voluptate aliqua ex cupidatat do eiusmod veniam irure laborum ut magna nostrud dolore ullamco commodo elit sit magna aliqua laborum veniam officia dolor.
                    </p>
                </div>

                <div class="col-six tab-full right">
                    <h3>I've Got Some skills.</h3>

                    <ul class="skill-bars">
                        <li>
                        <div class="progress percent90"><span>90%</span></div>
                        <strong>HTML5</strong>
                        </li>
                        <li>
                        <div class="progress percent85"><span>85%</span></div>
                        <strong>CSS3</strong>
                        </li>
                        <li>
                        <div class="progress percent70"><span>70%</span></div>
                        <strong>JQuery</strong>
                        </li>
                        <li>
                        <div class="progress percent95"><span>95%</span></div>
                        <strong>PHP</strong>
                        </li>
                        <li>
                        <div class="progress percent75"><span>75%</span></div>
                        <strong>Wordpress</strong>
                        </li>
                        <li>
                        <div class="progress percent90"><span>90%</span></div>
                        <strong>Angular JS</strong>
                        </li>
                    </ul>
                </div>

            </div> <!-- end about-content --> */}

        </section>
    );
}

export default About;
