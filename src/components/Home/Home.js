import React from 'react';
import './Home.css';

const Home = () => {

    return (
        // <!-- home
        // ================================================== -->
        // <!--<section id="home" className="s-home page-hero target-section reposition-home-img" data-parallax="scroll" data-image-src="IMGs/20180108.jpg" data-natural-width=3000 data-natural-height=2000 data-position-y=center>-->
            <section id="home" className="s-home page-hero target-section parallax2">

                <div className="overlay"></div>
                <div className="shadow-overlay"></div>

                <div className="home-content">
                    <h1 className="hidden-txt">Digital Resume for Kassandra Keeton</h1>
                    <div className="row home-content__main flex-row">

                        {/* <!-- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items --> */}
                        <div className="flex-row two-col">
                            <div className="h-intro">
                                {/* <h3><span className="hdr-HL-gp">Welcome</span></h3> */}
                                <span className="hdr-HL-gp">Welcome</span>

                                <p className="home-name">I am Kassandra Keeton.</p>
                                <div className="desc">
                                    <p className="home-desc">Software Engineer.</p>
                                    <p className="home-desc">Digital Marketer.</p>
                                    <p className="home-desc">Compassionate Teacher.</p>
                                </div>
                            </div>

                            {/* <div className="home-buttons push-rt"> */}
                            <div className="home-buttons">
                                <a href="#XP" className="smoothscroll btn btn--stroke">
                                    Latest Projects
                                </a>
                                <a href="#about" className="smoothscroll btn btn--stroke">
                                    More About Me
                                </a>
                            </div>
                        </div>

                        <div className="home-scroll">
                            <a href="#about" className="smoothscroll">
                                <span>Scroll Down</span>
                            </a>
                        </div>

                    </div>

                </div>

                <ul className="home-social">
                    <li>
                        <a href="https://www.linkedin.com/in/kkeeton/" target="_blank" rel="noreferrer noopener">
                            <i className="im im-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/LearnToCodeOnline" target="_blank" rel="noreferrer noopener">
                            <i className="im im-facebook" aria-hidden="true"></i><span>Facebook</span></a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/10474024/prosperousheart" target="_blank" rel="noreferrer noopener">
                        <i className="im im-stackoverflow" aria-hidden="true"></i><span>Stack Overflow</span>
                    </a></li>
                    {/* <!--<li>
                        <a href="https://instagram.com/prosperousheart"><i className="im im-instagram" aria-hidden="true"></i>
                            <span>Instagram</span></a>
                    </li>--> */}
                    <li>
                        <a href="https://www.pinterest.com/ProsperousHeart/" target="_blank" rel="noreferrer noopener">
                            <i className="im im-pinterest" aria-hidden="true"></i><span>Pinterest</span></a>
                    </li>
                </ul>

            </section>
    );
}

export default Home;
