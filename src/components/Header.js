import React, {useState} from "react";


const Header = () => {

    const [isToggled, setIsToggled] = useState(false);

    function handleClick() {
        console.log("HI")
        setIsToggled(!isToggled)
    }
    
    console.log(isToggled)
    return (
        <header className="primary-header flex">
            <div className="logo">
                <h1 className="heading-accent fs-800">The Vortex</h1>
                 <p className="fs-300 fw-700">The place for wibbly-wobbly, timey-wimey stuff</p>
            </div>

            <div className={`${isToggled ? "nav-open" : ""}`}>
                <button
                    className="mobile-nav-toggle"
                    aria-controls="primary-navigation"
                    onClick={() => setIsToggled(!isToggled)}
                    >
                    <span className="hamburger sr-only"></span>
                </button>
                <nav>
                    <ul id="primary-navigation" className="primary-navigation hover-indicators flex">
                        <li onClick={handleClick}>
                            <a className="fs-300 text-secondary" href="/">Home</a>
                        </li>
                        <li onClick={handleClick}>
                            <a className="fs-300 text-secondary" href="/doctors">Doctors</a>
                        </li>
                        <li onClick={handleClick}>
                            <a className="fs-300 text-secondary" href="/companions">Companions</a>
                        </li>
                        <li onClick={handleClick}>
                            <a className="fs-300 text-secondary" href="news">News</a>
                        </li>
                        <li onClick={handleClick}>
                            <a className="fs-300 text-secondary" href="gallery">Gallery</a>
                        </li>
                    </ul>
                </nav>
            </div>
            

        </header>
    )
}

export default Header;