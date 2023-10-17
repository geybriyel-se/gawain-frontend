
export default function SidebarComponent() {
    return (
        <div className="sidebar">
            <div className="sideLogo">
                <h1 className="sideTitle">gawain</h1>
                <h2 className="sideSubtitle">by elle</h2>
            </div>
            <div className="mainContent">
                <div className="sideProfile">
                    <img className="avatarImg" src="/images/avatar.png"></img>
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
                        <img className="sideMenuLogo" src="/images/home-icon.png"></img>
                        <h2 className="sideMenuLabel">Home</h2>
                    </div>
                    <div className="todoMenu">
                        <img className="sideMenuLogo" src="/images/todo-icon.png"></img>
                        <h2 className="sideMenuLabel">Your Todos</h2>
                    </div>
                    <div className="folderMenu">
                        <img className="sideMenuLogo" src="/images/folder-icon.png"></img>
                        <h2 className="sideMenuLabel">Folder</h2>
                    </div>
                    <div className="settingsMenu">
                        <img className="sideMenuLogo" src="/images/settings-icon.png"></img>
                        <h2 className="sideMenuLabel">Settings</h2>
                    </div>
                </div>
            </div>
            <div className="sideBottomMenu">
                <h2 className="contactLabel">Contact Us</h2>
            </div>
        </div>
    )
}