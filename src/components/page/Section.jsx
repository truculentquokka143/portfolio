import "./Section.css"

export default function Section(props) {
    return (
        <div className="section">
            <h2 className="section-title">{props.title}</h2>
            <p className="section-body">{props.body}</p>
        </div>
    )
}