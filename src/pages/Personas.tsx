import { useEffect } from "react";
import "./Personas.css";
import top from "../personas-images/personamini.png";
import Description from "../components/page/Description";
import Heading from "../components/page/Heading";
import Image from "../components/page/Image";
import basic from "../personas-images/basic_mode.jpg";
import advanced from "../personas-images/advanced_mode.jpg";
import control from "../personas-images/display_controls.jpg";
import routing from "../personas-images/display_routing.jpg";
import flow from "../personas-images/flow_diagram.jpg";
import persona1 from "../personas-images/persona1.png";
import persona2 from "../personas-images/persona2.png";
import storyboard from "../personas-images/storyboard.jpg";

export default function Personas() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (
        <div>
            <img className="main-img" src={top}></img>
            <div className="page">
                <h1>Personas and Storyboarding</h1>
                <Description
                    roles={["UX Researcher"]}
                    team={["Individual"]}
                    tools={["Storyboard"]}
                    timeline={["Sept. 20 - Oct. 4 2022"]}>
                </Description>

                <div className="section" id="overview">
                    <Heading title="Overview 🔍"></Heading>
                    <p>For this assignment, we observed real users interacting with a
                        public interface. We interviewed these individuals about their
                        experiences, designed personas based on these users, and
                        created a storyboard for one of the personas.
                    </p>
                </div>

                <div className="section">
                    <Heading title="Interface"></Heading>
                    <p>
                        For my public interface, I chose the display control panel found
                        in most CIT (the computer science building at Brown) classrooms. This panel is usually mounted to the wall
                        and controls the projector and TV monitors in the room that a user can connect their computer to. It's
                        often used by professors for presenting slides during class and by
                        students for personal use outside of class.
                    </p>
                    <p>
                        The default homepage for the display control panel is the basic mode page.
                        On this page, users can select the primary display mode. There is also an advanced mode
                        page for specific display settings.
                    </p>
                    <div className="img-container">
                        <Image src={basic} caption="Basic mode homepage"></Image>
                        <Image src={advanced} caption="Advanced mode homepage"></Image>
                    </div>
                    <p>
                        The advanced mode page has 4 specific settings controls, 2 of which are important for connecting and
                        displaying the contents on a laptop.
                        On the display controls page, users can turn the projector on, lower the projector screen, and turn the monitors on.
                        On the audio/visual routing display page, users can select the display source and destination.
                    </p>
                    <div className="img-container">
                        <Image src={control} caption="Display control panel"></Image>
                        <Image src={routing} caption="Display routing panel"></Image>
                    </div>
                    <p>
                        Together, all of these components make up the display control panel. A user must visit each page and select
                        the right settings to successfully connect their computer to the projector screen.
                    </p>
                    <div className="img-container">
                        <Image src={flow} caption="Flow diagram of the different screens"></Image>
                    </div>

                </div>

                <div className="section">
                    <Heading title="Observations"></Heading>
                    <p>I observed 3 users using the display control panel to
                        connect their computers to the projector screen. The main takeaways were:
                    </p>
                    <ul id="observations">
                        <li>📌 Not all users immediately clicked on the advanced settings
                            option, which was the correct next step. There was noticeably
                            a few seconds of hesitation among all users before they clicked on the advanced settings icon located at the top right of the screen.
                        </li>
                        <li>📌 On the display control screen, all users had no trouble turning the projector on and
                            setting the projector screen to the down position. Some users also turned the monitor on,
                            which was not necessary (the monitor on button refers to the TV monitor, not the projector in any way).
                        </li>
                        <li>📌 On the audio/visual routing page, users followed the two step instructions on the screen,
                            working from top to bottom. For the select your source step, users correctly tapped the
                            laptop option. For the assign your destination step, users showed slight hesitation.
                            Users read through the different options for a few seconds, then tapped the projector
                            option. They kept tapping it until it toggled to the laptop option. Some users also
                            set the monitor option to laptop, which was not necessary.
                        </li>
                        <li>📌 All users used the back button on the display control and audio/visual
                            screens to return to the advanced settings homepage, rather than clicking
                            on the advanced settings icon again.
                        </li>
                    </ul>
                </div>

                <div className="section" id="questions">
                    <Heading title="Questions"></Heading>
                    <p>After observing the users, I asked them 5 questions each about their experience.</p>
                    <ol id="questions">
                        <li className="question"> What is your first impression of the basic mode home screen?</li>
                            <ul className="list-items">
                                <li>Most users felt that the home screen was simple and easy to use.</li>
                                <li>Users said that since there were only 3 main options, each with an icon and a clear labels, selecting the laptop option was a clear first step.</li>
                                <li>Some users noted that the interface was similar to the interface for Apple devices.</li>
                            </ul>
                        


                        <li className="question">What do you like about the interface? </li>
                            <ul className="list-items">
                                <li>All users liked how there were icons for each of the buttons and expressed that the icons were helpful for helping them select the right button. </li>
                                <li>Users liked that the buttons turned blue or green to indicate that it was pressed.</li>
                                <li>Users responded positively to the clean and simple look of the UI.
                                </li>
                            </ul>
                       

                        <li className="question">What do you dislike about the interface?</li>
                            <ul className="list-items">
                                <li>Some users claimed that the advanced settings button was too small and tucked away, so it was not immediately obvious that a
                                    user has to click on the advanced settings button to progress.</li>
                                <li>Some users pointed out the empty space surrounding the three main icons on the basic mode homepage and said that the icons could be
                                    bigger to fill the empty space.</li>
                                <li>One user disliked the distinction between basic mode and advanced mode and said that it was misleading because a user must use
                                    both setting modes to connect their computer.</li>
                            </ul>
                        
                        <li className="question">Is there anything that you would change regarding the interface? </li>
                            <ul className="list-items">
                                <li>Users would add an instruction on the basic settings homepage to direct others towards the advanced settings mode.</li>
                                <li>Otherwise, users suggested merging the basic and advanced settings homepages, since a user would need to visit both anyway.</li>
                                <li>Users would make the main three icons on the basic settings homepage bigger to fill the empty space.</li>
                            </ul>
                       

                        <li className="question">How did the process of connecting your computer to the display differ from your expectations?</li>
                            <ul className="list-items">
                                <li>Some users said that they didn't expect the interface for the display control panel to be similar
                                    to the UI for Apple products. It was more familiar and modern than they expected.</li>
                                <li>Some users said that the process was easier than they initially thought and admitted that
                                    they since they had connected once, they can easily do it again in the future.</li>
                                <li>Users who explored the display panel further said that they did not expect there to be so many
                                    other settings that could be changed from the panel, such as adjusting the window shades
                                    and starting a Zoom room.</li>
                            </ul>
                    </ol>

                </div>

                <div className="section">
                    <Heading title="Personas"></Heading>
                    <ul id="personas">
                        <li><span>Persona 1</span> represents a new computer science professor at Brown who is teaching his first class in CIT 241. He wants
                            to connect his computer to the projector so he can present his slides for the class. The professor is not too familiar
                            with the process of connecting his computer to an externel display since he did not have to do it at his old job, and
                            he is not too familiar with the interface found on modern devices. This given persona represents the new
                            professors who have to use the display control panel to connect their laptop
                        </li>
                    </ul>
                    <ul>
                        <li><span>Persona 2</span> represents a junior at Brown studying CS. She goes to a classroom in the CIT with a group of friends to work on a project
                            and wants to connect her computer to the display to share her screen. The student has never used the display control
                            panel before, but she has prior experience connecting her computer to other devices and is familiar with modern interfaces since
                            she owns several Apple devices.
                            This given persona represents the college students who use the display control panel to connect their laptop.
                        </li>
                    </ul>
                    <div className="img-container" id="persona1">
                        <Image src={persona1} caption="Persona 1" name="persona"></Image>
                    </div>
                    <div className="img-container" id="persona2">
                        <Image src={persona2} caption="Persona 2" name="persona"></Image>
                    </div>


                </div>

                <div className="section">
                    <Heading title="Storyboard"></Heading>
                    <p>Finally, I selected one of the personas and created
                        a digital storyboard depicting the persona's user journey
                        using the interface from start to end. I chose Persona 2, the Brown student studying CS,
                        because I felt that I could more accurately portray a student's journey using the
                        display panel since I am a student as well and have gone through a similar experience.</p>
                    <div className="img-container">
                        <Image src={storyboard} caption="Storyboard for Persona 2"></Image>
                    </div>
                </div>

                <div className="section" id="takeaways">
                    <Heading title="Takeaways 📝"></Heading>
                    <p>As the first project I had to complete for my UIUX class,
                        I thought this was a great exercise for understanding users,
                        the ones who will use ultimately use the products that I design.
                        Stepping into someone else's shoes and imagining their thoughts
                        and experiences allows me to become a more conscious designer
                        and approach my projects with the right questions in mind.
                    </p>
                </div>

            </div>
        </div>
    )
}
