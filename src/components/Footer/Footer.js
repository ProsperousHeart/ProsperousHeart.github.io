import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <footer>
            <div className="row">
                <div className="col-full">

                    <div className="footer-logo">
                        {/* <!--<a className="footer-site-logo" href=""><img src="IMGs/white.png" alt="Homepage"></a>--> */}
                        <img className="footer-site-logo" src="IMGs/white.png" alt="Homepage" />
                    </div>

                    <ul className="footer-social">
                        <li><a href="https://www.linkedin.com/in/kkeeton" target="_blank" rel="noreferrer noopener">
                            <i className="im im-linkedin" aria-hidden="true"></i>
                            <span>LinkedIn</span>
                        </a></li>
                        <li><a href="https://www.facebook.com/LearnToCodeOnline" target="_blank" rel="noreferrer noopener">
                            <i className="im im-facebook" aria-hidden="true"></i>
                            <span>Facebook</span>
                        </a></li>
                        <li>
                            <a href="https://stackoverflow.com/users/10474024/prosperousheart" target="_blank"
                            rel="noreferrer noopener"><i className="im im-stackoverflow" aria-hidden="true"></i>
                            <span>Stack Overflow</span></a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/ProsperousHeart/" target="_blank" rel="noreferrer noopener">
                                <i className="im im-pinterest" aria-hidden="true"></i><span>Pinterest</span></a>
                        </li>

                        <li><a href="mailto:krk.ph.rr@gmail.com">
                            <i className="im im-mail" aria-hidden="true"></i>
                            <span>Email</span>
                        </a></li>
                        {/* <!--
                        <li><a href="#0">
                            <i className="im im-facebook" aria-hidden="true"></i>
                            <span>Facebook</span>
                        </a></li>
                        <li><a href="#0">
                            <i className="im im-twitter" aria-hidden="true"></i>
                            <span>Twitter</span>
                        </a></li>
                        <li><a href="#0">
                            <i className="im im-instagram" aria-hidden="true"></i>
                            <span>Instagram</span>
                        </a></li>
                        <li><a href="#0">
                            <i className="im im-behance" aria-hidden="true"></i>
                            <span>Behance</span>
                        </a></li>
                        <li><a href="#0">
                            <i className="im im-pinterest" aria-hidden="true"></i>
                            <span>Pinterest</span>
                        </a></li>
                        --> */}
                    </ul>

                </div>
            </div>

            <div className="row footer-bottom">

                <div className="col-twelve">
                    <div className="copyright">
                        <span>© Copyright Prosperous Heart, LLC 2023</span>
                        <span>Design inspired by <a href="https://www.styleshout.com/free-templates/hola/">styleshout</a> & Improved by Kassandra</span>
                    </div>

                    <div className="go-top">
                        {/* <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true"></i></a> */}
                        <i className="smoothscroll im im-arrow-up" 
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
