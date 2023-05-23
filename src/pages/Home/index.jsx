// import state
import { useState, useEffect } from 'react'

// import local styles
import './style.css'

// import component (Card)
import { Card } from '../../components/Card'


export function Home() {
    const [newCard, setNewCard] = useState([])
    const [user, setUser] = useState({avatar:""})

    function addUser(e) {
        e.preventDefault()

        const newUser = {
            name: document.querySelector('input').value,
            avatar: user.avatar,
            time: new Date().toLocaleTimeString('us', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
        }

        setNewCard(prevState => [...prevState, newUser])
        document.querySelector('input').value = ''
    }

    useEffect(() => {
        let userLogin = document.querySelector('input').value
        fetch('https://api.github.com/users/' + userLogin)
        .then(response => response.json())
        .then(data => {
            setUser({
                avatar: data.avatar_url
            })
        })
        .catch(error => console.error(error))
    }, [newCard])

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
                newCard.map(element => 
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