import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function SidebarComponent() {
    return (
        <div className="sidebar">
            <div className="sidebarLogo">
                <h1 className="sideTitle">gawain</h1>
                <h2 className="sideSubtitle">by elle</h2>
            </div>
            <div className="mainContent">
                <div className="sideProfile">
                    <img className="avatarImg" src="/images/avatar.png" alt="avatar"></img>
                    <h3 className="profileName">Migo</h3>
                    <h4 className="profilerUsername">@migo-bansot</h4>
                    <Link to='/logout' className='logout'>Logout</Link>
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
                    <button className="homeMenu menuItems">
                        <img className="sideMenuLogo" src="/images/home-icon.png" alt="home"></img>
                        <img className="sideMenuLogo hoverMenuIcon" src="/images/dark-home-icon.png" alt="home"></img>
                        <Link to='/welcome/Migo' className="sideMenuLabel">Home</Link>
                    </button>
                    <button className="todoMenu menuItems">
                        <img className="sideMenuLogo" src="/images/todo-icon.png" alt="todo"></img>
                        <img className="sideMenuLogo hoverMenuIcon" src="/images/dark-todo-icon.png" alt="todo"></img>
                        <Link to='/list' className="sideMenuLabel">Your Todos</Link>
                    </button>
                    <button className="folderMenu menuItems">
                        <img className="sideMenuLogo" src="/images/folder-icon.png" alt="folder"></img>
                        <img className="sideMenuLogo hoverMenuIcon" src="/images/dark-folder-icon.png" alt="folder"></img>
                        <Link to='' className="sideMenuLabel">Folder</Link>
                    </button>
                    <button className="settingsMenu menuItems">
                        <img className="sideMenuLogo" src="/images/settings-icon.png" alt="settings"></img>
                        <img className="sideMenuLogo hoverMenuIcon" src="/images/dark-settings-icon.png" alt="settings"></img>
                        <Link to='' className="sideMenuLabel">Settings</Link>
                    </button>
                </div>
            </div>
            <div className="sideBottomMenu">
                <h2 className="contactLabel">Contact Us</h2>
            </div>
        </div>
    )
}