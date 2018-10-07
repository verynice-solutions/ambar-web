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
               Ambar
              </a></Link>
            </div>
            {/* <div className="footer-subsection">
              <Link to="/products">
                <a>Nuestros productos</a>
              </Link>
            </div> */}
          </div>

          <div className="social-section">
            <p className="foot-title"> Siguenos! </p>
            <div className="footer-subsection">
              <a className="a-logo"><img width="64px" height="64px" src="https://cdn1.iconfinder.com/data/icons/social-media-color-1/128/yumminky-social-media-01-128.png" /></a>      
              <a className="a-logo"><img width="64px" height="64px" src="https://cdn1.iconfinder.com/data/icons/social-media-color-1/128/yumminky-social-media-02-128.png" /></a>              
              <a className="a-logo"><img width="64px" height="64px" src="https://cdn1.iconfinder.com/data/icons/social-media-color-1/128/yumminky-social-media-06-128.png" /></a>              
            </div>
          </div>

          <p className="foot-item"> © Ambar. 2018. Todos los derechos reservados. </p>
      </div>
    );
  }
}

export default Footer;