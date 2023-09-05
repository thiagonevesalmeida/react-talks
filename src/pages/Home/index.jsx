import { useState } from 'react'
import './style.css'
import { Card } from '../../components/Card'

export const Home = () => {
    const [newGuest, setNewGuest] = useState([])

    const addUser = async (e) => {
        e.preventDefault()

        const profileName = document.querySelector('input').value.trim().toLowerCase()

        try {
            const response = await fetch(`https://api.github.com/users/${profileName}`)

            if (!response.ok) {
                alert("Profile not registered on GitHub 🙀")
            } else {
                const isNewGuest = newGuest.find(users => users.name === profileName)
                if(isNewGuest) {
                    alert('🚫 Profile already checked-in')
                    return
                }
            } 

            const data = await response.json()
            const newUser = {
                    name: profileName === ''
                        ?'Guest'
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
    
            setNewGuest(prevState => [...prevState, newUser])

            alert(`✅ ${profileName} Welcome to Tech Talks!`)
            document.querySelector('input').value = ''

        } catch(error) {
            console.error(error)
        }
    };

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
            <form onSubmit={addUser}>
                <input
                type="text"
                placeholder="Register with your GitHub login"
                />
                <button type="submit">
                    Check in
                </button>
            </form>
            
            {newGuest.map(element =>
                <Card
                    key={element.time}
                    avatar={element.avatar}
                    name={element.name}
                    time={element.time}
                />
                
            )}
        </div>
    )
}
