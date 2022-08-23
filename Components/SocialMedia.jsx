import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{
    faYoutube,faFacebook,faTwitter,faInstagram,faGithub
}from "@fortawesome/free-brands-svg-icons"

export default function SocialMedia(){
    return(
        <div className="social-container">
            <ul>
                <li className="youtube social"><FontAwesomeIcon icon={faGithub} size="2x"/></li>
                <li className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x"/></li>
                <li className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x"/></li>
                <li className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x"/></li>
            </ul>
        </div>
    )
}