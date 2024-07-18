import SignupPopup from "./SignupPopup"
import { useState } from "react"

export default function ImproveSkills(){
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
    const handleSignupClick = () => {
        setIsPopupOpen(true);
    }

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    }

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/Images/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve Your Culinary Skills</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn"onClick={handleSignupClick}>signup now</button>
            </div>
            {isPopupOpen && <SignupPopup onClose={handleClosePopup} />}
        </div>
    )
}