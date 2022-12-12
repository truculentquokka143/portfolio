import "./Image.css"

export default function Image(props: any) {
    return (
        <div className="image" id={props.id}>
            <img src={props.src} alt={props.caption} className={props.name}></img>
            <p>{props.caption}</p>
        </div>
    )
}