
import './style.css'

export function Card({avatar, name, time}) {
    return (
        <div className="card">
            <div>
                <img align="center" src={avatar}/>
                <strong>{name}</strong>
            </div>
            <small>{time}</small>
        </div>
    )
}