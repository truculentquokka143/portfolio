import "./Item.css"
import { Link } from "react-router-dom";

export default function Item(props: any) {
    return (
        <div className="item" id={props.id}>
            <div className="item-image">
            <Link to={props.path}>
                <img src={props.img} />
            </Link>

            </div>
            <Link to={props.path}>
                <p className="project-title">{props.name}</p>
            </Link>

            <div className="item-tags">
                {props.tags.map((tag: any) => <button className="tag">{tag}</button>)}
            </div>
        </div>
    )
}