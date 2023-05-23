import React from 'react'
import ReactDOM from 'react-dom/client'

//global css
import './styles/global.css'

//importing Home/app page
import { Home } from './pages/Home'

// importing App
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Home/>
    </React.StrictMode>
)
