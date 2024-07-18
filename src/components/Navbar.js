import { Link, useLocation } from "react-router-dom"

import { useState } from "react"
import Sidebar from "./Sidebar"
import SignupPopup from "./SignupPopup"
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    const[showSidebar, setShowSidebar] = useState(false)
    const [userImage, setUserImage] = useState(null)
    const [showSignupPopup, setShowSignupPopup] = useState(false)
    const location = useLocation()
    const links = [ 
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },  
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]
    function closeSidebar(){
        setShowSidebar(false)
    } 
    const handleSignup = (image) => {
        console.log("Setting User Image:", image); // Log the image being set
        setUserImage(image);
        setShowSignupPopup(false);
    }
    return(
        <>
        <div className="navbar container">
           <Link to="/" className="logo">Delecious Recipes<span class="smiley">&#128523;</span></Link>
           <div className="nav-links">
              {links.map(link => (
                <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}
                </Link>
           ))
        }
           </div>
           <div onClick = {() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
           <div className="bar"></div>
           <div className="bar"></div>
           <div className="bar"></div>
           </div>
        </div>   
        {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        {userImage && <img src={userImage} alt="User" className="user-image" />}
        {showSignupPopup && <SignupPopup onClose={() => setShowSignupPopup(false)} onSignup={handleSignup} />}
       </>
    )
}  