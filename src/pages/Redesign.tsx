import { useEffect } from "react";
import "./Redesign.css";
import Description from "../components/page/Description";
import Heading from "../components/page/Heading";
import top from "../redesign-images/karmicmini.png";
import karmicold from "../redesign-images/karmic-old.gif";
import errors from "../redesign-images/errors.png";
import phonelo1 from "../redesign-images/lowfi-phone-1.jpg";
import phonelo2 from "../redesign-images/lowfi-phone-1.jpg";
import tabletlo1 from "../redesign-images/lowfi-ipad-1.jpg";
import tabletlo2 from "../redesign-images/lowfi-ipad-1.jpg";
import desktoplo from "../redesign-images/lowfi-comp.jpg";
import styleguide from "../redesign-images/style-guide.jpg";
import phonehi from "../redesign-images/hifi-phone.jpg";
import tablethi from "../redesign-images/hifi-ipad.jpg";
import desktophi from "../redesign-images/hifi-comp.jpg";
import karmicnew from "../redesign-images/karmic-new.gif";
import Image from "../components/page/Image";



export default function Redesign() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (
        <div>
            <img className="main-img" src={top}></img>

            <div className="page">
                <h1>Karmic Grounds Responsive Redesign</h1>
                <Description
                    roles={["UI Designer"]}
                    team={["Individual"]}
                    tools={["React", "Figma"]}
                    timeline={["Oct. 4 - 18 2022"]}>
                </Description>

                <div className="section" id="overview">
                    <Heading title="Overview 🔍"></Heading>
                    <p>For this project, I analyzed and identified flaws in an
                        existing interface and designed a new interface to address those flaws.
                        I created low-fidelity and high-fidelity prototypes of the redesign
                        for various screen sizes and built a responsive website based
                        on those prototypes.
                    </p>
                </div>

                <div className="section">
                    <Heading title="Picking a Webpage"></Heading>
                    <p>
                        I decided to redesign the homepage of <a href="https://karmicgrounds.com" target="_blank">Karmic Grounds</a>,
                        which is a cute little coffee shop in my hometown. I chose to redesign this website because when I first visited, I noticed that I
                        couldn't access the menu anywhere on the page. This frustrated me because I originally visited the website
                        to see the menu, and I expected it to be there since Karmic Grounds is a coffee shop that sells beverages. Also, as I spent more time on the website, I felt like its overall
                        appearance did not align with the modern and clean concept that the company embodies.
                        There were many other minor issues that I noticed, and as a budding UIUX designer, I saw tremendous potential for improvement.
                        I wanted to use my skills and knowledge to challenge myself to address the flaws I found,
                        giving Karmic Grounds the website that it deserves.
                    </p>
                    <div className="img-container">
                        <Image src={karmicold} caption="Karmic Ground's Website"></Image>
                    </div>
                </div>

                <div className="section">
                    <Heading title="Finding Problems"></Heading>
                    <p> I analyzed the usability of the web page using the usuability principles.</p>
                    <ul id="usability">
                        <li>🌱 <span>Efficiency</span>: To check out the menu, users must download
                            the Karmic Grounds app or select the order online option, which
                            takes them to a different website. This is inefficient because
                            a user can't just go directly to the main website to check out
                            the menu and may get discouraged by the need to do extra steps
                            just to see what the shop offers. Once users know that they need
                            to leave the website to browse the menu, users will recognize that they
                            don't even need to visit website anymore and favor using the app, which shows the
                            failure of the website.
                        </li>

                        <li>🌱 <span>Learnability</span>: The first time users encounter the website,
                            they may not notice the menu icon located at the top left
                            corner of the page. If they fail to notice it, they may
                            just think that the website is just one scrolling page,
                            which makes it difficult and frustrating to jump to a
                            specific section. Also, there is no menu section, which
                            makes the basic task of viewing the menu impossible
                            unless they choose to download the Karmic Grounds app.
                        </li>

                        <li>🌱 <span>Memorability</span>: When users revisit the website after some time and want to view the menu,
                            they will recognize immediately that the menu is not provided
                            on the website and immediately leave.
                        </li>

                        <li>🌱 <span>Satisfaction</span>: The website's background is black with an
                            intricate pattern, which makes reading the text a bit
                            difficult at times.
                            Also there is a sticky header bar that stays as you scroll advertising
                            the Karmic Grounds app, which gives the impression that the
                            website is just a promotional page for the app and not a standalone website representing Karmic Grounds.
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <Heading title="Overview"></Heading>
                    <p > I then used <a href="https://wave.webaim.org" target="_blank">WebAIM WAIVE</a> to detect possible accessibility problems.</p>
                    <ul id="accessibility">
                        <li>⚠️ There are 11 images missing alternative text, which means that almost every image on the
                            website lacks text description which is crucial for users using a screen reader or for when
                            the image fails to load.
                        </li>
                        <li>⚠️ There are 7 alerts about skipped headings or possible headings,
                            which indicates that the visual hierarchy is compromised.
                        </li>
                    </ul>

                    <div className="img-container">
                        <Image src={errors} caption="WebAIM WAIVE report for the Karmic Grounds homepage" name="errors"></Image>
                    </div>

                    <p>I agree with the report in that the headings are not clearly distinguished.
                        For instance,
                        for the experience section, the heading “The Experience” is the same size as
                        the body for the section, which is not ideal. The only distinguishing trait
                        between headers and the description is whether or not it is in caps or not, which
                        poses visual hierarchy problems.
                    </p>
                </div>

                <div className="section" >
                    <Heading title="Usability Problems: Summary"></Heading>
                    <p>The current Karmic Grounds website seems like an advertisement for the
                        Karmic Grounds app, which has the menu, information about the rewards program,
                        news and offers, and ordering options. The website isn't on par with the app and
                        doesn't stand alone as its own application that customers can use to discover Karmic
                        Ground's products (specifically their menu items). There are also some underlying accessibility issues with the interface that should be fixed to
                        make the experience enjoyable for all users.
                    </p>
                    <p id="goal">
                        Based on these concerns, my goal was to improve the design of the Karmic Grounds homepage
                        so that it can stand on its own as a website representing the Karmic Grounds brand the products it has to offers.
                    </p>
                </div>

                <div className="section">
                    <Heading title="Low-fidelity Wireframing"></Heading>
                    <p>I created a total of 3 wireframes for the homepage screen, one for each of the screen sizes (mobile, tablet, desktop). </p>
                    <div className="img-container" id="lo-row1">
                        <Image src={phonelo1} caption="Phone lo-fi top of page"></Image>
                        <Image src={phonelo2} caption="Phone lo-fi bottom of page"></Image>
                    </div>
                    <div className="img-container" id="lo-row2">
                        <Image src={tabletlo1} caption="Tablet lo-fi top of page" name="tablet-lo"></Image>
                    </div>
                    <div className="img-container" id="lo-row2">
                        <Image src={tabletlo2} caption="Tablet lo-fi bottom of page" name="tablet-lo"></Image>
                    </div>
                    <div className="img-container" id="lo-row3">
                        <Image src={desktoplo} caption="Desktop lo-fi protoype" name="desktop-lo"></Image>
                    </div>
                </div>

                <div className="section">
                    <Heading title="Visual Design Style Guide"></Heading>
                    <p>Before starting my hi-fi prototypes, I created a visual design style guide that displays the main colors,
                        typography, and reusable components' different states (buttons on hover, click, etc.).
                    </p>
                    <div className="img-container">
                        <Image src={styleguide} caption="Visual design style guide" name="style-guide"></Image>
                    </div>

                </div>

                <div className="section">
                    <Heading title="High-fidelity Wireframing"></Heading>
                    <p>I used Figma to create a
                        total of 3 high-fidelity prototypes for the homepage, one for
                        each of the screen sizes (mobile, tablet, desktop).</p>
                    <div className="img-container">
                        <Image src={phonehi} caption="Phone hi-fi prototype"></Image>
                    </div>
                    <div className="img-container">
                        <Image src={tablethi} caption="Tablet hi-fi prototype"></Image>
                    </div>
                    <div className="img-container">
                        <Image src={desktophi} caption="Desktop hi-fi prototype"></Image>
                    </div>
                </div>

                <div className="section">
                    <Heading title="Final Redesign"></Heading>
                    <p>Finally, using the high-fidelity prototypes, I created
                        the <a href="https://truculentquokka143.github.io/karmic-grounds/" target="_blank"> redesigned homepage</a> using
                        HTML and CSS!</p>
                    <div className="img-container">
                        <Image src={karmicnew} caption="Redesigned Karmic Grounds website"></Image>
                    </div>

                </div>

                <div className="section" id="takeaways">
                    <Heading title="Takeaways 📝"></Heading>
                    <p>I had a great time reimagining the homepage for one of my favorites
                        places to visit when I'm back home. Doing research for Karmic Grounds,
                        gathering images, and creating the carousel slides were some of the highlights
                        of this project for me. The hardest part was perhaps making the page responsive for different screen sizes.
                        I don't think my page is perfectly responsive, but I did learn some new skills such as
                        making breakpoints and using responsive units for CSS properties. I hope
                        to continue developing these skills in future projects!
                    </p>
                </div>

            </div>
        </div>
    )
}