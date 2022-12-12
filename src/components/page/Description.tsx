import "./Description.css"

export default function Description(props: any) {
    return (
        <div className="description">
            <div className="role">
                <p className="title">Role</p>
                <p className="lines">
                    {props.roles.map((role: any) => <p>{role}</p>)}
                </p>
            </div>

            <div className="team">
                <p className="title">Team</p>
                <p className="lines">
                    {props.team.map((team: any) => <p>{team}</p>)}
                </p>
            </div>

            <div className="tools">
                <p className="title">Tools</p>
                <p className="lines">
                    {props.tools.map((tool: any) => <p>{tool}</p>)}
                </p>
            </div>

            <div className="timeline">
                <p className="title">Timeline</p>
                <p className="lines">
                    {props.timeline.map((time: any) => <p>{time}</p>)}
                </p>
            </div>
        </div>)
}