import { useState } from 'react'
import './style.css'
import { Card } from '../../components/Card'

export function Home() {
    // const [profileName, setProfileName] = useState('')
    const [newCard, setNewCard] = useState([])

    function addUser(e) {
        const inputValue = document.querySelector('input').value
        const profileName = inputValue.toLowerCase().trim()
        e.preventDefault()

        fetch('https://api.github.com/users/' + profileName)
        .then(response => response.json())
        .then(data => {

            const newUser = {
            name: profileName === ''
                ? 'visiter' + (newCard.length + 1)
                : profileName,
            avatar: data
                ?.avatar_url 
                ?? "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
            time: new Date().toLocaleTimeString('us', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            })
            }

            setNewCard(prevState => [...prevState, newUser])
            document.querySelector('input').value = ''
        })
        .catch(error => {
            console.error(error)
            alert("🚫 Profile not register in GitHub")
        })
    }

    return (
        <div className="container">
        <header>
            <div>
            <h1>Tech Talks</h1>
            </div>
            <div>
            <strong>ReactHub S.A</strong>
            <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
            </div>
        </header>
        <form onSubmit={event => addUser(event)}>
            <input
            type="text"
            placeholder="Register with your GitHub login"
            // onChange={event => setProfileName(event.target.value)}
            />
            <button type="submit">
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