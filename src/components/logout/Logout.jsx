import './Logout.css'

export default function Logout() {
    return (
        <div className='logoutPage'>
            <div className='logoutHeader'>
                <div className="sideLogo">
                    <h1 className="sideTitle">gawain</h1>
                    <h2 className="sideSubtitle">by elle</h2>
                </div>
            </div>
            <div className='logoutContent'>
                <div className='contentContainer'>
                    <img src='/images/gawain-logo.png' className='logoutLogo'></img>
                    <h1 className='logoutTitle'>Bye!</h1>
                    <h2 className='logoutSubtitle'>You have logged out.</h2>
                </div>
            </div>
            <div className='logoutFooter'>
                <div className="footerYear">
                    <h1 className="year">© 2023</h1>
                </div>
            </div>
        </div>
    )
}