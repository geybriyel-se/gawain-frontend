import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        navigate(`/welcome/${username}`)
    }

    return (
        <div className="page">
            <div className="leftPanel">
                <div className="title">
                    <h1 id="logo-title">gawain</h1>
                    <h2 id="logo-subtitle">by elle</h2>
                </div>
            </div>
            <div className="rightPanel">
                <div className="form">
                    <div className="logo">
                        <img className="logoImg" src='/images/gawain-logo.png' alt='gawain-logo'></img>
                    </div>
                    <div className="formTitlePanel">
                        <div className="formTitle">Welcome</div>
                        <div className="formSubtitle">Enter your credentials to login</div>
                    </div>
                    <div className="fields">
                        <div className="username">
                            <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsername}></input>
                        </div>
                        <div className="password">
                            <input type="password" name="password" placeholder="Password" value={password} onChange={handlePassword}></input>
                        </div>
                    </div>
                    <div className="submitButton">
                        <button className="submit" type="submit" name="submit" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
