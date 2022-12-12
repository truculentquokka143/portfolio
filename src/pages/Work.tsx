import { useEffect } from 'react';
import quokka from "../images/quokka.png";
import "./Work.css";
import Item from "../components/Item";
import lovecast from "../iterative-images/lovecast.jpg";
import karmic from "../images/karmic.png";
import persona from "../images/persona.png";
import development from "../images/development.png";
import quokkacute from "../images/quokkacute.jpeg";

export default function Work() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [])
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <div className="top">

                <div className="about-with-img">
                    <img src={quokkacute} id="quokka-cute-img"></img>
                    <div className="about-container">
                        <div className="about-text">
                            <p className="name-text">Hey there, I'm <span>truculent</span></p>
                            <img className="quokka" src={quokka} />
                            <p className="about-bio">I'm a little marsupial at Brown studying computer science. I have
                                a passion for solving complex user problems by creating modern, intuitive, and delightful experiences for humans
                                in the digital space.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="arrow bounce" onClick={() => {
                    window.scrollTo({ top: 930, left: 0, behavior: 'smooth' });
                }}></div>
            </div>

            <div className="projects">
                <div className="projects-row">
                    <Item
                        name="Iterative Design and Evaluation for Lovecast"
                        img={lovecast}
                        tags={["UI Design", "User Testing", "Feedback Review"]}
                        path="/porfolio/iterative">
                    </Item>
                    <Item
                        name="Karmic Grounds Responsive Redesign"
                        img={karmic}
                        tags={["UI Design", "Accessibility Evaluation", "Web App"]}
                        path="/porfolio/redesign">
                    </Item>
                </div>
                <div className="projects-row">
                    <Item
                        name="React Sorting and Filtering App"
                        img={development}
                        tags={["UI Design", "Technical Exercise", "React"]}
                        path="/porfolio/development">
                    </Item>
                    <Item
                        name="Personas and Storyboarding"
                        img={persona}
                        tags={["UX Research", "User Interview", "Persona Building"]}
                        path="/porfolio/personas">
                    </Item>
                </div>
            </div>
        </div>
    );
}