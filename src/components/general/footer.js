import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
          <div className="footer-section">
            <div className="footer-subsection">
              <Link to="/"><a className="footer-logo">            
               Ámbar
              </a></Link>
            </div>
            {/* <div className="footer-subsection">
              <Link to="/products">
                <a>Nuestros productos</a>
              </Link>
            </div> */}
          </div>

          <div className="social-section">
            <p className="foot-title">Síguenos!</p>
            <div className="footer-subsection">
              <a className="a-logo"><img width="64px" height="64px" src="https://cdn1.iconfinder.com/data/icons/social-media-color-1/128/yumminky-social-media-01-128.png" /></a>      
              <a className="a-logo"><img width="64px" height="64px" src="https://cdn1.iconfinder.com/data/icons/social-media-color-1/128/yumminky-social-media-02-128.png" /></a>              
              <a href='https://www.instagram.com/ambar.handmade/' className="a-logo"><img width="64px" height="64px" src="https://cdn1.iconfinder.com/data/icons/social-media-color-1/128/yumminky-social-media-06-128.png" /></a>
              {/* https://www.iconfinder.com/icons/328027/address_at_contact_email_mail_icon */}
              <a href="mailto:ambarbisuteria2018@gmail.com" className="a-logo"><img width="68px" height="68px" src="https://cdn2.iconfinder.com/data/icons/social-buttons-2/512/email-512.png"/></a>
            </div>
          </div>
          <p className="foot-item"> © Ambar. 2018. Todos los derechos reservados. </p>
      </div>
    );
  }
}

export default Footer;