import './Navbar.css'

function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="logo-text">
                <button className="button">DH</button>
                <h1 className="company-name">DevHub</h1>
            </div>
            <div>
                <button className="toggle">🌙</button>
            </div>
        </div>
        </>
    )
}

export default Navbar