import { Link } from "react-router-dom";
import logo from "../images/TQ.png";
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/portfolio"><img src={logo} alt="logo"></img></Link>
            </div>
            <div>
                <ol>
                    <li className="tab">
                        <Link to="/portfolio">work</Link>
                    </li>
                    <li className="tab">
                        <Link to="/porfolio/about">about</Link>
                    </li>
                    <li className="tab">
                        <Link to="/porfolio/resume">resume</Link>
                    </li>
                </ol>
            </div>
        </div>
    );
};


