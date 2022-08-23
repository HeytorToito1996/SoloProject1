import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
export default function Header(){
    return(
        <header>
            <div className="photo"></div>
            <div className="info">
                <h3>Heytor Toito de Carvalho</h3>
                <p><span>Front-End Developer</span></p>
                <p><span>heytortoito.website</span></p>
                <div className="buttons">
                    <div className="button-item"><button className="email-button">E-Mail</button></div>
                    <div className="button-item"><button className="linkedin-button"><FontAwesomeIcon icon={faLinkedin} size="1x"/>LinkedIn</button></div>
                </div>
            </div>
        </header>
    )
}