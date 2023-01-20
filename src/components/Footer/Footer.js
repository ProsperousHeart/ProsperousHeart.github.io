import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <footer>
            <div class="row">
                <div class="col-full">

                    <div class="footer-logo">
                        {/* <!--<a class="footer-site-logo" href=""><img src="IMGs/white.png" alt="Homepage"></a>--> */}
                        <img class="footer-site-logo" src="IMGs/white.png" alt="Homepage" />
                    </div>

                    <ul class="footer-social">
                        <li><a href="https://www.linkedin.com/in/kkeeton" target="_blank" rel="noreferrer noopener">
                            <i class="im im-linkedin" aria-hidden="true"></i>
                            <span>LinkedIn</span>
                        </a></li>
                        <li><a href="https://www.facebook.com/LearnToCodeOnline" target="_blank" rel="noreferrer noopener">
                            <i class="im im-facebook" aria-hidden="true"></i>
                            <span>Facebook</span>
                        </a></li>
                        <li>
                            <a href="https://stackoverflow.com/users/10474024/prosperousheart" target="_blank"
                            rel="noreferrer noopener"><i class="im im-stackoverflow" aria-hidden="true"></i>
                            <span>Stack Overflow</span></a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/ProsperousHeart/" target="_blank" rel="noreferrer noopener">
                                <i class="im im-pinterest" aria-hidden="true"></i><span>Pinterest</span></a>
                        </li>

                        <li><a href="mailto:krk.ph.rr@gmail.com">
                            <i class="im im-mail" aria-hidden="true"></i>
                            <span>Email</span>
                        </a></li>
                        {/* <!--
                        <li><a href="#0">
                            <i class="im im-facebook" aria-hidden="true"></i>
                            <span>Facebook</span>
                        </a></li>
                        <li><a href="#0">
                            <i class="im im-twitter" aria-hidden="true"></i>
                            <span>Twitter</span>
                        </a></li>
                        <li><a href="#0">
                            <i class="im im-instagram" aria-hidden="true"></i>
                            <span>Instagram</span>
                        </a></li>
                        <li><a href="#0">
                            <i class="im im-behance" aria-hidden="true"></i>
                            <span>Behance</span>
                        </a></li>
                        <li><a href="#0">
                            <i class="im im-pinterest" aria-hidden="true"></i>
                            <span>Pinterest</span>
                        </a></li>
                        --> */}
                    </ul>

                </div>
            </div>

            <div class="row footer-bottom">

                <div class="col-twelve">
                    <div class="copyright">
                        <span>© Copyright Prosperous Heart, LLC 2023</span>
                        <span>Design inspired by <a href="https://www.styleshout.com/free-templates/hola/">styleshout</a> & Improved by Kassandra</span>
                    </div>

                    <div class="go-top">
                        {/* <a class="smoothscroll" title="Back to Top" href="#top"><i class="im im-arrow-up" aria-hidden="true"></i></a> */}
                        <i class="smoothscroll im im-arrow-up" 
                            title="Back to Top" 
                            aria-hidden="true">
                            onClick={} {/* TO DO:  Need to add the ability to go back to the top */}
                        </i>
                    </div>
                </div>

            </div> {/*<!-- end footer-bottom -->*/}

        </footer>
    );
}

export default Footer;
