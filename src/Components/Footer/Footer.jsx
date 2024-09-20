import { Link } from "react-router-dom"
import "../Footer/Footer.css"
function Footer() {
    return (
        <>
            <div id="Footer">
                
                <div id="Logo">
                    <h4>Funiro.</h4>
                    <p className="adress">400 University Drive Suite 200 Coral Gables,
                        FL 33134 USA</p>
                </div>

                <div className="LabelsHeader">
                    <label>Links</label>
                    <ul>
                        <li className="Item">
                            <Link to="/Home" className="Item" >Home</Link>
                        </li>
                        <li className="Item">
                            <Link to="/Shop" className="Item">Shop</Link>
                        </li>
                        <li className="Item">
                            <Link to="/Contact" className="Item">Contact</Link>
                        </li>
                        <li className="Item">
                            About
                        </li>
                    </ul>
                </div>
                
                <div className="LabelsHeader">
                    <label>Help</label>
                    <ul>
                        <li>
                            Payment Options
                        </li>
                        <li>
                            Returns
                        </li>
                        <li>
                            Privacy Policies
                        </li>
                    </ul>
                </div>
                
                <div id="NewLetter">
                    <label>New Letter</label>
                    <div id="InputField">
                    <input type="text" placeholder="Type your E-mail address"/>
                    <button>subscribe</button>
                    </div>
                </div>

            </div>
            <div id="Line"></div>
            <div id="copyRights"></div>
        </>
    )
}
export default Footer;