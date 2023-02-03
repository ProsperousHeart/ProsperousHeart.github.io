import React from 'react';
import './Contact.css';

const Contact = () => {

    return (
        <section id="contact" className="s-contact target-section"> {/*<!-- .s-contact uses background image in CSS -->*/}

            <div className="overlay"></div>

            <div className="row narrow section-intro">
                <div className="col-full">
                    {/* <h3>Contact</h3> */}
                    <span className="contact-top">Contact</span>
                    {/* <h1>Looking To Work With Me?</h1> */}
                    <span className="contact-qlooking">Looking To Work With Me?</span>
                    {/* <!-- https://css-tricks.com/snippets/html/mailto-links/ --> */}
                    <p className="lead">
                        If you are looking to join my community and receive direct mentorship through my training program,
                        please <b><a className="str-HL-green-lt"
                                    href="mailto:training@prosperousheart.com?subject=Interested%20In%20Training">send an
                        email here</a></b>.</p>
                    <p className="lead">
                        If you are looking to hire me for a project or potential full time role, please contact me
                        through <a className="str-HL-pink-lt" 
                            href="https://www.linkedin.com/in/kkeeton" 
                            target="_blank" 
                            rel="noreferrer noopener"
                        >LinkedIn</a> or via <a className="str-HL-pink-lt"
                                                href="mailto:krk.ph.rr@gmail.com?subject=Discussion%20of%20Potential%20Job">this email</a>.
                    </p>
                </div>
            </div>

            {/* <!--<div className="row contact__main">
                <div className="col-eight tab-full contact__form">
                    <form name="contactForm" id="contactForm" method="post" action="">
                        <fieldset>

                        <div className="form-field">
                            <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minlength="2" required="" aria-required="true" className="full-width">
                        </div>
                        <div className="form-field">
                            <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required="" aria-required="true" className="full-width">
                        </div>
                        <div className="form-field">
                            <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value="" className="full-width">
                        </div>
                        <div className="form-field">
                            <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required="" aria-required="true" className="full-width"></textarea>
                        </div>
                        <div className="form-field">
                            <button className="full-width btn--primary">Submit</button>
                            <div className="submit-loader">
                                <div className="text-loader">Sending...</div>
                                <div className="s-loader">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                </div>
                            </div>
                        </div>

                        </fieldset>
                    </form>

                    <!-- contact-warning --
                    <div className="message-warning">
                        Something went wrong. Please try again.
                    </div>

                    <!-- contact-success --
                    <div className="message-success">
                        Your message was sent, thank you!<br />
                    </div>

                </div>
                <div className="col-four tab-full contact__infos">
                    <h4 className="h06">Phone</h4>
                    <p>Phone: (+63) 555 1212<br />
                    Mobile: (+63) 555 0100<br />
                    Fax: (+63) 555 0101
                    </p>

                    <h4 className="h06">Email</h4>
                    <p>someone@holawebsite.com<br />
                    info@holawebsite.com
                    </p>

                    <h4 className="h06">Address</h4>
                    <p>
                    1600 Amphitheatre Parkway<br />
                    Mountain View, CA<br />
                    94043 US
                    </p>
                </div>

            </div>-->
            <!-- end of contact form row --> */}

        </section>
    );
}

export default Contact;
