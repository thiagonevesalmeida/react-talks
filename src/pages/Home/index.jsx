// import state
import { useState } from 'react'

// import local styles
import './style.css'

// import component (Card)
import { Card } from '../../components/Card'


export function Home() {
    const [users, setUsers] = useState([])

    function addUser(e) {
        e.preventDefault()

        const newUser = {
            name: document.querySelector('input').value,
            avatar: "https://avatars.githubusercontent.com/u/110680813?v=4",
            time: new Date().toLocaleTimeString('us')
        }

        setUsers(previus => [...previus, newUser])
        document.querySelector('input').value = ''
    }

    return (
        <div className="container">
            <header>
                <div>
                    <h1>Tech Talks</h1>
                </div>
                <div>
                    <strong>ReactHub S.A</strong>
                    <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
                </div>
            </header>
            <form onSubmit = {event => addUser(event)}>
                <input
                type="text" 
                placeholder="Register with your GitHub login"
                />
                <button>
                    Check in
                </button>
            </form>

            {
                users.map(element => 
                    <Card 
                        key={element.time}
                        avatar={element.avatar} 
                        name={element.name} 
                        time={element.time}
                    />
                )
            }
        </div>
    )
}