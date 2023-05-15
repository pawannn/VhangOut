import Github from "../assets/github.png";
import Instagram from "../assets/instagram-new.png";
import linkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";

const Aboutdev = () => {
    return (
        <div className="aboutdev-container">
            <h1>About The Dev</h1>
            <div className="about-content">
            <p>Hi, This website is a project created & maintained by <a href="https://linktr.ee/pawankalyan11" target="_blank">@pawan</a>. A student coding for fun.</p>
            <p>Thankyou for your time!</p>
            </div>
            <div className="about-footer">
                <img src = {Github} alt = "Github" />
                <img src = {Instagram} alt = "Instagram" />
                <img src = {Twitter} alt = "LinkedIn" />
                <img src = {linkedIn} alt = "Twitter" />
            </div>
        </div>
    )
}

export default Aboutdev