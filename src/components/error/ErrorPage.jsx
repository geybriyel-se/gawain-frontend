import './ErrorPage.css'

export default function ErrorPage() {
    return (
        <div className='errorContent'>
            <h1 className="errorTitle">UH-OH!</h1>
            <h2 className='errorSubtitle'>The page you are trying to access is not found.</h2>
            <h3 className='errorCode'>Error code: 404</h3>
        </div>
    )
}