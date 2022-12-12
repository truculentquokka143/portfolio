import { useEffect } from 'react';
import quokkacute from "../images/quokkacute.jpeg";
import Heading from "../components/page/Heading";
import "./About.css"

export default function About() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    return (
        <div className="about-page">

            <div className="about-me-container">
                <img src={quokkacute} id="quokka-img"></img>

                <div className="section">
                    <Heading title="About me"></Heading>
                    <p> Nice to meet you! My name is truculentquokka and I am 
                        currently a junior at Brown studying computer science on visual
                        computing and AI/ML pathways.
                        I am originally from Frisco, Texas, but I have been learning to enjoy
                        the colder days in the Northeast since I am here for school.
                    </p>
                    <p>
                        Since I began my CS journey freshman year in college, 
                        I have had the fortunate opportunity of exploring all different fields of CS, from software and graphics to
                        systems and data science. As a result, I have grown so much as a computer scientist, and I am still learning 
                        new things and discovering what I like. 
                    </p>
                    <p>In my free time, I enjoy learning about walkable cities and
                        transit-oriented development. I also enjoy learning
                        new art-making software and recently, I have been exploring making 3D digital art using Blender!
                    </p>
                </div>

            </div>

        </div >
    );
}