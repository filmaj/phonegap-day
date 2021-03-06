import React from 'react'
import { Link } from 'react-router'
import Data from '../../data'

let speakers = Data.findSpeakersByConference('us2016')
let workshops = Data.workshops.us2016
let sessions = Data.sessions.us2016

import WorkshopsSection from './workshops-section.jsx'
import SpeakersSection from './speakers-section.jsx'
import SessionsSection from './sessions-section.jsx'

export default class Us2016 extends React.Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <div className="header-bounds">
            <div className="ipad-air2"><img src="/img/ipad-air2.svg" alt="iPad Air 2"/>
              <div className="content-mask" />
            </div>
            <div className="galaxy-s6"><img src="/img/galaxy-s6.svg" alt="Galaxy s6"/>
              <div className="content-mask" />
            </div>
            <div className="iphone-6"><img src="/img/iphone-6.svg" alt="iPhone 6"/>
              <div className="content-mask" />
            </div>
            <div className="nexus-9"><img src="/img/nexus-9.svg" alt="Nexus 9"/>
              <div className="content-mask" />
            </div>
            <div className="fire-hdx"><img src="/img/fire-hdx-8.9.svg" alt="Fire HDX 8.9"/>
              <div className="content-mask" />
            </div>
            <div className="lumia-640xl"><img src="/img/lumia-640xl.svg" alt="Lumia 640 XL"/>
              <div className="content-mask" />
            </div>
            <div className="one-m9"><img src="/img/one-m9.svg" alt="One m9"/>
              <div className="content-mask" />
            </div>
            <div className="logo"><img src="/img/pgd_logo.svg" alt="PhoneGap Day logo"/></div>
            <div className="adobe-logo"><a href="http://adobe.com"><img src="/img/adobe-logo.svg" alt="Adobe logo"/></a></div>
          </div>
          <div className="header-title">
            <div className="bounds">
              <h1>PhoneGap Day</h1>
              <h2 className="subhead">
                <time dateTime="2016-01-29">Jan 28 & 29, 2016</time> • <span className="city">Lehi, UT</span>
              </h2>
              <div className="description">A one day conference and one day of workshops for PhoneGap, web, and mobile developers.</div>
              <div className="pricing">
                <h2>Conference Ticket Pricing</h2>
                <ul>
                  <li><span>Conference</span><span className="leader" /><span>Soldout</span></li>
                  <li><span>Conf + Workshops</span><span className="leader" /><span>Soldout</span></li>
                </ul>
              </div><a href="http://www.eventbrite.com/e/phonegap-day-us-2016-tickets-18659846102" className="button--cta">Get Tickets</a>
            </div>
          </div>
        </header>
        <div id="content" className="main-content">
          <section className="about">
            <div className="text-bounds">
              <h1>The Lowdown</h1>
              <p><span className="sub">One part conference, one part celebration.</span><br />Join us for an incredible day to hear how the brightest minds in mobile are using PhoneGap to accelerate and optimize their mobile development strategy. You’ll hear from industry experts all ready to share tips and best practices, experiences with coding and performance, and the latest mobile trends. Meet members from the PhoneGap team, hear the latest PhoneGap news, and find out what’s coming next!</p>
              <p>Already have native apps at your organization? Come to PhoneGap Day to learn how to still use native controls for your app while leveraging webviews for the main content to make editing and updates easier and to enable your marketing team and other non technical users to update your app.</p>
              <p>Need help justifying your trip? Download our “<a href="/justify-your-trip-to-phonegapday.docx">Letter to your Boss</a>” document.</p>
            </div>
          </section>
          <SessionsSection sessions={sessions} heading={"Schedule"} pageSlug={"us2016"}/>
          <section className="about-details">
            <div className="text-bounds">
              <div className="about--sessions"><img src="/img/sessions.jpg" alt="sessions"/>
                <h2 className="about-heading">10+ Sessions,<br />15+ workshops.</h2>
                <p>Hear from industry leaders and attend targeted workshop sessions to get some hands-on training with the PhoneGap team and other experts from the mobile community.</p>
              </div>
              <div className="about--networking"><img src="/img/network.jpg" alt="network"/>
                <h2 className="about-heading">Spend time with good people with brilliant minds.</h2>
                <p>Network and share ideas with PhoneGap developers from around the world and gain valuable insight for your next project.</p>
              </div>
              <div className="about--skiing"><img src="/img/skiing.jpg" alt="skiing"/>
                <h2 className="about-heading">Ski day for all attendees.</h2>
                <p>What's a trip to Utah without some skiing? After a jam-packed day of learning and coding, wind down on Utah's famous mountains and experience "the greatest snow on Earth".</p><img src="/img/audience.jpg" className="audience-image" alt="audience"/>
              </div>
            </div>
          </section>
          <SpeakersSection speakers={speakers} heading={"Speakers"} pageSlug={"us2016"}/>
          <section className="columns">
            <div className="text-bounds">
              <section>
                <h1>Ski Day</h1>
                <p>After the conference, join us on Saturday, January 30th for a PhoneGap ski day on Utah’s famous mountains. We'll be headed to <a href="http://www.sundanceresort.com/" target="_blank">Sundance Mountain Resort</a>. It's a boutique resort tucked away on 5,000 picturesque acres of wilderness in the shadow of Utah's 12,000-foot Mt. Timpanogos. Join us for skiing, snowshoeing, cross-country skiing, or relax at one of Sundance's many excellent restaurants.</p>
              </section>
              <section>
                <h1>Venue</h1>
                <p>We’re hosting PhoneGap Day at the beautiful Adobe Lehi Office.</p>
                <p><a href="https://goo.gl/maps/4f5admiUNPn">3900 Adobe Way<br />Lehi, UT 84043</a></p>
              </section>
            </div>
          </section>
          <section><img src="/img/lehi-office.jpg" className="full" alt="Adobe Lehi Office"/><a href="https://goo.gl/maps/4f5admiUNPn" className="map" /></section>
          <section className="columns">
            <div className="text-bounds">
              <section>
                <h1>Hotel</h1>
                <p>Need a place to stay in Utah? Here are some recommended hotels in the area:</p>
                <p>The <a href="http://www.marriott.com/hotels/travel/slcli-courtyard-lehi-at-thanksgiving-point/">Courtyard Marriott in Lehi</a> conveniently located right across I-15 from the Adobe Lehi office.</p>
                <p>The <a href="http://www.monaco-saltlakecity.com/">Hotel Monaco</a> in Salt Lake City located 30 minutes north of the Adobe Lehi office.</p>
              </section>
              <section>
                <h1>Sponsors</h1>
                <div><a href="http://www.telerik.com/"><img src="/img/Telerik_Logo.svg" width={300} alt="Telerik logo"/></a></div>
                <div><a href="http://www.mobify.com/"><img src="/img/Mobify_Logo.svg" width={280} alt="Mobify logo"/></a></div>
                <div><a href="http://www.ionicframework.com/"><img src="/img/Ionic_Logo.svg" width={280} alt="Ionic logo"/></a></div>
                <div><a href="http://www.rangle.io/"><img src="/img/Rangle.io_Logo.svg" width={300} alt="Rangle.io logo"/></a></div>
                <div><a href="http://onsen.io/"><img src="/img/OnsenUI_Logo.svg" width={300} alt="OnsenUI logo"/></a></div>
                <div><a href="http://monaca.io/"><img src="/img/Monaca_Logo.svg" width={300} alt="Monaca logo"/></a></div>
                <div><a href="http://www.visualstudio.com/"><img src="/img/VisualStudio_Logo.svg" width={300} alt="VisualStudio logo"/></a></div>
                <div><a href="https://crosswalk-project.org/"><img src="/img/Crosswalk_Project_Logo.svg" width={300} alt="Crosswalk_Project logo"/></a></div>
                <div><a href="http://redhat.com/"><img src="/img/Redhat_Logo.svg" width={300} alt="Redhat logo"/></a></div>
              </section>
            </div>
          </section>
          <section>
            <div className="text-bounds">
              <h1>Code of Conduct</h1>
              <p>Attendees are required to adhere to our <a href="/code-of-conduct.html">code of conduct</a>.</p>
            </div>
          </section>
          <WorkshopsSection workshops={workshops} heading={"Workshops"} pageSlug={"us2016"}/>
        </div>
        <footer />
      </div>
    )
  }
}
