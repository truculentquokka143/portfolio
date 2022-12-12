import "./Heading.css"

export default function Heading(props: any) {
    return (
        <div className="section-heading">
            <h2>{props.title}</h2>
        </div>
    )
}