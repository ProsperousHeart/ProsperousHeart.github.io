import React from 'react';
import './Home.css';

const Home = () => {

    return (
        // <!-- home
        // ================================================== -->
        // <!--<section id="home" class="s-home page-hero target-section reposition-home-img" data-parallax="scroll" data-image-src="IMGs/20180108.jpg" data-natural-width=3000 data-natural-height=2000 data-position-y=center>-->
            <section id="home" class="s-home page-hero target-section parallax2">

                <div class="overlay"></div>
                <div class="shadow-overlay"></div>

                <div class="home-content">
                    <h1 class="hidden-txt">Digital Resume for Kassandra Keeton</h1>
                    <div class="row home-content__main">

                        {/* <!-- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items --> */}
                        <div class="flex-row two-col">
                            <div class="h-intro">
                                <h3><span class="hdr-HL-gp">Welcome</span></h3>

                                <p class="h01">I am Kassandra Keeton.</p>
                                <div><p class="h02" /> {/*<!-- TODO:  really liked the font & size for current h2 ... need to set for paragraph -->*/}
                                    Software Engineer.<br />
                                    Digital Marketer.<br />
                                    Compassionate Teacher.
                                </div>
                            </div>

                            <div class="home-content__buttons push-rt">
                                <a href="#XP" class="smoothscroll btn btn--stroke">
                                    Latest Projects
                                </a>
                                <a href="#about" class="smoothscroll btn btn--stroke">
                                    More About Me
                                </a>
                            </div>
                        </div> {/*<!-- end of home before scrolling -->*/}

                        <div class="home-content__scroll">
                            <a href="#about" class="scroll-link smoothscroll">
                                <span>Scroll Down</span>
                            </a>
                        </div>

                    </div>

                </div> {/*<!-- end home-content -->*/}

                <ul class="home-social">
                    <li>
                        <a href="https://www.linkedin.com/in/kkeeton/" target="_blank" rel="noreferrer noopener">
                            <i class="im im-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/LearnToCodeOnline" target="_blank" rel="noreferrer noopener">
                            <i class="im im-facebook" aria-hidden="true"></i><span>Facebook</span></a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/10474024/prosperousheart" target="_blank" rel="noreferrer noopener">
                        <i class="im im-stackoverflow" aria-hidden="true"></i><span>Stack Overflow</span>
                    </a></li>
                    {/* <!--<li>
                        <a href="https://instagram.com/prosperousheart"><i class="im im-instagram" aria-hidden="true"></i>
                            <span>Instagram</span></a>
                    </li>--> */}
                    <li>
                        <a href="https://www.pinterest.com/ProsperousHeart/" target="_blank" rel="noreferrer noopener">
                            <i class="im im-pinterest" aria-hidden="true"></i><span>Pinterest</span></a>
                    </li>
                </ul>
                {/* <!-- end home-social --> */}

            </section>
    );
}

export default Home;
