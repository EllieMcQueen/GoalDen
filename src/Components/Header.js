import React, {} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faSnapchatSquare, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";


const Header = ()=>{
    const emailSquare = <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />;
    const faFacebook = <FontAwesomeIcon icon={faFacebookSquare} size="2x" />;
    const faInstagram = <FontAwesomeIcon icon={faInstagramSquare} size="2x" />;
    const faSnapchat = <FontAwesomeIcon icon={faSnapchatSquare} size="2x" />;
    const faTwitter = <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
return(
    <section id="header" className="header-section">
       
        <div className="icon-flex">
        <div className="icon">
            <a href="mailto: bgoaldenconsulting@gmail.com">{emailSquare}</a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/HeatherDeesIFBB">{faFacebook}</a>
          </div>
          <div className="icon">
            <a href="https://www.instagram.com/ifbbheatherdees/?hl=en">{faInstagram}</a>
          </div>
          <div className="icon">
            <a href="https://www.snapchat.com/add/ifbbheatherdees">{faSnapchat}</a>
          </div>
          <div className="icon">
            <a href="https://twitter.com/IFBBHeatherDees">{faTwitter}</a>
          </div> 
          </div>
     

          <div className="header-main-text">
        <h1 className='header-text'>
        Heather Dees
        </h1>
        <h1 className='header-text2'>
            Mind   Body  Soul
        </h1>
        <h1 className='header-text3'>
          #TheGoalDen
        </h1>

 
        </div>
        </section>
)

}
export default Header;