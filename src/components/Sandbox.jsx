import './Sandbox.css'

import { Link } from "react-router-dom";


export default function Sandbox() {
    return (
        <>
            <div className="sandboxContainer">
                <img className="sideMenuLogo" src="/images/settings-icon.png" alt="settings"></img>
                <a href='' className="sandboxLink">S A N D B O X</a>
            </div>
        </>
    )
}