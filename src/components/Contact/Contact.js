import React from 'react';
import './Contact.css';

const Contact = () => {

    return (
        <section id="contact" class="s-contact target-section"> {/*<!-- .s-contact uses background image in CSS -->*/}

            <div class="overlay"></div>

            <div class="row narrow section-intro">
                <div class="col-full">
                    <h3>Contact</h3>
                    <h1>Looking To Work With Me?</h1>
                    {/* <!-- https://css-tricks.com/snippets/html/mailto-links/ --> */}
                    <p class="lead">
                        If you are looking to join my community and receive direct mentorship through my training program,
                        please <b><a class="str-HL-green-lt"
                                    href="mailto:training@prosperousheart.com?subject=Interested%20In%20Training">send an
                        email here</a></b>.<br /><br />
                        If you are looking to hire me for a project or potential full time role, please contact me through
                        <a class="str-HL-pink-lt" href="https://www.linkedin.com/in/kkeeton" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                        or via <a class="str-HL-pink-lt" href="mailto:krk.ph.rr@gmail.com?subject=Discussion%20of%20Potential%20Job">this email</a>.
                    </p>
                </div>
            </div>

            {/* <!--<div class="row contact__main">
                <div class="col-eight tab-full contact__form">
                    <form name="contactForm" id="contactForm" method="post" action="">
                        <fieldset>

                        <div class="form-field">
                            <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minlength="2" required="" aria-required="true" class="full-width">
                        </div>
                        <div class="form-field">
                            <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required="" aria-required="true" class="full-width">
                        </div>
                        <div class="form-field">
                            <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value="" class="full-width">
                        </div>
                        <div class="form-field">
                            <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required="" aria-required="true" class="full-width"></textarea>
                        </div>
                        <div class="form-field">
                            <button class="full-width btn--primary">Submit</button>
                            <div class="submit-loader">
                                <div class="text-loader">Sending...</div>
                                <div class="s-loader">
                                    <div class="bounce1"></div>
                                    <div class="bounce2"></div>
                                    <div class="bounce3"></div>
                                </div>
                            </div>
                        </div>

                        </fieldset>
                    </form>

                    <!-- contact-warning --
                    <div class="message-warning">
                        Something went wrong. Please try again.
                    </div>

                    <!-- contact-success --
                    <div class="message-success">
                        Your message was sent, thank you!<br />
                    </div>

                </div>
                <div class="col-four tab-full contact__infos">
                    <h4 class="h06">Phone</h4>
                    <p>Phone: (+63) 555 1212<br />
                    Mobile: (+63) 555 0100<br />
                    Fax: (+63) 555 0101
                    </p>

                    <h4 class="h06">Email</h4>
                    <p>someone@holawebsite.com<br />
                    info@holawebsite.com
                    </p>

                    <h4 class="h06">Address</h4>
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
