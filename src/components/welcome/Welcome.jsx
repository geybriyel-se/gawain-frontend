import './Welcome.css'

import { useParams } from "react-router-dom"

export default function WelcomeComponent() {

    const { username } = useParams()

    return (
        <div className="welcomeContainer">
            <h1 id="welcomeHello">Hello, { username }</h1>
            <h2 id="welcomeTo">Welcome to <span id="gawain">gawain</span></h2>
            <h3 id="description">the app for your memory gap</h3>
        </div>
    )
}