import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function SidebarComponent() {
    return (
        <div className="sidebar">
            <div className="sideLogo">
                <h1 className="sideTitle">gawain</h1>
                <h2 className="sideSubtitle">by elle</h2>
            </div>
            <div className="mainContent">
                <div className="sideProfile">
                    <img className="avatarImg" src="/images/avatar.png" alt="avatar"></img>
                    <h3 className="profileName">Migo</h3>
                    <h4 className="profilerUsername">@migo-bansot</h4>
                    <button className="logout">Logout</button>
                </div>
                <div className="sideStats">
                    <div className="allStats">
                        <h1>14</h1>
                        <h3>Overall</h3>
                    </div>
                    <div className="completedStats">
                        <h1>3</h1>
                        <h3>Completed</h3>
                    </div>
                    <div className="pendingStats">
                        <h1>11</h1>
                        <h3>Pending</h3>
                    </div>
                </div>
                <div className="sideMenu">
                    <div className="homeMenu">
                        <img className="sideMenuLogo" src="/images/home-icon.png" alt="home"></img>
                        <Link to='/welcome/Migo' className="sideMenuLabel">Home</Link>
                    </div>
                    <div className="todoMenu">
                        <img className="sideMenuLogo" src="/images/todo-icon.png" alt="todo"></img>
                        <Link to='/list' className="sideMenuLabel">Your Todos</Link>
                    </div>
                    <div className="folderMenu">
                        <img className="sideMenuLogo" src="/images/folder-icon.png" alt="folder"></img>
                        <Link to='' className="sideMenuLabel">Folder</Link>
                    </div>
                    <div className="settingsMenu">
                        <img className="sideMenuLogo" src="/images/settings-icon.png" alt="settings"></img>
                        <Link to='' className="sideMenuLabel">Settings</Link>
                    </div>
                </div>
            </div>
            <div className="sideBottomMenu">
                <h2 className="contactLabel">Contact Us</h2>
            </div>
        </div>
    )
}