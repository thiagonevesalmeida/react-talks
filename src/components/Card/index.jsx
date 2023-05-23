
import './style.css'

export function Card(props) {
    return (
        <div className="card">
            <div>
                <img align="center" src={ props.avatar }/>
                <strong>{ props.name }</strong>
            </div>
            <small>{ props.time }</small>
        </div>
    )
}