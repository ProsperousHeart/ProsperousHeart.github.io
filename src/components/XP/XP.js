import React from 'react';
import './XP.css';
// import { data } from './data';

const Exp = () => {

    return (
        <section id="XP" className="target-section has-bottom-sep">

            <div className="row about-content about-content--timeline"> {/*<!-- start of about-content about-content--timeline (work timeline) -->*/}

                <div className="section-intro">
                    <div className="col-full text-center">
                        {/* <h3>My Experience</h3> */}
                        {/* <span className="sec-light-hdr-top">My Experience</span> */}
                        <p className="sec-light-hdr-top">My Experience</p>
                        {/* <h1>Timeline</h1> */}
                        <span className="sec-light-hdr-title">Timeline</span>
                        <p className="lead">
                            Here are the most recent roles with which I have had the pleasure of working on.
                            Due to the nature of most of them, I have worn many hats for several projects.
                            If you would like to see more details about what these roles entailed, 
                            please <b><a href="https://docs.google.com/document/d/1_UqCMOFebcXdRAKjrf5wLjpeFzTNEKht-hMHxCkXXno/edit?usp=sharing" 
                                        target="_blank" 
                                        rel="noreferrer noopener" >review this document</a></b> or <b><a 
                                        href="https://www.linkedin.com/in/kkeeton" target="_blank" rel="noreferrer noopener" >my LinkedIn</a></b>.
                        </p>
                    </div>
                </div>

                <div className="col-six tab-full left">
                    <div className="timeline">

                        <div className="timeline__block"> {/*<!-- CEAD Software Engineer -->*/}
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">June 2022 - Present</p>
                                <h3>Software Engineer</h3>
                                {/* <h5>CEAD (Escalations) - <a className="str-HL-green-drk"
                                                                                    href="https://www.cisco.com"
                                                                                    target="_blank"
                                                                                    rel="noreferrer noopener"
                                                            >Cisco Systems</a>, Inc</h5> */}
                                <span className="xp-titleco">CEAD (Escalations) - <a className="str-HL-green-drk"
                                                                                    href="https://www.cisco.com"
                                                                                    target="_blank"
                                                                                    rel="noreferrer noopener"
                                                            >Cisco Systems</a>, Inc</span>
                            </div>
                            <div className="timeline__desc">
                                {/* <!-- originally a paragraph section
                                <p>Planned & prioritized the work of 3 people. Introduced bi-weekly sprint retros &
                                    planning in order to improve team clarity & minimize wasted time. Utilized event
                                    management experience to support 2 events: an expo & hackathon. Created Communities of
                                    Practice to ensure more streamlined development & to ensure at least 1 person reviewed
                                    code before integration into production code. Facilitated multiple cross-team
                                    development projects to support several high touch needs for the organization.
                                </p>--> */}
                                <ul className="lead">
                                    <li>Planned & prioritized the work of 3 people.</li>
                                    <li>
                                        <span className="str-BG-green-lt">Introduced bi-weekly sprint retrospectives & planning
                                        sessions</span> to improve team clarity while minimizing wasted time.
                                    </li>
                                    <li>
                                        <span className="str-BG-green-lt">Created <b>Communities of Practice</b></span>
                                        (including a team training plan) to ensure improved streamlined development, more
                                        rounded support within the team, and ensure team was knowledgeable of expected
                                        company standards.
                                    </li>
                                    <li>
                                        <span className="str-BG-green-lt">Facilitated multiple cross-team development projects</span>
                                        to support high touch needs for the organization.
                                    </li>
                                    <li>Utilized event management experience to support 2 events.</li>
                                </ul>
                            </div>
                        </div> {/*<!-- end timeline__block for CEAD Software Engineer -->*/}

                        <div className="timeline__block"> {/*<!-- Community Advocate - ManyChat -->*/}
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">January 2021 - June 2022</p>
                                <h3>Community Advocate</h3>
                                {/* <h5>Marketing - <a className="str-HL-green-drk" href="https://manychat.com/" target="_blank" rel="noreferrer noopener">ManyChat</a></h5> */}
                                <span className="xp-titleco">Marketing - <a className="str-HL-green-drk" 
                                                                            href="https://manychat.com/"
                                                                            target="_blank"
                                                                            rel="noreferrer noopener"
                                                                            >ManyChat</a></span>
                            </div>
                            <div className="timeline__desc">
                                {/* <!--<span className="lead">
                                    I joined ManyChat to explore more in the <b>digital marketing</b> realm. At the time, I
                                    had focused my business on teaching online marketing. This was an opportunity to see
                                    behind the scenes of a similar company while also learning more about a product I was
                                    already using.<br>
                                </span>  --> */}
                                <ul className="lead">
                                    <li>
                                        Was the acting <span className="str-HL-pink-drk">Technical Director</span> and <span
                                            className="str-HL-pink-drk">Head of Support</span> for the company's <b>first</b> 100%
                                            virtual event - <b><a className="str-HL-green-drk"
                                                                href="https://youtu.be/wPIK1ZsFLik" target="_blank"
                                                                rel="noreferrer noopener">Instagram Summit 2021</a></b>.
                                        Become the sole company expert in <b><a className="str-HL-darkred"
                                                                            href="https://splashthat.com/" target="_blank"
                                                                            rel="noreferrer noopener">Splash</a></b> - the
                                        event system chosen for hosting the technology. Created a front end system that
                                        could do what was needed, even though Splash was not intended for what I
                                        accomplished.
                                    </li>
                                    <li>Led a Facebook community of over 100k people.</li>
                                    <li><span className="str-BG-green-lt">Created a monthly webinar program</span> to support ManyChat users through product training
                                        and opportunities to connect with other chat bot creators.</li>
                                    <li>Engaged with influencers and high-impact users in order to increase brand awareness
                                        and find speakers for our different events. (See projects section.)</li>
                                    <li>Supported company webinar initiatives with marketing to the community, tech setup, &
                                        support.</li>
                                    <li>
                                        In less than 1 month, took provided information relating to a booth at <span
                                            className="str-BG-pink-lt"><b>Traffic & Conversions 2021</b></span> and co-created a fun &
                                        interactive experience for event attendees. Our booth had interactive QR codes, a
                                        built-in photo booth using the wall design, and a working automation to inform
                                        people about different booth experiences as well as how to win our booth's raffle.
                                    </li>
                                </ul>
                            </div>
                        </div> {/*<!-- end timeline__block for ManyChat Community Advocate -->*/}

                        <div className="timeline__block"> {/*<!-- Community Evangelist @ Cisco -->*/}
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">June 2019 - January 2021</p>
                                <h3>Community Evangelist</h3>
                                {/* <h5>Data & Analytics - <a className="str-HL-green-drk" 
                                                            href="https://www.cisco.com"
                                                            target="_blank"
                                                            rel="noreferrer noopener"
                                                            >Cisco Systems</a>, Inc</h5> */}
                                <span className="xp-titleco">Data & Analytics - <a className="str-HL-green-drk" 
                                                            href="https://www.cisco.com"
                                                            target="_blank"
                                                            rel="noreferrer noopener"
                                                            >Cisco Systems</a>, Inc</span>
                            </div>
                            <div className="timeline__desc">
                                {/*<!--<p>Highlight items just for this specific role relating to code ... Maybe have drop-downs for the different pieces</p>-->*/}
                                <ul className="lead">
                                    <li>
                                        Took an automated training badging system that worked about 50% of the time, <span className="str-BG-green-lt">rewrote
                                        the code within 1 month to resolve all issues</span>, and made it be more flexible to
                                        support upcoming expected changes to the program(s).
                                    </li>
                                    <li>
                                        At request of manager, started and ran the <b>Data Science Awards</b> in 2019 and
                                        2020 for the annual <b><span className="str-BG-pink-lt">Data Symposium</span></b> event. This included marketing to all
                                        Cisco employees for submissions of data science, machine learning, or artificial
                                        intelligence projects as well as creating an award & additional bonuses for winners.
                                    </li>
                                    <li>
                                        Co-led the <b><span className="str-BG-pink-lt">Data Symposium 2019</span></b> event,
                                        where the organization put on a 3 day in-person event to provide training and bring
                                        awareness to innovative technologies & tools in the data science, machine learning,
                                        and artificial intelligence space. Lead the vendors booth section, developed
                                        templates for the next event, and was on-site speaker support, event security, and
                                        overall timekeeper. Created and implemented marketing strategy (email and social
                                        media) which led to 16% attendance growth.
                                    </li>
                                    <li>
                                        Lead the <b><span className="str-BG-pink-lt">Data Symposium 2020</span></b> event. Due
                                        to COVID, took a 3 day and 90% in-person event using 50+ volunteers and our entire
                                        team of 5 down to myself, support from my manager, and leveraging internal webex and
                                        production studio teams for the event. <span className="str-BG-green-lt">Slashed the
                                        budget by over 75% from previous year</span>, made the event a rolling training to
                                        support global attendees, <span className="str-BG-green-lt">increased attendees by 800+
                                        YoY</span>, and had <span className="str-BG-green-lt">highest attendee approval ratings
                                        of all prior events</span>. Found and negotiated pricing & expectations of external
                                        speakers (<a href="https://www.andrewng.org/" target="_blank"
                                                    rel="noreferrer noopener">Andrew Ng</a> and <a href="https://ranaelkaliouby.com/"
                                                    target="_blank" rel="noreferrer noopener">Rana el Kaliouby</a>)
                                         - including bonuses for the event's award winners.
                                    </li>
                                    <li>
                                        Led the <b><a className="str-HL-darkred"
                                                    href="https://blogs.cisco.com/analytics-automation/ds4g"
                                                    target="_blank" rel="noreferrer noopener">Data Science & 
                                                    AI For Good</a></b> program. In this role, I met with non-profits to 
                                        understand their need and determine if there was a fit for leveraging data science
                                        solutions. If leadership approved a project, I marketed to Cisco volunteers & we
                                        began working towards a solution.
                                    </li>
                                    <li>
                                        Continued my work with the <b><span className="str-BG-pink-lt">Coding Hour</span></b> initiative I started as the <b>
                                        <a href='#CSL'
                                            className="str-HL-darkred" >
                                        Collaboration Scripting Lead</a></b>.
                                    </li>
                                </ul>
                            </div>
                        </div> {/*<!-- end timeline__block -->*/}

                    </div> {/*<!-- end timeline -->*/}
                </div> {/*<!-- end left -->*/}

                <div className="col-six tab-full right">
                    <div className="timeline">

                        <div id="CSL" className="timeline__block"> {/*<!-- Collaboration Scripting Lead @ Cisco -->*/}
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">June 2016 - Jun 2019</p>
                                <h3>Collaboration Scripting Lead</h3>
                                {/* <h5>TAC - <a className="str-HL-green-drk" 
                                                href="https://www.cisco.com"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                >Cisco Systems</a>, Inc</h5> */}
                                <span className="xp-titleco">TAC - <a className="str-HL-green-drk" 
                                                href="https://www.cisco.com"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                >Cisco Systems</a>, Inc</span>
                            </div>
                            <div className="timeline__desc">
                                <ul className="lead">
                                    <li>
                                        <span className="str-BG-green-lt">Python mentor</span> to several TAC engineers - some
                                        went into full development roles.
                                    </li>
                                    <li>
                                        <span className="str-BG-green-lt">Built & ran 3 day in-person python bootcamps</span>
                                        for all 3 Cisco TAC Americas locations. This focused on python basics within the
                                        internal proprietary case automation system.
                                    </li>
                                    <li>
                                        <span className="str-BG-green-lt">Hosted & ran a 3 day hackathon</span> focused on
                                        building more modules for internal TAC case review automation system. Collaborated
                                        with Cisco TAC Tech Leads across TAC Americas involved with different gateways to
                                        create not just a hackathon - but also train additional personnel on the system.
                                    </li>
                                    <li>
                                        Participated in the planning, creation, updating, and review of miscellaneous
                                        internal case review automation scripts as needed for different teams.
                                    </li>
                                    <li>
                                        <span className="str-BG-green-lt">Started and ran a bi-weekly training</span> &
                                        awareness program - <b><span className="str-BG-pink-lt">Coding Hour</span></b>. There
                                        were (generally) 2 sessions (to support personnel across the globe) and everything
                                        was recorded. Either myself or someone else in the company would teach on python,
                                        data science, artificial intelligence, machine learning, etc - or simply sharing
                                        their work on projects. By the time I left in January 2021, there were <span className="str-HL-pink-drk">3k+
                                        people on the mailer</span> with <span className="str-HL-pink-drk">1k+ members</span> in the team chat room.
                                    </li>
                                    <li>
                                        <span className="str-BG-green-lt">Created a support ticket health system for
                                            management</span> that replaced an outdated and unsupported tool. Leveraged
                                        multiple internal automations and APIs to provide a visual representation of case
                                        backlogs for an individual, team, or organization. Examples of this health check
                                        include but are not limited to case age, bugs attached, time elapsed since engineer
                                        update, etc. It also provided an automated email and ability to download the data
                                        via XLSX.
                                    </li>
                                    <li>
                                        Created & ran a <a className="str-HL-green-lt" href="https://github.com/ProsperousHeart/Training-Events/tree/master/CiscoDevNetCreate2019" target="_blank" rel="noreferrer noopener">python introduction bootcamp</a>
                                        for attendees at the <b><a className="str-HL-darkred" href="https://developer.cisco.com/devnetcreate/2019/campcreate" target="_blank" rel="noreferrer noopener">DevNet Camp Create 2019</a></b>. Also participated in person as
                                        a local mentor & developer.
                                    </li>
                                    <li>
                                        Was invited to speak at <span className="str-BG-pink-lt">Cisco Live LATAM 2018</span> - “<a className="str-HL-green-lt" href="https://www.linkedin.com/feed/update/urn:li:activity:6475399796298444800/" target="_blank" rel="noreferrer noopener">How To Think Like A Programmer</a>”.
                                    </li>
                                </ul>
                            </div>
                        </div> {/*<!-- end timeline__block for COL Scripting Lead -->*/}

                        <div className="timeline__block"> {/*<!-- My Business -->*/}
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">Oct 2015 - CURRENT</p>
                                <h3>Marketer & Trainer</h3>
                                {/* <h5>Business Owner - <a className="str-HL-green-drk"
                                                        href="https://prosperousheart.com"
                                                        target="_blank"
                                                        rel="noreferrer noopener"
                                                    >Prosperous Heart</a>, LLC</h5> */}
                                <span className="xp-titleco">Business Owner - <a className="str-HL-green-drk"
                                                        href="https://prosperousheart.com"
                                                        target="_blank"
                                                        rel="noreferrer noopener"
                                                    >Prosperous Heart</a>, LLC</span>
                            </div>
                            <div className="timeline__desc">
                                <ul className="lead">
                                    <li>
                                        <span className="str-BG-green-lt">Provide training</span> on digital marketing and
                                        programming.
                                    </li>
                                    <li>
                                        Constantly learning new languages and best practices to support my students and
                                        <a className="str-HL-green-drk" href="https://github.com/ProsperousHeart"
                                        target="_blank" rel="noreferrer noopener">open source contributions</a>.
                                    </li>
                                    <li>
                                        Was <span className="str-BG-pink-lt">invited to be a guest speaker</span> for “<a
                                            className="str-HL-green-lt"
                                            href="https://www.linkedin.com/feed/update/urn:li:activity:6811163473658093568?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_multiple_media_viewer%3BMNRFnXYlQqOTJTm%2BdSV7YQ%3D%3D" target="_blank" rel="noreferrer noopener">
                                        The Inspirational Leaders Podcast</a>”.
                                    </li>
                                </ul>
                            </div>
                        </div> {/*<!-- end timeline__block for my business -->*/}

                    </div> {/*<!-- end timeline -->*/}
                </div> {/*<!-- end right -->*/}

            </div> {/*<!-- end about-content (work) timeline -->*/}

        </section>
    );
}

export default Exp;
