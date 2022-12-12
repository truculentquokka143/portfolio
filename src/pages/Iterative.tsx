import { useEffect } from "react";
import Description from "../components/page/Description";
import "./Iterative.css";
import top from "../iterative-images/lovecastmini.png";
import webpage from "../iterative-images/webpage.png";
import asketch from "../iterative-images/april-sketch.jpg";
import jsketch from "../iterative-images/jeremy-sketch.jpg";
import msketch from "../iterative-images/mich-sketch.jpg";
import bsketch from "../iterative-images/brandon-sketch.png";
import lofi from "../iterative-images/lofi.png";
import hifi from "../iterative-images/hifi.gif";
import task1 from "../iterative-images/task1.gif";
import task2 from "../iterative-images/task2.gif";
import task3 from "../iterative-images/task3.gif";
import email from "../iterative-images/email.png";
import logo from "../iterative-images/lovecastlogo.svg";
import Heading from "../components/page/Heading";
import Image from "../components/page/Image";


export default function Iterative() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (
        <div>
            <img className="main-img" src={top}></img>
            <div className="page">
                <h1>Iterative Design and Evaluation</h1>
                <Description
                    roles={["UI Designer"]}
                    team={["4 member team of Brown students"]}
                    tools={["Figma"]}
                    timeline={["Oct. 25 - Nov. 8 2022"]}>
                </Description>

                <div className="section" id="overview">
                    <Heading title="Overview 🔍"></Heading>
                    <p>
                        The purpose of this project was to design an interactive
                        interface for an emerging startup and gain insight into
                        the full process of mocking up and designing a solution
                        to the startup's concept.
                    </p>
                </div>

                <div className="section">
                    <Heading title="Choosing A Startup"></Heading>
                    <Image src={webpage} id="webpage" caption="The homepage of Lovecast's website"></Image>
                    <p>
                        We browsed through startups from a recent <a href="https://www.ycombinator.com/companies?batch=S22&batch=W23&batch=W22&status=Active" target="_blank">
                            YCombinator demo day</a> and decided to create a mobile
                        prototype for <a href="https://www.ycombinator.com/companies/lovecast" target="_blank">Lovecast</a>,
                        an digital livestreaming app for life celebrations such as birthday parties and weddings. Users have the
                        opportunity to document important events and share memories with their
                        guests, regardless of where they are in the world. We chose this startup because
                        we thought Lovecast had an innovative concept with a lot of potential to build upon in terms of design.
                    </p>
                </div>

                <div className="section">
                    <Heading title="Sketches"></Heading>
                    <p>
                        The first step was to create sketches so that we could visualize our ideas,
                        weigh the benefits of alternative designs, and avoid premature decision-making.
                        For this project, we were not allowed to look at any of the startup's existing interfaces,
                        only basing our design on our understanding the startup's concept and the problems that they are trying to solve.
                        Each member in our group created a few quick sketches
                        for the Lovecast app. We focused on three key pages of
                        this app: the home page, livestream
                        page, and invitations page.
                    </p>
                    <div className="img-container" id="first-row-sketch">
                        <Image src={asketch} caption="My sketch" name="sketch"></Image>
                        <Image src={msketch} caption="Michelle's sketch" name="sketch"></Image>
                    </div>

                    <div className="img-container" id="second-row-sketch">
                        <Image src={jsketch} caption="Jeremy's sketch" name="sketch"></Image>
                        <Image src={bsketch} caption="Brandon's sketch" name="sketch"></Image>
                    </div>
                </div>


                <div className="section">
                    <Heading title="Low-fi Wireframe"></Heading>
                    <p>After we finished our sketches, we had a conversation as a group to decide
                        which elements we wanted to keep before making our wireframes.
                    </p>
                    <p>
                        We decided that since one of Lovecast's main features is hosting various events,
                        placing event templates on the home
                        page would ensure that the process of creating events is easy and effortless.
                        Furthermore, we also decided to place the featured upcoming events
                        on the home page so that they would be easily accessible by guests using the app.
                        As for the livestream feature, we decided to mock up a separate livestream page
                        with a participant chat box and emoticon reactions so that guests can interact.
                    </p>

                    <p>Following the discussion, we combined our ideas into one set of wireframes which we made using Figma.</p>

                    <div className="img-container">
                        <Image src={lofi} caption="Lo-fi wireframes"></Image>
                    </div>
                </div>


                <div className="section">
                    <Heading title="Hi-fi Prototype"></Heading>
                    <p>
                        Next, we created an interactive high-fidelity prototype using Figma based on our wireframe.
                        We presented the initial hi-fi prototype mockup during a studio session for our UIUX, where we received
                        some helpful critiques from our peers:
                    </p>

                    <ul id="critique-list">
                        <li>
                            💡 Increase the size of the text on the homepage to improve readability
                        </li>
                        <li>
                            💡 Make it more apparent with CSS that the pre-stream checklist icons are buttons
                            and can be clicked on
                        </li>
                        <li>
                            💡 Increase the color contrast for the "Go Live Button"
                        </li>
                        <li>
                            💡 Make the livestream chat box collapsable
                        </li>
                        <li>
                            💡 Put the "Upload your own image" option
                            before the built-in photos since it makes more
                            sense for users to add their own photos for
                            personal events
                        </li>
                        <li>
                            💡 Including both a "Join" and "Details" button
                            for events that are about to start, as opposed
                            to just "Join"
                        </li>
                    </ul>

                    <p>
                        Taking our peers' critiques into consideration, we
                        updated our <a href="https://www.figma.com/proto/et2UKgn8jVWPlAzlZ7aKa8/LoveCast-Design?node-id=15%3A6&starting-point-node-id=15%3A6" target="_blank">hi-fi prototype</a> and applied the necessary changes.
                    </p>

                    <div className="img-container">
                        <Image src={hifi} caption="Hi-fi prototype" name="hifi"></Image>
                    </div>
                </div>

                <div className="section">
                    <Heading title="User Testing"></Heading>
                    <p>
                        After the peer critique, we went through a second round of feedback by
                        submitting our updated prototype to UserTesting, where
                        three random testers would complete a task that we specify using our mockup
                        and provide feedback on how their experience. Here is a summary
                        of the <a href="https://drive.google.com/drive/folders/1rtdKMIyGPTe5wyfXphkEaamFS7z8MZ-a?usp=share_link" target="_blank">
                            user testing videos</a>.
                    </p>



                    <div className="img-container">
                        <p>
                            The first task was to start the Tea Party event. None
                            of the testers had trouble clicking the "Start"
                            button followed by the "Go Live" button. They all
                            rated the task as 5 (very easy). This was in line with
                            our expectations since we intentionally made the "Start"
                            button for the upcoming events green and right below the
                            event name so that it was easy for users to locate and recognize.
                        </p>
                        <Image src={task1} name="task" caption="Start the Tea Party event"></Image>
                    </div>

                    <div className="img-container">
                        <p>
                            The next task was to check that the camera, audio,
                            and connection settings work. Users were able to successfully
                            open the popup for each setting and also all rated the
                            task as 5 (very easy). This matched our expectations
                            since we had large text numbering the steps to take
                            before going live and button icons to represent each setting option.
                        </p>
                        <Image src={task2} name="task" caption="Check live settings"></Image>
                    </div>


                    <div className="img-container">
                        <p>
                            The last task was to end the stream. All users were able
                            to quickly find the "Exit Stream" button and leave the
                            page. All testers rated the task as 5 (very easy). This
                            aligned with our expectations because we made the
                            "Exit Stream" button red and at the top left of the screen,
                            where people generally expect quit buttons, so they can
                            easily exit the stream.
                        </p>
                        <Image src={task3} name="task" caption="End the stream"></Image>
                    </div>

                    <p>
                        Overall, all users performed how we expected and were able
                        to complete the tasks that we gave them with relative ease.
                        The feedback that we received was positive and there was no unexpected behavior. The
                        unnecessary clicks that testers made (if any) were only
                        due to the fact that they were given a Figma mockup,
                        which users on this site aren't used to testing.
                        This resulted in users trying to click on buttons that
                        we never added functionality to, so the next step
                        would likely be adding more screens and
                        interactive windows to the mockup to make it fully functional.
                    </p>
                </div>

                <div className="section" id="takeaways">
                    <Heading title="Takeaways 📝"></Heading>
                    <p>
                        Designing the Lovecast app from scratch gave us the opportunity to
                        not only explore various design choices, but also
                        the chance to iteratively improve upon one to acheive an
                        optimal version. There are many nuances that
                        come with creating an intuitive interface for users,
                        making it imperative to receive feedback and
                        thoroughly test the design to continue improving upon it.
                        Throughout the project, I enjoyed collaborating with my wonderful team
                        to bring our vision for Lovecast to life, and at times it felt like we were
                        building a startup ourselves!
                    </p>
                </div>

                <div className="section">
                    <Heading title="Follow Up"></Heading>
                    <p>
                        After completing our final hi-fi prototype, we reached out to Jinjing Liang and Neil
                        Parker, the amazing founders of Lovecast, to check out our design and share their thoughts.
                        To our surprise, Neil responded to our email and shared some lovely words. How cool!
                    </p>
                    <div className="img-container">
                        <Image src={email} caption="Neil's email" name="email"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

