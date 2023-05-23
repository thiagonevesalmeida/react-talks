
// importing local styles
import './styles.css'

export function Home() {
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
            <form>
                <input
                type="text" 
                placeholder="Register with your GitHub login"
                />
                <button type="button">
                    Check in
                </button>
            </form>
        </div>
    )
}